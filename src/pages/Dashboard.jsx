import { useNavigate } from "react-router-dom";
import profilePic from "../../static/photos/profile_pic.jpg";
import LayoutWidget from "../components/Layout";
import { projects } from "../utils";
import TestimonySection from "./Testimony";

export default function Dashboard() {
  const navigate = useNavigate();

  const handelProjectDetails = (project) => {
    localStorage.setItem("previousProject", JSON.stringify(project));
    navigate("/project-details");
  };

  return (
    <LayoutWidget>
      {/* HERO / PROFILE */}
      <div className="max-w-6xl mx-auto px-4 pt-10">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-green-600 to-green-500 rounded-3xl p-6 md:p-10 text-white shadow-xl">
          <div className="order-2 md:order-1">
            <p className="text-green-100 text-sm font-semibold tracking-widest">
              HELLO, I'M
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
              John P. Singbah
            </h1>
            <p className="text-lg text-green-100 mt-2">
              Web Developer | Monrovia, Liberia
            </p>
            <p className="text-green-50/90 mt-4 leading-relaxed max-w-md">
              I build clean, fast and modern websites. I turn ideas into real
              products people love to use.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="/projects"
                className="bg-white text-green-700 font-semibold px-5 py-2.5 rounded-full hover:bg-gray-100 transition"
              >
                View My Work
              </a>
              <a
                href="https://www.wa.com/0880868634?text=Hi, John P. Singbah, I will like to hire you for a project please response to this message as soon as possible"
                className="border border-white/50 px-5 py-2.5 rounded-full hover:bg-white/10 transition"
              >
                Hire Me
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <img
              className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-white shadow-2xl"
              src={profilePic}
              alt="John P. Singbah"
            />
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-4 mt-12">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">My Projects</h2>
            <p className="text-gray-500 text-sm mt-1">
              Click any project to see details
            </p>
          </div>
          <span className="text-sm text-gray-400 hidden md:block">
            Scroll →
          </span>
        </div>

        <ul className="flex px-1 py-4 gap-4 overflow-x-auto whitespace-nowrap snap-x snap-mandatory scrollbar-hide">
          {projects.map((project, index) => (
            <li
              onClick={() => handelProjectDetails(project)}
              className="group relative border m-1 h-48 w-72 bg-blue-400 shrink-0 snap-start rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden shadow-md"
              key={index + 1}
            >
              <h4 className="absolute z-10 px-3 py-2 text-white font-bold drop-shadow-md">
                {project.name}
              </h4>
              {/* Dark gradient so text is readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-[1]" />
              <img
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={Array(project.images) ? project.images[0] : project.images}
                alt={project.name}
              />
              <p className="absolute bottom-2 left-3 z-10 text-white/90 text-xs">
                View Details →
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* TESTIMONIES */}
      <TestimonySection />

      {/* SKILLS / ABOUT STRIP */}
      <section className="max-w-6xl mx-auto px-4 mt-8 mb-12">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-2xl font-bold">{projects.length}+</p>
            <p className="text-gray-500 text-sm">Projects</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-2xl font-bold">React</p>
            <p className="text-gray-500 text-sm">Main Stack</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-2xl font-bold">100%</p>
            <p className="text-gray-500 text-sm">Commitment</p>
          </div>
        </div>
      </section>
    </LayoutWidget>
  );
}
