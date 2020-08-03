import styled from "styled-components";

const Container = styled.div`
  ol {
    width: 100%;
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;

    li {
      font-size: 16px;
      text-transform: capitalize;
      &:after {
        content: " > ";
        padding: 0 8px;
        display: inline-flex;
        align-items: center;
      }

      &:last-of-type {
        font-weight: 700;

        &:after {
          display: none;
        }
      }
    }
  }
`;

export { Container };
