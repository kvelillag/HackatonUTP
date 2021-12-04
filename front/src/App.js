import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header";
import Menu from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
