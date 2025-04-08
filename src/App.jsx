import "./App.css";
import { Home } from "./components/sections/Home";
import { Map } from "./components/sections/Map";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <>
      <div>
        <Home />
        <Map />
      </div>
    </>
  );
}

export default App;
