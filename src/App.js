import { Container } from "react-bootstrap";
import SignupLogin from "./component/SigupLogin/SignupLogin";


function App() {
  return (
    <Container>
      <h1 className="my-4 text-center">Housing Board</h1>
      <SignupLogin></SignupLogin>
    </Container>
  );
}

export default App;
