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
            <path className="hospital-bed" d="M256 124h81v22h-81zM263 108h60c8 0 14 6 14 14v24M263 146v16m70-16v16M256 124v-21" />
            <path className="patient-body" d="M270 113c3-9 10-14 20-14 10 0 18 5 22 14h11M297 113l16 11" />
            <circle className="patient-head" cx="284" cy="95" r="11" />
            <path className="oxygen-mask" d="M274 96h9l5 4-5 5h-8M288 101h8c7 0 11 4 11 11" />
            <path className="iv-stand" d="M247 72v55M240 72h14M247 72v-9M242 82h10v13h-10zM247 95v9" />
            <path className="monitor" d="M344 76h31v44h-31zM349 91l5 7 6-13 8 11M349 108h20M359 120v13m-10 0h20" />
            <path className="ventilator" d="M340 120h39v17h-39zM348 137v7m23-7v7M337 113h7M375 98h8v25h-8M383 111h6" />
            <circle className="equipment-wheel" cx="348" cy="146" r="3" />
            <circle className="equipment-wheel" cx="371" cy="146" r="3" />
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
            <path className="colon-outline" d="M250 483c-13 0-21 10-21 23v32c0 11 8 19 18 19 11 0 18-8 18-19v-37h91v38c0 18-11 30-28 30h-8" />
            <path className="colon-detail" d="M239 487c5 4 10 5 16 3M229 514c8 4 16 4 24 0M230 540c8-4 16-4 24 0M276 501v34c0 12 17 12 17 0v-20c0-13 18-13 18 0v20c0 12 17 12 17 0v-34M279 488c5 6 5 11 0 16M306 488c5 6 5 11 0 16M334 488c5 6 5 11 0 16M343 520c6 4 10 4 15 0M342 546c6 4 10 4 14 0" />
            <circle className="microbiome-lens" cx="346" cy="474" r="25" />
            <rect className="microbe" x="332" y="461" width="12" height="6" rx="3" transform="rotate(-15 338 464)" />
            <rect className="microbe" x="349" y="457" width="11" height="6" rx="3" transform="rotate(18 354 460)" />
            <rect className="microbe" x="354" y="474" width="12" height="6" rx="3" transform="rotate(-48 360 477)" />
            <rect className="microbe" x="336" y="478" width="11" height="6" rx="3" transform="rotate(36 341 481)" />
            <circle className="microbe-dot" cx="348" cy="470" r="2.5" />
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
