"use client"

import { motion } from "framer-motion"

const technologies = [
  {
    category: "Backend & API",
    items: [
      { name: "Python 3.10+", description: "Core language for ML" },
      { name: "FastAPI", description: "High-performance API" },
      { name: "Apache Kafka", description: "Message streaming" },
    ],
  },
  {
    category: "Machine Learning",
    items: [
      { name: "XGBoost", description: "Gradient boosting" },
      { name: "TensorFlow/Keras", description: "Deep learning" },
      { name: "Scikit-learn", description: "ML utilities" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", description: "User interface" },
      { name: "Real-time Dashboard", description: "Live monitoring" },
      { name: "Interactive Charts", description: "Data visualization" },
    ],
  },
  {
    category: "Data & Storage",
    items: [
      { name: "PostgreSQL", description: "Relational database" },
      { name: "Feature Store", description: "Real-time metrics" },
      { name: "Docker", description: "Containerization" },
    ],
  },
]

export function TechStack() {
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
            Built With
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Modern Technology Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            RiskNet is built on industry-standard technologies used by 
            leading fintech companies worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {technologies.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <h3 className="text-lg font-semibold text-primary mb-6">{category.category}</h3>
              <ul className="space-y-4">
                {category.items.map((item, iIndex) => (
                  <li key={iIndex}>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-muted-foreground">{item.description}</div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
