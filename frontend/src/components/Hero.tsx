'use client';

import { Sparkles, Shield, Zap, QrCode } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-(--primary) rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-(--secondary) rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-(--accent) rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect">
            <Sparkles className="w-4 h-4 text-(--primary)" />
            <span className="text-sm font-medium text-(--gray-700)">
              Powered by Zero-Knowledge Proofs
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-xl gradient-text max-w-4xl mx-auto">
            Fair & Transparent Raffles for Real-World Assets
          </h1>

          {/* Subheading */}
          <p className="body-lg text-(--gray-600) max-w-2xl mx-auto">
            zkRaffle brings everyday retail promotions on-chain with encrypted QR codes, 
            zero-knowledge proofs, and verifiable fairness. No manipulation, complete privacy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="px-8 py-4 rounded-full gradient-primary text-white font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Scan QR Code
            </button>
            <button className="px-8 py-4 rounded-full bg-white text-(--primary) font-semibold text-lg border-2 border-(--primary) hover:bg-(--primary) hover:text-white transition-all duration-300">
              View Active Raffles
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Provably Fair"
              description="Zero-knowledge proofs ensure no manipulation of winning odds"
              color="primary"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Privacy First"
              description="Winning data encrypted until reveal phase"
              color="secondary"
            />
            <FeatureCard
              icon={<QrCode className="w-8 h-8" />}
              title="Easy to Use"
              description="Simply scan encrypted QR codes on products"
              color="accent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description, 
  color 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  color: 'primary' | 'secondary' | 'accent';
}) {
  const colorClasses = {
    primary: 'from-(--primary) to-(--primary-dark)',
    secondary: 'from-(--secondary) to-(--primary)',
    accent: 'from-(--accent) to-(--secondary)',
  };

  return (
    <div className="group relative p-8 rounded-2xl bg-white border border-(--gray-200) hover:border-transparent hover:shadow-2xl transition-all duration-300">
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorClasses[color]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
      <div className="relative space-y-4">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${colorClasses[color]} text-white`}>
          {icon}
        </div>
        <h3 className="heading-sm text-(--gray-900)">{title}</h3>
        <p className="body-md text-(--gray-600)">{description}</p>
      </div>
    </div>
  );
}