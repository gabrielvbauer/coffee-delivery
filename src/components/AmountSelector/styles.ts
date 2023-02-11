import styled from "styled-components";

export const Container = styled.div`
  height: 38px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-400']};

  span {
    font-size: 1rem;
    color: ${(props) => props.theme['gray-900']};
    line-height: 130%;
  }

  svg {
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple-500']};
    cursor: pointer;
  }
`