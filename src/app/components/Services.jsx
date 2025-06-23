"use client";

import React from 'react';
import { Dumbbell, Users, Zap, Heart, Clock, Target } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Services = () => {
  const router = useRouter();
  const services = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Build muscle and increase strength with our comprehensive weight training programs and state-of-the-art equipment.',
      features: ['Free Weights', 'Machine Training', 'Functional Movement', 'Progressive Overload']
    },
    {
      icon: Zap,
      title: 'HIIT Classes',
      description: 'High-intensity interval training sessions designed to maximize calorie burn and improve cardiovascular fitness.',
      features: ['Circuit Training', 'Metabolic Conditioning', 'Bodyweight Exercises', 'Team Motivation']
    },
    {
      icon: Users,
      title: 'Group Fitness',
      description: 'Join our energetic group classes led by certified instructors in a motivating community environment.',
      features: ['Yoga & Pilates', 'Dance Fitness', 'Spin Classes', 'Boxing Workouts']
    },
    {
      icon: Target,
      title: 'Personal Training',
      description: 'One-on-one coaching with certified trainers to achieve your specific goals with personalized attention.',
      features: ['Custom Programs', 'Nutrition Guidance', 'Progress Tracking', 'Injury Prevention']
    },
    {
      icon: Heart,
      title: 'Cardio Zone',
      description: 'Modern cardio equipment with entertainment systems to make your cardiovascular workouts enjoyable.',
      features: ['Treadmills', 'Ellipticals', 'Rowing Machines', 'Stationary Bikes']
    },
    
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-orange-500 text-sm font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="block text-orange-500">Reach Your Goals</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From beginner-friendly programs to advanced training techniques, we offer comprehensive 
            fitness solutions tailored to every level and lifestyle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-orange-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-orange-500/10 p-4 rounded-2xl w-fit mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-200 group-hover:translate-x-2 transform cursor-pointer" onClick={()=>router.push("#contact")}>
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation today and discover how our services can help you achieve your fitness goals.
          </p>
          <button className="bg-white text-orange-500 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105" onClick={()=>router.push("#contact")}>
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;