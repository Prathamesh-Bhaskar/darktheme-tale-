
import { useState } from "react";
import { Send, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BarChart } from "recharts";

const Chatbox = () => {
  const [messages, setMessages] = useState<string[]>([
    "1. Market Share Distribution",
    "A bar chart effectively visualizes the market share distribution across three key segments: Enterprise, SMBs (Small and Medium Businesses), and Startups. The distribution is presented with clear percentage indicators and color-coded bars for easy differentiation.",
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-semibold">
            Elevate AI
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-sm hover:text-accent transition-colors">
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
      <div className="pt-24 pb-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Chat Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <div className="p-4 border-b border-white/10">
              <h2 className="text-lg font-semibold">1. Market Share Distribution</h2>
            </div>
            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className="text-sm text-white/80"
                >
                  {message}
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <Input
                  placeholder="Type here..."
                  className="bg-white/5 border-white/10"
                />
                <Button size="icon" className="bg-accent hover:bg-accent-hover text-black">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-white/40 mt-2">
                Elevate AI can make mistakes.
              </p>
            </div>
          </motion.div>

          {/* Graph Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <div className="p-4 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Business Graph Analysis</h2>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="text-xs">
                  Business Growth
                </Button>
                <Button size="sm" variant="outline" className="text-xs">
                  Export
                </Button>
                <Button size="icon" variant="ghost">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="p-4">
              <div className="h-[400px] w-full bg-white/5 rounded-lg flex items-center justify-center">
                <span className="text-white/40">Graph Visualization</span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Competitive Analysis</h3>
                <div className="space-y-4">
                  {[95, 85, 75, 65].map((value, index) => (
                    <div key={index} className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block text-white/60">
                            Metric {index + 1}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-white/60">
                            {value}%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white/10">
                        <div
                          style={{ width: `${value}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-accent"
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

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

export default Chatbox;
