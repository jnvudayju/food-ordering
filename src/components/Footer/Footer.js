import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer font-small stylish-color-light pt-4 bg-dark text-light">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
              Food Ordering
            </h5>
            <p>Eat amazing food and be an amazing person ☺</p>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-2 mx-auto align-self-center">
            <ul className="list-unstyled ">
              <li>
                <a href="#!" className="text-muted h3">
                  Home
                </a>
              </li>
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-2 mx-auto align-self-center">
            <ul className="list-unstyled ">
              <li>
                <a href="#!" className="text-muted h3">
                  About
                </a>
              </li>
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-2 mx-auto align-self-center">
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-muted h3">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <ul className="list-unstyled list-inline text-center">
        <li className="list-inline-item">
          <a className="btn-floating btn-fb mx-1">
            <i className="fab fa-facebook-f"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-tw mx-1">
            <i className="fab fa-twitter"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-gplus mx-1">
            <i className="fab fa-google-plus-g"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-li mx-1">
            <i className="fab fa-linkedin-in"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-dribbble mx-1">
            <i className="fab fa-dribbble"> </i>
          </a>
        </li>
      </ul>
      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:{" "}
        <a href="#" className="text-muted">
          Food Ordering
        </a>
      </div>
    </footer>
  );
};

export default Footer;
