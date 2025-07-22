import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

export default function Flowchart() {
  return (
    <FlowchartContainer>
      <FlowList>
        <FlowItem>Upload your anonymized data</FlowItem>
        <ArrowBetween>
          <FaArrowRight size={22} />
        </ArrowBetween>
        <FlowItem>Train your model</FlowItem>
        <ArrowBetween>
          <FaArrowRight size={22} />
        </ArrowBetween>
        <FlowItem>Run inference through an easy to use REST API</FlowItem>
      </FlowList>
    </FlowchartContainer>
  );
}

const FlowchartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111;
  padding: 16px 48px 16px 48px;
  @media (min-width: 800px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;

const FlowList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;

const FlowItem = styled.li`
  background: #222;
  color: #fff;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  min-width: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.18s cubic-bezier(0.4, 0.2, 0.2, 1),
    box-shadow 0.18s cubic-bezier(0.4, 0.2, 0.2, 1);
  cursor: pointer;
  &:hover {
    transform: scale(1.06);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18);
  }
`;

const ArrowBetween = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0 2px;
  list-style: none;
`;
