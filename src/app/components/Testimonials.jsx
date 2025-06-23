"use client";


import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Testimonials = () => {
  const router = useRouter();
  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Marketing Executive',
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg',
      rating: 5,
      text: "Joining Fitness Club was the best decision I made for my health. The trainers are incredibly knowledgeable and supportive. I've lost 30 pounds and gained so much confidence!",
      achievement: 'Lost 30 lbs in 6 months'
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/3823491/pexels-photo-3823491.jpeg',
      rating: 5,
      text: "The 24/7 access is perfect for my schedule. The equipment is top-notch and always well-maintained. The community here is amazing - everyone supports each other.",
      achievement: 'Gained 15 lbs muscle mass'
    },
    {
      name: 'Lisa Thompson',
      role: 'Teacher',
      image: 'https://images.pexels.com/photos/3823489/pexels-photo-3823489.jpeg',
      rating: 5,
      text: "I love the variety of classes offered. From yoga to HIIT, there's something for every mood and fitness level. The instructors make every workout enjoyable and challenging.",
      achievement: 'Completed first marathon'
    },
    {
      name: 'Robert Williams',
      role: 'Retired Military',
      image: 'https://images.pexels.com/photos/3823490/pexels-photo-3823490.jpeg',
      rating: 5,
      text: "As a veteran, staying fit is crucial. The personal training here is exceptional. My trainer helped me work around my old injuries and get stronger than ever.",
      achievement: 'Improved mobility by 40%'
    },
    {
      name: 'Amanda Rodriguez',
      role: 'Busy Mom of Three',
      image: 'https://images.pexels.com/photos/3768912/pexels-photo-3768912.jpeg',
      rating: 5,
      text: "The childcare service is a lifesaver! I can finally focus on my workout knowing my kids are safe and having fun. The results speak for themselves.",
      achievement: 'Back to pre-pregnancy weight'
    },
    {
      name: 'James Davis',
      role: 'Business Owner',
      image: 'https://images.pexels.com/photos/3823487/pexels-photo-3823487.jpeg',
      rating: 5,
      text: "The Elite membership is worth every penny. The VIP amenities and personal training have transformed not just my body, but my entire approach to health and wellness.",
      achievement: 'Reduced stress, increased energy'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-orange-500 text-sm font-medium">Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real People,
            <span className="block text-orange-500">Real Results</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our amazing members who have transformed 
            their lives and achieved their fitness goals with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-12 w-12 text-orange-500" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Achievement Badge */}
              <div className="bg-orange-50 border border-orange-200 rounded-full px-4 py-2 mb-6 inline-block">
                <span className="text-orange-700 text-sm font-semibold">{testimonial.achievement}</span>
              </div>

              {/* Member Info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-orange-100">Member Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-orange-100">Success Stories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">85%</div>
              <div className="text-orange-100">Achieve Goals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-orange-100">Average Rating</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Write Your Success Story?</h3>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-orange-500/25 transform hover:scale-105" onClick={() => router.push('/#contact')}>
            Start Your Transformation Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;