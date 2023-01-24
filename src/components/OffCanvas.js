import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Offcanvas } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowForward } from 'react-icons/io'
import "./OffCanvas.css";
import { Link } from "react-router-dom";

function OffCanvas({ movie, tv }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <Button variant="Link" onClick={handleShow} className="nav__overlayBtn">
        <AiOutlineMenu />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <Link
            className="nav__collapsedLink"
            onClick={() => window.scrollTo(0, 0)}
          >
            Inicio
          </Link>
          <div onClick={() => handleClick(0)}>
            <h3 className="nav__collapsedLink">Péliculas <IoIosArrowForward /></h3>
          </div>
          <div className="nav__linksGenre">
            {activeIndex === 0 &&
              movie.map((type) => (
                <a href={`/movies/genere/${type.id}`} key={type.id}>
                  {type.name}
                </a>
              ))}
          </div>
          <div onClick={() => handleClick(1)}>
            <h3 className="nav__collapsedLink">Series <IoIosArrowForward /></h3>
          </div>
          <div className='nav__linksGenre'>
            {activeIndex === 1 &&
              tv.map((type) => (
                <a href={`/tv/genere/${type.id}`} key={type.id}>
                  {type.name}
                </a>
              ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;
