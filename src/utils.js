import { FaFacebook, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";
import sport from "../static/photos/sport.png";
import sport1 from "../static/photos/sport1.png";
import sport2 from "../static/photos/sport2.png";
import sport3 from "../static/photos/sport3.png";
import momo2 from "../static/photos/momo2.png";
import momo3 from "../static/photos/momo3.png";
import momo4 from "../static/photos/momo4.png";
import momo5 from "../static/photos/momo1.png";
import picture from "../static/photos/20240516_084804.jpg";

const projects = [
  {
    name: "Momo Profit Tracker",
    images: [momo2, momo3, momo4, momo5],
    description:
      "A Financial Utility app that help mobile money agents track transactions in real time and generate reports.",
    kind: "installApp",
    link: "./static/apks/momo-1.1.3-arm64-v8a_armeabi-v7a-debug.apk",
  },
  {
    name: "Sport LIB",
    images: [sport1, sport, sport2, sport3],
    description:
      "SportLIB is a sports platform focused on providing sports news, competition information, match information, teams, players, and other sports-related content, with a focus on sports in Liberia.",
    kind: "webApp",
    link: "https://sportlib.vercel.app/",
  },
];

const socialLinks = [
  {
    name: "facebook",
    link: "https://web.facebook.com/me/",
    logo: FaFacebook,
    color: "text-blue-500",
  },
  {
    name: "whatsapp",
    link: "https://wa.me/231880868634?text=Hi%20John%2C%20I%20want%20to%20hire%20you%20for%20a%20project",
    logo: FaWhatsapp,
    color: "text-green-500",
  },

  {
    name: "tiktok",
    link: "www.tiktok.com/@johnsingbah",
    logo: FaTiktok,
    color: "",
  },
  {
    name: "youtube",
    link: "www.youtube.com/@johnsingbah",
    logo: FaYoutube,
    color: "text-red-500",
  },

  {
    name: "email",
    link: "mailto:singbahjohn@email.com",
    logo: Mail,
    color: "text-red-500",
  },
  {
    name: "phone",
    link: "tel:+231880868634",
    logo: Phone,
    color: "text-green-500",
  },
];

const testimonials = [
  {
    name: "Mary K.",
    role: "Business Owner, Monrovia",
    text: "John built my business website fast and clean. My customers can now find me online. I highly recommend him.",
    image: picture,
    stars: 5,
  },
  {
    name: "James T.",
    role: "Student",
    text: "He helped me with my school project and explained everything clearly. Very patient and professional.",
    image: picture,
    stars: 5,
  },
  {
    name: "Sarah D.",
    role: "Shop Owner",
    text: "My online shop is now working perfectly. John is honest, fast and does quality work.",
    image: picture,
    stars: 4,
  },
];

const gallery = [];

export { projects, socialLinks, testimonials, gallery };
