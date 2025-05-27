import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const sparkle = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #F5EFE6 0%, #F5EFE6 100%);
  position: relative;
  font-family: 'Playfair Display', serif;
  overflow: hidden;

  &::before, &::after {
    content: '✨';
    position: absolute;
    font-size: 2rem;
    animation: ${sparkle} 3s infinite;
    color: #DDB892;
  }

  &::before {
    top: 2rem;
    left: 15%;
  }

  &::after {
    bottom: 2rem;
    right: 15%;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #6B4226;
  text-align: center;
  margin-bottom: 3rem;
  font-family: 'Playfair Display', serif;
  letter-spacing: 1px;
  position: relative;

  &::after {
    content: '💝';
    font-size: 1.5rem;
    position: absolute;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Column = styled.div`
  background: rgba(245, 239, 230, 0.9);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(107, 66, 38, 0.1);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(221, 184, 146, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProfileSection = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #DDB892;
  box-shadow: 0 0 20px rgba(107, 66, 38, 0.2);
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
  
  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

const Role = styled.p`
  font-size: 1.1rem;
  color: #A68A64;
  margin: 0.5rem 0;
  font-style: italic;
  font-family: 'Libre Baskerville', serif;
`;

const TextContent = styled.div`
  p {
    font-size: 1rem;
    line-height: 1.8;
    color: #6B4226;
    margin-bottom: 1rem;
    font-family: 'Merriweather', serif;
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: '💗';
      position: absolute;
      left: 0;
      top: 2px;
      font-size: 1rem;
    }
  }
`;

const HighlightList = styled.ul`
  list-style: none;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  li {
    font-size: 1rem;
    color: #6B4226;
    padding: 1rem;
    background: rgba(221, 184, 146, 0.15);
    border-radius: 15px;
    text-align: center;
    font-family: 'Libre Baskerville', serif;
    border: 1px solid rgba(166, 138, 100, 0.3);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    &:hover {
      background: rgba(221, 184, 146, 0.25);
      transform: translateY(-2px);
    }

    .icon {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const EducationList = styled.div`
  margin-top: 1.5rem;

  h3 {
    color: #6B4226;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-family: 'Playfair Display', serif;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    
    &::before {
      content: '🎀';
      margin-right: 0.5rem;
    }
  }

  ul {
    list-style: none;
    
    li {
      margin-bottom: 1rem;
      padding: 1rem;
      background: rgba(221, 184, 146, 0.15);
      border-radius: 15px;
      border: 1px solid rgba(166, 138, 100, 0.3);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-2px);
      }

      strong {
        color: #6B4226;
        display: block;
        font-size: 1.1rem;
        margin-bottom: 0.3rem;
        font-family: 'Libre Baskerville', serif;
      }

      span {
        display: block;
        font-size: 0.9rem;
        color: #A68A64;
        font-family: 'Merriweather', serif;
      }
    }
  }
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <Content>
          <Column>
            <ProfileSection>
              <ProfileImage 
                src="/images/profile.jpg" 
                alt="Profile"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = 'https://placehold.co/220x220/DDB892/6B4226?text=Profile';
                }}
              />
              <Role>Frontend Developer</Role>
            </ProfileSection>
            <EducationList>
              <h3>Education</h3>
              <ul>
                <li>
                  <strong>B.Tech in CSE & IT</strong>
                  <span>MLR Institute of Technology</span>
                  <span>2022 - 2026</span>
                </li>
              </ul>
            </EducationList>
          </Column>
          <Column>
            <TextContent>
              <p>
                Hello! I'm a passionate web developer focused on creating
                beautiful and functional digital experiences. I specialize in frontend
                development, turning complex problems into simple, intuitive designs.
              </p>
              <p>
                With a strong foundation in modern web technologies, I create responsive
                and user-friendly applications that deliver exceptional user experiences.
              </p>
            </TextContent>
            <HighlightList>
              <li>
                <span className="icon">⚛️</span>
                React Development
              </li>
              <li>
                <span className="icon">🎨</span>
                UI/UX Design
              </li>
              <li>
                <span className="icon">📱</span>
                Responsive Design
              </li>
              <li>
                <span className="icon">🔷</span>
                TypeScript
              </li>
              <li>
                <span className="icon">🎯</span>
                Frontend Tools
              </li>
              <li>
                <span className="icon">🚀</span>
                Performance
              </li>
            </HighlightList>
          </Column>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About; 