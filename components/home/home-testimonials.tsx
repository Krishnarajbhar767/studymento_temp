import { FiStar } from "react-icons/fi"

const TESTIMONIALS = [
  {
    quote: "I stopped second‑guessing and started shipping. The weekly rhythm was exactly what I needed.",
    name: "Raghav",
  },
  { quote: "Simple plans, clear feedback, and no overwhelm. Learning finally felt sustainable.", name: "Sana" },
  { quote: "Real projects with real guidance. I finally understand where my time should go.", name: "Mehul" },
]

export default function HomeTestimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mb-10 text-center">
          <h2 id="testimonials-title" className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            What learners say
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Calm, focused, and effective. That’s the StudyMento way.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="rounded-lg border border-border bg-background p-6">
              <div className="flex items-center gap-1 text-primary" aria-hidden>
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </div>
              <blockquote className="mt-3 text-pretty">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-muted-foreground">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
