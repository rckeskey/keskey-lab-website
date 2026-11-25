import Image from 'next/image'
import Link from 'next/link'
import { researchAreaList } from '@/components/researchContent'
import criticalCarePatient from '@/public/images/critical-care-patient.png'
import gutMicrobiota from '@/public/images/gut-microbiota.png'
import immunePathogen from '@/public/images/immune-pathogen.png'

const studies = [
  {
    number: '01',
    href: `/research/${researchAreaList[0].slug}`,
    title: 'Critical care nutrition & the gut microbiome',
    text: 'Studying how nutritional strategies preserve or restore the gut microbiome during critical illness.',
    color: 'mint',
    icon: 'patient',
  },
  {
    number: '02',
    href: `/research/${researchAreaList[1].slug}`,
    title: 'Microbiota response to host stress',
    text: 'Defining how surgery, trauma, and physiologic stress reshape gut microbial communities and function.',
    color: 'coral',
    icon: 'microbiome',
  },
  {
    number: '03',
    href: `/research/${researchAreaList[2].slug}`,
    title: 'Metabolites, immunity & pathogen virulence',
    text: 'Determining how microbiota-derived metabolites regulate host immunity and alter pathogen behavior.',
    color: 'yellow',
    icon: 'immune-pathogen',
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
  if (type === 'patient') {
    return <Image className="figure-card-icon" src={criticalCarePatient} alt="" />
  }
  if (type === 'microbiome') {
    return <Image className="figure-card-icon" src={gutMicrobiota} alt="" />
  }
  if (type === 'immune-pathogen') {
    return <Image className="figure-card-icon figure-card-icon-pair" src={immunePathogen} alt="" />
  }
  if (type === 'data') {
    return (
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <path d="M16 82h70M22 76V48M39 76V30M56 76V57M73 76V18" />
        <path d="m20 39 18-14 18 18 18-28" />
        <circle cx="20" cy="39" r="3" />
        <circle cx="38" cy="25" r="3" />
        <circle cx="56" cy="43" r="3" />
        <circle cx="74" cy="15" r="3" />
      </svg>
    )
  }
  return null
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
                <ResearchIcon type={study.icon} />
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
