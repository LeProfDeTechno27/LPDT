"use client";
import { ReactNode } from "react";
import IndexNavbar from "@/components/Navbars/AuthNavbar";
import { useAuth } from "../../hook/useAuth";
import AuthNavbar from "../components/Navbars/AuthNavbar";

// Pas d'autres export default ou function RootLayout ailleurs dans le fichier !

export default function RootLayout({ children }: { children: ReactNode }) {
  // Si tu veux utiliser useAuth ici :
  const user = useAuth();

  return (
    <html lang="fr">
      <body className="w-4/5 mx-auto min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-200">
        {/* Utilise IndexNavbar OU AuthNavbar */}
        <IndexNavbar user={user} />
        {children}
      </body>
    </html>
  );
}

