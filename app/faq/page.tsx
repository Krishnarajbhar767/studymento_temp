import type { Metadata } from "next";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: "FAQ — StudyMento",
    description:
        "Common questions about StudyMento courses, refunds, and delivery.",
};

export default function FaqPage() {
    return (
        <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
            <h1 className="text-2xl font-semibold md:text-3xl">
                Frequently Asked Questions
            </h1>

            <div className="mt-6">
                <Accordion type="single" collapsible>
                    <AccordionItem value="q1">
                        <AccordionTrigger>
                            How do I access my course?
                        </AccordionTrigger>
                        <AccordionContent>
                            You will receive access instructions via email
                            and/or portal login, typically instantly or within
                            24 hours.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2">
                        <AccordionTrigger>
                            Do you offer refunds?
                        </AccordionTrigger>
                        <AccordionContent>
                            Please review our Refund & Cancellation policy.
                            Eligibility generally depends on usage and download
                            status.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q3">
                        <AccordionTrigger>
                            Are live sessions recorded?
                        </AccordionTrigger>
                        <AccordionContent>
                            When possible, we provide recordings or alternate
                            time slots. Details vary by course.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q4">
                        <AccordionTrigger>
                            How can I contact support?
                        </AccordionTrigger>
                        <AccordionContent>
                            Email{" "}
                            <a
                                href="mailto:studyymento@gmail.com"
                                className="underline"
                            >
                                studyymento@gmail.com
                            </a>{" "}
                            or call +91 91613 39892 (Mon–Sat, 10am–6pm IST).
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
