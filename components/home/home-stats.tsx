const STATS = [
  { value: "92%", label: "Complete core milestones" },
  { value: "3x", label: "Faster project velocity" },
  { value: "80%", label: "Report reduced overwhelm" },
  { value: "1:1", label: "Human guidance included" },
]

export default function HomeStats() {
  return (
    <section aria-labelledby="stats-title">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <h2 id="stats-title" className="sr-only">
          Outcomes and statistics
        </h2>
        <div className="grid gap-6 rounded-lg border border-border bg-background p-6 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-semibold md:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
