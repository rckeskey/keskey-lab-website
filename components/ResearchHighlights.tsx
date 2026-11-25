import Link from 'next/link'
import { researchAreaList } from '@/components/researchContent'

const studies = [
  {
    number: '01',
    href: `/research/${researchAreaList[0].slug}`,
    title: 'Critical care nutrition & the gut microbiome',
    text: 'Studying how nutritional strategies preserve or restore the gut microbiome during critical illness.',
    color: 'mint',
    icon: 'ecosystem',
  },
  {
    number: '02',
    href: `/research/${researchAreaList[1].slug}`,
    title: 'Microbiota response to host stress',
    text: 'Defining how surgery, trauma, and physiologic stress reshape gut microbial communities and function.',
    color: 'coral',
    icon: 'response',
  },
  {
    number: '03',
    href: `/research/${researchAreaList[2].slug}`,
    title: 'Metabolites, immunity & pathogen virulence',
    text: 'Determining how microbiota-derived metabolites regulate host immunity and alter pathogen behavior.',
    color: 'yellow',
    icon: 'therapy',
  },
  {
    number: '04',
    href: `/research/${researchAreaList[3].slug}`,
    title: 'Clinical data & surgical outcomes',
    text: 'Leveraging large clinical datasets to understand outcomes in critical care, trauma, and emergency general surgery.',
    color: 'data',
    icon: 'data',
  },
]

function ResearchIcon({ type }: { type: string }) {
  if (type === 'ecosystem') {
    return <><rect x="11" y="14" width="27" height="37" rx="3" /><path d="M17 23h15M25 51v12c0 7 8 7 8 15M22 34h7M25.5 30v8M43 28c16-6 35 7 35 27v27M52 38c9 2 14 8 14 17v27M55 82h29" /><circle cx="76" cy="61" r="4" /></>
  }
  if (type === 'response') {
    return <><path d="M15 57h14l8-25 12 45 11-37 9 17h16" /><path d="M27 19c-10 12-14 25-12 40l4 24M73 19c10 12 14 25 12 40l-4 24M30 55c0-12 8-20 20-20s20 8 20 20v25H30Z" /><path d="M39 54c14-8 27 3 19 11-6 6-20-2-21 7" /></>
  }
  if (type === 'data') {
    return <><path d="M16 82h70M22 76V48M39 76V30M56 76V57M73 76V18" /><path d="m20 39 18-14 18 18 18-28" /><circle cx="20" cy="39" r="3" /><circle cx="38" cy="25" r="3" /><circle cx="56" cy="43" r="3" /><circle cx="74" cy="15" r="3" /></>
  }
  return <><circle cx="31" cy="38" r="20" /><path d="M21 38c4-10 16-10 20 0-4 10-16 10-20 0Z" /><circle cx="31" cy="38" r="4" /><circle cx="58" cy="24" r="4" /><circle cx="66" cy="39" r="4" /><circle cx="58" cy="54" r="4" /><path d="M48 34l7-6M49 41l12-1M47 47l8 5M61 63c7 2 12 7 14 13" /><rect x="53" y="69" width="34" height="13" rx="7" /><path d="M60 70l-4-7m16 6 2-8m8 11 6-5" /></>
}

export default function ResearchHighlights() {
  return (
    <section className="research" id="research">
      <div className="page-shell">
        <div className="section-heading">
          <span>§ 02</span>
          <h2>Lines of inquiry</h2>
          <i />
        </div>
        <p className="research-lede">
          Four interlocking threads connect mechanistic science with clinical
          outcomes:
          <em> how do the gut microbiome and microbial metabolites alter host
          immunity, pathogen virulence, and recovery after surgical illness?</em>
        </p>
        <div className="research-grid">
          {studies.map((study) => (
            <article className={`research-card ${study.color}`} key={study.title}>
              <div className="card-top">
                <span>{study.number}</span>
                <svg viewBox="0 0 100 100" aria-hidden="true">
                  <ResearchIcon type={study.icon} />
                </svg>
              </div>
              <div>
                <h3>{study.title}</h3>
                <p>{study.text}</p>
                <Link href={study.href} aria-label={`Learn about ${study.title}`}>
                  View this work <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
