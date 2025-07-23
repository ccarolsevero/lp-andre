import styled from 'styled-components';
import { motion } from 'framer-motion';

const items = [
  { type: 'box', content: 'Upload your anonymized data' },
  { type: 'arrow', content: '→' },
  { type: 'box', content: 'Train your model' },
  { type: 'arrow', content: '→' },
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

export default function Flowchart() {
  return (
    <FlowchartContainer>
      <FlowList>
        {items.map((item, idx) => (
          <motion.li
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={itemVariants}
            custom={idx}
            style={{ listStyle: 'none', display: 'flex', alignItems: 'center' }}
          >
            {item.type === 'box' ? (
              <FlowItem>{item.content}</FlowItem>
            ) : (
              <ArrowBetween>{item.content}</ArrowBetween>
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
  padding: 16px 48px 15px 48px;
  @media (min-width: 800px) {
    padding-top: 32px;
    padding-bottom: 15px;
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

const FlowItem = styled.div`
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

const ArrowBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0 2px;
  font-size: 1.5rem;
`;
