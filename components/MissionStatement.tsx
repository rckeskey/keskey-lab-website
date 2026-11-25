export default function MissionStatement() {
  return (
    <section className="mission" id="approach">
      <div className="page-shell">
        <div className="section-heading">
          <span>§ 01</span>
          <h2>Preventing infectious complications</h2>
          <i />
        </div>
        <div className="mission-body">
          <p className="mission-lead">
            We study the <em>microbial mechanisms</em> that shape infection and
            recovery.
          </p>
          <div className="mission-detail">
            <p>
              Surgery, trauma, and critical illness can disrupt the gut
              microbiome, alter microbial metabolism, and change the host
              immune response.
            </p>
            <p>
              The Keskey Lab integrates surgical science, microbiology, and
              immunology to determine how these changes affect pathogen
              virulence and infectious risk. Our goal is to translate these
              mechanisms into strategies that improve patient outcomes.
            </p>
          </div>
        </div>
      </div>
      <div className="mission-pattern" aria-hidden="true">
        {Array.from({ length: 22 }).map((_, index) => (
          <span key={index} style={{ '--i': index } as React.CSSProperties} />
        ))}
      </div>
    </section>
  )
}
