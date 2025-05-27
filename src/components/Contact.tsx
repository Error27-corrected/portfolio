import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #F5EFE6 0%, #F5EFE6 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1920&auto=format') center/cover;
    opacity: 0.05;
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #6B4226;
  margin-bottom: 2rem;
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
    background: linear-gradient(90deg, #6B4226, #A68A64);
    border-radius: 2px;
  }
`;

const ContactText = styled.p`
  font-size: 1.2rem;
  color: #6B4226;
  margin-bottom: 3rem;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
`;

const ContactCard = styled.div`
  background: rgba(245, 239, 230, 0.9);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(107, 66, 38, 0.1);
  backdrop-filter: blur(4px);
  margin-bottom: 2rem;
  border: 1px solid rgba(221, 184, 146, 0.3);
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  color: #6B4226;
  font-size: 1.1rem;
  font-family: 'Poppins', sans-serif;
  padding: 1rem 1.5rem;
  background: #F5EFE6;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(107, 66, 38, 0.1);
  border: 1px solid rgba(221, 184, 146, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(107, 66, 38, 0.2);
    background: linear-gradient(45deg, #6B4226, #A68A64);
    color: #F5EFE6;
  }

  span {
    font-size: 1.2rem;
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Let's Connect!</SectionTitle>
        <ContactCard>
          <ContactText>
            Want to build something amazing together? I'm always open to discussing new
            projects and opportunities. Let's create something beautiful! ✨
          </ContactText>
          <ContactLinks>
            <ContactLink href="mailto:sowmyayadav1027@gmail.com">
              <span>📧</span> sowmyayadav1027@gmail.com
            </ContactLink>
            <ContactLink 
              href="https://www.linkedin.com/in/showmya-showmya-40707a2a3" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span>💼</span> LinkedIn
            </ContactLink>
            <ContactLink 
              href="https://github.com/showmya16" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span>🌟</span> GitHub
            </ContactLink>
          </ContactLinks>
        </ContactCard>
      </Container>
    </ContactSection>
  );
};

export default Contact; 