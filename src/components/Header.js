import React from "react";

const Header = () => {
  return (
    <>
      <h1 className="display-4 my-4">
        <strong>Meile Hoch Natur Tour</strong>
      </h1>
      <div className="my-4">
        <svg
          id="wave"
          style={{ transform: "rotate(180deg)", transition: 0.3 }}
          viewBox="0 0 1440 220"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop>
              <stop
                stop-color="rgba(72.746, 139.204, 98.682, 1)"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,44L84.7,44L169.4,154L254.1,110L338.8,66L423.5,154L508.2,132L592.9,0L677.6,88L762.4,66L847.1,154L931.8,154L1016.5,154L1101.2,66L1185.9,22L1270.6,88L1355.3,154L1440,66L1524.7,110L1609.4,132L1694.1,88L1778.8,132L1863.5,66L1948.2,154L2032.9,176L2032.9,220L1948.2,220L1863.5,220L1778.8,220L1694.1,220L1609.4,220L1524.7,220L1440,220L1355.3,220L1270.6,220L1185.9,220L1101.2,220L1016.5,220L931.8,220L847.1,220L762.4,220L677.6,220L592.9,220L508.2,220L423.5,220L338.8,220L254.1,220L169.4,220L84.7,220L0,220Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Header;
