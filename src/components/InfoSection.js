import React from "react";
import {
  FiHome,
  FiClock,
  FiPhoneCall,
  FiDollarSign,
  FiSun,
} from "react-icons/fi";

const InfoSection = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <img
          alt="map of the tour"
          className="m-4 accordian-image"
          style={{ width: "100%" }}
          src={require("../assets/map.jpg")}
        />
      </div>
      <div className="col-md-6">
        <div className="card-deck mx-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Zeit <FiClock />
              </h5>
              <p>Touren finden im Sommer statt (Juni-August)</p>
              <p className="card-text">
                <strong>Montag und Deinstag:</strong> Kein Touren
                <br />
                <strong>Mittwoch-Freitag:</strong> 9-14 Uhr
                <br />
                <strong>Samstag und Sonnstag:</strong> 9-14 Uhr und 14:30-18:30
                Uhr
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Adresse <FiHome />
              </h5>
              <div className="card-text">
                <p>
                  1045 Lower Gold Camp Rd<br></br>Colorado Springs, CO 80905
                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="card-deck mx-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Kontakt <FiPhoneCall />
              </h5>
              <div className="card-text">
                <p>
                  <strong>Telefon:</strong> +1 719-888-HOCH (4624)
                </p>
                <p>
                  <strong>E-Mail:</strong>
                  <a href="mailto:"> mhnt@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Preis <FiDollarSign />
              </h5>
              <div className="card-text">
                <p>
                  <strong>Erwachsene:</strong> $150
                  <br></br>
                  <strong>Kinder (12 und unter):</strong> $100
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="card-deck mx-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Wetter <FiSun />
              </h5>
              <p className="card-text">
                In Sommer (Wenn wir haben Touren), die Sonne scheint
                normalerweise. Bitte tragen sie leichte Kleidung, z.B. T-Shirt,
                Kurze Hosen. Bitte tragen sie auch Wnaderschuhe oder
                Tennisschuhe.
              </p>
            </div>
          </div>
        </div>
        <div className="my-4 d-flex flex-column justify-content-center align-center">
          <div>
            <button type="button" className="btn btn-primary">
              Buchen
            </button>
          </div>
          <div className="my-2">
            Sie sollten dein Tickets schenell buchen. Wir bringen nur 20 Menchen
            pro Tour mit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
