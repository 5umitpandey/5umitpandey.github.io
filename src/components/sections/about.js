import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: normal;
      filter: none;
      transition: none;
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['AI/ML', 'Python', 'C++', 'SQL', 'Power BI', 'AWS', 'MS Excel', 'Data Analysis', 'Linux', 'Git'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
            Born in <b>Prayagraj</b> and raised in <b>Raigarh</b>, I pursued my Bachelor's degree in <b>Pune</b> and currently completing my Master's in <b>Patiala</b>. 
            Throughout my journey, I've encountered diverse individuals and savored a variety of cuisines.
            </p>
            <p>
              During my school years, I devoted much of my time to {' '}
              <a href="https://drive.google.com/file/d/1hJTrI0_080oRWld3ijMuJE_lBVMZ_uZb/view?usp=sharing">Sports</a>, bringing home numerous laurels and trophies.
              Later, I delved into the world of {' '}
              <a href="https://drive.google.com/file/d/0BwBIeERidT3meVZpNU1QekZtRjA/view?usp=sharing&resourcekey=0-2-ifI7k4z8vd5Hdq8LoJCA">Robotics</a> and embarked on a journey in programming.
            </p>
            <p>
            With a core specialization in Analysis &amp; Data, I've orchestrated impactful
             strategies in Social Media during my internship for {' '}
             <a href="https://collegedunia.com/study-abroad">Study Abroad</a> {' '} at{' '} 
             <a href="https://collegedunia.com/">CollegeDunia</a>.
            </p>

            {/* <p>
            I've also made some projects in the field of Exploratory Data Analysis like {' '}
            <a href="https://github.com/5umitpandey/Data_Science_Projects/blob/main/Uber_Trip_Analysis.ipynb">
              Uber Trip Analysis</a>, {' '} resulting in a remarkable output
              for my project as part of my Data Science Journey.
            </p>

            <p>
            And for my love for sports,  {' '} <a href="https://www.premierleague.com/">Premiere League</a>, {' '} 
            I built an EDA for English Premiere League Games, where I try to predict the next few fixtures: {' '} 
            <a href="https://github.com/5umitpandey/Data_Science_Projects/blob/main/EPL20_21_GW4.ipynb">Notebook</a>.
            </p> */}

            <p>
            Moreover, You can watch a video about me at {' '} <a href="https://youtu.be/MeVBe_7xJoM">
              My Personality</a>. {' '}
            </p>

            <p>My skills are not limited to this list!</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
