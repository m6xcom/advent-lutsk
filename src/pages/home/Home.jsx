import MainSlider from "./components/MainSlider";
import Catalog from "./components/Catalog";

import '@scss/pages/home/index.scss'

function Home(){
    return(
        <main className="home">
            <MainSlider parentClass="home__main-slider"/>
            <Catalog parentClass="home__catalog"/>
        </main>
    )
}

export default Home