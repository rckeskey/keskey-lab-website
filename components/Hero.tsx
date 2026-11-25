import Link from 'next/link'

function MicrobiomeIllustration() {
  return (
    <figure className="hero-art">
      <svg viewBox="0 0 620 620" role="img" aria-labelledby="microbiome-figure-title">
        <title id="microbiome-figure-title">
          Critical illness, gut microbiome, host immunity, and pathogen virulence
        </title>
        <defs>
          <marker id="arrow-black" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0 0 8 4 0 8Z" />
          </marker>
          <marker id="arrow-red" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0 0 8 4 0 8Z" />
          </marker>
        </defs>

        <path className="system-arrow stress-path" d="M236 140C178 148 139 186 125 232" />
        <path className="system-arrow stress-path" d="M384 140c58 8 97 46 111 92" />

        <path className="system-arrow interaction-arrow" d="M164 351l82 77" />
        <path className="system-arrow interaction-arrow" d="M230 449l-82-77" />
        <path className="system-arrow interaction-arrow" d="M456 351l-82 77" />
        <path className="system-arrow interaction-arrow" d="M390 449l82-77" />

        <path className="system-arrow central-arrow down" d="M292 208v137" />
        <path className="system-arrow central-arrow up" d="M328 345V208" />
        <text className="arrow-label" x="271" y="279" transform="rotate(-90 271 279)">Host stress</text>
        <text className="arrow-label accent-label" x="351" y="279" transform="rotate(90 351 279)">Recovery signals</text>

        <g className="diagram-node patient-node">
          <circle cx="310" cy="111" r="88" />
          <g className="patient-icon">
            <path d="M258 130h94v24h-94zM266 101h73c13 0 23 10 23 23v30M267 154v16m86-16v16" />
            <circle cx="290" cy="91" r="15" />
            <path d="M275 112c0-12 8-20 19-20 12 0 20 8 20 20M250 72h14v34h-14zM257 106v27M365 74h31v43h-31zM370 91l6-8 6 15 7-10" />
          </g>
          <text x="310" y="178">
            <tspan x="310">Critical illness</tspan>
            <tspan x="310" dy="14">&amp; clinical nutrition</tspan>
          </text>
        </g>

        <g className="diagram-node immune-node">
          <circle cx="106" cy="307" r="80" />
          <g className="immune-icon">
            <path d="M78 309c-13-19 2-43 23-37 13-19 42-7 39 15 20 9 14 39-7 42-6 22-36 24-46 5-22 4-31-20-9-25Z" />
            <circle cx="108" cy="306" r="18" />
            <circle cx="83" cy="299" r="3" />
            <circle cx="129" cy="288" r="3" />
            <circle cx="128" cy="327" r="3" />
          </g>
          <text x="106" y="354">
            <tspan x="106">Host immune</tspan>
            <tspan x="106" dy="13">response</tspan>
          </text>
        </g>

        <g className="diagram-node pathogen-node">
          <circle cx="514" cy="307" r="80" />
          <g className="pathogen-icon">
            <rect x="478" y="292" width="72" height="30" rx="15" />
            <path d="M485 293c-9-14-3-24 7-30m13 28c-1-18 8-26 18-32m16 36c10-12 19-13 27-7M486 319c-8 12-4 22 5 29m17-27c1 17 9 24 19 29m12-31c9 11 18 13 26 8" />
            <circle cx="498" cy="307" r="3" />
            <circle cx="518" cy="307" r="3" />
            <circle cx="537" cy="307" r="3" />
          </g>
          <text x="514" y="354">
            <tspan x="514">Pathogen</tspan>
            <tspan x="514" dy="13">virulence</tspan>
          </text>
        </g>

        <g className="diagram-node gut-node">
          <circle cx="310" cy="497" r="92" />
          <g className="gut-icon">
            <path d="M266 455h86c18 0 30 12 30 30v53M266 455c-18 0-30 12-30 30v53M236 538h35m111 0h-35M270 474v55c0 13 19 13 19 0v-40c0-16 21-16 21 0v40c0 13 19 13 19 0v-40c0-16 21-16 21 0v62c0 18-13 30-30 30h-18" />
            <rect x="252" y="489" width="22" height="9" rx="5" />
            <rect x="335" y="516" width="24" height="10" rx="5" />
            <circle cx="305" cy="472" r="6" />
            <circle cx="303" cy="548" r="5" />
          </g>
          <text x="310" y="431">
            <tspan x="310">Gut microbiome</tspan>
            <tspan x="310" dy="14">&amp; metabolites</tspan>
          </text>
        </g>
      </svg>
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
