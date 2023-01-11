import { Button } from "react-bootstrap";
import Introduction from "./components/Introduccion";
import NavbarMenu from "./components/NavbarMenu"

function App() {
  return (
    <div>
      <NavbarMenu />
      <Introduction/>
    </div>
  );
}

export default App;
