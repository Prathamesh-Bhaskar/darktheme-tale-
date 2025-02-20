
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const BusinessCanvas = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-semibold">
            Elevate AI
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-sm bg-accent/20 px-4 py-1 rounded-full">
              Home
            </a>
            <a href="#" className="text-sm hover:text-accent transition-colors">
              Services
            </a>
            <a href="#" className="text-sm hover:text-accent transition-colors">
              Contact
            </a>
            <a href="#" className="text-sm hover:text-accent transition-colors">
              Choose Plan
            </a>
          </div>
          <Button className="bg-accent hover:bg-accent-hover text-black font-medium">
            Contact Us
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Generated with AI</h1>
          <p className="text-white/60 text-sm">⚡ Click on any cell to edit</p>
        </div>

        {/* Business Canvas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h2 className="text-xl font-semibold mb-4">Problem</h2>
            <ul className="space-y-3 text-sm text-white/80">
              <li>1. Limited access to exclusive golf courses for affluent individuals</li>
              <li>2. Lack of personalized and premium golf services tailored to the needs of wealthy clientele</li>
              <li>3. Difficulty in finding high-end golf equipment and accessories in one convenient location</li>
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h2 className="text-xl font-semibold mb-4">Solution</h2>
            <ul className="space-y-3 text-sm text-white/80">
              <li>1. Offering personalized golf lessons from professional instructors</li>
              <li>2. Providing custom club fittings for clients</li>
              <li>3. Organizing upscale golf tournaments and vacations</li>
            </ul>
          </motion.div>

          {/* Unique Value Propositions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h2 className="text-xl font-semibold mb-4">Unique Value Propositions</h2>
            <ul className="space-y-3 text-sm text-white/80">
              <li>1. Exclusive access to golf courses and memberships</li>
              <li>2. Personalized golf experiences tailored to the needs and preferences of affluent clientele</li>
              <li>3. Premium services such as custom club fittings and high-end golf equipment sales</li>
            </ul>
          </motion.div>

          {/* Unfair Advantage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h2 className="text-xl font-semibold mb-4">Unfair Advantage</h2>
            <ul className="space-y-3 text-sm text-white/80">
              <li>1. Exclusive access to high-end golf equipment suppliers and manufacturers</li>
              <li>2. Strong relationships with luxury golf course owners for premium membership offerings</li>
              <li>3. Personalized service and tailored experiences for affluent clientele</li>
            </ul>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
            <Button className="w-full bg-accent hover:bg-accent-hover text-black">
              Subscribe to view
            </Button>
          </motion.div>

          {/* Revenue Streams */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h2 className="text-xl font-semibold mb-4">Revenue Streams</h2>
            <Button className="w-full bg-accent hover:bg-accent-hover text-black">
              Subscribe to view
            </Button>
          </motion.div>
        </div>

        {/* Name Suggestion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-6 rounded-2xl mb-8 max-w-md mx-auto"
        >
          <h2 className="text-xl font-semibold mb-4">Name Suggestion</h2>
          <ul className="space-y-2 text-sm text-white/80">
            <li>1. EDGE</li>
            <li>2. TopGolf</li>
            <li>3. Golf Pro</li>
            <li>4. Grant Golf Club</li>
            <li>5. Golf+ Studio</li>
          </ul>
        </motion.div>

        {/* Download Button */}
        <div className="text-center">
          <Button className="bg-accent hover:bg-accent-hover text-black font-medium px-8 py-6">
            Download as PDF
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border mt-auto">
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

export default BusinessCanvas;
