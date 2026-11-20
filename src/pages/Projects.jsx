import { useNavigate } from "react-router-dom";
import LayoutWidget from "../components/Layout";
import { projects } from "../utils";
import { BsAndroid } from "react-icons/bs";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function Projects() {
  const navigate = useNavigate();

  const handelProjectDetails = (project) => {
    localStorage.setItem("previousProject", JSON.stringify(project));
    navigate("/project-details");
  };

  return (
    <LayoutWidget>
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* HEADER */}
        <section className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">My Projects</h1>
          <p className="text-gray-500 mt-2">
            Here are some of the projects I've worked on. Click any project to
            see more.
          </p>
          <p className="text-sm text-gray-400 mt-1">
            {projects.length} Projects
          </p>
        </section>

        {/* GRID */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <li
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* IMAGE */}
              <div
                className="relative overflow-hidden cursor-pointer"
                onClick={() => handelProjectDetails(project)}
              >
                <img
                  src={
                    Array(project.images) ? project.images[0] : project.images
                  }
                  alt={project.name}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                />
                {/* Badge */}
                <span
                  className={`absolute top-3 left-3 text-[11px] font-bold px-3 py-1 rounded-full ${
                    project.kind === "webApp"
                      ? "bg-blue-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {project.kind === "webApp" ? "Web App" : "Android App"}
                </span>
              </div>

              {/* BODY */}
              <div className="p-5 flex flex-col flex-1">
                <h2 className="text-xl font-bold">{project.name}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mt-2 line-clamp-3 flex-1">
                  {project.description}
                </p>

                {/* FOOTER BUTTONS */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handelProjectDetails(project)}
                    className="flex items-center gap-1 text-sm font-semibold text-black hover:text-green-600 cursor-pointer"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>

                  {project.kind === "webApp" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-semibold text-green-600 hover:text-green-700"
                    >
                      Visit Site <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-green-600 text-white text-xs font-bold px-3 py-2 rounded-full hover:bg-green-700"
                    >
                      <BsAndroid className="text-base" /> Download
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </LayoutWidget>
  );
}
