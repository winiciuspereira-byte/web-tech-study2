import Header from "./Components/Header";
import Router from "./Router";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <Router /> {/* O Router sozinho vai carregar o BrowserRouter e o Nav de forma segura */}
    </>
  );
}

export default App;
