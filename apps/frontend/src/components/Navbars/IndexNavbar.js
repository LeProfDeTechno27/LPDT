"use client";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../../hooks/useAuth";

const menu = [
  { label: "Accueil", href: "/" },
  { label: "Classe de 5e", href: "/5e" },
  { label: "Classe de 4e", href: "/4e" },
  { label: "Classe de 3e", href: "/3e" },
  { label: "Club", href: "/club" },
  { label: "Blog", href: "/blog" },
];

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

export default function IndexNavbar() {
  return (
    <nav className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow px-4 py-2">
      <div className="max-w-6xl mx-auto flex flex-row items-center">
        {/* Logo à gauche */}
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
        {/* Menu horizontal */}
        <ul className="flex-1 flex flex-row items-center gap-6">
          {menu.map((item, i) => (
            <li key={item.href} className={i !== 0 ? "ml-8" : ""}>
              <Link
                href={item.href}
                className="text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 font-medium px-2 py-1 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
