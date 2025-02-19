import About from "./components/about/About"
import Articles from "./components/articles/Articles"
import Banner from "./components/banner/Banner"
import BannerHook from "./components/banner/BannerHook"
import Footer from "./components/footer/Footer"
import HeroSection from "./components/banner/HeroSection"
import Header from "./components/header/Header"

export default function App() {
  return (
    <main className="w-full flex flex-col items-start">
        <Header />
        <Banner>
          <HeroSection />
          <BannerHook />
        </Banner>
        <About />
        <Articles />
        <Footer />
    </main>
  )
}