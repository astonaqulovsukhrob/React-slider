import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import images from "./Components/ImageJs/Images";

function App() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="App">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 20, left: -width }}
          className="inner-carousel"
        >
          {images.map((image) => (
            <motion.div className="item" key={image}>
              <img src={image} alt="" />
              <a download href={image} className="download">
                <i class="bi bi-download"></i>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
