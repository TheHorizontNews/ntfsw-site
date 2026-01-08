import Link from 'next/link';
import { categories } from '@/data/categories';

export default function Home() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Welcome to <span className="text-red-600">NTFSW.org</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto">
          Your #1 source for honest reviews of AI porn generators, NSFW chatbots, hentai tools and more in 2026.
        </p>

        <h2 className="text-4xl font-bold mb-12">Popular Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.slice(0, 12).map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-red-600 transition-all hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-red-500 mb-3">{cat.heroTitle || cat.title}</h3>
              <p className="text-gray-400">{cat.description.substring(0, 100)}...</p>
            </Link>
          ))}
        </div>
        <Link href="/ai-milf" className="inline-block mt-16 bg-red-600 hover:bg-red-700 px-10 py-5 rounded-lg text-xl font-bold">
          Start with AI MILF →
        </Link>
      </div>
    </main>
  );
}
