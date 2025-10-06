import { Card, CardContent, CardHeader } from "@/components/ui/card"

const MENTORS = [
  { name: "Aarav", role: "Product Engineer", imageSrc: "/mentor-portrait-studio-light.jpg" },
  { name: "Diya", role: "Data Analyst", imageSrc: "/mentor-portrait-modern-light.jpg" },
  { name: "Kabir", role: "Full‑stack Dev", imageSrc: "/mentor-portrait-tech-background.jpg" },
  { name: "Isha", role: "UX Researcher", imageSrc: "/mentor-portrait-soft-light.jpg" },
]

export default function HomeMentors() {
  return (
    <section id="mentors" aria-labelledby="mentors-title">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mb-10 text-center">
          <h2 id="mentors-title" className="text-3xl font-semibold tracking-tight md:text-4xl">
            Mentors who help you actually grow
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Practitioners, not just instructors. Expect direct feedback and practical guidance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MENTORS.map((m) => (
            <Card key={m.name} className="h-full">
              <CardHeader className="flex items-center">
                <img
                  src={m.imageSrc || "/placeholder.svg"}
                  alt={`${m.name}, ${m.role}`}
                  className="h-40 w-40 rounded-full border border-border object-cover"
                />
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-base font-medium">{m.name}</div>
                <div className="text-sm text-muted-foreground">{m.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
