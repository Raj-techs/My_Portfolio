import Link from 'next/link';
import { projectsData } from '../data/projectsData';
import styles from './projects.module.css';
import Image from 'next/image';

export const metadata = {
  title: 'Projects — Rajesh Puchakayal',
  description: 'Full-stack and AI/ML projects built by Rajesh Puchakayal',
};

export default function ProjectsIndexPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.backBtn}>← Back to Portfolio</Link>
        <span className={styles.headerTitle}>All Projects</span>
      </header>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Portfolio</p>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>
          Full-stack applications, AI/ML tools, and SaaS platforms I&apos;ve built.
        </p>
      </section>

      <div className={styles.grid}>
        {projectsData.map((project, i) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={styles.card}
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className={styles.cardImageWrap}>
              <Image
               src={project.image} alt={project.name} className={styles.cardImg} />
              <span className={styles.yearBadge}>{project.year}</span>
            </div>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{project.name}</h2>
              <p className={styles.cardDesc}>{project.shortDescription}</p>
              <div className={styles.tags}>
                {project.technologies.slice(0, 4).map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
              <span className={styles.viewLink}>View Details →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
