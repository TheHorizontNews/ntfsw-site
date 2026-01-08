import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

export default function TopBrands({ brands }: { brands: any[] }) {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">Top 5 Platforms in 2026</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {brands.map((brand: any, i: number) => (
            <div key={i} className="bg-gray-800 rounded-2xl p-8 text-center shadow-xl">
              <Image
                src={brand.logo || "/images/placeholder-logo.png"}
                alt={brand.name}
                width={180}
                height={90}
                className="mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold mb-3">{brand.name}</h3>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star
                    key={s}
                    className={`w-6 h-6 ${s < Math.floor(brand.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                  />
                ))}
                <span className="ml-2 text-xl">{brand.rating}/5</span>
              </div>
              <p className="text-gray-400 mb-6">{brand.shortDescription}</p>
              <ul className="text-left mb-8 space-y-2">
                {brand.pros.map((pro: string) => (
                  <li key={pro} className="text-green-400">✓ {pro}</li>
                ))}
              </ul>
              <Link
                href={brand.siteUrl}
                target="_blank"
                className="block bg-red-600 hover:bg-red-700 py-4 rounded-lg text-xl font-bold mb-3"
              >
                Visit Site →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
