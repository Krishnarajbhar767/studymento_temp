import { FiEdit3, FiMap, FiSend } from "react-icons/fi"

const STEPS = [
  { step: "01", title: "Share your goal", desc: "Tell us where you are and where you want to go.", icon: FiEdit3 },
  { step: "02", title: "Get your plan", desc: "A believable path with simple milestones.", icon: FiMap },
  { step: "03", title: "Build and ship", desc: "Do projects, get feedback, see real progress.", icon: FiSend },
]

export default function HomeHowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mb-10 text-center">
          <h2 id="how-title" className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Less confusion, more momentum — learn with structure and support.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.step} className="rounded-lg border border-border bg-background p-6">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{s.step}</span>
                <s.icon className="h-5 w-5 text-primary" aria-hidden />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
