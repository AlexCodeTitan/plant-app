import HomePage from "./pages/HomePage/HomePage";
import { AppWrapper } from "./App.style";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <AppWrapper>
      <NavBar />
      <HomePage />
    </AppWrapper>
  );
}

export default App;
