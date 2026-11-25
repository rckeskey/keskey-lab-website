import Image from 'next/image'
import Link from 'next/link'
import microbiotaHostInteractions from '@/public/images/microbiota-host-interactions.png'

function MicrobiomeIllustration() {
  return (
    <figure className="hero-art hero-art-image">
      <Image
        src={microbiotaHostInteractions}
        alt="Diagram connecting a critically ill patient with gut microbiota response to host stress, immune modulation, and pathogen colonization and virulence"
        priority
        sizes="(max-width: 900px) 100vw, 50vw"
      />
      <figcaption>
        <span>Fig. 01</span>
        Critical care nutrition and host stress reshape the gut microbiota.
        Microbial metabolites then signal to the immune system and influence
        pathogen virulence.
      </figcaption>
    </figure>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="page-shell hero-grid">
        <div className="hero-copy">
          <div className="hero-meta">
            <p><span>Discipline</span><i /> Surgical science · Gut microbiome · Host-pathogen interactions</p>
            <p><span>Focus</span><i /> Surgery · Trauma · Critical care</p>
            <p><span>Laboratory</span><i /> UofL School of Medicine, Baxter I, Room 124</p>
          </div>
          <h1 className="display">
            <small>Leveraging the</small>
            <em>Gut Microbiome</em>
            <span>to advance the field of</span>
            <span>Surgery &amp; Critical Care.</span>
          </h1>
          <blockquote>
            “Understanding how alterations in the gut microbiome can drive
            either a recovery-directed immune response or pathogen-mediated
            complications.”
            <cite>— the lab&apos;s working premise</cite>
          </blockquote>
          <p className="hero-intro">
            <span>O</span>ur central goal is to reduce infectious complications
            in surgery, trauma, and critical illness. We study how the gut
            microbiome and microbial metabolites alter the host immune system
            and pathogen virulence.
          </p>
          <div className="hero-actions">
            <Link href="#research" className="text-link">
              Read the research <span>↓</span>
            </Link>
          </div>
        </div>
        <MicrobiomeIllustration />
      </div>
    </section>
  )
}
