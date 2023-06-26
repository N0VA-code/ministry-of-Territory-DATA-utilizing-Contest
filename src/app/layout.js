import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="mx-auto h-screen max-w-6xl overflow-scroll">
          {children}
        </main>
      </body>
    </html>
  );
}