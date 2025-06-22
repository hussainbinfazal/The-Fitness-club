"use client";

import React from 'react';
import { Check, Star, Crown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 29,
      period: 'month',
      description: 'Perfect for getting started with your fitness journey',
      features: [
        'Access to gym equipment',
        'Locker room facilities',
        'Basic workout plans',
        'Mobile app access',
        '24/7 gym access'
      ],
      popular: false,
      cta: 'Start Basic Plan'
    },
    {
      name: 'Premium',
      price: 59,
      period: 'month',
      description: 'Most popular choice for serious fitness enthusiasts',
      features: [
        'Everything in Basic',
        'Unlimited group classes',
        'Personal trainer consultation',
        'Nutrition planning',
        'Guest passes (2/month)',
        'Recovery amenities',
        'Priority booking'
      ],
      popular: true,
      cta: 'Start Premium Plan'
    },
    {
      name: 'Elite',
      price: 99,
      period: 'month',
      description: 'Ultimate fitness experience with premium perks',
      features: [
        'Everything in Premium',
        'Unlimited personal training',
        'VIP locker access',
        'Massage therapy sessions',
        'Meal prep service',
        'Exclusive member events',
        'Concierge service',
        'Guest passes (unlimited)'
      ],
      popular: false,
      cta: 'Start Elite Plan'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-orange-500 text-sm font-medium">Membership Plans</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="block text-orange-500">Fitness Plan</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Flexible membership options designed to fit your lifestyle and budget. 
            All plans include our core facilities and expert support.
          </p>

          {/* Special Offer */}
          <div className="inline-flex items-center bg-green-100 border border-green-200 rounded-full px-6 py-3">
            <Star className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-green-800 font-medium">Limited Time: First Month FREE on Annual Plans!</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                plan.popular 
                  ? 'ring-2 ring-orange-500 transform scale-105' 
                  : 'hover:-translate-y-2'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Crown className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="bg-green-100 p-1 rounded-full mr-3">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-orange-500/25'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  } transform hover:scale-105`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All memberships include a 7-day money-back guarantee and no long-term contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
              Compare All Plans
            </button>
            <span className="text-gray-400 hidden sm:block">•</span>
            <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
              Corporate Memberships Available
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;