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
          <h4></h4>
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="Garden of the Gods">
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the <code>.accordion-body</code>, though the transition does
          limit overflow.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle="Pikes Peak">
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the <code>.accordion-body</code>, though the transition does
          limit overflow.
        </MDBAccordionItem>
      </MDBAccordion>
    </div>
  );
};

export default InfoAccordian;
