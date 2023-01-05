import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "./components/Fallback";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error.js";
import Page404 from "./components/Page404";
import Navigation from "./components/Navigation";

function App() {
  const errorHandler = (error, errorInfo) => {
    console.log("logging", error, errorInfo);
  };

  return (
    <section>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Error" element={<Error />} />
            <Route path="/*" element={<Page404 />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </section>
  );
}

export default App;
