import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

interface SkillCategoryProps {
  delay?: string;
}

const SkillsSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, var(--color-pink-lighter) 0%, var(--color-pink-light) 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1920&auto=format') center/cover;
    opacity: 0.03;
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--color-primary);
  text-align: center;
  margin-bottom: 3rem;
  font-family: 'Playfair Display', serif;
  position: relative;

  &::after {
    content: '⌨️';
    font-size: 2rem;
    position: absolute;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled.div<SkillCategoryProps>`
  background: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.1);
  backdrop-filter: blur(4px);
  position: relative;

  &::after {
    content: '💻';
    position: absolute;
    top: -1rem;
    right: -0.5rem;
    font-size: 1.8rem;
    animation: ${float} 3s ease-in-out infinite;
    animation-delay: ${props => props.delay || '0s'};
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &::before {
    content: '🖱️';
    font-size: 1.5rem;
  }
`;

const SkillsList = styled.ul`
  list-style: none;

  li {
    font-size: 1.1rem;
    color: var(--color-text);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;

    &::before {
      content: '🔌';
      font-size: 1.2rem;
    }
  }
`;

const Skills: React.FC = () => {
  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <SkillsGrid>
          <SkillCategory delay="0s">
            <CategoryTitle>Frontend Development</CategoryTitle>
            <SkillsList>
              <li>HTML5 & CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Responsive Design</li>
              <li>Bootstrap & Material-UI</li>
            </SkillsList>
          </SkillCategory>
          
          <SkillCategory delay="0.2s">
            <CategoryTitle>Backend Development</CategoryTitle>
            <SkillsList>
              <li>Python</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>RESTful APIs</li>
              <li>MongoDB</li>
            </SkillsList>
          </SkillCategory>

          <SkillCategory delay="0.4s">
            <CategoryTitle>Tools & Technologies</CategoryTitle>
            <SkillsList>
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Command Line</li>
              <li>Chrome DevTools</li>
              <li>Figma</li>
            </SkillsList>
          </SkillCategory>
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 