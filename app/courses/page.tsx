import type { Metadata } from "next"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Courses — StudyMento",
  description: "Browse StudyMento digital courses with details on pricing, features, duration, and delivery format.",
}

const courses = [
  {
    title: "Full-Stack Web Dev Starter",
    price: "₹4,999",
    duration: "8 weeks",
    format: "Video + PDF + Live Q&A",
    features: ["HTML/CSS/JS", "React basics", "Project-based"],
  },
  {
    title: "Data Analysis with Python",
    price: "₹5,999",
    duration: "10 weeks",
    format: "Video + PDF + Live Q&A",
    features: ["Python + Pandas", "SQL essentials", "Capstone project"],
  },
  {
    title: "Career Accelerator",
    price: "₹2,999",
    duration: "4 weeks",
    format: "Video + Templates + Live workshop",
    features: ["Resume & LinkedIn", "Interview prep", "Communication skills"],
  },
]

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <h1 className="text-2xl font-semibold md:text-3xl">Our Courses</h1>
      <p className="mt-2 text-muted-foreground">
        Each course includes structured lessons, resources, and mentor support. Digital access is delivered within 24
        hours of purchase.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {courses.map((c) => (
          <Card key={c.title}>
            <CardHeader>
              <CardTitle>{c.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="font-medium">Price: {c.price}</p>
              <p className="mt-1 text-muted-foreground">Duration: {c.duration}</p>
              <p className="text-muted-foreground">Delivery: {c.format}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-muted-foreground">
                {c.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="mt-4 flex gap-2">
                <Button asChild>
                  <Link href="/contact">Enroll Now</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/faq">Learn More</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 rounded-lg border p-5">
        <h2 className="text-lg font-medium">Note on Payments</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Payments are securely processed via recognized payment gateways. Please review our{" "}
          <Link href="/legal/refund-cancellation" className="underline">
            Refund & Cancellation
          </Link>{" "}
          policy and{" "}
          <Link href="/legal/shipping-delivery" className="underline">
            Shipping/Delivery
          </Link>{" "}
          policy before enrolling.
        </p>
      </div>
    </div>
  )
}
