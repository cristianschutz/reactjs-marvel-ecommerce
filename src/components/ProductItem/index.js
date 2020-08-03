import React, { useState } from "react";
import { Container } from "./styles";
import { PayPalButton } from "react-paypal-button-v2";

export function ProductItem(props) {
  let { item } = props;
  let [checkoutToggle, setCheckoutToggle] = useState(false);
  let [success, setSuccess] = useState("");

  return (
    <Container>
      <article>
        <figure>
          <img
            src={item.thumbnail.path + "." + item.thumbnail.extension}
            alt={item.title}
          />
        </figure>

        <h6>{item.title}</h6>

        <div className="buy">
          <small>R$ 3.99</small>
          <button
            onClick={() => {
              setCheckoutToggle(!checkoutToggle);
            }}
          >
            COMPRAR
          </button>
        </div>
        {checkoutToggle && (
          <>
            <span className="paypal-backdrop"></span>
            <div className="paypal">
              <button
                className="paypal--close"
                onClick={() => {
                  setCheckoutToggle(!checkoutToggle);
                }}
              >
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
                  ></path>
                </svg>
              </button>
              {!success ? (
                <>
                  <h6 className="paypal--title">{item.title + " - R$ 3.99"}</h6>
                  <PayPalButton
                    amount="3.99"
                    currency="BRL"
                    options={{
                      intent: item.title,
                      disableFunding: "credit,card",
                    }}
                    onSuccess={(details, data) => {
                      setSuccess(
                        details.payer.name.given_name +
                          ", sua compra foi efetuada com sucesso! Aguarde mais informações no seu email do Paypal!"
                      );
                      setTimeout(() => {
                        setCheckoutToggle(false);
                        setSuccess("");
                      }, 2000);
                    }}
                  />
                </>
              ) : (
                <h6 className="paypal--alert">{success}</h6>
              )}
            </div>
          </>
        )}
      </article>
    </Container>
  );
}
