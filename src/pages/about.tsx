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
import Image from 'next/image';
import ImgItem from '@/components/tempComponents/SkillsItem';

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
                        <ParagraphDesign desc="I'm a dynamic Full Stack Developer with two years of experience, proficient in HTML, CSS, JavaScript, Node.js, React, and SQL. From a curiosity that turned into commitment, I specialize in crafting robust web applications by seamlessly integrating front-end and back-end technologies. Fueled by a passion for innovation, I maintain a successful track record in project delivery. Committed to continuous learning, I engage in challenges and open-source contributions. Eager to bring my skills and enthusiasm to a collaborative team, I'm ready to contribute to the future of development." />
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
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                            <ImgItem imageUrl="/TechLogos/Next.js.png"/>
                            <ImgItem imageUrl="/TechLogos/React.png" />
                            <ImgItem imageUrl="/TechLogos/Node.js.png" />
                            <ImgItem imageUrl="/TechLogos/Express.png" />
                            <ImgItem imageUrl="/TechLogos/MongoDB.png" />
                            <ImgItem imageUrl="/TechLogos/React Bootstrap.png" />
                            <ImgItem imageUrl="/TechLogos/JavaScript.png" />
                            <ImgItem imageUrl="/TechLogos/HTML5.png" />
                            <ImgItem imageUrl="/TechLogos/CSS3.png" />
                            <ImgItem imageUrl="/TechLogos/Sanity.png" />
                            <ImgItem imageUrl="/TechLogos/MySQL.png" />
                            <ImgItem imageUrl="/TechLogos/WordPress.png" />
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}
export default About
