import { useState } from "react";
import LayoutWidget from "../components/Layout";
import { gallery } from "../utils";

export default function Galary() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  // Get all categories from your utils automatically
  const categories = [
    "All",
    ...new Set(gallery.map((item) => item.category || "General")),
  ];

  const filtered =
    filter === "All"
      ? gallery
      : gallery.filter((item) => (item.category || "General") === filter);

  return (
    <LayoutWidget>
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* HEADER */}
        <h1 className="text-3xl md:text-4xl font-bold">My Gallery</h1>
        <p className="text-gray-500 mt-2">
          Photos, moments & work from my journey.
        </p>

        {/* FILTERS */}
        <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition ${
                filter === cat
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {filtered.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(item)}
              className="relative group rounded-2xl overflow-hidden cursor-pointer bg-gray-200 aspect-[4/5] md:aspect-square"
            >
              <img
                src={item.image || item.src || item.images}
                alt={item.title || item.name || `Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <div>
                  <p className="text-white font-bold text-sm">
                    {item.title || item.name}
                  </p>
                  <p className="text-white/70 text-xs">
                    {item.category || ""} • Tap to view
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-10">
            No photos in this category yet.
          </p>
        )}
      </div>

      {/* LIGHTBOX - Click to view big */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl bg-white/10 w-10 h-10 rounded-full"
            onClick={() => setSelected(null)}
          >
            ×
          </button>
          <img
            src={selected.image || selected.src || selected.images}
            alt={selected.title || selected.name}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-white font-semibold">
            {selected.title || selected.name}
          </p>
        </div>
      )}
    </LayoutWidget>
  );
}
