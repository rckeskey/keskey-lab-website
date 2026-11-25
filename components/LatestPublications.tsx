import Link from 'next/link'

export default function LatestPublications() {
  return (
    <section className="people" id="people">
      <div className="page-shell people-inner">
        <div className="section-heading">
          <span>§ 03</span>
          <h2>The laboratory</h2>
          <i />
        </div>
        <div className="people-copy">
          <h3>
            Science is a
            <br />
            <em>team effort.</em>
          </h3>
          <p>
            University of Louisville School of Medicine
            <br />
            Hiram C. Polk Jr., M.D., Department of Surgery
            <br />
            Baxter I Biomedical Research Building · Room 124
          </p>
          <Link className="text-link" href="/team">
            Meet the team <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
