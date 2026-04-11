import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@/components/google-analytics";
import { ZohoSalesIQ } from "@/components/zoho-salesiq";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://servafri.com"),

  title:
    "ServAfri — Africa Cloud Infrastructure Platform for Developers, Startups & Businesses",

  description:
    "ServAfri is an Africa-focused cloud infrastructure platform built for developers, startups, and businesses. It provides low-latency compute, virtual machines, private networking, and reliable infrastructure with support for local payments. Designed to solve real challenges across Africa including high latency, foreign billing, and complex cloud setups, ServAfri enables teams to deploy, manage, and scale applications faster and more efficiently.",

  keywords: [
    // CORE
    "ServAfri",
    "Africa cloud infrastructure",
    "cloud Africa",
    "African cloud provider",
    "cloud computing Africa",

    // HIGH INTENT
    "cloud hosting Nigeria",
    "cloud hosting Africa",
    "deploy apps Africa",
    "virtual machines Africa",
    "VM hosting Africa",
    "cloud servers Nigeria",
    "cloud platform Africa",

    // PROBLEM-BASED SEO
    "low latency cloud Africa",
    "cloud with local payments Africa",
    "cloud without dollar billing",
    "cheap cloud Africa",
    "AWS alternative Africa",
    "cloud for startups Africa",

    // TECH SEO
    "cloud infrastructure platform",
    "compute storage networking cloud",
    "DevOps cloud Africa",
    "cloud API platform",
    "scalable cloud systems",

    // GEO TARGETING
    "cloud Nigeria",
    "cloud Ghana",
    "cloud Kenya",
    "cloud South Africa",
    "cloud Lagos",
  ],

  authors: [{ name: "Victor Bodude", url: "https://victorbodude.com" }],
  creator: "Victor Bodude",
  publisher: "ServAfri",

  openGraph: {
    title: "ServAfri — Cloud Infrastructure Built for Africa",
    description:
      "Low-latency cloud infrastructure with local payments. Deploy, manage, and scale applications across Africa with ease.",
    url: "https://servafri.com",
    siteName: "ServAfri",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "ServAfri Cloud Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ServAfri — Africa Cloud Platform",
    description:
      "Deploy apps faster with infrastructure built for Africa. Low latency, local payments, simple setup.",
    images: ["/image.png"],
    creator: "@servafri_",
  },

  alternates: {
    canonical: "https://servafri.com",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerList = await headers();
  const nonce = headerList.get("x-nonce") ?? undefined;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* MAIN STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "ServAfri",
                url: "https://servafri.com",
                logo: "https://servafri.com/favicon.png",
                description:
                  "ServAfri is an Africa-focused cloud infrastructure platform built for developers, startups, and businesses.",
                sameAs: [
                  "https://x.com/servafri_",
                  "https://www.instagram.com/servafri_",
                  "https://www.linkedin.com/company/servafrihq"
                ],
                founder: {
                  "@type": "Person",
                  name: "Victor Bodude",
                  url: "https://victorbodude.com"
                },
                areaServed: "Africa"
              },

              {
                "@context": "https://schema.org",
                "@type": "Product",
                name: "ServAfri Cloud Platform",
                brand: "ServAfri",
                description:
                  "Cloud infrastructure platform providing compute, networking, and scalable systems across Africa.",
                offers: {
                  "@type": "Offer",
                  priceCurrency: "USD",
                  availability: "https://schema.org/PreOrder"
                }
              },

              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is ServAfri?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "ServAfri is an Africa-focused cloud infrastructure platform that allows developers and startups to deploy, manage, and scale applications with low latency and local payment support."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "Why is ServAfri different from AWS or other cloud providers?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "ServAfri is designed specifically for Africa, offering lower latency, simplified deployment, and support for local payments, solving challenges developers face with global cloud platforms."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "Who can use ServAfri?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "ServAfri is built for developers, startups, and businesses looking for reliable and scalable cloud infrastructure in Africa."
                    }
                  }
                ]
              }
            ]),
          }}
        />

        {/* HIDDEN SEO*/}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos" />
        <meta name="geo.position" content="6.5244;3.3792" />
        <meta name="ICBM" content="6.5244, 3.3792" />
      </head>

      <body
        className={`${quicksand.variable} font-sans antialiased dark:bg-background dark:text-foreground overflow-x-hidden`}
        suppressHydrationWarning
      >
        {/* SEO CONTENT  */}
        <div style={{ display: "none" }}>
          ServAfri cloud infrastructure Africa cloud computing platform Nigeria cloud hosting
          African cloud provider deploy applications Africa virtual machines cloud servers
          low latency cloud Africa startup infrastructure Africa DevOps cloud Africa
        </div>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <GoogleAnalytics nonce={nonce} />
        <ZohoSalesIQ />
      </body>
    </html>
  );
}