import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="contact">
      <div className="page-shell footer-top">
        <div>
          <p className="footer-label">Correspondence / collaboration</p>
          <h2>Curious minds welcome.</h2>
        </div>
        <a className="contact-link" href="mailto:robert.keskey@louisville.edu">
          robert.keskey@louisville.edu <span>↗</span>
        </a>
      </div>
      <div className="page-shell footer-bottom">
        <Link href="/" className="footer-brand">Keskey Lab <small>Surgical Microbiome Lab</small></Link>
        <p>Microbiota · Critical illness · Infectious complications</p>
        <p>© {new Date().getFullYear()} Keskey Lab</p>
      </div>
    </footer>
  )
}
