import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient.jsx";
import Header from "./components/header/Header.jsx";
import './index.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div>
          <Header />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
