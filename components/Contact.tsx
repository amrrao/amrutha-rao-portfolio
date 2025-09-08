"use client";

import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Let&apos;s Work Together
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          I&apos;m always interested in new opportunities and exciting projects. 
          Let&apos;s discuss how we can work together!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="text-lg px-8 py-6" onClick={() => window.open('mailto:arr2249@columbia.edu')}>
            <Mail className="mr-2" size={20} />
            Send Email
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={() => window.open('https://linkedin.com/in/amrutha-rao-ab9360239/', '_blank')}>
            <Linkedin className="mr-2" size={20} />
            Connect on LinkedIn
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <Button variant="ghost" size="lg" onClick={() => window.open('https://linkedin.com/in/amrutha-rao-ab9360239/', '_blank')}>
            <Linkedin size={24} />
          </Button>
          <Button variant="ghost" size="lg" onClick={() => window.open('mailto:arr2249@columbia.edu')}>
            <Mail size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
}
