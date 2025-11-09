'use client';

import { Ticket, Github, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-(--gray-900) text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Ticket className="w-6 h-6 text-white" />
              </div>
              <span className="heading-sm text-white">zkRaffle</span>
            </div>
            <p className="body-md text-(--gray-400)">
              Fair and transparent raffles for real-world assets, powered by zero-knowledge proofs.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="body-md text-(--gray-400) hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="body-md text-(--gray-400) hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#raffles" className="body-md text-(--gray-400) hover:text-white transition-colors">
                  Active Raffles
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="body-md text-(--gray-400) hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="body-md text-(--gray-400) hover:text-white transition-colors">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="body-md text-(--gray-400) hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Community</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-(--gray-800) hover:bg-(--primary) transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-(--gray-800) hover:bg-(--primary) transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-(--gray-800) hover:bg-(--primary) transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-(--gray-800) text-center">
          <p className="body-md text-(--gray-400)">
            © 2024 zkRaffle. All rights reserved. Built with ❤️ for fair raffles.
          </p>
        </div>
      </div>
    </footer>
  );
}