import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './funding.module.css'

export const metadata: Metadata = {
  title: 'Funding Support | Keskey Lab',
  description:
    'Funding and institutional support for the Keskey Surgical Microbiome Lab.',
}

const supporters = [
  'University of Louisville School of Medicine Hiram C. Polk Jr., M.D., Department of Surgery',
  'Louisville Clinical Translational Research Center Developmental Research Grant',
  'Louisville Clinical Translational Research Center Presidential Scholar',
  'University of Louisville Center for Biomedical Research Excellence in Functional Microbiomics, Inflammation and Pathogenicity Pilot Project',
  '2026–2027 AAST Research and Education Fund',
]

export default function FundingPage() {
  return (
    <article className={styles.page}>
      <header className={`page-shell ${styles.hero}`}>
        <Link href="/#people" className={styles.backLink}>
          ← Back to the laboratory
        </Link>
        <p>Keskey Surgical Microbiome Lab</p>
        <h1>Funding support.</h1>
        <p className={styles.introduction}>
          Our research is generously supported by:
        </p>
      </header>

      <section className={`page-shell ${styles.supporters}`}>
        <ol>
          {supporters.map((supporter, index) => (
            <li key={supporter}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{supporter}</p>
            </li>
          ))}
        </ol>
      </section>
    </article>
  )
}
