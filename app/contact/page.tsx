import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact — StudyMento",
    description:
        "Contact StudyMento via email or phone. Find our correspondence address and support hours.",
};

export default function ContactPage() {
    return (
        <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
            <h1 className="text-2xl font-semibold md:text-3xl">Contact Us</h1>
            <div className="mt-6 space-y-2 text-sm">
                <p>
                    <strong>Address:</strong> Media FleetBlue 2nd Floor,
                    Sanskrit University Road, Lahurabir Rd, opposite Sagar Food
                    Corner, Jagatganj, Varanasi, Uttar Pradesh 221002
                </p>
                <p>
                    <strong>Email:</strong>{" "}
                    <a
                        className="underline"
                        href="mailto:studyymento@gmail.com"
                    >
                        studyymento@gmail.com
                    </a>
                </p>
                <p>
                    <strong>Phone:</strong>{" "}
                    <a className="underline" href="tel:+919161339892">
                        +91 9161339892
                    </a>{" "}
                    (Mon–Sat, 10am–6pm IST)
                </p>
            </div>

            <form
                className="mt-8 grid gap-4 rounded-lg border p-5"
                method="post"
                action="mailto:studyymento@gmail.com"
            >
                <div>
                    <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        required
                        className="mt-1 w-full rounded-md border bg-background px-3 py-2"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm font-medium">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1 w-full rounded-md border bg-background px-3 py-2"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm font-medium">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="mt-1 w-full rounded-md border bg-background px-3 py-2"
                    />
                </div>
                <button
                    type="submit"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
                >
                    Send Message
                </button>
                <p className="text-xs text-muted-foreground">
                    This form uses mailto: for demo purposes. We do not store
                    submissions on this website.
                </p>
            </form>
        </div>
    );
}
