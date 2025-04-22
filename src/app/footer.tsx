const Footer = () => {
    return (
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">La Table</h2>
            <p className="text-gray-400">
              Fine dining experience in the heart of the city. Book your table and indulge in our seasonal menus.
            </p>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="text-gray-400 space-y-1">
              <li>Mon - Fri: 12:00 – 22:00</li>
              <li>Saturday: 13:00 – 23:00</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="text-gray-400 space-y-1">
              <li>123 Main Street, Cityville</li>
              <li>+44 123 456 789</li>
              <li>contact@latable.com</li>
            </ul>
          </div>
        </div>
  
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Delish Bites. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  