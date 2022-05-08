import React from "react";
import { collection1 } from "../Componets/Spproduct";
import { Link } from "react-router-dom";
import "./Spring2022.css";

function Collection1() {
  return (
    <div className="collection">
      <div className="infor-contact fw-bold">
        <p>
          <Link to="/">Home</Link> / Bộ Sưu Tập
        </p>
        <p>Xuân 2022</p>
      </div>
      <h1>Alice + Olivia</h1>
      <h4>Spring 2022 Ready-to-wear Collection</h4>
      <p className="introduce">
        The Alice + Olivia presentation was a bit chaotic. Designer Stacey
        Bendet was caught up in the mashed-together crowd, trying hard to make
        it over to Sophia Richie, who had just walked in. Swarms of people
        gathered around them while the other human clusters stood in front of
        the multiple displays set up around the garage-style gallery space,
        trying eagerly to snap Instagram shots of the models wearing the Spring
        2020 collection. But this is how it usually goes with a Bendet
        production. Every season, the Alice + Olivia shows are wildly adorable
        and highly impressive in terms of how much thought and detail go into
        the elaborate sets, each a little vignette representing the narrative of
        that given season. It gets crowded, sure, but that’s part of the ethos
        of the brand: Make a statement, go big, and have fun.
        <br></br>
        As so many designers are currently thinking about switching up their
        traditional runway formats and opting for something more experiential,
        perhaps Bendet might think about doing the opposite. She’s been creating
        scenes and events for Alice + Olivia for quite some time now, and it
        would be refreshing to see her designs move and twirl and come even more
        alive in a proper show space. Especially her latest offering, which was
        focused on neon color-blocking and stronger, less precious, and flouncy
        silhouettes. Bendet’s suiting is getting stronger each season, and so is
        her attention to balancing out everyday separates with the A+O–fabulous
        cocktail and evening dresses.
        <br></br>
        She played with prints still, and she also tapped streetwear designer EV
        Bravado for a custom spray-paint print on denim. But it was tricky to
        really take in this newer, more streamlined story because of the
        presentation’s setup. It’s great that Bendet can still draw a huge crowd
        during a Fashion Week that has waned in excitement for many. That being
        said, it would be interesting to see her switch things up and send her
        playful world bouncing down a runway.
      </p>
      <h3>Collection</h3>
      <div className="headCollection">
        {collection1.map((img) => (
          <Link key={img.id} id={img.id} to="/">
            <img src={img.image}></img>
            Look {img.name}
          </Link>
        ))}
      </div>
      <button id="see_more">SEE ANOTHER COLLECTION</button>
    </div>
  );
}

export default Collection1;
