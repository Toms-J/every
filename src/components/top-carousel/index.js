import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import '../main-carousel/style.css'

const TopCarousel = () => {

  const [latestGames, setLatestGames] = useState([]);
  const carouselOptions = {
    items: 3,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  };

  useEffect(() => {
    async function fetchLatestGames() {
      const response = await fetch("https://api.rawg.io/api/games?key=aacd6c24fe6c4b2c8a558496cad92c71&ordering=released");
      const data = await response.json();
      setLatestGames(data.results);
    }
    fetchLatestGames();
  }, []);

  const handleMouseEnter = (e) => {
      e.target.classList.add('active');
  }

  const handleMouseLeave = (e) => {
    e.target.classList.remove('active');
  }


  return (
    <section className="game-section" style={{marginTop: 64, marginBottom: -60}}>
    <h2 className="line-title">Recently added</h2>
    <OwlCarousel {...carouselOptions} autoWidth='true' style={{height: 'auto'}} className="owl-carousel custom-carousel owl-theme">
      {
        latestGames.map((game, i) => { return (
          <div className="item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={i} style={{backgroundImage: `url(${game.background_image})`}}>
            <div className="item-desc">
              <h3>{game.name}</h3>
              <p>{game.genres.map((genre) => genre.name + ' ')}</p>
            </div>
          </div>
        )})
      }
    </OwlCarousel>
    </section>
  );
};

export default TopCarousel;
