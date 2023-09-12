import { motion } from 'framer-motion';
import { BallCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';
import { styles } from '../../styles';
import { textVariant } from '../../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>I&apos;ve been working on...</p>
        <h2 className={styles.sectionHeadTextLight}>Tech Stack</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-16 max-sm:gap-6">
        {technologies.map((technology) => (
          <div title={technology.name} className="w-28 h-28 cursor-pointer max-sm:w-16 max-sm:h-16" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
