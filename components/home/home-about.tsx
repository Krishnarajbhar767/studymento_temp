"use client"
import Image from "next/image"

export default function HomeAbout() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted">
          <Image
            src="/minimal-learning-workspace-with-tablet-and-notes.jpg"
            alt="Minimal learning workspace with tablet and notes"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight">About StudyMento</h2>
          <p className="mt-4 text-muted-foreground">
            StudyMento is an information‑first digital learning brand. We focus on clarity, practical work, and support
            that helps you finish.
          </p>
          <p className="mt-3 text-muted-foreground">
            No noise, no gimmicks — just believable plans and steady progress.
          </p>
        </div>
      </div>
    </section>
  )
}
