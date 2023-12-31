import styles from '@/styles/Home.module.css'
import { useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import AnimatedTitle from '@/components/tempComponents/AnimatedTitle';
import ParagraphDesign from '@/components/tempComponents/ParagraphDesign';
import TimelineItem from '@/components/tempComponents/TimelineListItem';
import EducationItem from '@/components/tempComponents/EducationItem';

const About = () => {

    useEffect(() => {

    }, []);


    return (
        <>
            <div className={`d-flex flex-column flex-lg-row justify-content-center align-items center w-100 p-2 pb-0 pb-lg-1 p-5 py-lg-0 mt-lg-0 text-center text-lg-start ${styles.slideWrapper}`}>
                <div className="d-flex col-12 col-lg-4">
                </div>
                <div className="d-flex flex-column col-12 col-lg-8 py-2 py-lg-5">
                    <div className="d-flex flex-column py-5">
                        <AnimatedTitle title="About Me" />
                        <ParagraphDesign desc="I am a highly skilled and motivated 
                            front-end developer with two years of 
                            experience in the industry. My strong 
                            background in software development 
                            and problem-solving enables me to 
                            deliver efficient and innovative 
                            solutions. As a team player, I excel in 
                            effectively communicating complex 
                            ideas and collaborating to meet tight 
                            deadlines. With my unwavering 
                            dedication to quality and ability to 
                            adapt quickly, I am a valuable asset to 
                            any software development team." />
                    </div>

                    <div className="d-flex flex-column py-5">
                        <AnimatedTitle title="Work Experience" />
                        <TimelineItem timeDuration='April 2022 - Present' position='Fullstack Developer' location='KO2 labs (Pvt) Ltd' desc="Responsible for developing  responsive interfaces using cutting-edge technologies such as Next.js, React Js, Three.js, HTML, CSS, and Bootstrap. And responsible for the development of Chat Bot applications by integrating Chat GPT for intelligent conversations. Additionally, I've played a key role in backend development using Laravel and Node.js, implementing CRUD operations for efficient data management. My responsibilities also extend to WordPress website development." />
                        <TimelineItem timeDuration='July 2021 - Jan 2022' position='Intern Software Engineer' location=' ILT Software' desc='Responsible for Expoloader web site development using JavaScript, Typescript, Next.Js. And shipping container optimization software named Expoloader Application Front-end Development using JavaScript, Typescript, Next.Js, Redux.' />
                    </div>

                    <div className="d-flex flex-column py-5">
                        <AnimatedTitle title="Education" />
                        <EducationItem timeDuration='2017 - 2022' title='Bachelor of Information Communication Technology (BICT) Honors' location='Rajarata University of Sri Lanka' desc="(Second Class Upper Division | English medium)" />
                    </div>


                    <div className="d-flex flex-column py-5">
                        <AnimatedTitle title="Skills" />
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}
export default About
