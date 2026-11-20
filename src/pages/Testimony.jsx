import { Star, Quote } from "lucide-react";
import { testimonials } from "../utils";

// Delete this fallback when you have real ones in utils
const fallback = [
  {
    name: "Mary K.",
    role: "Business Owner, Monrovia",
    text: "John built my business website fast and clean. My customers can now find me online. I highly recommend him.",
    image: "https://i.pravatar.cc/100?img=47",
    stars: 5,
  },
  {
    name: "James T.",
    role: "Student",
    text: "He helped me with my school project and explained everything clearly. Very patient and professional.",
    image: "https://i.pravatar.cc/100?img=12",
    stars: 5,
  },
  {
    name: "Sarah D.",
    role: "Shop Owner",
    text: "My online shop is now working perfectly. John is honest, fast and does quality work.",
    image: "https://i.pravatar.cc/100?img=32",
    stars: 4,
  },
];

export default function TestimonySection() {
  const data = testimonials?.length ? testimonials : fallback;

  return (
    <section className="max-w-6xl mx-auto px-4 mt-8 mb-12">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold">What People Say</h2>
        <p className="text-gray-500 text-sm mt-1">
          Real feedback from people I have worked with
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {data.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col"
          >
            <Quote className="w-7 h-7 text-green-500" />
            <div className="flex gap-1 mt-3">
              {Array.from({ length: t.stars || 5 }).map((_, s) => (
                <Star
                  key={s}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mt-3 flex-1">
              "{t.text}"
            </p>
            <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
              <img
                src={t.image}
                alt={t.name}
                className="w-11 h-11 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
