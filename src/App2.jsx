import Navbar from "./components/Navbar";
import Country from "./pages/country";
import { Wrapper } from "./styles/country.styled";
import CountryCard from "./components/CountryCard";

function App() {
  return (
    <div>
      <Navbar title="Where in the world?"></Navbar>
      <Wrapper>{/* <Country></Country> */}</Wrapper>
    </div>
  );
}

export default App;
