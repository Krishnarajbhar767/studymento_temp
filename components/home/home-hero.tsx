import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiCheckCircle, FiZap, FiShield } from "react-icons/fi";

export default function HomeHero() {
    return (
        <section id="hero" className="relative">
            <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
                <div className="grid items-center gap-10 md:grid-cols-2">
                    <div className="flex flex-col gap-6">
                        <h1 className="font-heading text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                            StudyMento — Learn with clarity, finish with
                            confidence.
                        </h1>
                        <p className="text-pretty text-muted-foreground md:text-lg">
                            A modern mentoring-first learning brand designed for
                            focus, momentum, and outcomes — not overwhelm.
                        </p>

                        <ul className="grid gap-3 text-sm text-foreground/90">
                            <li className="flex items-center gap-2">
                                <FiCheckCircle
                                    className="text-primary"
                                    aria-hidden
                                />{" "}
                                Clear plans with real accountability
                            </li>
                            <li className="flex items-center gap-2">
                                <FiZap className="text-primary" aria-hidden />{" "}
                                Action-first, project-driven learning
                            </li>
                            <li className="flex items-center gap-2">
                                <FiShield
                                    className="text-primary"
                                    aria-hidden
                                />{" "}
                                Transparent policies and support
                            </li>
                        </ul>

                        <div className="flex flex-wrap items-center gap-3">
                            <Button
                                asChild
                                size="lg"
                                className="bg-primary text-primary-foreground"
                            >
                                <Link href="#cta">Get started</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href="#how-it-works">How it works</Link>
                            </Button>
                        </div>
                        <div className="mt-2 text-sm text-muted-foreground">
                            Questions?{" "}
                            <a
                                href="mailto:studyymento@gmail.com"
                                className="underline underline-offset-4 hover:text-foreground"
                            >
                                studyymento@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Accessible, focused placeholder image per guidelines */}
                        <img
                            src="/focused-digital-learning-workspace.jpg"
                            alt="Focused digital learning workspace"
                            className="h-auto w-full rounded-xl border border-border"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
