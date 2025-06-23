"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { toast } from "sonner";
import axios from "axios";
import { set } from "mongoose";

export const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  interest: z
    .string()
    .min(1, "Interest is required")
    .max(100, "Interest is too long"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(1000, "Message is too long"),
  phone: z
    .string()
    .min(10, "Phone must be 10 digits")
    .max(10, "Phone must be 10 digits")
    .regex(/^\d+$/, "Phone must contain only numbers"),
});
const Contact = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    // Handle form submission here

    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      toast.error(fieldErrors.message);
      setLoading(false);
      return;
    } else {
      setErrors({});
      const response = await axios.post("/api/submitEmail", formData);
      
      if (response.status === 200) {
        toast.success("Email sent successfully");
      } else {
        toast.error("Something went wrong");
      }
      setMessage("");
      setEmail("");
      setName("");
      setPhone("");
      setInterest("");

      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["S9 Upper Ground Floor", "Nafees Road, New Delhi 110025"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9911456101", "+91 9990369767", "Call or text anytime"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@fitnessclub.com", "We reply within 24 hours"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["7 day Gym Access", "Staff: Mon-Fri 6AM-10PM"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-orange-500 text-sm font-medium">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Start Your Journey
            <span className="block text-orange-500">Today</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to transform your life? Get in touch with us to schedule a
            tour, ask questions, or start your membership. We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Let's Connect
            </h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-orange-500/10 p-3 rounded-lg">
                    <info.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Interactive Map Coming Soon</p>
                <p className="text-sm text-gray-400">
                  S9 Upper Ground Floor, Nafees Road, New Delhi 110025
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <MessageCircle className="h-8 w-8 text-orange-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Send us a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="(+91) 9999999999"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      I'm Interested In
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select an option</option>
                      <option value="membership">Membership Information</option>
                      <option value="personal-training">
                        Personal Training
                      </option>
                      <option value="group-classes">Group Classes</option>
                      <option value="tour">Facility Tour</option>
                    </select>
                    {errors.interest && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.interest}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your fitness goals or any questions you have..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={
                    loading ||
                    !formData.name ||
                    !formData.email ||
                    !formData.message ||
                    !formData.interest ||
                    !formData.phone
                  }
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold flex items-center justify-center shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 cursor-pointer"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 font-semibold">
                📞 Call Now: +91 9911456101
              </button>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-semibold">
                💬 Live Chat Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
