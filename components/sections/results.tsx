"use client"

import { motion } from "framer-motion"
import { TrendingUp, Target, Gauge, Clock } from "lucide-react"

const metrics = [
  {
    icon: TrendingUp,
    label: "Recall (Fraud Caught)",
    xgboost: "79%",
    randomForest: "71%",
    anomaly: "74%",
    description: "How much actual fraud we catch",
  },
  {
    icon: Target,
    label: "Precision (Accuracy)",
    xgboost: "84%",
    randomForest: "92%",
    anomaly: "72%",
    description: "How often our alerts are correct",
  },
  {
    icon: Gauge,
    label: "F1-Score (Balance)",
    xgboost: "0.84",
    randomForest: "0.80",
    anomaly: "0.73",
    description: "Overall effectiveness score",
  },
  {
    icon: Clock,
    label: "Processing Time",
    xgboost: "<50ms",
    randomForest: "<50ms",
    anomaly: "<100ms",
    description: "Speed of each component",
  },
]

const evolutionSteps = [
  {
    phase: "Phase 1",
    title: "Isolation Forest",
    score: "0.24 F1",
    status: "failed",
    description: "Too much noise, couldn&apos;t distinguish fraud",
  },
  {
    phase: "Phase 2",
    title: "MAE Autoencoder",
    score: "0.57 F1",
    status: "progress",
    description: "Better, but still too many false alarms",
  },
  {
    phase: "Phase 3",
    title: "Huber Autoencoder",
    score: "0.73 F1",
    status: "success",
    description: "Final model with iterative data cleaning",
  },
]

export function Results() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Performance
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Results, Tested Data
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trained and tested on the Kaggle Credit Card Fraud dataset with 
            over 284,000 real transactions.
          </p>
        </motion.div>

        {/* Model comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 overflow-x-auto"
        >
          <div className="min-w-[600px]">
            <div className="grid grid-cols-5 gap-4 p-4 rounded-t-2xl bg-secondary border border-border border-b-0">
              <div className="text-sm font-semibold text-muted-foreground">Metric</div>
              <div className="text-sm font-semibold text-accent text-center">XGBoost</div>
              <div className="text-sm font-semibold text-primary text-center">Random Forest</div>
              <div className="text-sm font-semibold text-chart-3 text-center">Anomaly</div>
              <div className="text-sm font-semibold text-muted-foreground">What it means</div>
            </div>
            
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={`grid grid-cols-5 gap-4 p-4 border-x border-border ${
                  index === metrics.length - 1 ? "rounded-b-2xl border-b" : "border-b"
                } ${index % 2 === 0 ? "bg-card" : "bg-card/50"}`}
              >
                <div className="flex items-center gap-3">
                  <metric.icon className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium">{metric.label}</span>
                </div>
                <div className="text-center font-bold text-accent">{metric.xgboost}</div>
                <div className="text-center font-bold text-primary">{metric.randomForest}</div>
                <div className="text-center font-bold text-chart-3">{metric.anomaly}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Evolution story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            The Anomaly Detection Journey
          </h3>
          <p className="text-muted-foreground text-center mb-12">
            We didn&apos;t get it right the first time. Here&apos;s how we iterated to find the 
            best solution:
          </p>
          
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border hidden md:block" />
            
            <div className="grid md:grid-cols-3 gap-8">
              {evolutionSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className={`p-6 rounded-2xl border ${
                    step.status === "success" 
                      ? "bg-primary/10 border-primary" 
                      : step.status === "progress"
                      ? "bg-chart-4/10 border-chart-4"
                      : "bg-destructive/10 border-destructive"
                  }`}>
                    <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                      step.status === "success" 
                        ? "text-primary" 
                        : step.status === "progress"
                        ? "text-chart-4"
                        : "text-destructive"
                    }`}>
                      {step.phase}
                    </div>
                    <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                    <div className={`text-2xl font-bold mb-3 ${
                      step.status === "success" 
                        ? "text-primary" 
                        : step.status === "progress"
                        ? "text-chart-4"
                        : "text-destructive"
                    }`}>
                      {step.score}
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
