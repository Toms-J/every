import React, {useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './style.css'

function Carousel() {

  const [latestGames, setLatestGames] = useState([]);

  // $(".custom-carousel").owlCarousel({
  //   autoWidth: true,
  //   loop: true
  // });
  // $(document).ready(function () {
  //   $(".custom-carousel .item").click(function () {
  //     $(".custom-carousel .item").not($(this)).removeClass("active");
  //     $(this).toggleClass("active");
  //   });
  // });
  
  useEffect(() => {
    async function fetchLatestGames() {
      const response = await fetch("https://api.rawg.io/api/games?key=aacd6c24fe6c4b2c8a558496cad92c71");
      const data = await response.json();
      setLatestGames(data.results);
    }
    fetchLatestGames();
  }, []);

  const handleClick = (e) => {
    if (e.target.className == 'item active') {
      e.target.classList.remove('active');
    } else {
      e.target.classList.add('active');
    }
  }

  return (
    <>
      <section className="game-section">
        <h2 className="line-title">Popular games</h2>
        <OwlCarousel autoWidth='true' dots='false' lazyload='true' className="owl-carousel custom-carousel owl-theme">
          {
            latestGames.map((game, i) => { return (
              <div className="item" onClick={handleClick} key={i} style={{backgroundImage: `url(${game.background_image})`}}>
                <div className="item-desc">
                  <h3>{game.name}</h3>
                  <p>{game.genres.map((genre) => genre.name + ' ')}</p>
                </div>
              </div>
            )})
          }
        </OwlCarousel>
      </section>
    </>
  )

  
}

export default Carousel

