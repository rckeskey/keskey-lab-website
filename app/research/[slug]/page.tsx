import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { researchAreaList, researchAreas } from '@/components/researchContent'

type ResearchPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return researchAreaList.map(({ slug }) => ({ slug }))
}

export function generateMetadata({ params }: ResearchPageProps): Metadata {
  const area = researchAreas[params.slug]

  if (!area) {
    return {}
  }

  return {
    title: `${area.title} | Keskey Lab`,
    description: area.summary,
  }
}

export default function ResearchPage({ params }: ResearchPageProps) {
  const area = researchAreas[params.slug]

  if (!area) {
    notFound()
  }

  return (
    <article className="research-detail">
      <header className="page-shell research-detail-hero">
        <Link href="/#research" className="back-link">
          ← All research areas
        </Link>
        <p className="research-detail-number">Research area {area.number}</p>
        <h1>{area.title}</h1>
        <p className="research-detail-summary">{area.summary}</p>
      </header>

      <section className="page-shell research-focus">
        <div className="section-heading">
          <span>§ 01</span>
          <h2>Research focus</h2>
          <i />
        </div>
        <div className="research-focus-grid">
          <p className="research-focus-statement">{area.focus}</p>
          <div className="research-focus-copy">
            {area.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="research-publications">
        <div className="page-shell">
          <div className="section-heading">
            <span>§ 02</span>
            <h2>Selected publications</h2>
            <i />
          </div>
          <div className="publication-list">
            {area.publications.map((publication, index) => (
              <article className="publication" key={publication.pubmedUrl}>
                <span className="publication-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{publication.title}</h3>
                  <p className="publication-citation">{publication.citation}</p>
                  <p>{publication.description}</p>
                  <a
                    href={publication.pubmedUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on PubMed <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
