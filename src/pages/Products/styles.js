import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-left: -15px;
    padding: 0;
    width: calc(100% + 30px);

    li {
      width: 25%;
      display: flex;
      align-items: flex-start;
      padding: 0 15px;
      min-width: 242px;
      flex-direction: column;
    }

    @media (max-width: 970px) {
      li {
        width: 33.33%;
      }
    }
    @media (max-width: 768px) {
      li {
        width: 50%;
      }
    }
    @media (max-width: 502px) {
      li {
        width: 100%;
      }
    }
  }
`;

export { Container };
