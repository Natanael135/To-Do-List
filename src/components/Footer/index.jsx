import styled from 'styled-components';

// Container principal do footer
const FooterContainer = styled.footer``;

// Conteúdo do footer, com alinhamento e cores principais
const FooterContent = styled.div`
  text-align: center;
  background-color: #fef6e4; 
  color: #001858;
  font-size: 14px;
  border-top: 3px solid #8bd3dd; 
  height: 100%;
  min-height: 100px;
  align-content: space-around; 
`;

// Seção superior do footer, com flexbox para layout
const FooterTop = styled.section`
  display: flex;
  justify-self: center;
  justify-content: center;
  gap: 2rem;

  .TextAgroup {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  @media (min-width: 768px) {
    justify-content: space-around;
  }
`;

// Estilo do texto do footer
const FooterText = styled.p`
  margin: 5px 0;

  a {
   
    color: #f582ae; 
    font-weight: bold;
    transition: color 0.3s ease;
    &:hover {
      color: #001858; 
    }
  }
`;


const SectionSocialMedia = styled.section``;

// Ícones de redes sociais
const StyledSocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    transition: transform 0.3s ease;
  }

  a:hover {
    transform: scale(1.2); 
  }
`;
function Footer() {
  const socialMedia = [
    { name: 'Whatsapp', path: 'https://wa.me/5588996559305' },
    { name: 'Instagram', path: 'https://www.instagram.com/natansmelo_' },
    { name: 'LinkedIn', path: 'https://www.linkedin.com/in/natanaelsmelo' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <div className="TextAgroup">
            <FooterText>
              Desenvolvido por{' '}
              <a
                href="https://portifolio-natanaelsmelo.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Natanael Melo
              </a>
            </FooterText>
            <FooterText>
              &copy; {currentYear} <span> Sem fins lucrativos.</span>
            </FooterText>
          </div>
          <SectionSocialMedia>
            <FooterText>Conecte-se comigo</FooterText>
            <StyledSocialIcons>
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.path}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`/icons/${social.name.toLowerCase()}.svg`}
                    alt={social.name}
                    height={30}
                    width={30}
                    loading="lazy"
                  />
                </a>
              ))}
            </StyledSocialIcons>
          </SectionSocialMedia>
        </FooterTop>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
