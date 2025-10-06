import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shipping & Delivery — StudyMento",
    description:
        "Digital delivery policy for StudyMento courses including access timeline.",
};

export default function ShippingDeliveryPage() {
    return (
        <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
            <h1 className="text-2xl font-semibold md:text-3xl">
                Shipping & Delivery Policy
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
                Last updated: 06 Oct 2025
            </p>

            <div className="prose mt-6 max-w-none dark:prose-invert">
                <h2>Digital Delivery</h2>
                <p>
                    All courses are delivered digitally via email and/or portal
                    login. Access is typically provided instantly or within 24
                    hours after successful payment.
                </p>

                <h2>Non-Physical Goods</h2>
                <p>
                    No physical shipping is involved. Ensure your email address
                    is valid to receive access instructions.
                </p>

                <h2>Support</h2>
                <p>
                    If you do not receive access within 24 hours, contact{" "}
                    <a href="mailto:studyymento@gmail.com">
                        studyymento@gmail.com
                    </a>{" "}
                    or +91 91613 39892.
                </p>
            </div>
        </div>
    );
}
