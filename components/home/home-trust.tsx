export default function HomeTrust() {
  return (
    <section aria-labelledby="trust" className="bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <h2 id="trust" className="sr-only">
          Trusted signals
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {["Fast support", "Outcome driven", "Mentor-first", "Structured paths", "Clear progress"].map((label) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm text-muted-foreground"
              aria-label={label}
            >
              <img src="/icon-minimal-check.jpg" alt="" className="h-5 w-5" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
