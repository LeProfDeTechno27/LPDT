/** @type {import('next').NextConfig} */
const nextConfig = {
  // Active les strictes checks (optionnel mais conseillé)
  reactStrictMode: true,

  // Permet de rewriter les requêtes API d’authentification vers le backend NestJS
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",     // Toutes les requêtes auth du frontend
        destination: "http://localhost:3002/api/auth/:path*", // URL API backend, adapte le port si besoin !
      },
      // Ajoute d'autres rewrites ici si tu as d'autres API à proxyfier
    ];
  },

  // (optionnel) Permet de configurer les images distantes
  // images: {
  //   domains: ['exemple.com'],
  // },

  // (optionnel) Personnalise les env côté build si besoin
  // env: {
  //   NEXT_PUBLIC_API_URL: "http://localhost:3002",
  // },

  // Ajoute ici d’autres options Next.js si besoin
};

module.exports = nextConfig;
