

export default function HomeComponent() {
  return (
      <main className="flex-1 overflow-y-auto pt-16 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to <span className="text-yellow-300">MyWebsite</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg opacity-90">
            Build modern, responsive apps effortlessly with Next.js and Tailwind CSS.
          </p>
          <button className="mt-6 bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
            Get Started
          </button>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
            Key Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Fast Performance",
                desc: "Optimized for speed with Next.js static generation and SSR.",
              },
              {
                title: "Modern UI",
                desc: "Built using Tailwind CSS for a sleek, modern, responsive design.",
              },
              {
                title: "Developer Friendly",
                desc: "Easily extend and customize with reusable components.",
              },
              {
                title: "SEO Optimized",
                desc: "Automatic SEO best practices for better discoverability.",
              },
              {
                title: "Secure & Scalable",
                desc: "Built to handle projects of all sizes securely and efficiently.",
              },
              {
                title: "Cross Platform",
                desc: "Works seamlessly across devices — desktop, tablet, and mobile.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 leading-relaxed">
              We’re passionate about creating clean, responsive, and scalable
              web solutions using modern technologies. Our goal is to empower
              developers and businesses to build amazing experiences on the web.
            </p>
          </div>
        </section>

        {/* Contact Preview Section */}
        <section className="py-16 px-6 bg-blue-600 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="max-w-lg mx-auto opacity-90 mb-6">
            Have a project in mind or want to collaborate? We’d love to hear
            from you.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
            Contact Us
          </button>
        </section>
      </main>
  );
}
