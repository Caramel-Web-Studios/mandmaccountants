"use client";
import { motion } from "framer-motion";
import { BarChart3, BookOpenCheck, Users, PieChart, ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-black text-brand-navy tracking-tight">Our Services</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <ServiceCard 
          icon={<PieChart size={32} />}
          title="Tax Planning"
          desc="Strategic tax planning to minimise liabilities and maximise savings for your business."
          delay={0.1}
        />
        <ServiceCard 
          icon={<BookOpenCheck size={32} />}
          title="Bookkeeping"
          desc="Accurate and timely bookkeeping services to keep your financial records organized."
          delay={0.2}
        />
        <ServiceCard 
          icon={<Users size={32} />}
          title="Payroll Services"
          desc="Efficient payroll management including salary processing and tax compliance."
          delay={0.3}
        />
         <ServiceCard 
          icon={<BarChart3 size={32} />}
          title="Financial Analysis"
          desc="In-depth financial analysis and reporting to drive informed business decisions."
          delay={0.3}
        />
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -12, transition: { duration: 0.2 } }}
      className="p-10 rounded-4xl border border-brand-navy/5 bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all group"
    >
      <div className="text-brand-gold mb-8 group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <h3 className="text-2xl font-black mb-4 text-brand-navy">{title}</h3>
      <p className="text-brand-slate leading-relaxed text-sm font-medium">{desc}</p>
      <div className="mt-8 flex items-center gap-2 text-brand-gold font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
        Explore Service <ArrowRight size={14} />
      </div>
    </motion.div>
  );
}