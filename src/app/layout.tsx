import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ConvexClerkProvider from "@/components/providers/ConvexClerkProvider";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "StatusCode",
    description: "Coding interview platform",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ConvexClerkProvider>
            <html lang="en">
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <div className="min-h-screen">

                            <Navbar />
                            <div className="px-4 sm:px-6 lg:px-8">
                                {children}
                            </div>
                        </div>
                    </ThemeProvider>

                </body>

            </html>
        </ConvexClerkProvider>

    );
}
