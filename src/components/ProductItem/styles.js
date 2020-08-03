import styled from "styled-components";
import { colors } from "../../styles/global";

const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;

  figure {
    height: 290px;
    position: relative;
    overflow: hidden;
    width: 100%;
    margin: 0;
    z-index: 1;

    img {
      min-height: 100%;
      position: absolute;
      min-width: 100%;
      width: 100%;
      transform: translate(-50%, -50%);
      transition: all ease-in-out;
      left: 50%;
      top: 50%;
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      img {
        transform: translate(-50%, -50%) scale(1.2);
      }
    }
  }

  h6 {
    margin: 10px 0;
    font-size: 15px;
  }

  .buy {
    display: flex;
    justify-content: space-between;
    text-align: right;
    align-items: center;

    small {
      font-size: 20px;
    }

    button {
      align-items: center;
      background: ${colors.primary};
      color: #fff;
      display: flex;
      font-size: 14px;
      font-weight: 700;
      height: 35px;
      justify-content: center;
      cursor: pointer;
      padding: 0 8px;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: ${colors.red};
      }
    }
  }

  .paypal-backdrop {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 98;
  }

  .paypal {
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    left: 50%;
    padding: 60px 20px 20px;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 280px;
    z-index: 99;
    max-height: 70vh;
    overflow: scroll;

    &--title {
      text-align: center;
      font-weight: 700;
      font-size: 16px;
      margin: 0 0 10px;
      display: block;
    }

    &--alert {
      text-align: center;
      font-weight: 700;
      font-size: 16px;
      margin: 0 0 39px;
      color: green;
      display: block;
    }

    &--close {
      position: absolute;
      right: 8px;
      top: 3px;
      cursor: pointer;
      background: none;
      border: 0;
      color: #202020;
      svg {
        width: 15px;
      }
    }
  }
`;

export { Container };
