import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="border-t bg-background">
            <div className="mx-auto max-w-7xl px-4 py-10">
                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <div className="mb-3 flex items-center gap-2">
                            <Image
                                src={"/LOGO.png"}
                                height={100}
                                width={200}
                                alt="LOGO"
                            />
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Practical, high-quality online education with
                            transparent policies and support.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-3 text-sm font-medium">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="hover:underline">
                                    About
                                </Link>
                            </li>
                            {/* Removed Courses link */}
                            <li>
                                <Link href="/faq" className="hover:underline">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:underline"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-3 text-sm font-medium">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/legal/terms"
                                    className="hover:underline"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/legal/privacy"
                                    className="hover:underline"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/legal/refund-cancellation"
                                    className="hover:underline"
                                >
                                    Refund & Cancellation
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/legal/shipping-delivery"
                                    className="hover:underline"
                                >
                                    Shipping & Delivery
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t pt-6 text-xs text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} StudyMento. All rights
                        reserved.
                    </p>
                    <p className="mt-2">
                        Registered/Correspondence Address: Media FleetBlue 2nd
                        Floor, Sanskrit University Road, Lahurabir Rd, opposite
                        Sagar Food Corner, Jagatganj, Varanasi, Uttar Pradesh
                        221002. Email:{" "}
                        <a
                            href="mailto:studyymento@gmail.com"
                            className="underline"
                        >
                            studyymento@gmail.com
                        </a>{" "}
                        · Phone:{" "}
                        <a href="tel:+919161339892" className="underline">
                            +91 91613 39892
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
