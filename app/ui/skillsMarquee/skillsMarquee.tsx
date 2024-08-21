import Image from "next/image"
import styles from './skillsMarquee.module.css'

export default function SkillsMarquee() {
  const skills = [
    {
      title: 'PHP',
      image: 'php.svg',
    },
    {
      title: 'Laravel',
      image: 'laravel.svg',
    },
    {
      title: 'Javascript',
      image: 'javascript.svg',
    },
    {
      title: 'CSS',
      image: 'css.svg',
    },
    {
      title: 'Sass',
      image: 'sass.svg',
    },
    {
      title: 'React',
      image: 'react.svg',
    },
    {
      title: 'Node',
      image: 'nodejs.svg',
    },
    {
      title: 'Next.js',
      image: 'nextjs.svg',
    },
    {
      title: 'MongoDB',
      image: 'mongodb.svg',
    },
    {
      title: 'MySQL',
      image: 'mysql.svg',
    }
  ]

  return(

  <div className={`${styles.marquee} my-12`}>
    <div className={`${styles.marqueeInner}`}>
        {skills.concat(skills).map((skill, index) => (
        <div key={index} className={`${styles.marqueeRow}`}>
            <Image src={`./images/skills/${skill.image}`} alt={skill.title} width={40} height={40} className="h-20 w-20" />
            <p className="text-slate-400 dark:text-slate-400">{skill.title}</p>
        </div>
        ))}
    </div>
  </div>

)
}