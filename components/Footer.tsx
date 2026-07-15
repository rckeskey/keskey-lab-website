import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Keskey Lab</h3>
            <p className="text-gray-300">Advancing surgical research through microbiota investigation.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/research" className="text-gray-300 hover:text-white">Research</Link></li>
              <li><Link href="/team" className="text-gray-300 hover:text-white">Team</Link></li>
              <li><Link href="/publications" className="text-gray-300 hover:text-white">Publications</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Methods & Protocols</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Data Repository</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Lab Tools</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">contact@example.com</p>
            <p className="text-gray-300">(555) 000-0000</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Keskey Surgical Research Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
