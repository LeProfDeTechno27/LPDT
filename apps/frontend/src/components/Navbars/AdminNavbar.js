"use client";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../../hooks/useAuth";

export default function AuthNavbar({ user }) {
  return (
    <nav>
      {user
        ? <span>Bienvenue {user.username} ({user.role})</span>
        : <a href="/login">Connexion</a>
      }
    </nav>
  );
}

export default function AdminNavbar() {
  const menu = [
    { label: "Accueil", href: "/" },
    { label: "Classe de 5e", href: "/5e" },
    { label: "Classe de 4e", href: "/4e" },
    { label: "Classe de 3e", href: "/3e" },
    { label: "Club", href: "/club" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <nav className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <ul className="flex gap-6">
          {menu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 font-medium px-2 py-1 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Image
          src="/assets/img/logo.png"
          width={60}
          height={60}
          alt="Logo LeProfDeTechno"
          className="ml-4"
          priority
        />
      </div>
    </nav>
  );
}
