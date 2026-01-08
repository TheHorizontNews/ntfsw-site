import { MDXRemote } from 'next-mdx-remote/rsc';

export default function CategoryContent({ content }: { content: string }) {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-4xl mx-auto px-6 prose prose-invert prose-lg prose-headings:text-red-500 prose-a:text-blue-400">
        <MDXRemote source={content} />
      </div>
    </section>
  );
}
