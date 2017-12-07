import css from "styled-components";

const Flex = css.div`
  display: flex;
  flex-direction: ${props => props.direction};
`;

export default Flex;
