import Link from 'next/link'
import { Logo } from '@/components/frontend/logo'

export const Header = () => {
  return (
    <header className="flex">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="logo font-extrabold">
          <Logo />
        </Link>
        <nav className="flex gap-4">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-gray-900">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}
