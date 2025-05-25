import HeroComponent from "../components/home/HeroComponent.jsx";
import About from "../components/home/About.jsx";
import Features from "../components/home/Features.jsx";
import CTAComponent from "../components/home/CTAComponent.jsx";

const Home = () => {
  return (
    <div className=" py-14 sm:px-5 flex flex-col gap-20 ">
      <HeroComponent />
      <About />
      <Features />
      <div className=" sm:px-6 md:px-10">
        <CTAComponent />
      </div>
    </div>
  );
};

export default Home;
