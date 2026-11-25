import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './team.module.css'

export const metadata: Metadata = {
  title: 'Lab Team | Keskey Lab',
  description:
    'Meet the Keskey Surgical Microbiome Lab team at the University of Louisville School of Medicine.',
}

const team = [
  {
    name: 'Yonglin “Linda” Gao, MD',
    role: 'Senior Lab Technician · Lab Manager',
    initials: 'YG',
  },
  {
    name: 'Alissa “Natti” Sweazy',
    role: 'Lab Technician',
    initials: 'AS',
  },
]

export default function TeamPage() {
  return (
    <article className={styles.teamPage}>
      <header className={`page-shell ${styles.hero}`}>
        <Link href="/#people" className={styles.backLink}>
          ← Back to the laboratory
        </Link>
        <p>Keskey Surgical Microbiome Lab</p>
        <h1>Meet the team.</h1>
        <div className={styles.location}>
          University of Louisville School of Medicine
          <br />
          Hiram C. Polk Jr., M.D., Department of Surgery
          <br />
          Baxter I Biomedical Research Building · Room 124
        </div>
      </header>

      <section className={`page-shell ${styles.roster}`}>
        <div className="section-heading">
          <span>§ 01</span>
          <h2>Lab principal investigator</h2>
          <i />
        </div>
        <article className={styles.piProfile}>
          <div className={styles.portrait} aria-hidden="true">
            <span>BK</span>
          </div>
          <div className={styles.piBio}>
            <p className={styles.number}>Lab PI</p>
            <h2>Bobby Keskey, MD, PhD</h2>
            <p className={styles.piTitle}>
              Assistant Professor of Surgery · Trauma, Acute Care Surgery &
              Surgical Critical Care
            </p>
            <p>
              Bobby Keskey earned his bachelor&apos;s degree from Presbyterian
              College and his medical degree from the University of Louisville
              School of Medicine. He completed general surgery residency at the
              University of Chicago, where he served as Administrative Chief
              Resident. During residency, he also earned a PhD in Immunology
              through the University of Chicago Committee on Immunology. He
              subsequently completed fellowship training in Surgical Critical
              Care at the University of Chicago.
            </p>
            <p>
              He is now an Assistant Professor of Surgery at the University of
              Louisville, where his clinical practice focuses on trauma, acute
              care surgery, and surgical critical care. He leads a
              translational research laboratory investigating the mechanisms
              by which the gut microbiota and their metabolites influence
              host-pathogen interactions in critically ill trauma and surgical
              patients. His long-term goal is to develop microbiota-directed
              therapies that reduce infectious complications and improve
              recovery.
            </p>
          </div>
        </article>

        <div className={`section-heading ${styles.teamHeading}`}>
          <span>§ 02</span>
          <h2>Laboratory staff</h2>
          <i />
        </div>
        <div className={styles.grid}>
          {team.map((member, index) => (
            <article className={styles.member} key={member.name}>
              <div className={styles.portrait} aria-hidden="true">
                <span>{member.initials}</span>
              </div>
              <p className={styles.number}>
                {String(index + 2).padStart(2, '0')}
              </p>
              <h3>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
            </article>
          ))}
        </div>
      </section>
    </article>
  )
}
