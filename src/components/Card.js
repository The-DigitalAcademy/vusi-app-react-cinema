import React from 'react';
import { Link } from 'react-router-dom'
import "./Card.scss";


function card() {
  return (
    <div className="wrapper">
      <Card
        img="https://movies.sterkinekor.co.za/CDN/media/entity/get/FilmPosterGraphic/HO00002355?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500"
        title="Paws of Fury"

      />

      <Card
        img="https://lumiere-a.akamaihd.net/v1/images/p_shangchiandthelegendofthetenringshomeentupdate_22055_7b62fa67.jpeg?region=0%2C0%2C540%2C800"
        title="Shang-Chi"

      />

      <Card
        img="https://lumiere-a.akamaihd.net/v1/images/p_aladdin2019_17638_d53b09e6.jpeg"
        title="Aladdin"

      />

      <Card
        img="https://tafttoday.com/wp-content/uploads/2019/05/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_-1-568x900.jpg"
        title="Us"

      />

      <Card
        img="https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/luck-2022/large_luck-movie-poster-2022.jpeg"
        title="Luck"

      />

      <Card
        img="https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
        title="Bullet Train"

      />

      <Card
        img="https://m.media-amazon.com/images/M/MV5BNTA3N2Q0ZTAtODJjNy00MmQzLWJlMmItOGFmNDI0ODgxN2QwXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg"
        title="Morbius"

      />

      <Card
        img="https://stat1.bollywoodhungama.in/wp-content/uploads/2022/05/Cirkus-306x393.jpg"
        title="Cirkus"

      />

      <Card
        img="https://img.fmovies.ps/xxrz/250x400/306/44/8a/448ad9cae6a9f4c200501e3a766b5bd3/448ad9cae6a9f4c200501e3a766b5bd3.jpg"
        title="Om"

      />

      <Card
        img="https://img.fmovies.ps/xxrz/250x400/306/c1/0d/c10dc831ec6249df4bb3d156f56cbb2e/c10dc831ec6249df4bb3d156f56cbb2e.jpg"
        title="Finding Hubby"

      />

      <Card
        img="https://img.fmovies.ps/xxrz/250x400/306/6c/01/6c01acf87ffa3581d517f745008524e2/6c01acf87ffa3581d517f745008524e2.jpg"
        title="Pil's"

      />

      <Card
        img="https://img.fmovies.ps/xxrz/250x400/306/83/1b/831b66d422cc08771f00c3f2f1ff377d/831b66d422cc08771f00c3f2f1ff377d.jpg"
        title="The Stranger"

      />
    </div>
  );
}


function Card(props) {
  return (
    <div className="card-body">
      <div className="card-body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <Link className='link' to="/card__btn">
          <button className="card__btn">Play now</button>
        </Link>

      </div>
    </div>
  );
}

export default card;