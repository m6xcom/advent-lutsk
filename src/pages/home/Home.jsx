import MainSlider from "./components/MainSlider";

import '@scss/pages/home/index.scss'

function Home(){
    return(
        <main className="home">
            <MainSlider parentClass="home__main-slider"/>
        </main>
    )
}

export default Home