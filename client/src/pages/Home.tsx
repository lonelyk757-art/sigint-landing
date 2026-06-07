import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, Radio, Zap, ChevronDown, Share2, TrendingUp, Users, Shield, Lock, Eye, Phone, Mail } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect, useState, useRef } from "react";

/**
 * SIGINT ✓ Landing Page - Dark Minimalist Enterprise Edition
 * Design: Modern Tech Company Security Intelligence Platform
 * 
 * Color Palette:
 * - Background: Deep Dark (#0F1117) - Premium dark
 * - Secondary: Dark Gray (#161B22) - Subtle contrast
 * - Accent: Cyan (#00D9FF) - Modern tech accent
 * - Accent Gold: #FFD700 - Premium highlights
 * - Text: Pure White (#FFFFFF) - Maximum contrast
 * - Muted: Light Gray (#8B949E) - Secondary text
 * 
 * Layout: Minimalist, spacious, modern tech aesthetic
 * Typography: Clean sans-serif with excellent readability
 * Animation: Smooth, professional transitions
 */

function useCountUp(target: number, duration: number = 2000, shouldStart: boolean = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [target, duration, shouldStart]);

  return count;
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | undefined>(undefined);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const subscribers = useCountUp(500, 2000, statsVisible);
  const cves = useCountUp(1200, 2000, statsVisible);
  const updates = useCountUp(50, 2000, statsVisible);

  useEffect(() => {
    setIsVisible(true);
    document.title = "SIGINT ✓ | Dark Minimalist Security Intelligence Platform";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "SIGINT ✓ - Modern security intelligence platform delivering verified threat intelligence, CVE alerts, and real-time security updates for enterprises.");
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const recentUpdates = [
    {
      id: 1,
      title: "CRITICAL: Apache Log4j RCE Vulnerability - CVSS 10.0",
      description: "Remote code execution in Apache Log4j affecting millions of systems. Immediate patching required.",
      date: "Today",
      severity: "CRITICAL"
    },
    {
      id: 2,
      title: "HIGH: Windows PrintNightmare Exploit Released",
      description: "Public proof-of-concept available for CVE-2021-34527. Recommended immediate patching.",
      date: "Yesterday",
      severity: "HIGH"
    },
    {
      id: 3,
      title: "MEDIUM: New Security Research on API Vulnerabilities",
      description: "Comprehensive analysis of modern API security best practices from leading researchers.",
      date: "2 days ago",
      severity: "MEDIUM"
    }
  ];

  const referralBenefits = [
    {
      icon: Users,
      title: "Expand Network",
      description: "Connect with security professionals and build your intelligence network"
    },
    {
      icon: TrendingUp,
      title: "Strengthen Community",
      description: "Help build a unified security intelligence community across organizations"
    },
    {
      icon: Share2,
      title: "Share Intelligence",
      description: "Distribute critical threat intelligence to protect your network"
    }
  ];

  const capabilities = [
    {
      icon: Eye,
      title: "Real-Time Monitoring",
      description: "Continuous threat monitoring and vulnerability detection"
    },
    {
      icon: Lock,
      title: "Vulnerability Intelligence",
      description: "Comprehensive CVE database with exploit information"
    },
    {
      icon: Shield,
      title: "Threat Analysis",
      description: "Curated intelligence from verified security sources"
    }
  ];

  const faqs = [
    {
      id: "faq-1",
      question: "What is SIGINT ✓?",
      answer: "SIGINT ✓ is a modern security intelligence platform delivering curated threat intelligence, critical CVE alerts, and real-time security updates. Designed for enterprises and security professionals who require verified, actionable intelligence without noise."
    },
    {
      id: "faq-2",
      question: "How often are updates provided?",
      answer: "Intelligence updates are delivered continuously. Critical threats and CVEs are escalated immediately. Regular digest updates are provided multiple times daily to ensure you remain informed of all significant security developments."
    },
    {
      id: "faq-3",
      question: "Is this suitable for enterprise use?",
      answer: "Yes. SIGINT ✓ is designed for enterprises, security teams, and professionals. Our platform provides verified threat intelligence suitable for official security operations and incident response."
    },
    {
      id: "faq-4",
      question: "What sources do you monitor?",
      answer: "We monitor and aggregate intelligence from: Hacker News, CVE databases, security research publications, threat intelligence feeds, and verified security community sources. All information is verified before distribution."
    },
    {
      id: "faq-5",
      question: "How do I subscribe?",
      answer: "Subscribe through our WhatsApp channel for real-time intelligence delivery. No registration required - simply join and start receiving verified threat intelligence immediately."
    },
    {
      id: "faq-6",
      question: "Can I share this intelligence with my organization?",
      answer: "Absolutely. We encourage sharing of SIGINT ✓ intelligence within your organization and security networks. Help strengthen collective cybersecurity posture across your enterprise."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header/Navigation */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">SIGINT ✓</h1>
              <p className="text-xs text-slate-400">Security Intelligence</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+18252023756" className="text-slate-400 hover:text-cyan-400 transition flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 (825) 202-3756</span>
            </a>
            <a
              href="https://whatsapp.com/channel/0029VbCmZq4LNSaDBuWKZ93x"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold"
              >
                Subscribe Now
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-800 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-slate-800 rounded-full text-cyan-400 text-sm font-semibold border border-slate-700">
            Modern Security Intelligence
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Threat Intelligence,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">
              Zero Noise
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            SIGINT ✓ delivers curated, verified security intelligence for modern enterprises. Real-time CVE alerts, threat monitoring, and actionable intelligence.
          </p>

          <p className="text-sm text-slate-400 mb-12 max-w-2xl mx-auto font-semibold">
            Trusted by security professionals worldwide
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://whatsapp.com/channel/0029VbCmZq4LNSaDBuWKZ93x"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 px-8 font-bold"
              >
                Start Receiving Intelligence
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-700 text-white hover:bg-slate-900"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Platform Capabilities
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Enterprise-grade security intelligence for modern threats
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500 transition-all duration-300 group"
                >
                  <Icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors" />
                  <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                  <p className="text-slate-400">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="py-20 px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Intelligence at Scale
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4">
                {subscribers}+
              </div>
              <p className="text-white text-lg font-semibold">Active Subscribers</p>
              <p className="text-slate-400 text-sm mt-2">Security professionals worldwide</p>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4">
                {cves}+
              </div>
              <p className="text-white text-lg font-semibold">CVEs Monitored</p>
              <p className="text-slate-400 text-sm mt-2">Critical vulnerabilities tracked</p>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4">
                {updates}+
              </div>
              <p className="text-white text-lg font-semibold">Daily Intelligence Updates</p>
              <p className="text-slate-400 text-sm mt-2">Verified threat intelligence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Threats Section */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Recent Threat Intelligence
          </h2>
          <p className="text-center text-slate-400 mb-16">
            Latest verified security alerts and CVE updates
          </p>

          <div className="space-y-4">
            {recentUpdates.map((update) => (
              <div
                key={update.id}
                className="p-6 border-l-4 border-cyan-500 bg-slate-800/50 rounded hover:bg-slate-800 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`inline-block px-3 py-1 text-xs font-bold rounded ${
                        update.severity === 'CRITICAL' ? 'bg-red-900 text-red-200' :
                        update.severity === 'HIGH' ? 'bg-orange-900 text-orange-200' :
                        'bg-yellow-900 text-yellow-200'
                      }`}>
                        {update.severity}
                      </span>
                      <span className="text-sm text-slate-400">{update.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{update.title}</h3>
                  </div>
                </div>
                <p className="text-slate-400">{update.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://whatsapp.com/channel/0029VbCmZq4LNSaDBuWKZ93x"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold"
              >
                View All Alerts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Referral Program */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Strengthen Your Security Network
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Share verified threat intelligence with your organization and security community
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {referralBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500 transition-all text-center group"
                >
                  <Icon className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:text-cyan-300 transition-colors" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-400">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <a
              href="https://whatsapp.com/channel/0029VbCmZq4LNSaDBuWKZ93x"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold"
              >
                Share with Your Organization
                <Share2 className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible value={openFaq} onValueChange={setOpenFaq}>
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b border-slate-700 mb-2 last:border-b-0"
              >
                <AccordionTrigger
                  className="py-4 px-6 rounded-lg hover:bg-slate-800/50 transition-colors group"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-lg font-semibold text-left text-white">{faq.question}</span>
                    <ChevronDown className="h-5 w-5 text-cyan-400 group-data-[state=open]:rotate-180 transition-transform" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-slate-400 text-lg leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Get in Touch
          </h2>
          <p className="text-center text-slate-400 mb-12">
            Have questions? Contact us directly or reach out through WhatsApp
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500 transition-all">
              <Phone className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <a href="tel:+18252023756" className="text-slate-400 hover:text-cyan-400 transition text-lg font-semibold">
                +1 (825) 202-3756
              </a>
              <p className="text-slate-500 text-sm mt-2">Call us for immediate assistance</p>
            </div>

            <div className="p-8 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500 transition-all">
              <Shield className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp Channel</h3>
              <a href="https://whatsapp.com/channel/0029VbCmZq4LNSaDBuWKZ93x" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition text-lg font-semibold">
                Join Channel
              </a>
              <p className="text-slate-500 text-sm mt-2">Real-time threat intelligence updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-cyan-600 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-6">
            Ready to Receive Verified Threat Intelligence?
          </h2>
          <p className="text-xl text-slate-900 mb-12 max-w-2xl mx-auto">
            Join hundreds of security professionals receiving curated, verified security intelligence daily.
          </p>

          <a
            href="https://whatsapp.com/channel/0029VbCmZq4LNSaDBuWKZ93x"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-slate-950 text-cyan-400 hover:bg-slate-900 px-10 py-7 text-lg font-bold border border-slate-800"
            >
              Subscribe Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-white font-bold mb-4">SIGINT ✓</h3>
              <p className="text-sm">
                Modern security intelligence platform for enterprises and security professionals.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-800">
                <p className="text-xs text-slate-500 mb-2">Contact:</p>
                <a href="tel:+18252023756" className="text-cyan-400 hover:text-cyan-300 transition font-semibold text-sm">
                  +1 (825) 202-3756
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
                <li><a href="#" className="hover:text-white transition">Compliance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://whatsapp.com/channel/0029VbCmZq4LNSaDBuWKZ93x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    WhatsApp Channel
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+18252023756"
                    className="hover:text-cyan-400 transition"
                  >
                    Phone Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>© 2026 SIGINT ✓. All rights reserved. Modern Security Intelligence Platform.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
