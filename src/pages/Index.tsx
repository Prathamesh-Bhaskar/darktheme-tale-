
import { ArrowRight, Clock, Building2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-semibold">
            Elevate AI
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-sm hover:text-accent transition-colors">
              Home
            </a>
            <a href="#" className="text-sm hover:text-accent transition-colors">
              Services
            </a>
            <a href="#" className="text-sm hover:text-accent transition-colors">
              Contact
            </a>
          </div>
          <Button className="bg-accent hover:bg-accent-hover text-black font-medium">
            Contact Us
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 container mx-auto px-4">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-white/60"
          >
            AI Business Plan Generator
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Get your Free professional{" "}
            <span className="text-accent">Business Plan</span> ready in Minutes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Your business plan is just a click away. Answer a few questions, and our free business plan generator
            will craft a detailed business plan tailored just for you in minutes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              className="bg-accent hover:bg-accent-hover text-black font-medium px-8 py-6 button-glow"
              size="lg"
            >
              Generate your Plan
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl font-medium">Join over 1000+ Entrepreneurs & business owners</h2>
        </div>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {["Slack", "Prudential", "Microsoft", "Zoover"].map((brand) => (
            <div
              key={brand}
              className="w-32 h-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
            >
              <span className="text-lg font-semibold">{brand}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">
            Why <span className="text-accent">Elevate AI</span> is the Best AI Business Plan Generator?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Clock,
              title: "AI Assistance - A way to save time",
              description:
                "Save considerable business time. Over comprehensive business plan guides mean that you won't spend as much time thinking about what sections to add as you will filling them with your unique business information and ideas.",
            },
            {
              icon: Building2,
              title: "It works for any Industry",
              description:
                "Whether you are looking to open a new restaurant, launch an online business, or become a successful freelancer, our business plan generator is perfect for your plans.",
            },
            {
              icon: Sparkles,
              title: "It's Free - Get 3 Trials Free",
              description:
                "Access expert-level parts of the full business plan generator with our free trial, perfect for entrepreneurs and small business owners testing ideas and exploring new commitments.",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              <feature.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/60 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="glass-card rounded-2xl p-8 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Get an Investor-ready business plan for free</h2>
          <Button className="bg-accent hover:bg-accent-hover text-black font-medium px-8 py-6">
            Generate your Plan
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-xl font-semibold">Elevate AI</span>
            <span className="text-sm text-white/60">© {new Date().getFullYear()} All rights reserved</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
