import { fetchCourses, fetchSequencesByCourse } from "@/lib/api";
import Link from "next/link";
import { API_URL } from "@/lib/api";

export default async function NiveauPage(props: { params: { niveau: string } }) {
  const params = await props.params;
  const { niveau } = params;

  // On va chercher tous les cours, mais on ne les affiche pas ici
  // On affiche seulement les séquences de ce niveau

  // Option 1 (optimale) : Si tu as un endpoint /sequences?level=5e
  const sequences = await fetch(`${API_URL}/sequences?level=${niveau}`).then(r => r.json());

  // Option 2 (MVP) : Tu récupères toutes les séquences et tu filtres par niveau via le courseId
  // (Mais il faut alors joindre les infos de course à chaque séquence, donc il vaut mieux faire côté backend si possible)

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-6">Classe de {niveau}</h2>
      <ul className="space-y-6">
        {sequences.map((seq: any, idx: number) => (
          <li key={seq.id}>
            <Link href={`/sequences/${seq.id}`} className="text-blue-600 underline">
              Séquence {seq.position ?? idx + 1} - {seq.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link href="/" className="text-blue-600 underline">&larr; Retour à l'accueil</Link>
      </div>
    </main>
  );
}
