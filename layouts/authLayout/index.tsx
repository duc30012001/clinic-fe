export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="min-h w-full max-w-md rounded-lg px-4 py-3">
          {children}
        </div>
      </div>
    </section>
  );
}
