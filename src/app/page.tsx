import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import MySelf from "@/components/MySelf";

const Home = () => {
  return (
    <main className="text-white">
      <Banner />
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
        <path
          fill="#161617"
          fill-opacity="1"
          d="M0,160L80,170.7C160,181,320,203,480,186.7C640,171,800,117,960,106.7C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
        <path
          fill="#161617"
          fill-opacity="1"
          d="M0,128L80,112C160,96,320,64,480,80C640,96,800,160,960,170.7C1120,181,1280,139,1360,117.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg> */}
      <MySelf />
      <Contact />
    </main>
  );
};
export default Home;
