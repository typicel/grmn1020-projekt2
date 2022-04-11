import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import React from "react";

const InfoAccordian = () => {
  return (
    <div className="my-4 container" style={{ width: "50%" }}>
      <h2>Sehenswürdigkeit</h2>
      <MDBAccordion>
        <MDBAccordionItem collapseId={1} headerTitle="Sieben Wasserfälle">
          <div className="mx-2 d-flex display-inline">
            <h4>
              Wir beginnen unsere Tour beim Sieben Wasserfälle. Sieben
              Wasserfälle sind einen schönen Gruppe von Wasserfälle. Es ist eine
              Sehenswürdigkeit seit die 1880s gewessen. Nachst, es gibt viele
              bunte Licher, die sie sehen können.
            </h4>
            <img
              alt="Seven Falls at night"
              className="accordian-image"
              src={require("../assets/fallsnight.jpg")}
            />
          </div>
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="Höhle der Winde">
          <h4>
            Die nächster Sehenswürdigkeit ist die schöne “Cave of the Winds”.
            Diese Höhle hat eine große Geschichte.
          </h4>
          <img
            alt="cave of the winds"
            className="accordian-image"
            style={{ width: "50%" }}
            src={require("../assets/cave4.webp")}
          />
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="Garten der Götter">
          <h4>
            Unsere nächster Sehenswurdigkeit ist sehr beliebt. Garden of the
            Gods ist ein Natur Park in der Nahe Pikes Peak. Es gibt viele, große
            orange-rot Gesteine. Wann die Vorbesitzer Charles Elliott Perkins
            hat gestorben, seine Familie hat die Park zu Colorado Springs
            geschenkt.
          </h4>
          <img
            alt="Garden of the Gods"
            className="accordian-image"
            src={require("../assets/gotg2.jpg")}
            style={{ width: "50%" }}
          />
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle="Pikes Peak">
          <h4>
            Die letze Sehenswürdigkeit ist Pikes Peak. Pikes Peak ist ein sehr
            großer Berg, der Colorado Springs ubersehen. Er ist 4.302m hoch. Wir
            werden ein Zug fahren, um die Top zu gehen. Wir werden der Stadt von
            Colorado Springs beim die ende von unser Tour ubersehen.
          </h4>
          <img
            alt="Pikes Peak"
            clasName="accordian-image"
            src={require("../assets/peaksummit.jpg")}
          />
        </MDBAccordionItem>
      </MDBAccordion>
    </div>
  );
};

export default InfoAccordian;
