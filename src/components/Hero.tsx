import Image from 'next/image';
import Link from 'next/link';

export default function Hero({ category }: { category: any }) {
  return (
    <section className="relative h-[70vh] min-h-96 overflow-hidden">
      <Image
        src={category.heroImage || "/images/default-hero.jpg"}
        alt={category.heroTitle}
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
          {category.heroTitle}
        </h1>
        <p className="text-xl md:text-3xl mb-10 max-w-4xl drop-shadow-lg">
          {category.heroSubtitle}
        </p>
        <Link
          href={category.heroCtaUrl || "#top-brands"}
          className="bg-red-600 hover:bg-red-700 px-12 py-6 rounded-xl text-2xl font-bold shadow-lg"
        >
          {category.heroCtaText || "Explore Now"}
        </Link>
      </div>
    </section>
  );
}
