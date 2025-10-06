import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About — StudyMento",
  description: "Who we are, what we do, and why we provide practical online courses at StudyMento.",
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
      <h1 className="text-2xl font-semibold md:text-3xl">About StudyMento</h1>
      <p className="mt-4 text-muted-foreground">
        StudyMento is an EdTech platform focused on outcome-driven learning. We build courses with hands-on projects,
        clear structure, and responsive support.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-5">
          <h2 className="text-lg font-medium">Who We Are</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A team of educators and industry professionals committed to practical, accessible education.
          </p>
        </div>
        <div className="rounded-lg border p-5">
          <h2 className="text-lg font-medium">What We Do</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We provide structured digital courses delivered via video, PDFs, and live sessions with mentor feedback.
          </p>
        </div>
        <div className="rounded-lg border p-5">
          <h2 className="text-lg font-medium">Why We Do It</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            To help learners gain real skills they can apply immediately in their studies and careers.
          </p>
        </div>
        <div className="rounded-lg border p-5">
          <h2 className="text-lg font-medium">Commitment to Transparency</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We publish clear Terms, Privacy, Refund & Cancellation, and Shipping/Delivery policies and maintain reliable
            support channels.
          </p>
        </div>
      </div>
    </div>
  )
}
