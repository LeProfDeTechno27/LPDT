import Link from "next/link";

export default function Home() {
  const niveaux = ["5e", "4e", "3e"];
  return (
            <main className="max-w-2xl mx-auto p-4 md:p-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">LeProfDeTechno</h1>
              <ul className="flex flex-col md:flex-row md:justify-center gap-6">
                {niveaux.map(niveau => (
                  <li key={niveau}>
                    <Link href={`/${niveau}`}>
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl p-6 min-w-[180px] hover:scale-105 transition transform text-center">
                        <span className="block text-lg font-semibold text-gray-800 dark:text-gray-100">Classe de {niveau}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </main>  
          );
}
