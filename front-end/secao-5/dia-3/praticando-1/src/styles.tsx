import styled from "styled-components";

  export const Title = styled.h1`
    border: 2px solid ${props => props.theme.borderColor};
    color: ${props => props.theme.textColor};
    margin: 5px auto;
    padding: 10px 20px;
  `;