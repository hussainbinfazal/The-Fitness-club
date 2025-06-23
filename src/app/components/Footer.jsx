"use client";

import React from "react";
import {
  Dumbbell,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Trainers", href: "#trainers" },
    { name: "Contact", href: "#contact" },
  ];

  const programs = [
    { name: "Personal Training", href: "#" },
    { name: "Group Classes", href: "#" },
    { name: "HIIT Training", href: "#" },
    { name: "Yoga & Pilates", href: "#" },
    { name: "Nutrition Coaching", href: "#" },
  ];

  const support = [
    { name: "FAQ", href: "#" },
    { name: "Policies", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Youtube, href: "#", name: "YouTube" },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-lg">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                Fitness<span className="text-orange-500">Club</span>
              </span>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your life with our world-class fitness facilities,
              expert trainers, and supportive community. Your journey to better
              health starts here.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-orange-500" />
                <span>
                  S9 Upper Ground floor, Nafees Road, New Delhi 110025
                </span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-orange-500" />
                <span>(+91) 9911456101</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-orange-500" />
                <span>info@fitnessclub.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold mb-6">Programs</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center lg:max-w-none lg:text-left lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-300">Get fitness tips, class updates, and exclusive offers delivered to your inbox.</p>
            </div>
            <div className="mt-6 lg:mt-0 lg:ml-8">
              <div className="flex max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                />
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-r-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between py-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Fitness Club. All rights reserved. | Privacy Policy | Terms
              of Service
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-4">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-orange-500 transition-colors duration-200 group"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-full shadow-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-110 hover:shadow-orange-500/25">
          <Link
            href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className=" "
          >
            <Phone className="h-6 w-6" />
          </Link>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
