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
            <path d="M259 125h75v22h-75zM266 108h57c8 0 14 6 14 14v25M266 147v15m67-15v15" />
            <circle cx="286" cy="98" r="11" />
            <path d="M275 116c0-10 6-17 15-17 10 0 16 7 16 17M252 90h8v37M248 87h16v8h-16zM252 87V69h11M263 65v9" />
            <path d="M342 78h31v51h-31zM348 91l5 7 6-12 7 10M348 110h19M357 129v12m-8 0h17" />
            <circle cx="348" cy="138" r="3" />
            <circle cx="368" cy="138" r="3" />
            <path d="M337 119h5M373 103h8v23h-8M381 113h6" />
          </g>
          <text x="310" y="178">
            <tspan x="310">Critical illness</tspan>
            <tspan x="310" dy="14">&amp; clinical nutrition</tspan>
          </text>
        </g>

        <g className="diagram-node immune-node">
          <circle cx="106" cy="307" r="80" />
          <g className="immune-icon">
            <path d="M69 316c-12-15-3-31 12-34-3-18 15-28 31-19 12-12 33-4 33 14 18 2 25 23 11 35 5 18-14 31-30 23-10 15-33 13-39-4-12 3-24-4-18-15Z" />
            <circle className="nucleus" cx="108" cy="300" r="17" />
            <circle className="cell-dot" cx="83" cy="305" r="2.5" />
            <circle className="cell-dot" cx="119" cy="275" r="2.5" />
            <circle className="cell-dot" cx="137" cy="316" r="2.5" />
            <circle className="cell-dot" cx="96" cy="329" r="2.5" />
          </g>
          <text x="106" y="354">
            <tspan x="106">Host immune</tspan>
            <tspan x="106" dy="13">response</tspan>
          </text>
        </g>

        <g className="diagram-node pathogen-node">
          <circle cx="514" cy="307" r="80" />
          <g className="pathogen-icon">
            <rect x="478" y="290" width="72" height="34" rx="17" />
            <path d="M483 291l-8-9m19 7-4-13m17 12v-14m15 14 5-13m8 16 10-9M478 300h-12m12 13h-12m17 11-8 9m19-8-4 13m17-13v14m15-15 5 13m8-15 10 9m5-31h12m-12 13h12" />
            <circle cx="496" cy="307" r="3" />
            <circle cx="514" cy="307" r="3" />
            <circle cx="532" cy="307" r="3" />
          </g>
          <text x="514" y="354">
            <tspan x="514">Pathogen</tspan>
            <tspan x="514" dy="13">virulence</tspan>
          </text>
        </g>

        <g className="diagram-node gut-node">
          <circle cx="310" cy="497" r="92" />
          <g className="gut-icon">
            <path d="M254 480v53c0 15 20 15 20 0v-37c0-15 20-15 20 0v37c0 15 20 15 20 0v-37c0-15 20-15 20 0v48c0 17-10 27-24 27" />
            <path d="M254 480h72c17 0 29 12 29 29v35M254 480c-17 0-29 12-29 29v35M225 544h29m101 0h-21" />
            <circle className="microbiome-lens" cx="347" cy="473" r="25" />
            <rect className="microbe" x="333" y="462" width="12" height="6" rx="3" transform="rotate(-15 339 465)" />
            <rect className="microbe" x="349" y="457" width="11" height="6" rx="3" transform="rotate(18 354 460)" />
            <rect className="microbe" x="354" y="474" width="12" height="6" rx="3" transform="rotate(-48 360 477)" />
            <rect className="microbe" x="337" y="478" width="11" height="6" rx="3" transform="rotate(36 342 481)" />
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
