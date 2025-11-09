'use client';

import { QrCode, Lock, CheckCircle, Gift } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <QrCode className="w-8 h-8" />,
      title: 'Scan QR Code',
      description: 'Find encrypted QR codes on participating products and scan them with your phone',
      color: 'from-(--primary) to-(--primary-dark)',
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Enter Raffle',
      description: 'Your entry is recorded on-chain with zero-knowledge proof for privacy',
      color: 'from-(--secondary) to-(--primary)',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Verifiable Draw',
      description: 'Winners are selected through a transparent, tamper-proof smart contract',
      color: 'from-(--accent) to-(--secondary)',
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Claim Prize',
      description: 'Winners can verify and claim their prizes with cryptographic proof',
      color: 'from-(--success) to-(--accent)',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-(--gray-50)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-lg gradient-text">How It Works</h2>
          <p className="body-lg text-(--gray-600) max-w-2xl mx-auto">
            Participate in fair and transparent raffles in just four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-(--primary) to-(--secondary) opacity-20 -translate-x-1/2 z-0"></div>
              )}
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-(--primary) to-(--secondary) flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                <div className="space-y-4">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <h3 className="heading-sm text-(--gray-900)">{step.title}</h3>
                  <p className="body-md text-(--gray-600)">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}