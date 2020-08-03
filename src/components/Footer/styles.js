import styled from "styled-components";
import { colors } from "../../styles/global";

const Container = styled.div`
  background: ${colors.primary};
  width: 100%;
  padding-top: 20px;

  .container {
    flex-wrap: wrap;
    display: flex;
  }

  .logo {
    svg {
      width: 80px;
    }
  }

  p,
  h4 {
    letter-spacing: 2px;
    font-size: 14px;
    color: #fff;
    line-height: 1.6;
    margin: 0 0 15px;
    text-align: left;
  }

  p {
    letter-spacing: 0;
  }

  ul {
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;

    &:hover {
      & > li > a {
        opacity: 0.3;
      }
    }

    li {
      a {
        align-items: center;
        color: rgba(255, 255, 255, 0.95);
        display: flex;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 1px;
        padding: 3px 0;
        text-decoration: none;
        text-transform: uppercase;
        transition: all 0.3s ease-in-out;
      }

      &.active,
      &:hover {
        & > a {
          opacity: 1;
        }
      }
    }
  }

  nav {
    margin-left: 50px;
    width: 20%;
  }

  address {
    font-style: normal;
    margin-left: auto;
  }

  nav.share {
    margin-left: auto;
    width: 200px;

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        width: 20%;

        a {
          display: block;
          padding-bottom: 3px;

          svg path {
            fill: rgba(255, 255, 255, 0.95);
          }
        }
      }
    }
  }

  small {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    a {
      color: #999;
      font-size: 12px;
      text-decoration: none;
      line-height: 1.2em;
      padding: 20px 10px;
    }
  }

  @media (max-width: 768px) {
    address {
      width: 100%;
      margin: 30px 0 20px;
    }
    nav.share {
      margin-left: 0;
    }
  }
`;

export { Container };
