import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />
      <Main a={"1"}>
        <h2>Hola Mundo!</h2>
      </Main>
      <Footer />
    </>
  );
}

export default App;