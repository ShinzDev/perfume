export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-pink-50 via-white to-pink-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Discover Your <span className="text-pink-600">Essence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Indulge in timeless fragrances crafted with elegance, passion, 
            and a touch of modern luxury. Let your scent tell your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#collections"
              className="px-6 py-3 rounded-xl bg-pink-600 text-white font-medium hover:bg-pink-700 transition shadow-md"
            >
              Shop Collection
            </a>
            <a
              href="#about"
              className="px-6 py-3 rounded-xl border border-pink-600 text-pink-600 font-medium hover:bg-pink-50 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Perfume Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://images.unsplash.com/photo-1585386959984-a4155223fcd4?auto=format&fit=crop&w=600&q=80"
            alt="Perfume Bottle"
            className="w-72 md:w-96 lg:w-[28rem] drop-shadow-2xl rounded-2xl"
          />
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[20rem] h-[20rem] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 left-0 w-[15rem] h-[15rem] bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    </section>
  );
}
  