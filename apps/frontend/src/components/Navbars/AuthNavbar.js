"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useAuth } from "../../../hook/useAuth";

const userName = "Jérémy Bruerre";
const menu = [
  { label: "Accueil", href: "/" },
  { label: "Classe de 5e", href: "/5e" },
  { label: "Classe de 4e", href: "/4e" },
  { label: "Classe de 3e", href: "/3e" },
  { label: "Club", href: "/club" },
  { label: "Blog", href: "/blog" },
];



export default function AuthNavbar() {
  const user = useAuth();
  return (
    <nav className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow px-4 py-2">
      <div className="max-w-6xl mx-auto flex flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 mr-4">
          <Link href="/">
            <Image
              src="/assets/img/logo.png"
              width={44}
              height={44}
              alt="Logo LeProfDeTechno"
              className="block"
              priority
            />
          </Link>
        </div>
        {/* Menu horizontal centré */}
        <ul className="flex flex-row items-center divide-x divide-gray-300 list-none p-0 m-0">
          {menu.map((item) => (
            <li key={item.href} className="px-4">
              <Link
                href={item.href}
                className="text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-1 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>      
        <div className="flex-shrink-0 ml-4">
          <span className="font-semibold text-gray-800 dark:text-gray-200">
                <nav>
                {user
                  ? <span>Bienvenue {user.username} ({user.role})</span>
                  : <a href="/login">Connexion</a>
                }
              </nav>
          </span>
        </div>
      </div>
    </nav>
  );
};
