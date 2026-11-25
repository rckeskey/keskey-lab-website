import Link from 'next/link'

const links = [
  ['Research', '/#research'],
  ['Approach', '/#approach'],
  ['People', '/team'],
  ['Contact', '/#contact'],
]

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="page-shell nav-inner">
        <Link href="/" className="brand" aria-label="Keskey Lab home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 42 28">
              <path d="M2 20c7 0 8-15 18-15s11 15 20 15" />
              <path d="M2 20c7 0 8-9 18-9s11 9 20 9" />
              <path d="M2 20c7 0 8-4 18-4s11 4 20 4" />
            </svg>
          </span>
          <span className="brand-copy">
            <strong>Keskey Lab</strong><i>/</i>
            <small>Surgical Microbiome Lab</small>
          </span>
        </Link>

        <nav aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={label} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <Link className="nav-cta" href="/#contact">
          Contact <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="header-rule" />
    </header>
  )
}
