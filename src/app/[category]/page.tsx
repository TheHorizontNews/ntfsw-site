import { categories } from '@/data/categories';
import Hero from '@/components/Hero';
import TopBrands from '@/components/TopBrands';
import CategoryContent from '@/components/CategoryContent';
import FAQ from '@/components/FAQ';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const category = categories.find((c) => c.slug === params.category);
  if (!category) return { title: 'Not Found' };

  return {
    title: category.title,
    description: category.description,
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categories.find((c) => c.slug === params.category);

  if (!category) notFound();

  return (
    <>
      <Hero category={category} />
      <div id="top-brands">
        <TopBrands brands={category.topBrands} />
      </div>
      <CategoryContent content={category.content} />
      <FAQ faq={category.faq} />
    </>
  );
}
