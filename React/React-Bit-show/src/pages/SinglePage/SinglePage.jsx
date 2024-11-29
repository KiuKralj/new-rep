import React from "react";
import "./SinglePage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export const SinglePage = ({ data }) => {
  const { id } = useParams();
  const [seasons, setSeasons] = useState([]);
  const [casts, setCasts] = useState([]);

  const show = data.find((show) => {
    return show.id === parseInt(id);
  });

  useEffect(() => {
    const seasonsURL = `https://api.tvmaze.com/shows/${id}/seasons`;

    fetch(seasonsURL)
      .then((response) => response.json())
      .then((data) => setSeasons(data));
  },[]);

  useEffect(() => {
    const castURL = `https://api.tvmaze.com/shows/${id}/cast`;

    fetch(castURL)
      .then((response) => response.json())
      .then((data) => setCasts(data));
  },[]);

  return (
    <>
      <Header />
      <div className="single-page">
        <div className="single-page-show-name">
          <h1>{show?.name}</h1>
        </div>
        <div className="wrapper">
          <div className="single-page-image">
            <img src={show?.image.medium} alt="show" className="show-image" />
          </div>
          <div className="seasons">
            <h2>{`Season (${seasons.length})`}</h2>
            <ul>
              {seasons.map((season) => (
                <li>
                  {season.premiereDate} - {season.endDate}
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="casts">
            <h2>Cast</h2>
            <ul>
              {casts.map((cast) => (
                <li key={cast.person.id}>
                  {cast.person.name}
                </li>
              ))}
            </ul>
          </div> */}
        </div>
        <div className="single-page-summary">
          <p dangerouslySetInnerHTML={{ __html: show?.summary }} />
        </div>
      </div>
      <Footer />
    </>
  );
};
