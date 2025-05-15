import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient.jsx";
import Header from "./components/header/Header.jsx";
import { CartProvider } from "./components/cart/CartContext.jsx";
import "./index.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <CartProvider> {/* 👈 Оборачиваем в CartProvider */}
        <BrowserRouter>
          <div>
            <Header />
          </div>
        </BrowserRouter>
      </CartProvider>
    </ApolloProvider>
  );
}

export default App;

