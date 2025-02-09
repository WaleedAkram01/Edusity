import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/title";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/gallery";
import Testimonials from "./Components/Testimonials/testimonials";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import Video from "./Components/Video/video";
function App() {
  // Means,initially the video will be hidden.
  let [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Title subtitle="Our PROGRAM" title="What We Offer" />
      <Programs></Programs>
      <About setPlayState={setPlayState} />
      <Title subtitle="Gallery" title="Campus Photos" />
      <Gallery></Gallery>
      <Title subtitle="TESTIMONIALS" title="What Student Says" />
      <Testimonials></Testimonials>
      <Title
        subtitle="Contact Us"
        title="Get in Touch
"
      />
      <Contact></Contact>
      <Footer></Footer>
      <Video playState={playState} setPlayState={setPlayState} />
    </div>
  );
}
export default App;
