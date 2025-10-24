export default function Footer() {
    return (
      <footer className="bg-gradient-to-b from-pink-100 via-white to-pink-50 pt-12 pb-6 mt-20 relative overflow-hidden">
        {/* Decorative Glows */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
        <div className="absolute bottom-0 -right-10 w-48 h-48 bg-pink-300 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
  
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
          
          {/* Brand */}
          <div className="space-y-3 text-center sm:text-left">
            <h3 className="text-xl font-bold text-gray-800">Essence</h3>
            <p className="text-gray-600 text-sm">
              Timeless fragrance blended with elegance & luxury.
            </p>
          </div>
  
          {/* Collection Links */}
          <div className="space-y-3 text-center sm:text-left">
            <h4 className="font-semibold text-gray-800">Collections</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-pink-600 transition">Women</a></li>
              <li><a href="#" className="hover:text-pink-600 transition">Men</a></li>
              <li><a href="#" className="hover:text-pink-600 transition">Unisex</a></li>
              <li><a href="#" className="hover:text-pink-600 transition">Limited Editions</a></li>
            </ul>
          </div>
  
          {/* Quick Links */}
          <div className="space-y-3 text-center sm:text-left">
            <h4 className="font-semibold text-gray-800">Quick Links</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-pink-600 transition">About Us</a></li>
              <li><a href="#" className="hover:text-pink-600 transition">Contact</a></li>
              <li><a href="#" className="hover:text-pink-600 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-pink-600 transition">Shipping</a></li>
            </ul>
          </div>
  
          {/* Newsletter */}
          <div className="space-y-3 text-center sm:text-left">
            <h4 className="font-semibold text-gray-800">Newsletter</h4>
            <p className="text-gray-600 text-sm">
              Be the first to discover new drops & deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-pink-300 focus:border-pink-500 focus:outline-none text-sm"
              />
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
  
        {/* Divider */}
        <div className="border-t border-pink-200 mt-10 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Essence. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  