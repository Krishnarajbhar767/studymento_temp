import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refund & Cancellation — StudyMento",
    description:
        "StudyMento refund rules for digital courses and rescheduling/cancellation information.",
};

export default function RefundCancellationPage() {
    return (
        <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
            <h1 className="text-2xl font-semibold md:text-3xl">
                Refund & Cancellation Policy
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
                Last updated: 06 Oct 2025
            </p>

            <div className="prose mt-6 max-w-none dark:prose-invert">
                <h2>Digital Course Refunds</h2>
                <p>
                    Due to the nature of digital content, refunds may be
                    available within 7 days of purchase only if less than 10% of
                    the course has been consumed and no downloadable materials
                    have been accessed.
                </p>

                <h2>Cancellations / Rescheduling</h2>
                <p>
                    Live sessions may be rescheduled with prior notice. In case
                    we cancel a session, we’ll offer an alternative slot or
                    recorded content.
                </p>

                <h2>How to Request</h2>
                <p>
                    To request a refund or reschedule, email{" "}
                    <a href="mailto:studyymento@gmail.com">
                        studyymento@gmail.com
                    </a>{" "}
                    with your order details.
                </p>
            </div>
        </div>
    );
}
