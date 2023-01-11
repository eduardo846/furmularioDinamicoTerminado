import { Button } from "react-bootstrap";
import Introduction from "./components/Introduccion";
import NavbarMenu from "./components/NavbarMenu"
import Services from "./components/Services";

function App() {
  return (
    <div>
      <NavbarMenu />
      <Introduction/>
      <Services />
    </div>
  );
}

export default App;
