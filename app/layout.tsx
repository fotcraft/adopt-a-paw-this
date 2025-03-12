import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Adopt-a-Paw",
  description: "Providing 3D printed prosthetics for dogs in need",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
              <Link href="/" className="text-2xl font-bold mb-4 md:mb-0">
                Adopt-a-Paw
              </Link>
              <nav>
                <ul className="flex flex-wrap justify-center space-x-4">
                  <li>
                    <Link href="/" className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:underline">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-it-works" className="hover:underline">
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery" className="hover:underline">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="/komis-journey" className="hover:underline">
                      Komis' Journey
                    </Link>
                  </li>
                  <li>
                    <Link href="/benefits" className="hover:underline">
                      Benefits
                    </Link>
                  </li>
                  <li>
                    <Link href="/donate" className="hover:underline">
                      Donate
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:underline">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

          <footer className="bg-blue-600 text-white p-4">
            <div className="container mx-auto text-center">
              <p>&copy; {new Date().getFullYear()} Adopt-a-Paw. All rights reserved.</p>
              <p>Operating from Athens, Greece</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

