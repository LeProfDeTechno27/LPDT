"use client";

import Footer from "@/components/Footers/Footer";
import Link from "next/link";

export default function Landing() {
  return (
    <><main>
        <section className="max-w-2xl mx-auto my-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
          <h1 className="text-3xl font-bold mb-2 text-blue-700 dark:text-blue-300">
            Bienvenue sur LeProfDeTechno.fr&nbsp;!
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            Plateforme dédiée aux cours, activités et ressources de technologie pour les élèves de 5e, 4e et 3e.
            Retrouvez aussi les projets du Club Techno et toutes les actus du blog ! Bonne visite&nbsp;!
          </p>
        </section>
        {/* HERO SECTION */}
      </main>
      <Footer />
    </>
  );
}
