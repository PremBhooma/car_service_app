import React from "react";
import ComponentsNav from "../Components/ComponentsNav";
import Footer from "../Components/Footer";
import EndFooter from "../Components/EndFooter";

import "./Offers.css";
import ComponentFaq from "../Components/ComponentFaq";

const Offers = () => {
  return (
    <>
      <ComponentsNav />

      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="cards-wrapper">
              <div className="card">
                <img
                  src="https://s3-alpha-sig.figma.com/img/561f/4807/f27f1924d2dba7e462acafd8f910cc16?Expires=1698624000&Signature=crjfz07eZS7fKCX9TmXVKqc~8hfWetqdqcbZIgf4U~TlLwA2o5IvDOi7bmixOWB90rQSyyFsgn2UgYucWTMvjRZnqt7WvJzBp8cdAcZNfendcEoyoiJLLHlX6Ve-o0yG6Q7HWciAT5Q2pH3szV3gGPCVROMQ-5cJjDdKL0Sq2vePS9hXcVIrnU2-Q-g4hpZpmCAomYatR5NhdBIOrLjw7esOt4a7iqmi7cPGMgKsrkFy6GkqR9JdT80mCmo~7rN5CJrNJgb0eGwOAjmHa3E0ZXR1-BCDFSBK2BwxjfEFA7MhCdM5SYffeQgdQdQvJh4hE8-5TP3MKXmCqJHgv94r-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card d-none d-md-block">
                <img
                  src="https://s3-alpha-sig.figma.com/img/e9c5/9c08/8c0bee99e4bf56bcc8e95aa9d3ec78d5?Expires=1698624000&Signature=M7-JeNH-ROv9nFRWG9dzHDMeYouFxW3lmx3a8MuErzhwOy8w3YKNPKm~AfKryA9JLMbRKvCqbrW5sV~kzmFCis6OQRMECmDoGGp0MiiM7ifiESFEt~mOpl9QZ~wpwQIoSJkAwvdq2dEi4PK4sCxH8fsOZQFDDxAfbY66OVH-Kh8yZEv~8VQ20PgLwjJ7WJGFfZs0-mdv65eT81akoj~4BD59BwXvB5~7Vdq51n6nY8hxjTTX2MpfLuAL361NU7HsCewW1SowueP6~BIjO8oyjWuVQ7RCcOXXiZlNX6skGoerO9pv80bcTYU7n~JNw~Ydq2slFK4XGw8HyrLJDOFstw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card d-none d-md-block">
                <img
                  src="https://s3-alpha-sig.figma.com/img/561f/4807/f27f1924d2dba7e462acafd8f910cc16?Expires=1698624000&Signature=crjfz07eZS7fKCX9TmXVKqc~8hfWetqdqcbZIgf4U~TlLwA2o5IvDOi7bmixOWB90rQSyyFsgn2UgYucWTMvjRZnqt7WvJzBp8cdAcZNfendcEoyoiJLLHlX6Ve-o0yG6Q7HWciAT5Q2pH3szV3gGPCVROMQ-5cJjDdKL0Sq2vePS9hXcVIrnU2-Q-g4hpZpmCAomYatR5NhdBIOrLjw7esOt4a7iqmi7cPGMgKsrkFy6GkqR9JdT80mCmo~7rN5CJrNJgb0eGwOAjmHa3E0ZXR1-BCDFSBK2BwxjfEFA7MhCdM5SYffeQgdQdQvJh4hE8-5TP3MKXmCqJHgv94r-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cards-wrapper">
              <div className="card">
                <img
                  src="https://s3-alpha-sig.figma.com/img/e9c5/9c08/8c0bee99e4bf56bcc8e95aa9d3ec78d5?Expires=1698624000&Signature=M7-JeNH-ROv9nFRWG9dzHDMeYouFxW3lmx3a8MuErzhwOy8w3YKNPKm~AfKryA9JLMbRKvCqbrW5sV~kzmFCis6OQRMECmDoGGp0MiiM7ifiESFEt~mOpl9QZ~wpwQIoSJkAwvdq2dEi4PK4sCxH8fsOZQFDDxAfbY66OVH-Kh8yZEv~8VQ20PgLwjJ7WJGFfZs0-mdv65eT81akoj~4BD59BwXvB5~7Vdq51n6nY8hxjTTX2MpfLuAL361NU7HsCewW1SowueP6~BIjO8oyjWuVQ7RCcOXXiZlNX6skGoerO9pv80bcTYU7n~JNw~Ydq2slFK4XGw8HyrLJDOFstw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card d-none d-md-block">
                <img
                  src="https://s3-alpha-sig.figma.com/img/561f/4807/f27f1924d2dba7e462acafd8f910cc16?Expires=1698624000&Signature=crjfz07eZS7fKCX9TmXVKqc~8hfWetqdqcbZIgf4U~TlLwA2o5IvDOi7bmixOWB90rQSyyFsgn2UgYucWTMvjRZnqt7WvJzBp8cdAcZNfendcEoyoiJLLHlX6Ve-o0yG6Q7HWciAT5Q2pH3szV3gGPCVROMQ-5cJjDdKL0Sq2vePS9hXcVIrnU2-Q-g4hpZpmCAomYatR5NhdBIOrLjw7esOt4a7iqmi7cPGMgKsrkFy6GkqR9JdT80mCmo~7rN5CJrNJgb0eGwOAjmHa3E0ZXR1-BCDFSBK2BwxjfEFA7MhCdM5SYffeQgdQdQvJh4hE8-5TP3MKXmCqJHgv94r-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card d-none d-md-block">
                <img
                  src="https://s3-alpha-sig.figma.com/img/e9c5/9c08/8c0bee99e4bf56bcc8e95aa9d3ec78d5?Expires=1698624000&Signature=M7-JeNH-ROv9nFRWG9dzHDMeYouFxW3lmx3a8MuErzhwOy8w3YKNPKm~AfKryA9JLMbRKvCqbrW5sV~kzmFCis6OQRMECmDoGGp0MiiM7ifiESFEt~mOpl9QZ~wpwQIoSJkAwvdq2dEi4PK4sCxH8fsOZQFDDxAfbY66OVH-Kh8yZEv~8VQ20PgLwjJ7WJGFfZs0-mdv65eT81akoj~4BD59BwXvB5~7Vdq51n6nY8hxjTTX2MpfLuAL361NU7HsCewW1SowueP6~BIjO8oyjWuVQ7RCcOXXiZlNX6skGoerO9pv80bcTYU7n~JNw~Ydq2slFK4XGw8HyrLJDOFstw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slideButtons">
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <ComponentFaq />

      <div className="footer">
        <Footer />
      </div>

      <div className="endFooter">
        <EndFooter />
      </div>
    </>
  );
};

export default Offers;
