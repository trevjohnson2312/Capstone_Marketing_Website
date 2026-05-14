"use client"

import { motion } from "framer-motion"
import { GraduationCap, Code, Database, LineChart } from "lucide-react"

const team = [
  {
    name: "Nathan Crossdale",
    role: "ML Development Lead",
    focus: "Machine Learning & Documentation",
    icon: LineChart,
    contributions: [
      "XGBoost & Random Forest implementation",
      "Model training and optimization",
      "Final documentation compilation",
    ],
  },
  {
    name: "Damario Escoffery",
    role: "Rule Engine Architect",
    focus: "Business Logic & QA",
    icon: Code,
    contributions: [
      "Rule Engine design and scripting",
      "Stress testing and bug fixes",
      "Logic validation",
    ],
  },
  {
    name: "Trevaughn Johnson",
    role: "Anomaly Detection Engineer",
    focus: "Deep Learning & Research",
    icon: Database,
    contributions: [
      "Autoencoder architecture design",
      "Isolation Forest baseline",
      "Model tuning and iteration",
    ],
  },
  {
    name: "Danielle Brooks",
    role: "Systems Integration Lead",
    focus: "Backend & Pipeline",
    icon: Database,
    contributions: [
      "FastAPI endpoints",
      "Kafka integration",
      "System architecture",
    ],
  },
]

const supervisors = [
  { name: "Dr. Sean Miller", role: "Supervisor" },
  { name: "Dr. Curtis Busby-Earle", role: "Supervisor" },
]

export function Team() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            The Builders
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Team RiskNet
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A team of computer science students from the Faculty of Science and 
            Technology, Academic Year 2026.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <member.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <div className="text-primary text-sm font-medium mb-1">{member.role}</div>
                <div className="text-xs text-muted-foreground mb-4">{member.focus}</div>
                
                <ul className="space-y-2">
                  {member.contributions.map((contribution, cIndex) => (
                    <li key={cIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {contribution}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supervisors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 text-muted-foreground mb-6">
            <GraduationCap className="w-5 h-5" />
            <span className="text-sm font-medium">Supervised By</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {supervisors.map((supervisor, index) => (
              <div key={index} className="text-center">
                <div className="font-semibold">{supervisor.name}</div>
                <div className="text-sm text-muted-foreground">{supervisor.role}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
