import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, var(--color-pink-light) 0%, var(--color-pink-lighter) 100%);
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

  &::after {
    content: '';
    position: fixed;
    bottom: -10%;
    right: -5%;
    width: 600px;
    height: 600px;
    background: url('https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1200&auto=format') center/cover;
    opacity: 0.1;
    transform: rotate(-15deg);
    z-index: 0;
    filter: contrast(1.2) brightness(1.1);
    pointer-events: none;
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
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
    border-radius: 2px;
  }
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  backdrop-filter: blur(4px);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::after {
    content: '💻';
    font-size: 1.5rem;
    margin-top: 4px;
  }
`;

const ProjectRole = styled.h4`
  font-size: 1.2rem;
  color: var(--color-secondary);
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: 2rem;
  font-family: 'Poppins', sans-serif;
`;

const TechStack = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 15px;

  h4 {
    font-size: 1.2rem;
    color: var(--color-primary);
    margin-bottom: 1rem;
    font-family: 'Playfair Display', serif;
  }
`;

const TechList = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const TechTag = styled.span`
  background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 2px 10px rgba(216, 27, 96, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  margin-top: 1rem;

  strong {
    color: var(--color-primary);
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    display: block;
    margin-bottom: 1rem;
  }

  li {
    color: var(--color-text);
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    font-family: 'Poppins', sans-serif;

    &:nth-child(1)::before {
      content: '⌨️';
      margin-right: 1rem;
      font-size: 1rem;
    }
    &:nth-child(2)::before {
      content: '🖱️';
      margin-right: 1rem;
      font-size: 1rem;
    }
    &:nth-child(3)::before {
      content: '🖥️';
      margin-right: 1rem;
      font-size: 1rem;
    }
    &:nth-child(4)::before {
      content: '🔌';
      margin-right: 1rem;
      font-size: 1rem;
    }
    &:nth-child(5)::before {
      content: '🎛️';
      margin-right: 1rem;
      font-size: 1rem;
    }
  }
`;

const Projects: React.FC = () => {
  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <ProjectCard>
          <ProjectTitle>Artistry Aura</ProjectTitle>
          <ProjectRole>Frontend Developer</ProjectRole>
          <ProjectDescription>
            A Platform for Aspiring Actors - Designed and developed a beginner-friendly 
            website that connects aspiring actors directly with verified casting directors, 
            eliminating intermediaries and reducing the risk of fraud. The platform features 
            a clean and user-centric interface built with HTML and CSS, ensuring accessibility 
            and ease of use for newcomers in the entertainment industry.
          </ProjectDescription>
          <TechStack>
            <h4>Technologies Used</h4>
            <TechList>
              <TechTag>HTML</TechTag>
              <TechTag>CSS</TechTag>
              <TechTag>Responsive Design</TechTag>
              <TechTag>UI/UX</TechTag>
            </TechList>
          </TechStack>
          <FeaturesList>
            <strong>Key Features</strong>
            <li>Clean and intuitive user interface</li>
            <li>Secure authentication system</li>
            <li>Portfolio showcase functionality</li>
            <li>Direct messaging system</li>
            <li>Online audition platform</li>
          </FeaturesList>
        </ProjectCard>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 