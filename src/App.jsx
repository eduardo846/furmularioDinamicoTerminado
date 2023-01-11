import { Button } from "react-bootstrap";
import DynamicForm from "./components/DynamicForm";
import Introduction from "./components/Introduccion/Introduction";
import NavbarMenu from "./components/NavbarMenu";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <NavbarMenu />
      <Introduction />
      <Services />
      <DynamicForm />
    </div>
  );
}

export default App;
