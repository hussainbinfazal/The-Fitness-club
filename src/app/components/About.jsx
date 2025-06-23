"use client";

import React from "react";
import { Target, Heart, Trophy, Shield } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const About = () => {
  const gymImages = [
    {
      src: "/gym1.jpg",
      alt: "Gym Image 1",
    },
    {
      src: "/gym2.jpg",
      alt: "Gym Image 2",
    },

    {
      src: "/gym4.jpg",
      alt: "Gym Image 4",
    },

    {
      src: "/gym6.jpg",
      alt: "Gym Image 6",
    },
    {
      src: "/gym7.jpg",
      alt: "Gym Image 7",
    },

    {
      src: "/gym10.jpg",
      alt: "Gym Image 10",
    },
    {
      src: "/gym11.jpg",
      alt: "Gym Image 11",
    },
    {
      src: "/gym12.jpg",
      alt: "Gym Image 12",
    },
    {
      src: "/gym13.jpg",
      alt: "Gym Image 13",
    },

    {
      src: "/gym15.jpg",
      alt: "Gym Image 15",
    },
    {
      src: "/gym16.jpg",
      alt: "Gym Image 16",
    },
  ];
  const features = [
    {
      icon: Target,
      title: "Goal-Focused Training",
      description:
        "Personalized workout plans designed to help you achieve your specific fitness goals efficiently and safely.",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive approach to fitness including nutrition guidance, recovery programs, and mental wellness support.",
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description:
        "Track record of helping thousands transform their lives with measurable results and sustainable habits.",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description:
        "Clean, well-maintained facilities with certified trainers ensuring your safety throughout your fitness journey.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-orange-500 text-sm font-medium">
                About Fitness Club
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Where Fitness Meets
              <span className="block text-orange-500">Community</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For over a decade, Fitness Club has been the premier destination
              for fitness enthusiasts in our community. We believe that true
              fitness goes beyond just physical transformation—it's about
              building confidence, creating lasting friendships, and developing
              a lifestyle that supports your long-term health and happiness.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500/10 p-3 rounded-lg group-hover:bg-orange-500 transition-colors duration-300">
                      <feature.icon className="h-6 w-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-orange-500/25 transform hover:scale-105">
              Learn More About Us
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
              <Carousel
                className=" w-full h-[600px] max-w-full !p-0 "
                opts={{
                  align: "start",
                  loop: true,
                  dragFree: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 2500,
                    stopOnInteraction: false,
                    stopOnMouseEnter: true,
                  }),
                ]}
              >
                <CarouselContent className={"w-full h-full !p-0"}>
                  {(gymImages || []).map((image) => (
                    <CarouselItem key={image.alt} className={"w-full h-full "}>
                      <div className="w-full h-[600px] relative ">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className=" rounded-2xl object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Trophy className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-gray-600 text-sm">
                    Years of Excellence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
