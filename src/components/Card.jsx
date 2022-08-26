import React, { useState } from "react";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";
import "./Card.scss";

function CardContainer() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState('http://www.youtube.com/embed/xDMP3i36naA');

  return (
    <div className="wrapper">
      <Card
        img="https://movies.sterkinekor.co.za/CDN/media/entity/get/FilmPosterGraphic/HO00002355?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500"
        title="Paws of Fury"
        videoAddress="https://www.youtube.com/embed/vp-bhtqFu34"
        setShowVideo={setShowVideo}
        setVideoUrl={setVideoUrl}
      />

      <Card
        img="https://lumiere-a.akamaihd.net/v1/images/p_shangchiandthelegendofthetenringshomeentupdate_22055_7b62fa67.jpeg?region=0%2C0%2C540%2C800"
        title="Shang-Chi"
        videoAddress="https://www.youtube.com/embed/8YjFbMbfXaQ"
        setShowVideo={setShowVideo}
        setVideoUrl={setVideoUrl}
      />

      <Card
        img="https://lumiere-a.akamaihd.net/v1/images/p_aladdin2019_17638_d53b09e6.jpeg"
        title="Aladdin"
        videoAddress="https://www.youtube.com/embed/SWnRWV62T3s"
        setShowVideo={setShowVideo}
        setVideoUrl={setVideoUrl}
      />

      <Card
        img="https://tafttoday.com/wp-content/uploads/2019/05/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_-1-568x900.jpg"
        title="Us"
        videoAddress="https://www.youtube.com/embed/hNCmb-4oXJA"
        setShowVideo={setShowVideo}
        setVideoUrl={setVideoUrl}
      />

      <Card
        img="https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/luck-2022/large_luck-movie-poster-2022.jpeg"
        title="Luck"
        videoAddress="https://www.youtube.com/embed/xSG5UX0EQVg"
        setShowVideo={setShowVideo}
        setVideoUrl={setVideoUrl}
      />

      <Card
        img="https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
        title="Bullet Train"
        videoAddress="https://www.youtube.com/embed/_12ID6aK-Js"
        setShowVideo={setShowVideo}
        setVideoUrl={setVideoUrl}
      />

      <Card
        img="https://m.media-amazon.com/images/M/MV5BNTA3N2Q0ZTAtODJjNy00MmQzLWJlMmItOGFmNDI0ODgxN2QwXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg"
        title="Morbius"
        videoAddress="https://www.youtube.com/embed/oZ6iiRrz1SY"
        setShowVideo={setShowVideo}
        setVideoUrl={setVideoUrl}
      />

      <Card
        img="https://stat1.bollywoodhungama.in/wp-content/uploads/2022/05/Cirkus-306x393.jpg"
        title="Cirkus"
        videoAddress="https://www.youtube.com/embed/HUr5OJJS-qk"
        setShowVideo={setShowVideo}
        setVideoUrl={setVideoUrl}
      />

      <Card
        img="https://img.fmovies.ps/xxrz/250x400/306/44/8a/448ad9cae6a9f4c200501e3a766b5bd3/448ad9cae6a9f4c200501e3a766b5bd3.jpg"
        title="Om"
        videoAddress="https://www.youtube.com/embed/fYRiuY5_KXQ"
        setShowVideo={setShowVideo}
        setVideoUrl={setVideoUrl}
      />

      <Card
        img="https://img.fmovies.ps/xxrz/250x400/306/c1/0d/c10dc831ec6249df4bb3d156f56cbb2e/c10dc831ec6249df4bb3d156f56cbb2e.jpg"
        title="Finding Hubby"
        videoAddress="http://www.youtube.com/embed/xDMP3i36naA"
        setShowVideo={setShowVideo}
        setVideoUrl={setVideoUrl}
      />

      <Card
        img="https://img.fmovies.ps/xxrz/250x400/306/6c/01/6c01acf87ffa3581d517f745008524e2/6c01acf87ffa3581d517f745008524e2.jpg"
        title="Pil's"
        videoAddress="https://www.youtube.com/embed/4A0muKc83Nc"
        setShowVideo={setShowVideo}
        setVideoUrl={setVideoUrl}
      />

      <Card
        img="https://img.fmovies.ps/xxrz/250x400/306/83/1b/831b66d422cc08771f00c3f2f1ff377d/831b66d422cc08771f00c3f2f1ff377d.jpg"
        title="The Stranger"
        videoAddress="https://www.youtube.com/embed/KE4aF8eIDFc"
        setShowVideo={setShowVideo}
        setVideoUrl={setVideoUrl}
      />

      {showVideo && <Video setShowVideo={setShowVideo} videoUrl={videoUrl} />}
    </div>
  );
}

function Card(props) {
  const showVideo = () => {
    props.setVideoUrl(props.videoAddress)
    props.setShowVideo(true)
  }
  return (
    <div className="cardbody">
      <div className="card_body">
        <img src={props.img} className="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <Link className="link" to="/card__btn">
          <button className="card__btn" onClick={showVideo}>Play now</button>
        </Link>
      </div>
    </div>
  );
}



function Video({setShowVideo, videoUrl}) {
  return (
    <div className="myVideo">
      <Iframe
        url={videoUrl}
        width="100%"
        id="myId"
        className="myClassname"
        height="100%"
      />
      <button onClick={() => setShowVideo(false)}>Stop</button>
    </div>
  );
}


export default CardContainer;

<iframe width="950" height="534" src="https://www.youtube.com/embed/KE4aF8eIDFc" title="THE STRANGER IN OUR BED Official Trailer 2022 UK Thriller" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>