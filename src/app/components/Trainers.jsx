"use client";


import React from 'react';
import { Award, Star, Calendar } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Trainers = () => {
  const router = useRouter();
  const trainers = [
    {
      name: 'Sarah Johnson',
      title: 'Head Personal Trainer',
      specialties: ['Strength Training', 'Weight Loss', 'Functional Fitness'],
      experience: '8 years',
      certifications: ['NASM-CPT', 'FMS', 'Nutrition Specialist'],
      image: 'https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg',
      rating: 4.9,
      description: 'Specializes in helping clients build strength and confidence through personalized training programs.'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Sports Performance Coach',
      specialties: ['Athletic Performance', 'HIIT', 'Injury Prevention'],
      experience: '10 years',
      certifications: ['CSCS', 'USAW', 'Corrective Exercise'],
      image: 'https://images.pexels.com/photos/3794186/pexels-photo-3794186.jpeg',
      rating: 4.8,
      description: 'Former professional athlete focused on maximizing performance and preventing injuries.'
    },
    {
      name: 'Emily Chen',
      title: 'Wellness & Yoga Instructor',
      specialties: ['Yoga', 'Pilates', 'Mindfulness', 'Flexibility'],
      experience: '6 years',
      certifications: ['RYT-500', 'Pilates Mat', 'Meditation Teacher'],
      image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg',
      rating: 5.0,
      description: 'Passionate about helping clients achieve balance through movement, breath, and mindfulness.'
    },
    {
      name: 'David Thompson',
      title: 'Nutrition & Lifestyle Coach',
      specialties: ['Nutrition Planning', 'Body Composition', 'Lifestyle Coaching'],
      experience: '12 years',
      certifications: ['Registered Dietitian', 'Precision Nutrition', 'Behavior Change'],
      image: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg',
      rating: 4.9,
      description: 'Registered dietitian specializing in sustainable nutrition and lifestyle transformations.'
    }
  ];

  return (
    <section id="trainers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-orange-500 text-sm font-medium">Meet Our Team</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Expert Trainers
            <span className="block text-orange-500">Dedicated to You</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our certified fitness professionals bring years of experience and passion to help you 
            achieve your goals safely and effectively.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="text-sm font-semibold">{trainer.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{trainer.name}</h3>
                <p className="text-orange-500 font-semibold mb-3">{trainer.title}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{trainer.description}</p>

                {/* Experience & Certifications */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{trainer.experience} experience</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-600">
                    <Award className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{trainer.certifications.join(', ')}</span>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {trainer.specialties.map((specialty, idx) => (
                      <span 
                        key={idx}
                        className="bg-orange-50 text-orange-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Not Sure Which Trainer is Right for You?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation and we'll match you with the perfect trainer based on 
              your goals, experience level, and preferences.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-orange-500/25 transform hover:scale-105" onClick={() => router.push('/#contact')}>
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;