import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./style/main.css";

const url = process.env.SITE_URL!;
const montserrat = Montserrat({
	variable: "--font-geist-mono",
	subsets: ["latin"],
	display: 'swap',
});

export const metadata: Metadata = {
	metadataBase: new URL(url),
	creator: "Khusni Ridho",
	authors: [{ name: "Khusni Ridho", url }],
	title: "Khusni Ridho — Full Stack Developer & Desain UI/UX",
	description: "Software Developer Full Stack, menciptakan solusi digital yang skalabel dan maintainable. Fokus pada UI/UX Design, Full Stack Web Development, dan Software Testing. Berpengalaman dengan Next.js, React.js, Tailwind CSS, Django, PHP, JavaScript, serta manajemen database MySQL & MongoDB. Tertarik dengan Machine Learning, dan Data Science.",

	openGraph: {
		title: "Khusni Ridho — Full Stack Developer & UI/UX Design",
		description: "Software Developer Full Stack fokus pada UI/UX, Web Development, dan Software Testing. Lihat project, pengalaman, dan skill pada halaman website saya.",
		url,
		siteName: "Khusni Ridho",
		type: "website",
		locale: "id_ID",
		images: [{ url: "/picture/og-image.png", width: 1200, height: 630, alt: "Khusni Ridho — Full Stack Developer & UI/UX Design" }],
	},

	twitter: {
		card: "summary_large_image",
		title: "Khusni Ridho — Full Stack Developer",
		description: "Software Developer Full Stack fokus pada UI/UX, Web Development, dan Software Testing.",
		images: ["/picture/og-image.png"],
	},

	alternates: {
		canonical: url,
	},

	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/logo/icon-180.png",
	},
	other: {
		"Content-Security-Policy": "default-src 'self'; img-src 'self' data: https://*.vercel-storage.com; connect-src 'self' https://api.upstash.io; frame-ancestors 'none'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="id">
			<body className={`${montserrat.variable} antialiased`}>
				{children}
				{process.env.NODE_ENV === 'production' && (<>
					<SpeedInsights />
					<Analytics />
				</>)}
			</body>
		</html>
	);
}
