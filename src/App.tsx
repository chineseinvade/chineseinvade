import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./pages/Hero";
// import Intro from "./pages/Intro";

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                {/*<Intro />*/}
            </main>
            <Footer />
        </>
    );
}
