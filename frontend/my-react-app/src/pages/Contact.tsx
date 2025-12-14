import React, { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const Contact: React.FC = () => {
    const [status, setStatus] = useState<Status>("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        try {
            // Fake API call (replace with real backend later)
            await new Promise((resolve) => setTimeout(resolve, 800));
            setStatus("sent");
            e.currentTarget.reset();
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-24">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* ================= LEFT INFO ================= */}
                    <div className="lg:col-span-1 grid grid-cols-1 gap-6">
                        {/* Email */}
                        <div className="bg-white dark:bg-(--dark-card) p-6 rounded-lg shadow-lg text-center">

                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                ✉️
                            </div>
                            <h3 className="text-xl font-bold mb-2">Email</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                example@test.com
                            </p>
                        </div>

                        {/* Location */}
                        <div className="bg-white dark:bg-(--dark-card) p-6 rounded-lg shadow-lg text-center">

                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                📍
                            </div>
                            <h3 className="text-xl font-bold mb-2">Location</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Your Location
                            </p>
                        </div>

                        {/* Social */}
                        <div className="bg-white dark:bg-(--dark-card) p-6 rounded-lg shadow-lg text-center">

                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                🌐
                            </div>
                            <h3 className="text-xl font-bold mb-2">Social</h3>
                            <div className="flex justify-center space-x-4">
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:text-primary transition"
                                >
                                    GH
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:text-primary transition"
                                >
                                    IN
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:text-primary transition"
                                >
                                    TW
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ================= FORM ================= */}
                    <form
                        onSubmit={handleSubmit}
                        className="lg:col-span-2 bg-white dark:bg-(--dark-card) p-8 rounded-lg shadow-lg"
                    >

                        <h3 className="text-2xl font-bold mb-6">
                            Send Me a Message
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full px-8 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-blue-600 transition disabled:opacity-50"
                            >
                                {status === "sending" ? "Sending..." : "Send Message"}
                            </button>

                            {status === "sent" && (
                                <p className="text-green-600 mt-2">
                                    Message sent — I will reply soon.
                                </p>
                            )}

                            {status === "error" && (
                                <p className="text-red-600 mt-2">
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
