'use client';

import { Shield, Eye, Zap, Lock, Users, TrendingUp } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Provably Fair',
      description: 'Smart contracts ensure transparent and tamper-proof raffle mechanics',
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Full Transparency',
      description: 'All raffle data and results are publicly verifiable on-chain',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Instant Verification',
      description: 'Zero-knowledge proofs enable immediate result verification',
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Privacy Protected',
      description: 'Your participation data remains encrypted and private',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community Driven',
      description: 'Decentralized governance for fair raffle parameters',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Real-World Assets',
      description: 'Win actual products from beverages to consumer goods',
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-lg gradient-text">Why Choose zkRaffle?</h2>
          <p className="body-lg text-(--gray-600) max-w-2xl mx-auto">
            Experience the future of fair and transparent promotional raffles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border-2 border-(--gray-200) hover:border-(--primary) transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-(--primary) to-(--secondary) text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-(--gray-900)">{feature.title}</h3>
                  <p className="body-md text-(--gray-600)">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}