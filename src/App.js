import Navbar from "./components/Navbar";
import Country from "./pages/country";
import { Wrapper } from "./styles/country.styled";
import Countries from "./pages/countries";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar title="Where in the world?"></Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <Wrapper>
              <Countries></Countries>
            </Wrapper>
          }
        ></Route>
        <Route
          path=":country"
          element={
            <Wrapper>
              <Country></Country>
            </Wrapper>
          }
        ></Route>
      </Routes>

      <footer className="footer">
        &copy; 2022 Rest Countries API Frontend clone made with
        react/react-router-dom/{" "}
        <a href="https://restcountries.com/">restcountriesapi</a>
      </footer>
    </div>
  );
}

export default App;
