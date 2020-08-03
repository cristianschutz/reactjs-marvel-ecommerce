import styled from "styled-components";
import { colors } from "../../styles/global";

const Container = styled.div`
  background: ${colors.primary};
  position: fixed;
  z-index: 9;
  top: 0;
  width: 100%;
  transition: all 0.3s ease-in-out 0.3s;

  .logo {
    margin: 0 auto -1px;
    display: block;

    svg {
      margin: 0 auto;
      display: block;
      width: 130px;
      transition: all 0.3s ease-in-out;
    }
  }

  nav {
    display: block;
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    ul {
      align-items: center;
      display: flex;
      justify-content: center;
      list-style: none;
      margin: 0;
      padding: 0;
      width: 100%;

      &:hover {
        & > li > a {
          opacity: 0.5;
        }
      }

      & > li {
        & > a {
          align-items: center;
          border-bottom: 2px solid transparent;
          color: rgba(255, 255, 255, 0.95);
          display: flex;
          font-size: 12px;
          font-weight: 400;
          height: 40px;
          white-space: nowrap;
          letter-spacing: 1px;
          padding: 0 20px;
          text-decoration: none;
          text-transform: uppercase;
          transition: all 0.3s ease-in-out;
        }

        &.active,
        &:hover {
          & > a {
            border-color: ${colors.red};
            opacity: 1;
          }
        }
      }
    }

    @media (max-width: 470px) {
      overflow: scroll;
    }
  }

  &.active {
    top: -52px;
    .logo {
      svg {
        position: relative;
        width: 36px;

        path:first-of-type {
          display: none;
        }
      }
    }
  }
`;

export { Container };
