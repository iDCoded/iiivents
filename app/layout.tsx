import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";

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
	title: "IIIVENTS",
	description: "Event Management",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body
					className={`min-h-screen flex flex-col ${geistSans.className} ${geistMono.className} antialiased`}>
					<ClerkLoading>
						<div className="flex flex-col justify-center items-center min-h-screen">
							<h1>Loading...</h1>
						</div>
					</ClerkLoading>
					<ClerkLoaded>
						<main className="flex-grow">{children}</main>
						<Footer />
					</ClerkLoaded>
				</body>
			</html>
		</ClerkProvider>
	);
}
