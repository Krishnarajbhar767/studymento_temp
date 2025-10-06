import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomeCTA() {
    return (
        <section
            id="cta"
            aria-labelledby="cta-title"
            className="bg-primary text-primary-foreground"
        >
            <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
                <div className="grid items-center gap-8 md:grid-cols-2">
                    <div>
                        <h2
                            id="cta-title"
                            className="text-balance text-3xl font-semibold tracking-tight md:text-4xl"
                        >
                            Let’s make learning feel clear — and finishable.
                        </h2>
                        <p className="mt-2 text-pretty opacity-90">
                            Reach out with your goals. We’ll share a simple plan
                            and next steps.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 md:justify-end">
                        <Button asChild size="lg" variant="secondary">
                            <Link href="mailto:studyymento@gmail.com">
                                Contact us
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="bg-transparent"
                        >
                            <Link href="#how-it-works">See the process</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
