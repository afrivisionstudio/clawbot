import React, { useState, useEffect } from 'react';
import { Menu, X, Play, ArrowRight, Mail, MessageCircle, Check, Zap, Award, Users, Globe, Lightbulb, Target, TrendingUp, Phone, Clock, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AfrivisionStudio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeProcess, setActiveProcess] = useState(0);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Floating CTA Component
  const FloatingCTA = () => (
    <motion.button
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-gold to-yellow-400 text-black font-bold rounded-full shadow-2xl shadow-gold/40"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
      onClick={() => setContactOpen(true)}
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline text-sm font-bold">Let's Talk</span>
    </motion.button>
  );

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* ============================================
          NAVIGATION - ALWAYS ACCESSIBLE
          ============================================ */}
      <nav className="fixed w-full z-50 backdrop-blur-xl bg-black/70 border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex flex-col cursor-pointer hover:opacity-80 transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="text-2xl font-black text-gold tracking-widest">AFRIVISION</div>
              <div className="text-xs text-gold/70 tracking-wider font-light">Creative Agency</div>
            </motion.div>

            <div className="hidden md:flex gap-12">
              {[
                { label: 'Why Us', id: 'whyus' },
                { label: 'Services', id: 'services' },
                { label: 'Work', id: 'portfolio' },
                { label: 'Process', id: 'process' }
              ].map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm font-light text-gray-400 hover:text-gold transition duration-300 uppercase tracking-wide"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <motion.button
              className="hidden md:block px-6 py-2 bg-gold text-black font-bold rounded-lg text-sm hover:bg-yellow-400 transition"
              whileHover={{ scale: 1.05 }}
              onClick={() => setContactOpen(true)}
            >
              Get Started
            </motion.button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gold"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="md:hidden pb-4 space-y-3"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                {[
                  { label: 'Why Us', id: 'whyus' },
                  { label: 'Services', id: 'services' },
                  { label: 'Work', id: 'portfolio' },
                  { label: 'Process', id: 'process' }
                ].map(item => (
                  <a key={item.id} href={`#${item.id}`} className="block py-2 text-sm hover:text-gold uppercase tracking-wide font-light">
                    {item.label}
                  </a>
                ))}
                <button
                  onClick={() => setContactOpen(true)}
                  className="w-full px-4 py-3 bg-gold text-black font-bold rounded-lg text-sm mt-4"
                >
                  Get Started
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* ============================================
          HERO - CONVERSION FOCUSED
          Clear value prop + immediate CTA
          ============================================ */}
      <section id="hero" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-black"></div>

          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl"
            animate={{
              x: [0, 50, -50, 0],
              y: [0, 30, -30, 0],
              opacity: [0.3, 0.6, 0.3, 0.3]
            }}
            transition={{ duration: 15, repeat: Infinity }}
          ></motion.div>

          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 50, 0],
              y: [0, -30, 30, 0],
              opacity: [0.2, 0.5, 0.2, 0.2]
            }}
            transition={{ duration: 20, repeat: Infinity, delay: 2 }}
          ></motion.div>

          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            ></motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            className="mb-8 inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-gold text-sm uppercase tracking-widest font-light px-6 py-2 border border-gold/40 rounded-full backdrop-blur-sm bg-gold/5 flex items-center gap-2">
              <Sparkles size={14} />
              Trusted by 50+ Global Brands
            </div>
          </motion.div>

          {/* HERO VALUE PROPOSITION - TRANSFORMATION FOCUSED */}
          <motion.h1
            className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-white block">Turn Your Brand Into</span>
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-gold block mt-4"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Something Unforgettable
            </motion.span>
          </motion.h1>

          {/* SUBHEADLINE - PAIN POINT SOLUTION */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            We help brands like yours build authentic stories that capture hearts, drive engagement, and generate real business results.
          </motion.p>

          {/* DUAL CTA - CONVERSION OPTIMIZED */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.button
              className="group relative bg-gradient-to-r from-gold to-yellow-400 text-black px-10 py-4 rounded-lg font-bold text-lg overflow-hidden shadow-lg shadow-gold/40 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setContactOpen(true)}
            >
              <span className="relative flex items-center justify-center gap-2">
                Start Your Project <ArrowRight size={20} />
              </span>
            </motion.button>

            <motion.button
              className="group border-2 border-gold text-gold px-10 py-4 rounded-lg font-bold text-lg hover:bg-gold/10 transition backdrop-blur-sm whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="flex items-center justify-center gap-2">
                <Play size={20} /> See Our Work
              </span>
            </motion.button>
          </motion.div>

          {/* CONVERSION INDICATORS */}
          <motion.div
            className="grid grid-cols-3 gap-6 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            {[
              { icon: '\u26A1', label: 'Fast Delivery', value: '30-60 days' },
              { icon: '\uD83C\uDFAF', label: 'Proven ROI', value: '300%+ Growth' },
              { icon: '\uD83E\uDD1D', label: 'Your Partner', value: 'Start to Finish' }
            ].map((indicator, i) => (
              <div key={i} className="text-center text-xs sm:text-sm">
                <p className="text-2xl mb-2">{indicator.icon}</p>
                <p className="font-bold text-white">{indicator.value}</p>
                <p className="text-gray-500 text-xs mt-1">{indicator.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="border-2 border-gold rounded-full p-3 bg-gold/10 backdrop-blur-sm">
            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* ============================================
          WHY US - CONVERSION DRIVERS
          Build trust fast
          ============================================ */}
      <section id="whyus" className="py-24 px-4 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm uppercase tracking-widest font-light">{'\u2501'} WHY CHOOSE US</span>
            <h2 className="text-4xl md:text-6xl font-black mt-6 leading-tight">
              Why Brands Trust <span className="text-gold">Afrivision</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: '\uD83C\uDFAC',
                title: 'Cinematic Quality',
                desc: 'Film industry standards. Every project is premium.',
                cta: 'See Portfolio'
              },
              {
                icon: '\u26A1',
                title: 'Fast Turnaround',
                desc: 'AI-powered workflows. Get premium results in weeks.',
                cta: 'Learn Process'
              },
              {
                icon: '\uD83D\uDCC8',
                title: 'Measurable Results',
                desc: 'We obsess over your ROI. Data-driven strategy.',
                cta: 'View Case Studies'
              }
            ].map((trust, idx) => (
              <motion.div
                key={idx}
                className="group bg-gray-900/40 border border-gold/15 rounded-xl p-8 hover:border-gold/50 hover:bg-gray-900/70 transition duration-500 text-center cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition">{trust.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition">{trust.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{trust.desc}</p>
                <button
                  className="text-gold font-bold text-sm hover:text-yellow-400 transition flex items-center justify-center gap-2 w-full"
                  onClick={() => setContactOpen(true)}
                >
                  {trust.cta} <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>

          {/* TRUST METRICS */}
          <motion.div
            className="grid md:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {[
              { number: '50+', label: 'Global Brands Served' },
              { number: '100+', label: 'Strategic Projects' },
              { number: '98%', label: 'Satisfaction Rate' },
              { number: '10M+', label: 'Total Reach Generated' }
            ].map((metric, i) => (
              <motion.div
                key={i}
                className="text-center p-6 border border-gold/20 rounded-lg hover:border-gold/50 transition"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <p className="text-4xl font-black text-gold mb-2">{metric.number}</p>
                <p className="text-gray-400 text-sm">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SERVICES - OUTCOME-FOCUSED (CONVERSION)
          ============================================ */}
      <section id="services" className="py-24 px-4 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm uppercase tracking-widest font-light">{'\u2501'} WHAT WE DO</span>
            <h2 className="text-4xl md:text-6xl font-black mt-6 mb-6">
              Services Designed for Results
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Not just creative. Strategic. Every service is designed to move the needle for your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: 'Brand Films',
                outcome: 'Authentic brand positioning',
                desc: 'Cinematic brand narratives that create emotional connection.',
                icon: '\uD83C\uDFAC'
              },
              {
                title: 'Content Production',
                outcome: 'Scale without sacrifice',
                desc: 'AI-powered content. Premium quality at speed.',
                icon: '\uD83E\uDD16'
              },
              {
                title: 'Creative Strategy',
                outcome: 'Clear creative direction',
                desc: 'Strategic vision aligned with your business goals.',
                icon: '\uD83C\uDFAF'
              },
              {
                title: 'Social Campaigns',
                outcome: 'Viral growth & engagement',
                desc: 'Platform-optimized content that moves your audience.',
                icon: '\uD83D\uDCF1'
              },
              {
                title: 'Photography',
                outcome: 'Premium brand presence',
                desc: 'Luxury visuals that elevate every touchpoint.',
                icon: '\uD83D\uDCF8'
              },
              {
                title: 'Impact Programs',
                outcome: 'Purpose-driven growth',
                desc: 'Campaigns that inspire action and drive change.',
                icon: '\uD83C\uDF0D'
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                className="group bg-gray-900/40 border border-gold/15 rounded-xl p-6 hover:border-gold/50 hover:bg-gray-900/70 transition duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => setContactOpen(true)}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-gold transition">{service.title}</h3>
                <p className="text-gold text-xs font-bold uppercase mb-3 tracking-wide">{service.outcome}</p>
                <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
                <div className="flex items-center text-gold text-sm font-bold">
                  Learn More <ArrowRight size={14} className="ml-2" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* SERVICE CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-gray-400 mb-6">Need a custom solution?</p>
            <motion.button
              className="px-8 py-4 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold/10 transition text-sm uppercase tracking-wide"
              whileHover={{ scale: 1.05 }}
              onClick={() => setContactOpen(true)}
            >
              Book a Creative Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          PORTFOLIO - PROOF & SOCIAL VALIDATION
          ============================================ */}
      <section id="portfolio" className="py-24 px-4 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm uppercase tracking-widest font-light">{'\u2501'} OUR WORK</span>
            <h2 className="text-4xl md:text-6xl font-black mt-6">
              Proven Results. Real Impact.
            </h2>
            <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto font-light">
              Every project delivers measurable business results. Here's the proof.
            </p>
          </motion.div>

          {/* FEATURED PROJECTS */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: 'Brand Repositioning',
                image: 'https://images.unsplash.com/photo-1547027129-86cf960547e0?w=700&h=500&fit=crop',
                result: '300% Engagement\u2191',
                metrics: ['+250% Brand Awareness', '+1.2M Reach', '+45% Conversions']
              },
              {
                title: 'Viral Content Series',
                image: 'https://images.unsplash.com/photo-1536240694264-c0a0a2f65b73?w=700&h=500&fit=crop',
                result: '2.5M Views',
                metrics: ['Viral Growth', '95K Shares', '4.8\u2605 Rating']
              },
              {
                title: 'Impact Campaign',
                image: 'https://images.unsplash.com/photo-1499951360447-b2ca6d64ac07?w=700&h=500&fit=crop',
                result: '500K Reach',
                metrics: ['Community Impact', '10K Volunteers', 'Policy Change']
              },
              {
                title: 'Product Launch',
                image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=700&h=500&fit=crop',
                result: '1M Engagements',
                metrics: ['Day 1 Target Hit', '500K Impressions', '#1 Trending']
              }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                className="group relative overflow-hidden rounded-xl cursor-pointer h-80 hover:shadow-2xl hover:shadow-gold/20 transition duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => setContactOpen(true)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-between p-6">
                  <div></div>
                  <div>
                    <p className="text-gold font-black text-2xl mb-3">{project.result}</p>
                    <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                    <div className="space-y-1">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-200">
                          <Check size={14} className="text-gold" />
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/60 rounded-xl transition duration-500"></div>
              </motion.div>
            ))}
          </div>

          {/* PORTFOLIO CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              className="px-8 py-4 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold/10 transition text-sm uppercase tracking-wide"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open('#portfolio')}
            >
              View Complete Portfolio &rarr;
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          PROCESS - BUILD CONFIDENCE
          Clear methodology = conversion boost
          ============================================ */}
      <section id="process" className="py-24 px-4 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm uppercase tracking-widest font-light">{'\u2501'} HOW IT WORKS</span>
            <h2 className="text-4xl md:text-6xl font-black mt-6 mb-6">
              Simple. Strategic. Results-Driven.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Clear methodology. Transparent communication. Measurable outcomes at every stage.
            </p>
          </motion.div>

          {/* PROCESS STEPS */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              {
                number: '01',
                title: 'Discovery Call',
                desc: 'We understand your vision, goals, and audience. 30 min strategic conversation.',
                time: '30 mins',
                icon: '\uD83D\uDCDE'
              },
              {
                number: '02',
                title: 'Creative Proposal',
                desc: 'Strategic plan + creative direction + timeline. Clear roadmap.',
                time: '3-5 days',
                icon: '\uD83D\uDCCB'
              },
              {
                number: '03',
                title: 'Production',
                desc: 'Cinematic production. Regular updates. Collaborative refinement.',
                time: '30-60 days',
                icon: '\uD83C\uDFAC'
              },
              {
                number: '04',
                title: 'Launch & Impact',
                desc: 'Final delivery + performance insights. Let\'s measure success.',
                time: 'Ongoing',
                icon: '\uD83D\uDE80'
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                className="group bg-gray-900/40 border border-gold/15 hover:border-gold/50 rounded-xl p-6 transition duration-500 cursor-pointer text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                whileHover={{ y: -8, borderColor: 'rgba(212, 175, 55, 0.8)' }}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition">{step.icon}</div>
                <p className="text-gold font-bold text-sm uppercase tracking-wide mb-2">{step.number}</p>
                <h3 className="text-lg font-bold mb-3 group-hover:text-gold transition">{step.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{step.desc}</p>
                <div className="flex items-center justify-center gap-1 text-gold text-xs font-bold">
                  <Clock size={14} />
                  {step.time}
                </div>
              </motion.div>
            ))}
          </div>

          {/* PROCESS ASSURANCE */}
          <motion.div
            className="bg-gradient-to-r from-gold/10 to-transparent border border-gold/20 rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-gray-300 mb-6">
              {'\u2713'} Clear timeline {'\u2713'} Regular updates {'\u2713'} Strategic alignment {'\u2713'} Measurable results
            </p>
            <p className="text-sm text-gray-400 font-light">
              No surprises. No vague deliverables. Just transparent partnership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIALS - SOCIAL PROOF
          ============================================ */}
      <section className="py-24 px-4 bg-gradient-to-b from-black via-gray-950 to-black relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm uppercase tracking-widest font-light">{'\u2501'} CLIENT VOICES</span>
            <h2 className="text-4xl md:text-6xl font-black mt-6">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Amara Okafor',
                company: 'Digital Ventures',
                text: 'Results exceeded expectations. 300% engagement increase. Afrivision isn\'t just a vendor\u2014they\'re a strategic partner.',
                rating: 5
              },
              {
                name: 'Kwame Mensah',
                company: 'Premium Brand Co',
                text: 'Premium quality + strategic thinking. We saw immediate ROI and sustained growth. Highly recommend.',
                rating: 5
              },
              {
                name: 'Zainab Hassan',
                company: 'Innovation Hub',
                text: 'Professional, innovative, creative. They understand business AND artistry. This is the agency every brand needs.',
                rating: 5
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="group bg-gray-900/50 border border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:bg-gray-900/70 transition duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold text-lg">{'\u2605'}</span>
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed italic font-light text-sm">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-gold/20 pt-4">
                  <p className="font-bold text-white text-sm">{testimonial.name}</p>
                  <p className="text-gold text-xs font-bold mt-1">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL CTA SECTION - CONVERSION PUSH
          ============================================ */}
      <section className="py-32 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-gold/10 via-transparent to-transparent"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          ></motion.div>
        </div>

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Create Something
            <br />
            <span className="text-gold">Unforgettable?</span>
          </motion.h2>

          <motion.p
            className="text-gray-300 text-xl mb-12 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's start with a conversation. No pressure. Just strategic thinking and creative possibilities.
          </motion.p>

          {/* DUAL CTA - FINAL PUSH */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              className="px-12 py-5 bg-gradient-to-r from-gold to-yellow-400 text-black font-bold text-lg rounded-lg shadow-xl shadow-gold/40 hover:shadow-2xl hover:shadow-gold/60 transition whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setContactOpen(true)}
            >
              Schedule Your Call
            </motion.button>

            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 border-2 border-gold text-gold font-bold text-lg rounded-lg hover:bg-gold/10 transition flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </motion.a>
          </motion.div>

          <p className="text-gray-500 text-sm font-light">
            30-minute discovery call to explore possibilities. No strings attached.
          </p>
        </div>
      </section>

      {/* ============================================
          FOOTER
          ============================================ */}
      <footer className="border-t border-gold/20 py-16 px-4 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-gold font-black mb-4 text-lg">AFRIVISION</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Strategic creative agency transforming brands into market leaders.
              </p>
            </motion.div>

            {[
              {
                title: 'Quick Links',
                links: ['About', 'Services', 'Portfolio', 'Process']
              },
              {
                title: 'Contact',
                links: ['hello@afrivisionstudio.com', '+1 (234) 567-890', 'WhatsApp Chat']
              },
              {
                title: 'Legal',
                links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
              }
            ].map((col, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.1 }}
              >
                <h4 className="font-bold mb-4 text-sm uppercase text-white">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-gold transition text-sm font-light">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="border-t border-gold/20 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-center text-gray-500 text-xs font-light">
              &copy; 2026 Afrivision Studio. All rights reserved. Transforming vision into impact.
            </p>
          </motion.div>
        </div>
      </footer>

      {/* ============================================
          FLOATING CTA + CONTACT MODAL
          ============================================ */}
      <FloatingCTA />

      {/* QUICK CONTACT MODAL */}
      <AnimatePresence>
        {contactOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setContactOpen(false)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

            <motion.div
              className="relative bg-gradient-to-br from-gray-900 to-black border border-gold/40 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-gold/40"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setContactOpen(false)}
                className="absolute top-4 right-4 text-gold hover:text-yellow-400 transition"
              >
                <X size={24} />
              </button>

              <h3 className="text-3xl font-black mb-2 text-gold">Let's Talk</h3>
              <p className="text-gray-400 text-sm mb-6 font-light">
                Share a few details. We'll be in touch within 24 hours.
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-800/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:outline-none text-sm"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-800/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:outline-none text-sm"
                />
                <textarea
                  placeholder="Tell us about your project..."
                  rows="3"
                  className="w-full bg-gray-800/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:outline-none text-sm resize-none"
                ></textarea>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold to-yellow-400 text-black font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-gold/50 transition text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Request
                </motion.button>

                <p className="text-xs text-gray-500 text-center">
                  We'll respond within 24 hours. No spam. Ever.
                </p>
              </form>

              <div className="mt-6 pt-6 border-t border-gold/20">
                <p className="text-xs text-gray-400 mb-3">Or reach out directly:</p>
                <div className="flex gap-3">
                  <a
                    href="mailto:hello@afrivisionstudio.com"
                    className="flex-1 py-2 border border-gold/30 text-gold text-xs font-bold rounded-lg hover:border-gold hover:bg-gold/10 transition text-center"
                  >
                    Email
                  </a>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 border border-gold/30 text-gold text-xs font-bold rounded-lg hover:border-gold hover:bg-gold/10 transition text-center"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
