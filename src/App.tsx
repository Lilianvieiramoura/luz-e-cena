import Banner from "./components/Banner"
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
    <Header />
    <Banner src="./public/Imagens/banner.png" alt="Banner" />
    <MovieSection />
    <Banner src="./combo.png" alt="combo" />
    <Newsletter />
    </>
  )
}

export default App;
