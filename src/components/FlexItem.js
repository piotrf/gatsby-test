import css from "styled-components";

const FlexItem = css.div`
  flex-basis: ${props => 100 / props.basis}%;
`;

export default FlexItem;
