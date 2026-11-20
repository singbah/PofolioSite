import { useState } from "react";
import LayoutWidget from "../components/Layout";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Copy,
  Check,
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [projectType, setProjectType] = useState("Website");
  const [copied, setCopied] = useState("");

  const myWhatsApp = "231880868634"; // <- change to your number
  const myEmail = "singbahjohn@email.com"; // <- change to your email

  const handleSend = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim())
      return alert("Please fill name and message");

    const text = `Hi John, I'm ${name}. I want a ${projectType}. ${message}`;
    window.open(
      `https://wa.me/${myWhatsApp}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  const copyText = async (text, label) => {
    await navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <LayoutWidget>
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* HEADER */}
        <div className="text-center max-w-lg mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">
            Let's Work Together
          </h1>
          <p className="text-gray-500 mt-2">
            Have a project in mind? Tell me about it. I usually reply within a
            few hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {/* LEFT - CONTACT INFO */}
          <div className="space-y-4">
            <a
              href={`https://wa.me/${myWhatsApp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-green-600 text-white rounded-3xl p-5 hover:bg-green-700 transition"
            >
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="font-bold">Chat on WhatsApp</p>
                <p className="text-green-100 text-sm">
                  Fastest way to reach me
                </p>
              </div>
              <span className="text-2xl">→</span>
            </a>

            {/* Email */}
            <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-3xl p-5 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold">Email</p>
                <p className="text-gray-500 text-sm truncate">{myEmail}</p>
              </div>
              <button
                onClick={() => copyText(myEmail, "email")}
                className="text-gray-400 hover:text-black"
              >
                {copied === "email" ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-3xl p-5 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <p className="font-bold">Phone</p>
                <p className="text-gray-500 text-sm">+{myWhatsApp}</p>
              </div>
              <button
                onClick={() => copyText(myWhatsApp, "phone")}
                className="text-gray-400 hover:text-black"
              >
                {copied === "phone" ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-3xl p-5 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="font-bold">Location</p>
                <p className="text-gray-500 text-sm">
                  Monrovia, Liberia - Available Remote
                </p>
              </div>
            </div>

            <div className="bg-black text-white rounded-3xl p-5">
              <p className="font-bold">What can I build for you?</p>
              <ul className="text-gray-300 text-sm mt-2 space-y-1">
                <li>• Business Website - from $100</li>
                <li>• Online Shop / Portfolio</li>
                <li>• Android App</li>
                <li>• Fix your existing site</li>
              </ul>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <form
            onSubmit={handleSend}
            className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm h-fit"
          >
            <h2 className="text-xl font-bold">Send Me A Message</h2>
            <p className="text-gray-500 text-sm mt-1">
              This will open WhatsApp with your message ready.
            </p>

            <label className="block text-sm font-semibold mt-5">
              Your Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Mary K."
              className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-500"
            />

            <label className="block text-sm font-semibold mt-4">
              What do you want?
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Website", "Android App", "Online Shop", "Fix My Site"].map(
                (t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setProjectType(t)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                      projectType === t
                        ? "bg-green-600 text-white border-green-600"
                        : "border-gray-200 text-gray-600"
                    }`}
                  >
                    {t}
                  </button>
                ),
              )}
            </div>

            <label className="block text-sm font-semibold mt-4">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              placeholder="Hi John, I want a website for my business..."
              className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-500 resize-none"
            />

            <button
              type="submit"
              className="w-full mt-5 bg-green-600 text-white font-semibold py-3.5 rounded-full flex items-center justify-center gap-2 hover:bg-green-700"
            >
              <Send className="w-4 h-4" /> Send on WhatsApp
            </button>
            <p className="text-center text-gray-400 text-xs mt-3">
              No email needed. Just WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </LayoutWidget>
  );
}
