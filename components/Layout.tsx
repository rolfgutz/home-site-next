import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <header className="w-full bg-blue-500 text-white text-center py-4 text-xl font-bold">
        Meu Site
      </header>
      <main className="flex-1 flex flex-col items-center justify-center w-full p-4">
        {children}
      </main>
      <footer className="w-full bg-blue-500 text-white text-center py-2 text-sm">
        © 2025 Meu Site
      </footer>
    </div>
  );
}