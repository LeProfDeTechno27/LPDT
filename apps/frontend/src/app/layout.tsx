import { ReactNode } from "react";
import { DarkModeToggle } from "@/components/DarkModeToggle";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-200">
        <DarkModeToggle />
        <div className="max-w-3xl mx-auto px-2 sm:px-6">
          {children}
        </div>
      </body>
    </html>
  );
}
