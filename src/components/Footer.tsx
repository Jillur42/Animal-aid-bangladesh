export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">About Us</h3>
            <p className="text-gray-400 text-sm">Animal Aid Bangladesh is dedicated to protecting and rescuing animals across the country.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-primary transition">Home</a></li>
              <li><a href="/cases" className="hover:text-primary transition">Cases</a></li>
              <li><a href="/jokes" className="hover:text-primary transition">Jokes</a></li>
              <li><a href="/volunteer" className="hover:text-primary transition">Volunteer</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Support</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/donate" className="hover:text-primary transition">Donate</a></li>
              <li><a href="#" className="hover:text-primary transition">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: info@animalaidbd.org</li>
              <li>Phone: +880 1XXX-XXXXXX</li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-between items-center flex-col md:flex-row gap-4">
            <p className="text-gray-400 text-sm">© {currentYear} Animal Aid Bangladesh. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-primary transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-primary transition">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}