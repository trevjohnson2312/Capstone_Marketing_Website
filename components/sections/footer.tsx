"use client"

import { Shield, Github, FileText, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-bold">RiskNet</div>
              <div className="text-sm text-muted-foreground">COMP 3901 Capstone Project</div>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <FileText className="w-4 h-4" />
              Documentation
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            Faculty of Science & Technology — 2026
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Built with dedication by Nathan, Damario, Trevaughn, and Danielle.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            This project is for educational purposes as part of COMP 3901.
          </p>
        </div>
      </div>
    </footer>
  )
}
