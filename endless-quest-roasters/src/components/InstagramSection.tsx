"use client";

export function InstagramSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          FIND US ON<br />
          INSTAGRAM
        </h2>
        <a
          href="http://instagram.com/endlessquestroasters/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-lg text-gray-600 hover:text-gray-900 transition-colors"
        >
          @endlessquestroasters
        </a>
      </div>
    </section>
  );
}
