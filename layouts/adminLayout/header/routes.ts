export const adminRoutes = [
  {
    id: 0,
    label: "Trang chủ",
    pathname: "/",
  },
  {
    id: 1,
    label: "Người dùng",
    pathname: "/admin/user",
  },
  {
    id: 2,
    label: "Chuyên mục",
    pathname: "/admin/article-category",
  },
  {
    id: 3,
    label: "Bài viết",
    pathname: "/admin/article",
  },
  {
    id: 4,
    label: "Đặt lịch hẹn",
    pathname: "/admin/appointment",
  },
  {
    id: 5,
    label: "Tag",
    pathname: "/admin/tag",
  },
  {
    id: 6,
    label: "Cài đặt",
    pathname: "/admin/setting",
  },
];

export type RouteItemProps = {
  id: number;
  label: string;
  pathname: string;
};

export type RoutesProps = Array<RouteItemProps>;
