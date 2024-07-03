import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const Home = () => {
  const [films1, setFilms1] = useState([]);
  const [films2, setFilms2] = useState([]);
  const [films3, setFilms3] = useState([]);

  const fetchFilms = (url, setState) => {
    fetch(url)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((data) => {
        console.log("Risposta dal server", data);
        setState(data.Search);
      })
      .catch((e) => {
        console.log("Errore!", e);
      });
  };

  useEffect(() => {
    fetchFilms("http://www.omdbapi.com/?apikey=47ad4fc&s=spider-man", setFilms1);
    fetchFilms("http://www.omdbapi.com/?apikey=47ad4fc&s=harry potter", setFilms2);
    fetchFilms("http://www.omdbapi.com/?apikey=47ad4fc&s=pokemon", setFilms3);
  }, []);

  return (
    <div className="bg-container">
      <h1 className="text-white">Spider man Saga</h1>
      <Row>
        {films1.slice(0, 6).map((film) => (
          <Col key={film.imdbID} xs={12} md={4} lg={2} className="mb-4">
            <img className="img-fluid" src={film.Poster} alt="Movie" style={{ width: "200px" }} />
          </Col>
        ))}
      </Row>

      <h1 className="text-white">Harry Potter Saga</h1>
      <Row>
        {films2.slice(0, 6).map((film) => (
          <Col key={film.imdbID} xs={12} md={4} lg={2} className="mb-4">
            <img className="img-fluid" src={film.Poster} alt="Movie" style={{ width: "200px" }} />
          </Col>
        ))}
      </Row>

      <h1 className="text-white">Pokémon Saga</h1>
      <Row>
        {films3.slice(0, 6).map((film) => (
          <Col key={film.imdbID} xs={12} md={4} lg={2} className="mb-4">
            <img className="img-fluid" src={film.Poster} alt="Movie" style={{ width: "200px" }} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
