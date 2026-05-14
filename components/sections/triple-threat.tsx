"use client"

import { motion } from "framer-motion"
import { Gavel, Brain, Scan, ArrowRight, CheckCircle } from "lucide-react"

const layers = [
  {
    icon: Gavel,
    title: "Rule Engine",
    subtitle: "Instant Logic",
    weight: "20%",
    color: "primary",
    description: "Lightning-fast rules catch obvious fraud patterns — like impossible travel speeds or blacklisted locations.",
    features: [
      "Geographic impossibility detection",
      "Velocity checks (spending too fast)",
      "Micro-transaction probing detection",
      "Blacklist matching",
    ],
    example: "If someone tries to buy something in London 10 minutes after a purchase in New York, that&apos;s physically impossible — blocked instantly.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    subtitle: "Pattern Recognition",
    weight: "50%",
    color: "accent",
    description: "Advanced AI models trained on millions of transactions learn the subtle patterns that separate fraud from normal purchases.",
    features: [
      "XGBoost gradient boosting",
      "Random Forest ensemble",
      "84% fraud detection rate",
      "Feature importance analysis",
    ],
    example: "Our AI noticed that fraud often happens with certain combinations of transaction amounts and time patterns that humans would never spot.",
  },
  {
    icon: Scan,
    title: "Anomaly Detection",
    subtitle: "Behavioral Analysis",
    weight: "30%",
    color: "chart-3",
    description: "A neural network learns what &quot;normal&quot; looks like for each transaction. Anything that doesn&apos;t fit the pattern raises an alert.",
    features: [
      "Deep autoencoder architecture",
      "Behavioral reconstruction",
      "Zero-day fraud detection",
      "Catches novel attack patterns",
    ],
    example: "Even if a fraudster uses a completely new technique we&apos;ve never seen, if the behavior is &quot;weird&quot; compared to normal transactions, we catch it.",
  },
]

export function TripleThreat() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            The Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Triple Threat Architecture
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three independent security layers work together. Each one covers the 
            weaknesses of the others, creating a defense system with no single 
            point of failure.
          </p>
        </motion.div>

        {/* Flow visualization */}
        <div className="hidden lg:flex items-center justify-center gap-4 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-6 py-3 rounded-full bg-secondary border border-border"
          >
            Transaction Received
          </motion.div>
          <ArrowRight className="w-6 h-6 text-muted-foreground" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="px-6 py-3 rounded-full bg-primary/20 border border-primary text-primary"
          >
            Rule Engine (20%)
          </motion.div>
          <ArrowRight className="w-6 h-6 text-muted-foreground" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="px-6 py-3 rounded-full bg-accent/20 border border-accent text-accent"
          >
            ML Models (50%)
          </motion.div>
          <ArrowRight className="w-6 h-6 text-muted-foreground" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="px-6 py-3 rounded-full bg-chart-3/20 border border-chart-3 text-chart-3"
          >
            Anomaly (30%)
          </motion.div>
          <ArrowRight className="w-6 h-6 text-muted-foreground" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="px-6 py-3 rounded-full bg-secondary border border-border"
          >
            Final Decision
          </motion.div>
        </div>

        {/* Layer cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {layers.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-${layer.color}/5 rounded-3xl blur-xl group-hover:bg-${layer.color}/10 transition-colors`} />
              
              <div className={`relative h-full p-8 rounded-2xl bg-card border border-border hover:border-${layer.color}/50 transition-all duration-300`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-${layer.color}/10`}>
                    <layer.icon className={`w-7 h-7 text-${layer.color}`} />
                  </div>
                  <div className={`px-3 py-1 rounded-full bg-${layer.color}/10 text-${layer.color} text-sm font-semibold`}>
                    {layer.weight} weight
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-sm text-muted-foreground">{layer.subtitle}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{layer.title}</h3>
                <p className="text-muted-foreground mb-6">{layer.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {layer.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm">
                      <CheckCircle className={`w-4 h-4 text-${layer.color} flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Example */}
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Real Example</span>
                  <p className="text-sm mt-2">{layer.example}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scoring explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-2xl bg-card border border-border max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-bold mb-4 text-center">How The Final Score Works</h3>
          <p className="text-muted-foreground text-center mb-8">
            Each layer gives a risk score from 0-100. We combine them with weighted importance 
            to get a final verdict:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/30">
              <div className="text-2xl font-bold text-primary mb-2">0 - 49</div>
              <div className="font-semibold text-primary mb-1">LOW RISK</div>
              <div className="text-sm text-muted-foreground">Auto-Approve</div>
            </div>
            <div className="p-4 rounded-xl bg-chart-4/10 border border-chart-4/30">
              <div className="text-2xl font-bold text-chart-4 mb-2">50 - 79</div>
              <div className="font-semibold text-chart-4 mb-1">MEDIUM RISK</div>
              <div className="text-sm text-muted-foreground">Manual Review</div>
            </div>
            <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30">
              <div className="text-2xl font-bold text-destructive mb-2">80 - 100</div>
              <div className="font-semibold text-destructive mb-1">HIGH RISK</div>
              <div className="text-sm text-muted-foreground">Hard Block</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
