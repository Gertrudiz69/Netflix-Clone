import axios from "../axios";
import React, { useEffect, useState } from "react";
import requests from "../Request";
import { Nav, Rating, Loader, Row } from "../components";
import "./MovieScreen.css";
import { Link } from "react-router-dom";

function TvScreen() {
  const [tvSerie, setTvSerie] = useState([]);
  const [toggleCast, setToggleCast] = useState(true);
  const [date, setDate] = useState([]);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  // eslint-disable-next-line
  const [dir, setDir] = useState("");
  const [loading, setLoading] = useState(true);

  const pathname = window.location.pathname;
  const pathnameArr = pathname.split("/");
  const tvSerieId = pathnameArr[2];

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "/tv/" + tvSerieId + requests.fetchByID + "&language=es-MX"
      );
      setTvSerie(request.data);
      const dateTvSerieFirst = request.data.first_air_date;
      const dateTvSerieLast = request.data.last_air_date;
      const dateTvSerieFirstArr = dateTvSerieFirst.split("-");
      const dateTvSerieLastArr = dateTvSerieLast.split("-");
      const dateFirst = dateTvSerieFirstArr[0];
      const dateLast = dateTvSerieLastArr[0];
      const date = () => {
        if (dateFirst === dateLast) {
          return dateFirst;
        } else {
          return dateFirst + "-" + dateLast;
        }
      };
      setDate(date());
      setLoading(false);
      return request;
    }

    fetchData();
  }, [tvSerieId]);

  useEffect(() => {
    async function fetchCast() {
      const request = await axios.get("/tv/" + tvSerieId + requests.fetchCast);
      setCast(request.data.cast.filter((cast) => cast.profile_path));
      const crew = request.data.crew.filter((crew) => crew.profile_path);
      setCrew(
        crew.reduce((unique, item) => {
          return unique.find((i) => i.name === item.name)
            ? unique
            : [...unique, item];
        }, [])
      );
      const dirFil = await request.data.crew.filter(
        (dir) => dir.job === "Director"
      );
      setDir(dirFil[0]);
      setLoading(false);
      return { request, dirFil };
    }

    fetchCast();
  }, [tvSerieId]);

  const img_url = "https://image.tmdb.org/t/p/original";

  const fetchUrl = `/tv/${tvSerie.id}/${requests.fetchRecomended}`;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Nav />
          <div
            className="movieScreen"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url('https://image.tmdb.org/t/p/original${tvSerie?.backdrop_path}')`,
              backgroundPosition: "center center",
            }}
          >
            <div className="movieScreen__overlay" />
            <div className="movieScreen__container">
              <img src={img_url + tvSerie.poster_path} alt={tvSerie.title} />
              <div className="movieScreen__details">
                <h1>
                  {tvSerie.name} <span>({date})</span>
                </h1>
                <div className="movieScreen__genres">
                  {tvSerie.genres.map((type) => (
                    <Link key={type.name} to={`/tv/genere/${type.id}`}>
                      <span className="genre">{type.name}</span>
                    </Link>
                  ))}
                </div>
                <p>{tvSerie.overview}</p>
                <div className="movieScreen__info">
                  <Rating ratingNum={tvSerie.vote_average / 10} />
                  {crew.length > 0 ? (
                    <div className="btn--castCrew">
                      <button
                        className={toggleCast ? "btn--active" : ""}
                        onClick={() => setToggleCast(true)}
                      >
                        Cast
                      </button>
                      <button
                        className={!toggleCast ? "btn--active" : ""}
                        onClick={() => setToggleCast(false)}
                      >
                        Crew
                      </button>
                    </div>
                  ) : null}
                  {toggleCast ? (
                    <div className="cast__carousel">
                      {cast.map((cast) => (
                        <div className="castCard" key={cast.name}>
                          <Link to={`/people/${cast.id}`}>
                            <img
                              loading="lazy"
                              src={img_url + cast.profile_path}
                              alt={cast.name}
                            />
                            <h2>{cast.name}</h2>
                            <span>{cast.character}</span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="cast__carousel">
                      {crew.map((crew) => (
                        <div className="castCard" key={crew.name}>
                          <Link to={`/people/${crew.id}`}>
                            <img
                              loading="lazy"
                              src={img_url + crew.profile_path}
                              alt={crew.name}
                            />
                            <h2>{crew.name}</h2>
                            <span>{crew.job}</span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="banner--fadeBottom" />
          </div>
          <Row
            title="Recomendadas"
            id="recomendadas"
            idArrowR="arrowRecomendadasR"
            idArrowL="arrowRecomendadasL"
            fetchUrl={fetchUrl}
            isLargeRow
            isTvSeries={true}
          />
        </>
      )}
    </>
  );
}

export default TvScreen;
