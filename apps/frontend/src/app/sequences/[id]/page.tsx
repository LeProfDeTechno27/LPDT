import { fetchSequence, fetchResourcesBySequence } from "@/lib/api";
import Link from "next/link";

export default async function SequencePage(props: { params: { id: string } }) {
  const params = await props.params;
  const id = Number(params.id);

  const sequence = await fetchSequence(id);
  const activities = await fetchResourcesBySequence(id);

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h2 className="text-xl font-semibold mb-4">{sequence.title} (Séquence {sequence.position})</h2>
      <h3 className="mt-4 text-lg font-bold">Activités</h3>
      <ul className="mt-4 space-y-2">
        {activities.length === 0 && <li>Aucune activité pour cette séquence.</li>}
        {activities.map((activity: any, idx: number) => (
          <li key={activity.id}>
            <a href={activity.url} target="_blank" rel="noopener" className="text-blue-600 underline">
              Activité {idx + 1} — {activity.label}
            </a>
            <span className="ml-2 text-xs text-gray-500">{activity.type}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link href={`/${sequence.level ?? ""}`} className="text-blue-600 underline">&larr; Retour à la classe</Link>
      </div>
    </main>
  );
}
