import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import ErrorSuppressor from "./error-suppressor";
import DynamicTitle from "./components/dynamic-title";

const comfortaa = Comfortaa({
    variable: "--font-comfortaa",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Ryoka — Developer & Creator",
    description: "Personal website of Ryoka. Full-stack developer, creator, and tech enthusiast. Check out my projects and connect with me.",
    keywords: ["Ryoka", "developer", "creator", "portfolio", "full-stack", "web development"],
    authors: [{ name: "Ryoka" }],
    creator: "Ryoka",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://ryoka.dev",
        title: "Ryoka — Developer & Creator",
        description: "Personal website of Ryoka. Full-stack developer, creator, and tech enthusiast.",
        siteName: "Ryoka",
        images: [
            {
                url: "https://github.com/just-ryoka.png",
                width: 1200,
                height: 1200,
                alt: "Ryoka Avatar",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ryoka — Developer & Creator",
        description: "Personal website of Ryoka. Full-stack developer, creator, and tech enthusiast.",
        images: ["https://github.com/just-ryoka.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <link rel="preconnect" href="https://github.com" />
            <link rel="dns-prefetch" href="https://github.com" />
            <link rel="preconnect" href="https://ws.audioscrobbler.com" />
            <meta name="theme-color" content="#0a0a0a" />
        </head>
        <body
            className={`${comfortaa.variable} antialiased font-comfortaa`}
            suppressHydrationWarning
        >
        <ErrorSuppressor />
        <DynamicTitle />
        {children}
        </body>
        </html>
    );
}