import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions — StudyMento",
    description:
        "General usage terms and rules for accessing StudyMento courses.",
};

export default function TermsPage() {
    return (
        <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
            <h1 className="text-2xl font-semibold md:text-3xl">
                Terms & Conditions
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
                Last updated: 06 Oct 2025
            </p>

            <div className="prose mt-6 max-w-none dark:prose-invert">
                <h2>1. Acceptance of Terms</h2>
                <p>
                    By accessing or using StudyMento (“we”, “us”, “our”), you
                    agree to these Terms. If you do not agree, please do not use
                    our services.
                </p>

                <h2>2. Services</h2>
                <p>
                    We provide digital educational content delivered via video,
                    documents, and live sessions. Offer details, duration, and
                    pricing are clearly communicated at the time of purchase or
                    enrollment.
                </p>

                <h2>3. Account and Access</h2>
                <p>
                    You are responsible for maintaining the confidentiality of
                    your account and for all activities under your account.
                    Course access is intended for individual use and may not be
                    shared or resold.
                </p>

                <h2>4. Intellectual Property</h2>
                <p>
                    All course content is owned by StudyMento and its licensors.
                    You receive a limited, non-transferable license for personal
                    learning.
                </p>

                <h2>5. Liability Disclaimer</h2>
                <p>
                    Our courses are provided “as is” without warranties of any
                    kind. We are not liable for any indirect or consequential
                    damages arising from use of our services.
                </p>

                <h2>6. Policy References</h2>
                <p>
                    Please review our{" "}
                    <a href="/legal/privacy">Privacy Policy</a>,{" "}
                    <a href="/legal/refund-cancellation">
                        Refund & Cancellation Policy
                    </a>
                    , and{" "}
                    <a href="/legal/shipping-delivery">
                        Shipping/Delivery Policy
                    </a>
                    .
                </p>

                <h2>7. Contact</h2>
                <p>
                    For any questions, contact us at{" "}
                    <a href="mailto:studyymento@gmail.com">
                        studyymento@gmail.com
                    </a>{" "}
                    or +91 91613 39892.
                </p>
            </div>
        </div>
    );
}
