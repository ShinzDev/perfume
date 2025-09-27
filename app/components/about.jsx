export default function About() {
    return (
      <section id="about-us" className="min-h-screen bg-gradient-to-b from-white via-pink-50 to-white py-20 px-6 lg:px-20">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
              About <span className="text-pink-600">Essence</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              A fragrance brand inspired by timeless elegance, crafted with passion, 
              and designed to celebrate individuality.
            </p>
          </div>
  
          {/* Mission / Values */}
          <div className="grid md:grid-cols-2 gap-12 text-gray-700 leading-relaxed">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-pink-700">Our Story</h3>
              <p>
                Essence was born from a desire to create more than just perfumes. 
                We believe fragrance is an invisible art — one that evokes emotion, 
                captures memory, and expresses identity. Each of our scents is 
                carefully blended to reflect the beauty of nature and the elegance 
                of modern living.
              </p>
            </div>
  
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-pink-700">Our Philosophy</h3>
              <p>
                To us, perfume is not just a product — it is a journey. 
                From sourcing the finest ingredients to crafting unique blends, 
                we focus on authenticity, sustainability, and sophistication. 
                Our mission is to empower every individual to wear their own 
                essence with confidence and grace.
              </p>
            </div>
          </div>
  
          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-xl shadow-sm border border-pink-100 bg-white hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-pink-600 mb-2">Elegance</h4>
              <p className="text-gray-600">
                Every fragrance is designed to embody beauty and timeless style.
              </p>
            </div>
            <div className="p-6 rounded-xl shadow-sm border border-pink-100 bg-white hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-pink-600 mb-2">Authenticity</h4>
              <p className="text-gray-600">
                Our blends are made with honesty, care, and attention to detail.
              </p>
            </div>
            <div className="p-6 rounded-xl shadow-sm border border-pink-100 bg-white hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-pink-600 mb-2">Sustainability</h4>
              <p className="text-gray-600">
                We source responsibly and craft with respect for people and planet.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  