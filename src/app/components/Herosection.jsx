"use client";

import React from 'react';
import { Play, Star, Users, Award } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Hero = () => {
        const router = useRouter();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pb-4 md:pb-0">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg')] bg-cover bg-center opacity-20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-8">
            <Star className="h-4 w-4 text-orange-500 mr-2" />
            <span className="text-orange-500 text-sm font-medium">#1 Rated Fitness Club in the City</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Body & Mind
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of members who've already transformed their lives. State-of-the-art equipment, 
            expert trainers, and a community that motivates you to achieve your fitness goals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105" onClick={()=>router.push("#contact")}>
              Start Your Journey
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button className="group flex items-center border-2 border-white/20 text-white px-8 py-4 rounded-full hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 font-semibold text-lg backdrop-blur-sm" onClick={()=>router.push("#about")}>
              <Play className="h-5 w-5 mr-2 group-hover:text-orange-500 transition-colors" />
              Watch Our Story
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto -mt-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">5,00+</div>
              <div className="text-gray-300">Active Members</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-orange-500" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-300">Expert Trainers</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-orange-500" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-gray-300">Member Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;