import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Footer Top: About and Navigation */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Revive</h3>
            <p className="text-sm leading-relaxed">
              Transforming technology into well-being solutions. From bone
              conduction hearing aids to personalized vibe therapy, we’re
              creating a world where every mind matters.
            </p>
          </div>

          {/* Navigation Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Our Journey
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Get in Touch
            </h4>
            <p className="text-sm">
              Have questions? Reach out to us via email or follow us on social
              media for the latest updates.
            </p>
            <ul className="flex mt-4 space-x-4 text-lg">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Revive. All rights reserved. | Built
            with 🩷 by the Revive Team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
