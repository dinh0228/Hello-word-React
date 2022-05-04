import Helloword from "./components/Helloword";
import InputText from "./components/InputText";
import Button from "./components/Button";
import Container from "./components/Container";
import Image from "./components/Image";
function App() {
  return (
    <div className="App">
      <Helloword/>
      <Container>
      <InputText />
      <Button/>
      
      </Container>
      <Image/>
    </div>
  );
}
export default App;
