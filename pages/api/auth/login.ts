// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cookies from "cookies";
import httpProxy, { ProxyResCallback } from "http-proxy";
import jwt_decode from "jwt-decode";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

type token = {
  id: string;
  email: string;
  iat: number;
  exp: number;
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(404).json({ message: "method not supported" });
  }

  req.headers.cookie = "";

  const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
    let body = "";
    proxyRes.on("data", (chunk) => {
      body += chunk;
    });

    proxyRes.on("end", () => {
      try {
        const { accessToken, refreshToken, statusCode, message } =
          JSON.parse(body);
        if (statusCode === 404) {
          (res as NextApiResponse).status(statusCode).json({ message });
        } else if (accessToken && refreshToken) {
          const access_token: token = jwt_decode(accessToken);
          const refresh_token: token = jwt_decode(refreshToken);

          const cookies = new Cookies(req, res, {
            secure: process.env.NODE_ENV === "production",
          });

          cookies.set("access_token", accessToken, {
            httpOnly: true,
            sameSite: "lax",
            expires: new Date(access_token.exp * 1000),
          });

          cookies.set("refresh_token", refreshToken, {
            httpOnly: true,
            sameSite: "lax",
            expires: new Date(refresh_token.exp * 1000),
          });

          (res as NextApiResponse)
            .status(200)
            .json({ message: "Login successful" });
        } else {
          throw new Error();
        }
      } catch {
        (res as NextApiResponse).status(500).json({ message: "Login failed" });
      }
    });
  };

  proxy.once("proxyRes", handleLoginResponse);
  proxy.web(req, res, {
    target: process.env.API_URL,
    changeOrigin: true,
    selfHandleResponse: true,
  });
}
