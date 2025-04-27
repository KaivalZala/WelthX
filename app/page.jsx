import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Hero Section */}
      <HeroSection />
      {/* Stats Section */}
      {/* <section className="py-16 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg mx-4 md:mx-16 -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-extrabold text-blue-700 mb-2 drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-14 text-blue-700 tracking-tight">
            Everything you need to manage your finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuresData.map((feature, index) => (
              <Card className="p-8 bg-white/90 border-0 shadow-xl hover:scale-105 transition-transform duration-300" key={index}>
                <CardContent className="space-y-5 pt-4 flex flex-col items-center">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 mb-2 text-blue-600 text-3xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-center">{feature.title}</h3>
                  <p className="text-gray-500 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-r from-blue-100 via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-14 text-blue-700 tracking-tight">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center bg-white/90 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-700 text-3xl">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-14 text-blue-700 tracking-tight">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white/90 border-0 shadow-xl hover:scale-105 transition-transform duration-300">
                <CardContent className="pt-4 flex flex-col items-center">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full border-2 border-blue-200 shadow"
                    />
                    <div className="ml-4 text-left">
                      <div className="font-semibold text-blue-700">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-center italic">“{testimonial.quote}”</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-t-3xl shadow-2xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
            Join thousands of users who are already managing their finances smarter with Welth
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg px-10 py-4 text-xl font-bold rounded-full animate-bounce"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
