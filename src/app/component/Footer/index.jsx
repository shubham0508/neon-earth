import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, PointerIcon } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Order a Swatch Kit', href: '#' },
    { name: 'Bulk Quote', href: '#' },
    { name: 'Track Your Order', href: '#' },
  ];

  const helpLinks = [
    { name: 'FAQ', href: '#' },
    { name: 'Refund', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Sitemap', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  const accountLinks = [
    { name: 'Your Orders', href: '#' },
    { name: 'Your Wallet', href: '#' },
    { name: 'Saved Designs', href: '#' },
  ];

  const companyLinks = [
    { name: 'About us', href: '#' },
    { name: 'User Agreement', href: '#' },
    { name: 'Blog', href: '#' },
  ];

  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">Designs Come True!</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              At the heart of Neon Earth lies the belief that your home is more than just a
              physical space; it's a canvas for self-expression. Neon Earth acts as an
              enabler, providing comfort, and the freedom to 'Create your New'. Visualize it
              - Design it - Bring it to life: because the final product belongs to you.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Link</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white hover:underline transition-colors duration-200">
                      {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Help</h3>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white hover:underline transition-colors duration-200">
                      {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Your Account</h3>
            <ul className="space-y-2">
              {accountLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white hover:underline transition-colors duration-200">
                      {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">The Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white hover:underline transition-colors duration-200">
                      {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Get in touch</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:wecare@neonearth.com" className="text-sm text-gray-400 hover:text-white hover:underline transition-colors duration-200">
                  wecare@neonearth.com
                </a>
              </li>
              <li className="flex space-x-3 pt-2">
                <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors duration-200 bg-gray-800 p-2 rounded-full">
                  <Facebook size={16}/>
                </a>
                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-200 bg-gray-800 p-2 rounded-full">
                  <Instagram size={16}/>
                </a>
                <a href="#" aria-label="Pinterest" className="text-gray-400 hover:text-white transition-colors duration-200 bg-gray-800 p-2 rounded-full">
                  <PointerIcon size={16}/>
                </a>
              </li>
              <li>
                <a href="tel:8553496366" className="text-sm text-gray-400 hover:text-white hover:underline transition-colors duration-200">
                  (855) 349-6366
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
          <div>
            Copyright @{new Date().getFullYear()} neonearth. All Rights Reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;