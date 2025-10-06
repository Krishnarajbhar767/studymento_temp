import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy — StudyMento",
    description:
        "How StudyMento handles customer data and complies with data protection laws.",
};

export default function PrivacyPage() {
    return (
        <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
            <h1 className="text-2xl font-semibold md:text-3xl">
                Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
                Last updated: 06 Oct 2025
            </p>

            <div className="prose mt-6 max-w-none dark:prose-invert">
                <h2>Data We Collect</h2>
                <p>
                    We may collect name, email, phone number, and
                    payment-related information necessary to process orders.
                </p>

                <h2>How We Use Data</h2>
                <ul>
                    <li>To provide course access and support</li>
                    <li>To improve our services</li>
                    <li>
                        To send transactional emails (e.g., purchase
                        confirmations)
                    </li>
                </ul>

                <h2>Data Sharing</h2>
                <p>
                    We do not sell personal data. We may share data with service
                    providers (e.g., payment gateways) as necessary to fulfill
                    services.
                </p>

                <h2>Security</h2>
                <p>
                    We implement reasonable safeguards to protect data. However,
                    no transmission method is 100% secure.
                </p>

                <h2>Your Rights</h2>
                <p>
                    You may request access, correction, or deletion of your data
                    by contacting{" "}
                    <a href="mailto:studyymento@gmail.com">
                        studyymento@gmail.com
                    </a>
                    .
                </p>

                <h2>Contact</h2>
                <p>
                    For questions about this policy, email{" "}
                    <a href="mailto:studyymento@gmail.com">
                        studyymento@gmail.com
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}
