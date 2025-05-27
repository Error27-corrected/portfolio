import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Image } from 'cloudinary-react';
import { cloudinaryConfig } from '../config/cloudinary';

const float = keyframes`
  0% {
    transform: translateY(0px) rotate(-5deg);
  }
  50% {
    transform: translateY(-20px) rotate(-2deg);
  }
  100% {
    transform: translateY(0px) rotate(-5deg);
  }
`;

const floatIcons = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(10px, -10px) rotate(5deg);
  }
  50% {
    transform: translate(0, -20px) rotate(0deg);
  }
  75% {
    transform: translate(-10px, -10px) rotate(-5deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, var(--color-pink-light) 0%, var(--color-pink-lighter) 100%);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Content = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: var(--color-text);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const FloatingLaptop = styled(Image)`
  position: absolute;
  right: 5%;
  top: 20%;
  width: 500px;
  height: 300px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  opacity: 0.85;
  animation: ${float} 6s ease-in-out infinite;
  z-index: 1;
  object-fit: cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      var(--color-primary) 0%,
      var(--color-secondary) 100%
    );
    opacity: 0.3;
    border-radius: 20px;
  }

  @media (max-width: 1024px) {
    width: 400px;
    height: 240px;
    right: -10%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const MiniLaptop = styled(Image)<{ delay: string; size: string; top: string; left: string }>`
  position: absolute;
  width: ${props => props.size};
  height: calc(${props => props.size} * 0.6);
  border-radius: 10px;
  opacity: 0.8;
  animation: ${floatIcons} 8s ease-in-out infinite;
  animation-delay: ${props => props.delay};
  top: ${props => props.top};
  left: ${props => props.left};
  object-fit: cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
    opacity: 0.3;
    border-radius: 10px;
  }
`;

const TechIcon = styled.div<{ delay: string; top: string; left: string }>`
  position: absolute;
  width: 40px;
  height: 40px;
  opacity: 0.2;
  animation: ${floatIcons} 6s ease-in-out infinite;
  animation-delay: ${props => props.delay};
  top: ${props => props.top};
  left: ${props => props.left};
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: contrast(0.8) brightness(1.2);
`;

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <BackgroundElements>
        <MiniLaptop 
          cloudName={cloudinaryConfig.cloudName}
          publicId="portfolio/laptop1"
          delay="0s" 
          size="120px" 
          top="15%" 
          left="10%" 
        />
        <MiniLaptop 
          cloudName={cloudinaryConfig.cloudName}
          publicId="portfolio/laptop2"
          delay="1s" 
          size="100px" 
          top="65%" 
          left="85%" 
        />
        <MiniLaptop 
          cloudName={cloudinaryConfig.cloudName}
          publicId="portfolio/laptop3"
          delay="2s" 
          size="80px" 
          top="40%" 
          left="75%" 
        />
        
        <TechIcon delay="0.5s" top="25%" left="20%">⌨️</TechIcon>
        <TechIcon delay="1.5s" top="70%" left="15%">🖱️</TechIcon>
        <TechIcon delay="2.5s" top="35%" left="80%">🖥️</TechIcon>
        <TechIcon delay="3.5s" top="85%" left="75%">🔌</TechIcon>
        <TechIcon delay="4s" top="20%" left="90%">🎛️</TechIcon>
      </BackgroundElements>
      <Container>
        <Content>
          <Title>Hi, I'm Showmya</Title>
          <Subtitle>
            A passionate web developer crafting beautiful and functional digital experiences
          </Subtitle>
        </Content>
      </Container>
      <FloatingLaptop 
        cloudName={cloudinaryConfig.cloudName}
        publicId="portfolio/main"
      />
    </HeroSection>
  );
};

export default Hero; 