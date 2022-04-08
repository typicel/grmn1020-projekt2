import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import React from "react";

const InfoAccordian = () => {
  return (
    <div className="my-4 container">
      <h2>Sehenswürdigkeit</h2>
      <MDBAccordion>
        <MDBAccordionItem collapseId={1} headerTitle="Seven Falls">
          <h4>
            Wir beginnen unsere Tour beim Seven Falls. Seven Falls sind einen
            schönen Gruppe von Wasserfälle. Es ist eine Sehenswürdigkeit seit
            die 1880s gewessen.
          </h4>
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="Cave of the Winds">
          <h4>Cave of the Winds</h4>
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="Garden of the Gods">
          <h4>Garden of the Gods</h4>
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle="Pikes Peak">
          <h4>Pikes Peak</h4>
        </MDBAccordionItem>
      </MDBAccordion>
    </div>
  );
};

export default InfoAccordian;
