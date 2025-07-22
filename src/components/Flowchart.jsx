import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const items = [
  { type: 'box', content: 'Upload your anonymized data' },
  { type: 'arrow' },
  { type: 'box', content: 'Train your model' },
  { type: 'arrow' },
  { type: 'box', content: 'Run inference through an easy to use REST API' },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.18,
      duration: 0.7,
      ease: [0.4, 0.2, 0.2, 1],
    },
  }),
};

export default function Flowchart({ animate }) {
  return (
    <FlowchartContainer>
      <FlowList>
        {items.map((item, idx) => (
          <motion.li
            key={idx}
            initial="hidden"
            animate={animate ? 'visible' : false}
            variants={itemVariants}
            custom={idx}
            style={{ listStyle: 'none', display: 'flex', alignItems: 'center' }}
          >
            {item.type === 'box' ? (
              <FlowItem>{item.content}</FlowItem>
            ) : (
              <ArrowBetween>
                <FaArrowRight size={22} />
              </ArrowBetween>
            )}
          </motion.li>
        ))}
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
  @media (max-width: 600px) {
    padding: 12px 2vw 12px 2vw;
  }
  @media (max-width: 500px) {
    max-width: 100vw;
    width: 100vw;
    overflow-x: hidden;
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
  @media (max-width: 600px) {
    gap: 4px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 8px;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const FlowItem = styled.li`
  background: #222;
  color: #fff;
  padding: 18px 28px;
  border-radius: 10px;
  font-size: 1.15rem;
  font-weight: 600;
  min-width: 140px;
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
  @media (max-width: 500px) {
    padding: 14px 10px;
    font-size: 1rem;
    min-width: 110px;
    max-width: 95vw;
    word-break: break-word;
    justify-content: center;
  }
`;

const ArrowBetween = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0 2px;
  list-style: none;
  @media (max-width: 500px) {
    padding: 4px 0;
    justify-content: center;
    width: 100%;
    svg {
      transform: rotate(90deg);
      margin: 0 auto;
      display: block;
    }
  }
`;
