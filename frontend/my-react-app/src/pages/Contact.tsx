import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

type Status = "idle" | "sending" | "sent" | "error";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#050816]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT INFO */}
          <div className="lg:col-span-1 grid grid-cols-1 gap-6">
            {/* Email */}
            <div className="bg-white dark:bg-[#0A0F1C] p-8 rounded-2xl shadow-xl text-center border border-gray-100 dark:border-white/10">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500 text-xl">
                ✉️
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">
                rosshenramasamy.rm@gmail.com
              </p>
            </div>

            {/* Location */}
            <div className="bg-white dark:bg-[#0A0F1C] p-8 rounded-2xl shadow-xl text-center border border-gray-100 dark:border-white/10">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500 text-xl">
                📍
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">
                Location
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Your Location</p>
            </div>

            {/* Social */}
            <div className="bg-white dark:bg-[#0A0F1C] p-8 rounded-2xl shadow-xl text-center border border-gray-100 dark:border-white/10">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500 text-xl">
                🌐
              </div>

              <h3 className="text-xl font-bold mb-4 dark:text-white">Social</h3>

              <div className="flex justify-center gap-4">
                {/* GitHub */}
                <a
                  href="https://github.com/Rosshen-RM/personal-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center
                 hover:bg-black hover:text-white transition"
                >
                  <FaGithub size={20} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/rosshen-r-m-10aaa6200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center
                 hover:bg-[#0077b5] hover:text-white transition"
                >
                  <FaLinkedin size={20} />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center
                 hover:bg-[#1877F2] hover:text-white transition"
                >
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white dark:bg-[#0A0F1C] p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10"
          >
            <h3 className="text-3xl font-bold mb-8 dark:text-white">
              Send Me a Message
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                  Name
                </label>
                <input
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-lg transition disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "sent" && (
                <p className="text-green-500 mt-2">
                  Message sent — I will reply soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 mt-2">
                  Something went wrong. Try again later.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
