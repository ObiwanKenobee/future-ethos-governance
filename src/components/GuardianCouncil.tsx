
import React from 'react';
import { Clock, Shield, Leaf } from 'lucide-react';

interface CouncilMember {
  name: string;
  role: string;
  image: string;
  quote: string;
  icon: React.ReactNode;
}

const councilMembers: CouncilMember[] = [
  {
    name: "Dr. Amara Nwosu",
    role: "Innovation Alignment",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=687&h=687",
    quote: "We balance technological advancement with cultural integrity.",
    icon: <Clock className="w-5 h-5 text-afrigov-teal" />,
  },
  {
    name: "Prof. Kwame Osei",
    role: "Ethics Oversight",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=687&h=687",
    quote: "True power comes from ethical governance, not authority.",
    icon: <Shield className="w-5 h-5 text-afrigov-earth-terracotta" />,
  },
  {
    name: "Dr. Fatima Abebe",
    role: "Sustainability Strategy",
    image: "https://images.unsplash.com/photo-1573497019236-61f323efd406?auto=format&fit=crop&q=80&w=687&h=687",
    quote: "Our policies must serve generations yet unborn.",
    icon: <Leaf className="w-5 h-5 text-afrigov-earth-green" />,
  },
];

const GuardianCouncil = () => {
  return (
    <section id="councils" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="section-title">Guardian Council</h2>
          <p className="section-subtitle">
            Strategic visionaries who guide ethical governance across the continent.
            Council members serve limited terms and undergo regular performance reviews.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {councilMembers.map((member) => (
            <div key={member.name} className="glass-card p-6 flex flex-col items-center text-center group animate-fade-in">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-primary/50">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              
              <div className="flex items-center gap-2 mb-4">
                {member.icon}
                <span className="text-sm font-medium">{member.role}</span>
              </div>
              
              <p className="italic text-muted-foreground">"{member.quote}"</p>
              
              <div className="mt-6 w-full pt-4 border-t border-slate-200/30">
                <div className="flex justify-between text-sm">
                  <span>Term: 3 years</span>
                  <span className="text-green-500">Performance: 94%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuardianCouncil;
