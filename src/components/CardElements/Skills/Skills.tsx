import styles from './Skills.module.scss';

interface SkillsProps {
   skills: string[];
}

export const Skills = ({ skills }: SkillsProps) => {
   return (
      <div className={styles.container}>
         {skills ? (
            <>
               <h4>Needed skills:</h4>
               <ul className={styles.skills}>
                  {skills.map((skill, index) => {
                     return (
                        <li key={index} className={styles.skill}>
                           {skill}
                        </li>
                     );
                  })}
               </ul>
            </>
         ) : (
            <h4>No skills needed</h4>
         )}
      </div>
   );
};
