import LayoutWidget from "../components/Layout";
import {
  MapPin,
  Mail,
  Phone,
  Code2,
  Globe,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import profilePic from "../../static/photos/profile_pic.jpg";

const skills = [
  { name: "Python", level: 95 },
  { name: "HTML / CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Kivy & Kivymd / Android", level: 75 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Flask / FastAPI", level: 65 },
  { name: "SQL / Databases", level: 70 },
  { name: "Git / GitHub", level: 80 },
  { name: "Linux / Command Line", level: 80 },
  { name: "AWS / Cloud Services", level: 40 },
];

const services = [
  {
    icon: Globe,
    title: "Web Development",
    text: "Clean, fast websites for businesses, schools, shops and portfolios that work on phone and computer.",
  },
  {
    icon: Smartphone,
    title: "Android Apps",
    text: "Simple and useful Android apps. From idea to APK you can share and install.",
  },
  {
    icon: Code2,
    title: "Fix & Upgrade",
    text: "Already have a website or app? I fix bugs, make it faster, and add new features.",
  },
];

const journey = [
  {
    year: "2022",
    title: "Started Coding",
    text: "Started learning Python. Built my first website and learned how to host it online.",
  },
  {
    year: "2024",
    title: "JavaScript, React & Real Projects",
    text: "Learned JavaScript, React, Tailwind and FastAPI. Started building real projects for people in Liberia.",
  },
  {
    year: "2025",
    title: "Android Apps",
    text: "Moved into mobile. Built and published Android apps and learned how to ship a full product.",
  },
  {
    year: "Now",
    title: "Freelance Developer",
    text: "Helping businesses and students turn ideas into websites and apps people actually use.",
  },
];

export default function AboutPage() {
  return (
    <LayoutWidget>
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt="John P. Singbah"
              className="w-64 h-64 md:w-80 md:h-80 rounded-[2rem] object-cover shadow-xl"
            />
          </div>
          <div>
            <p className="text-green-600 font-bold tracking-widest text-sm">
              ABOUT ME
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">
              Hi, I'm John P. Singbah
            </h1>
            <p className="text-gray-500 mt-1 flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Monrovia, Liberia
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              I'm a Web & Android Developer from Liberia. I love turning ideas
              into real products — websites that load fast, look clean, and help
              businesses grow.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              I don't just write code. I listen to what you need, keep it
              simple, and deliver something you can actually use and be proud
              of.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="https://wa.me/231880868634?text=Hi%20John%2C%20I%20want%20to%20hire%20you for%20a%20project"
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-green-700"
              >
                Hire Me
              </a>
              <a
                href="/projects"
                className="border border-gray-300 px-5 py-2.5 rounded-full font-semibold flex items-center gap-1 hover:bg-gray-100"
              >
                View My Work <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex gap-6 mt-6 text-sm">
              <div>
                <p className="text-2xl font-bold">10+</p>
                <p className="text-gray-500">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold">5+</p>
                <p className="text-gray-500">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl font-bold">2+</p>
                <p className="text-gray-500">Years Coding</p>
              </div>
            </div>
          </div>
        </div>

        {/* WHAT I DO */}
        <h2 className="text-2xl md:text-3xl font-bold mt-16">
          What I Can Do For You
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mt-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm"
              >
                <div className="w-11 h-11 bg-green-100 rounded-2xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-bold mt-4">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mt-2">
                  {s.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* SKILLS + JOURNEY */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* SKILLS */}
          <div>
            <h2 className="text-2xl font-bold">My Skills</h2>
            <div className="space-y-4 mt-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm font-semibold">
                    <span>{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full mt-1 overflow-hidden">
                    <div
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-600 text-white rounded-3xl p-5 mt-8">
              <h3 className="font-bold">Need a website or app?</h3>
              <p className="text-green-100 text-sm mt-1">
                Tell me your idea. I will help you build it step by step.
              </p>
              <a
                href="https://wa.me/231880868634?text=Hi%20John%2C%20I%20want%20to%20hire%20you for%20a%20project"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-white text-green-700 font-semibold px-4 py-2 rounded-full text-sm mt-4"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* JOURNEY */}
          <div>
            <h2 className="text-2xl font-bold">My Journey</h2>
            <div className="mt-5 space-y-0">
              {journey.map((j, i) => (
                <div key={i} className="flex gap-4 pb-6 relative">
                  {i !== journey.length - 1 && (
                    <div className="absolute left-[15px] top-8 bottom-0 w-[2px] bg-gray-200" />
                  )}
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center shrink-0 z-10">
                    •
                  </div>
                  <div>
                    <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      {j.year}
                    </span>
                    <h3 className="font-bold mt-2">{j.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mt-1">
                      {j.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CONTACT STRIP */}
        <div className="bg-black text-white rounded-3xl p-6 md:p-8 mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">Let's work together</h2>
            <p className="text-gray-400 text-sm mt-1">
              Available for freelance projects in Liberia & remote.
            </p>
          </div>
          <div className="flex flex-col gap-1 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> singbahjohn@email.com
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +231 88 086 8634 / +231 777 322 000
            </span>
          </div>
        </div>
      </div>
    </LayoutWidget>
  );
}
