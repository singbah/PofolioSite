import { useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LayoutWidget from "../components/Layout";
import { BsAndroid } from "react-icons/bs";

export default function ProjectDetails() {
  const navigate = useNavigate();
  const project = JSON.parse(localStorage.getItem("previousProject") || "null");

  if (!project) {
    return (
      <LayoutWidget>
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold">No project found</h1>
          <p className="text-gray-500 mt-2">
            Please go back and select a project again.
          </p>
          <button
            onClick={() => navigate("/projects")}
            className="mt-6 bg-green-600 text-white px-5 py-2.5 rounded-full font-semibold"
          >
            Back to Projects
          </button>
        </div>
      </LayoutWidget>
    );
  }

  const isWeb = project?.kind === "webApp";
  const allImages = Array.isArray(project.images)
    ? project.images
    : [project.images];
  const [mainImage, setMainImage] = useState(allImages[0]);

  return (
    <LayoutWidget>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-black mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        {/* TITLE + BADGE */}
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl md:text-4xl font-bold">{project.name}</h1>
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full text-white ${
              isWeb ? "bg-blue-500" : "bg-green-500"
            }`}
          >
            {isWeb ? "Web App" : "Android App"}
          </span>
        </div>

        {/* MAIN IMAGE - changes when you click thumbnail */}
        <img
          className="w-full h-[300px] md:h-[400px] object-cover rounded-3xl mt-6 shadow-md"
          src={mainImage}
          alt={project.name}
        />

        {/* THUMBNAILS - clickable */}
        {allImages.length > 1 && (
          <div className="flex gap-3 mt-3 overflow-x-auto pb-2 scrollbar-hide">
            {allImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${project.name} ${i + 1}`}
                onClick={() => setMainImage(img)}
                className={`w-28 h-20 rounded-xl shrink-0 cursor-pointer transition ${
                  mainImage === img
                    ? "ring-2 ring-green-500 ring-offset-2"
                    : "opacity-60 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        )}

        {/* DESCRIPTION */}
        <h2 className="text-xl font-bold mt-8">About This Project</h2>
        <p className="text-gray-600 leading-relaxed mt-2">
          {project.description}
        </p>

        {/* ACTIONS */}
        <div className="flex flex-wrap gap-3 mt-8">
          {isWeb ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Visit Site <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition shadow"
            >
              <BsAndroid className="text-lg" /> Download APK
            </a>
          )}

          <button
            onClick={() =>
              window.open(
                `https://wa.me/231880868634?text=Hi%20John%2C%20I%20saw%20your%20project%20${encodeURIComponent(project.name)}%20and%20I%20want%20a%20similar%20one.`,
                "_blank",
              )
            }
            className="border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            I Want Similar Project
          </button>
        </div>
      </div>
    </LayoutWidget>
  );
}
