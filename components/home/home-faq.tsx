const FAQS = [
    {
        q: "Is StudyMento a course platform?",
        a: "We’re a learning and mentoring brand. No course marketplace — just clear guidance and project‑driven learning.",
    },
    {
        q: "Do I need prior experience?",
        a: "No. We tailor your plan to your level and goals, then support you with mentor feedback.",
    },
    {
        q: "How do I get support?",
        a: "Email us at studyymento@gmail.com and we’ll reply promptly. Plans include check‑ins and feedback loops.",
    },
    {
        q: "Do you offer refunds?",
        a: "Please review our Refund & Cancellation policy on the Legal page. Transparency first.",
    },
];

export default function HomeFAQ() {
    return (
        <section id="faq" aria-labelledby="faq-title">
            <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
                <div className="mb-8 text-center">
                    <h2
                        id="faq-title"
                        className="text-3xl font-semibold tracking-tight md:text-4xl"
                    >
                        Frequently asked questions
                    </h2>
                </div>
                <div className="grid gap-4">
                    {FAQS.map((f, i) => (
                        <details
                            key={i}
                            className="rounded-lg border border-border bg-background p-5"
                        >
                            <summary className="cursor-pointer list-none text-base font-medium">
                                {f.q}
                            </summary>
                            <div className="mt-2 text-sm text-muted-foreground">
                                {f.a}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
