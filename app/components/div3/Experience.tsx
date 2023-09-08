import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../../styles';
import { experiences } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { download, downloadHover, resume } from '../../assets';
import { textVariant } from '../../utils/motion';
import Image from 'next/image';

interface Experience {
  date: string;
  iconBg: string;
  icon: string;
  title: string;
  company_name: string;
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#eaeaec',
      color: '#292929',
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    }}
    contentArrowStyle={{
      borderRight: '7px solid  #232631',
    }}
    // @ts-ignore
    date={
      <div>
        <h3 className="text-dim text-[18px] font-bold font-beckman">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <Image
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
        {experience.title}
      </h3>
      <p
        className="text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px]"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Experience: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          What I&apos;ve done so far
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-16 flex flex-col overflow-auto h-[62vh]">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            // @ts-ignore
            <ExperienceCard key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              background: '#eaeaec',
              color: '#292929',
              boxShadow:
                'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  #232631',
            }}
            iconStyle={{ background: '#333333' }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <Image
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }
          >
            <button
              className="live-demo flex justify-between 
                text-[14px] text-timberWolf 
                font-bold font-beckman items-center"
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1qBfYA1zTdIpbFiK4PN5pXbLfvFWESB4C/view?usp=sharing',
                  '_blank'
                )
              }
              onMouseOver={() => {
                // @ts-ignore
                document
                  .querySelector('.download-btn')
                  // @ts-ignore
                  .setAttribute('src', downloadHover);
              }}
            //   @ts-
              onMouseOut={() => {
                // @ts-ignore
                document
                  .querySelector('.download-btn')
                  // @ts-ignore
                  .setAttribute('src', download);
              }}
            >
              MY RESUME
              <Image
                src={download}
                alt="download"
                className="download-btn sm:w-[26px] sm:h-[26px] 
                  w-[23px] h-[23px] object-contain ml-5"
              />
            </button>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
