import { socialLinks } from "../utils";

export default function FooterBar() {
  return (
    <footer className="bg-black text-white w-full">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* 1. You */}
        <div>
          <h2 className="text-2xl font-bold">John P. Singbah</h2>
          <p className="text-gray-400 text-sm mt-1">Web Developer | Liberia</p>
          <p className="text-gray-400 text-sm mt-3 leading-relaxed">
            I build clean, responsive websites, mobile apps and web apps. I love
            turning ideas into real products people can use.
          </p>

          {/* Socials - icons only */}
          <div className="flex gap-3 mt-5">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 hover:scale-110 transition"
              >
                <link.logo className={`text-xl ${link.color}`} />
              </a>
            ))}
          </div>
        </div>

        {/* 2. Portfolio Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Portfolio</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-white">
                My Projects
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-white">
                My Skills
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About Me
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact Me
              </a>
            </li>
          </ul>
        </div>

        {/* 3. Let's Work Together */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Have a project in mind? Let's build it together.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm mt-4">
            <li>Monrovia, Liberia</li>
            <li>singbahjohn@gmail.com</li>
            <li>+231 880 868 634</li>
          </ul>
          <a
            href="https://wa.me/231880868634?text=Hi%20John%2C%20I%20want%20to%20hire%20you%20for%20a%20project"
            className="inline-block mt-4 bg-white text-black text-sm font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition"
          >
            Hire Me
          </a>
          <p className="flex items-center gap-2 text-sm text-green-400 mt-4">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Available for work
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} John P. Singbah. Built with React &
        Tailwind CSS.
      </div>
    </footer>
  );
}
