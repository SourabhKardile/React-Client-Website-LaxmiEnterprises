import React from "react";
// import Background from '../images/hex.png'
export default function HeadingComponent() {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example"
      data-bs-offset="0"
      class="scrollspy-example"
      tabindex="0"
      className="container-fluid m-0 p-0"
      style={{ overflow: "hidden" }}
    >
      <div className="row p-5 mb-5">
        <div className="col-md-2"></div>
        <div
          className="col-md-6 mb-5 col-lg-6"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            className="display-5 text-danger"
            style={{
              fontFamily: "Roboto",
              fontWeight: "bold",
              letterSpacing: "3px",
            }}
          >
            LAXMI
          </div>
          <div
            className="display-2"
            style={{
              fontFamily: "Roboto",
              fontWeight: "bold",
              letterSpacing: "3px",
            }}
          >
            ENTERPRISES
          </div>
          <hr
            className="d-none d-sm-block"
            style={{ borderTop: "1px solid #808080" }}
          />
          <div
            className="h5 fw-normal"
            style={{ lineHeight: "1.5", fontStyle: "italic" }}
          >
            Transforming Ideas into Visual Masterpieces.
            <br />
            <span className="text-danger"> Your Vision, Our Craft.</span>
          </div>
        </div>
        <div className="col-md-4">
          <img
            src={require("../images/logo.png")}
            alt=""
            className="img-fluid"
          />
        </div>
      </div>

      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{ flex: 1, borderTop: "1px solid rgba(220, 53, 69, 0.3)" }}
        ></div>
        <img
          src={require("../images/gem.png")}
          alt=""
          width={"40"}
          style={{ margin: 15 }}
        />
        <div
          style={{ flex: 1, borderTop: "1px solid rgba(220, 53, 69, 0.3)" }}
        ></div>
      </div>
      <div>
        <h1>Services</h1>
      </div> */}
      <div
        id="about"
        className="container-fluid"
        style={{
          background: "#ff3334",
          //     backgroundImage: `url(${Background})`,
          // backgroundSize: 'cover',
          // backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="row mb-5">
          <div className="col-md-2"></div>
          <div className="col-md-4 mt-5 d-none d-md-block">
            <img
              src={require("../images/leftdesign.png")}
              alt="Background"
              style={{
                width: "auto",
                height: "auto",
                marginLeft: 10,
                marginTop: 40,
              }}
            />
          </div>
          <div className="col-md-5 mt-5 aboutpara">
            <h2
              className="fw-normal text-white text-uppercase "
              style={{ letterSpacing: "3px" }}
            >
              Elevating Brands through Innovative Design Solutions.
            </h2>
            <p
              className="mt-5"
              style={{ lineHeight: 2, color: "#ffffff", textAlign: "justify" }}
            >
              <b>Laxmi Enterprises</b> is your partner in transforming ideas
              into stunning visual narratives.Here it's not just about designs;
              it's about your vision, meticulously curated and brought to life
              by a passionate individual. I'm <b>Vishal Pawale</b>, the driving
              force behind Laxmi Enterprises, combining creativity and printing
              expertise to transform ideas into captivating visuals. Every
              design is carefully crafted, and every print is meticulously
              handled to ensure your vision is presented with precision and
              excellence. Discover the power of personalized design and
              precision printing.
            </p>
            <button
              type="button"
              className="btn mt-4"
              style={{
                backgroundColor: "#ffffff",
                color: "#ff3334",
                fontWeight: "bold",
                width: 130,
                borderRadius: 3,
              }}
            >
              About Us
            </button>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      
    </div>
  );
}
