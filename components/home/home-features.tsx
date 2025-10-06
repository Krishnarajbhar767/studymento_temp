import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FiTarget, FiUsers, FiClock, FiCompass, FiTrendingUp, FiMessageCircle } from "react-icons/fi"

const FEATURES = [
  { title: "Clarity over noise", desc: "Straightforward plans so you always know the next best step.", icon: FiTarget },
  { title: "Human support", desc: "Friendly, responsive guidance when you need it most.", icon: FiUsers },
  { title: "Built for real life", desc: "Flexible pacing that sticks — sustainable and humane.", icon: FiClock },
  { title: "Do > Watch", desc: "Project-first approach to lock in skills by doing.", icon: FiCompass },
  {
    title: "Momentum by design",
    desc: "Lightweight check‑ins and milestones you can actually hit.",
    icon: FiTrendingUp,
  },
  { title: "Clear communication", desc: "No jargon. We explain the why, not just the what.", icon: FiMessageCircle },
]

export default function HomeFeatures() {
  return (
    <section id="features" aria-labelledby="features-title">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mb-10 flex flex-col gap-3 text-center">
          <h2 id="features-title" className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            Designed for modern learners
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            StudyMento blends structure with encouragement — so you keep going and finish well.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <Card key={f.title} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <f.icon className="h-6 w-6 text-primary" aria-hidden />
                  <CardTitle className="text-base">{f.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{f.desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
