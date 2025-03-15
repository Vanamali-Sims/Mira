const FooterSection = () => {
  return (
    <footer className="bg-cream text-gray-800 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <img src="./src/assets/logo_black.svg" alt="Logo" className="w-10 h-10 mb-2" />
          <p className="text-sm text-gray-600">
            © 2025 JournalAI, Inc. <br /> All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/features" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Connect with Us */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-2">Connect with Us</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/terms" className="hover:underline">
                Terms
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="/sitemap" className="hover:underline">
                Sitemap
              </a>
            </li>
            <li>
              <a href="/cookies" className="hover:underline">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { FooterSection };
