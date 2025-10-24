import Image from "next/image";

export default function Hero() {
  return (

    <section className="relative bg-gradient-to-b from-pink-50 via-white to-pink-100 min-h-screen flex items-center py-16">
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Discover Your <span className="text-pink-600">Essence</span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-md mx-auto md:mx-0">
            Indulge in timeless fragrances crafted with elegance, passion, and a touch of modern luxury. Let your scent tell your story.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#collections"
              className="inline-block px-6 py-3 rounded-xl bg-pink-600 text-white font-medium hover:bg-pink-700 focus:ring-2 focus:ring-pink-500 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Shop Collection
            </a>
            <a
              href="#about"
              className="inline-block px-6 py-3 rounded-xl border border-pink-600 text-pink-600 font-medium hover:bg-pink-50 focus:ring-2 focus:ring-pink-500 transition-all duration-200"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Perfume Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-56 sm:w-64 md:w-80 lg:w-96">
            <Image
              src="/pe.png"
              width={400}
              height={500}
              alt="Luxurious perfume bottle showcasing elegant fragrance design"
              className="w-full h-auto drop-shadow-2xl rounded-2xl"
              priority={true}
            />
          </div>
        </div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-0 right-0 w-40 h-40 sm:w-56 sm:h-56 bg-pink-300 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-pink-400 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse pointer-events-none"></div>
    </section>
  );
}
