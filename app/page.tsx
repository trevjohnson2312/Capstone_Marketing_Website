import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { TripleThreat } from "@/components/sections/triple-threat"
import { Results } from "@/components/sections/results"
import { Demo } from "@/components/sections/demo"
import { TechStack } from "@/components/sections/tech-stack"
import { Team } from "@/components/sections/team"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <section id="problem">
        <Problem />
      </section>
      <section id="solution">
        <TripleThreat />
      </section>
      <section id="results">
        <Results />
      </section>
      <section id="demo">
        <Demo />
      </section>
      <TechStack />
      <section id="team">
        <Team />
      </section>
      <Footer />
    </main>
  )
}
