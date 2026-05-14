"use client"

import { motion } from "framer-motion"
import { AlertTriangle, TrendingDown, Users, Clock } from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    title: "Billions Lost Annually",
    description: "Financial institutions lose billions every year to digital fraud, from stolen card numbers to sophisticated account takeovers.",
    stat: "$32B+",
    statLabel: "Lost to fraud in 2025",
  },
  {
    icon: TrendingDown,
    title: "Evolving Tactics",
    description: "Fraudsters constantly adapt. Traditional security can&apos;t keep up with new attack patterns like synthetic identity fraud and bot attacks.",
    stat: "300%",
    statLabel: "Increase in fraud attempts",
  },
  {
    icon: Users,
    title: "Customer Frustration",
    description: "Overly aggressive fraud prevention blocks legitimate customers, damaging trust and costing businesses real revenue.",
    stat: "1 in 5",
    statLabel: "Legitimate transactions blocked",
  },
  {
    icon: Clock,
    title: "Speed vs Security",
    description: "Every millisecond matters. Banks need to make fraud decisions instantly while customers wait to complete purchases.",
    stat: "<1s",
    statLabel: "Decision time required",
  },
]

export function Problem() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            The Challenge
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Why Traditional Security Fails
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple &quot;if-then&quot; rules worked in the past. But modern fraud requires 
            something smarter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/5 rounded-full blur-3xl group-hover:bg-destructive/10 transition-colors" />
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-destructive/10 text-destructive mb-6">
                  <problem.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground mb-6">{problem.description}</p>
                
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-destructive">{problem.stat}</span>
                  <span className="text-sm text-muted-foreground pb-1">{problem.statLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
