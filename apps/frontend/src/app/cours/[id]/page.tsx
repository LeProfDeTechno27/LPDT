import { fetchCourse, fetchSequencesByCourse } from "@/lib/api";
import Link from "next/link";

type Props = { params: { id: string } }

export default async function CoursPage(props: Props) {
  const params = await props.params; // <-- corrige ici
  const id = Number(params.id);

  const course = await fetchCourse(id);
  const sequences = await fetchSequencesByCourse(id);

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h2 className="text-2xl font-bold">{course.title}</h2>
      <p className="text-gray-600 mb-6">{course.description}</p>
      <h3 className="text-xl font-semibold mb-2">Séquences</h3>
      <ul className="mb-6">
        {sequences.length === 0 && <li>Aucune séquence pour ce cours.</li>}
        {sequences.map((seq: any) => (
          <li key={seq.id}>
            <Link href={`/sequences/${seq.id}`} className="text-blue-600 underline">
              {seq.title}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <Link href={`/${course.level}`} className="text-blue-600 underline">&larr; Retour</Link>
      </div>
    </main>
  );
}
