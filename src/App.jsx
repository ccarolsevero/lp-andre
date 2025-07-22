import Section from './components/Section';
import Section2 from './components/Section2';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Flowchart from './components/Flowchart';
import styled from 'styled-components';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppContainer>
      <Navbar />
      <Section />
      <Flowchart />
      <Section2 />
      <Footer />
    </AppContainer>
  );
}
