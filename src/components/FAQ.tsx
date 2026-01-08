'use client';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ({ faq }: { faq: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">FAQ</h2>
        {faq.map((item, i) => (
          <div key={i} className="mb-4">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left bg-gray-800 p-6 rounded-lg flex justify-between items-center hover:bg-gray-700"
            >
              <span className="text-xl font-medium">{item.question}</span>
              <ChevronDown className={`w-6 h-6 transition ${open === i ? 'rotate-180' : ''}`} />
            </button>
            {open === i && (
              <div className="bg-gray-800 p-6 rounded-b-lg text-gray-300">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
