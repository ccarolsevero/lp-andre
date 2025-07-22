import styled from 'styled-components';

export default function Section2() {
  return (
    <Section2Container>
      <Section2Title>
        Leverage your data for high impact AI Projects
      </Section2Title>
      <Section2Description>
        Data is the most valuable asset companies have, but only if it's put to
        use. Create real impact AI projects with your own data, integrated with
        your own product.
      </Section2Description>
    </Section2Container>
  );
}

const Section2Container = styled.section`
  padding: 32px 8px 32px 8px;
  background: #111;
  text-align: center;
  margin-bottom: 0;
  @media (min-width: 800px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`;

const Section2Title = styled.h2`
  font-size: 1.5rem;
  color: #bdbdbd;
  margin-bottom: 16px;
  font-weight: 700;
  @media (min-width: 800px) {
    font-size: 2rem;
  }
`;

const Section2Description = styled.p`
  color: #8a8a8a;
  font-size: 1rem;
  max-width: 400px;
  margin: 0 auto;
  @media (min-width: 800px) {
    font-size: 1.25rem;
  }
`;
