"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, CheckCircle, AlertTriangle, XCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const scenarios = [
  {
    id: "normal",
    title: "Normal Purchase",
    description: "Coffee purchase at a local cafe",
    transaction: {
      amount: "$4.50",
      location: "Local Cafe",
      time: "Morning",
      history: "Regular pattern",
    },
    ruleScore: 5,
    mlScore: 12,
    anomalyScore: 8,
    finalScore: 10,
    decision: "APPROVE",
    color: "primary",
  },
  {
    id: "suspicious",
    title: "Suspicious Activity",
    description: "Unusual late-night purchase pattern",
    transaction: {
      amount: "$299.00",
      location: "Electronics Store",
      time: "3:00 AM",
      history: "New merchant",
    },
    ruleScore: 35,
    mlScore: 68,
    anomalyScore: 55,
    finalScore: 58,
    decision: "REVIEW",
    color: "chart-4",
  },
  {
    id: "fraud",
    title: "Fraud Detected",
    description: "Impossible travel speed detected",
    transaction: {
      amount: "$1,500.00",
      location: "New Country",
      time: "10 mins after last TX",
      history: "Never seen before",
    },
    ruleScore: 85,
    mlScore: 92,
    anomalyScore: 88,
    finalScore: 89,
    decision: "BLOCK",
    color: "destructive",
  },
]

export function Demo() {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const runAnalysis = (scenarioId: string) => {
    setSelectedScenario(scenarioId)
    setShowResult(false)
    setAnalyzing(true)
    
    setTimeout(() => {
      setAnalyzing(false)
      setShowResult(true)
    }, 2000)
  }

  const scenario = scenarios.find(s => s.id === selectedScenario)

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Interactive Demo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See RiskNet In Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select a transaction scenario to see how each security layer analyzes 
            and scores it in real-time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Scenario selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Choose a Scenario</h3>
            {scenarios.map((s, index) => (
              <motion.button
                key={s.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => runAnalysis(s.id)}
                className={`w-full p-6 rounded-xl border text-left transition-all duration-300 ${
                  selectedScenario === s.id
                    ? `bg-${s.color}/10 border-${s.color}`
                    : "bg-card border-border hover:border-muted-foreground"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold mb-1">{s.title}</h4>
                    <p className="text-sm text-muted-foreground">{s.description}</p>
                  </div>
                  <Play className={`w-5 h-5 ${
                    selectedScenario === s.id ? `text-${s.color}` : "text-muted-foreground"
                  }`} />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Amount:</span>
                    <span className="ml-2 font-medium">{s.transaction.amount}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Location:</span>
                    <span className="ml-2 font-medium">{s.transaction.location}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Analysis result */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="p-8 rounded-2xl bg-card border border-border min-h-[400px]">
                <AnimatePresence mode="wait">
                  {!selectedScenario && (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex items-center justify-center text-muted-foreground"
                    >
                      Select a scenario to begin analysis
                    </motion.div>
                  )}

                  {analyzing && (
                    <motion.div
                      key="analyzing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex flex-col items-center justify-center"
                    >
                      <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                      <div className="text-lg font-medium">Analyzing Transaction...</div>
                      <div className="text-sm text-muted-foreground mt-2">
                        Running through all 3 security layers
                      </div>
                    </motion.div>
                  )}

                  {showResult && scenario && (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      {/* Decision header */}
                      <div className={`flex items-center gap-4 p-4 rounded-xl bg-${scenario.color}/10 border border-${scenario.color}`}>
                        {scenario.decision === "APPROVE" && <CheckCircle className="w-8 h-8 text-primary" />}
                        {scenario.decision === "REVIEW" && <AlertTriangle className="w-8 h-8 text-chart-4" />}
                        {scenario.decision === "BLOCK" && <XCircle className="w-8 h-8 text-destructive" />}
                        <div>
                          <div className={`text-2xl font-bold text-${scenario.color}`}>{scenario.decision}</div>
                          <div className="text-sm text-muted-foreground">Final Risk Score: {scenario.finalScore}/100</div>
                        </div>
                      </div>

                      {/* Layer breakdown */}
                      <div className="space-y-4">
                        <h4 className="font-semibold">Layer Scores</h4>
                        
                        {/* Rule Engine */}
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Rule Engine (20% weight)</span>
                            <span className="font-medium">{scenario.ruleScore}/100</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${scenario.ruleScore}%` }}
                              transition={{ duration: 0.5 }}
                              className="h-full bg-primary rounded-full"
                            />
                          </div>
                        </div>

                        {/* ML Models */}
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>ML Models (50% weight)</span>
                            <span className="font-medium">{scenario.mlScore}/100</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${scenario.mlScore}%` }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                              className="h-full bg-accent rounded-full"
                            />
                          </div>
                        </div>

                        {/* Anomaly Detection */}
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Anomaly Detection (30% weight)</span>
                            <span className="font-medium">{scenario.anomalyScore}/100</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${scenario.anomalyScore}%` }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="h-full bg-chart-3 rounded-full"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Calculation */}
                      <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                        <div className="text-xs text-muted-foreground mb-2">Weighted Calculation</div>
                        <code className="text-sm">
                          ({scenario.ruleScore} × 0.2) + ({scenario.mlScore} × 0.5) + ({scenario.anomalyScore} × 0.3) = {scenario.finalScore}
                        </code>
                      </div>

                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                          setSelectedScenario(null)
                          setShowResult(false)
                        }}
                      >
                        Try Another Scenario
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
