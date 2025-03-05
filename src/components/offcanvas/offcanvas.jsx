import React, { useState, useEffect } from 'react';
import './offcanvas.css';
import $ from 'jquery';
// import { FaTrash } from "react-icons/fa";

const Offcanvas = ({ updateSection }) => {

  const handleClick = () => {
    $("#menue").toggleClass('active');
    $("#menue").animate({ opacity: '0.7', right: '-400px' }, 500)
    $("#menue").css({ 'visibility': 'hidden' })
    $(this).css({ 'background-color': 'white' });
    $("#menuButton p").animate({ rotate: '0deg' })
    $("#menuButton").css({ 'background-color': 'white' });
  }


  return (
    <ul className="ul-offcanvas">
      <li>
        <button onClick={() => { updateSection("all"); handleClick() }}>
          1- All
        </button>
      </li>
      <li>
        <button onClick={() => { updateSection("kitchen"); handleClick() }}>
          1- Kitchen
        </button>
      </li>
      <li>
        <button onClick={() => { updateSection("barroom"); handleClick() }}>
          2- Barrroom
        </button>
      </li>
      <li>
        <button onClick={() => { updateSection("takeaway"); handleClick() }}>
          3- Takeaway
        </button>
      </li>
      <li>
        <button onClick={() => { updateSection("storeroom"); handleClick() }}>
          4- Storeroom
        </button>
      </li>
      <li>
        <button onClick={() => { updateSection("kalleh"); handleClick() }}>
          5- Kalleh
        </button>
      </li>
      <li>
        <button onClick={() => { updateSection("vegetable"); handleClick() }}>
          6- Vegetable
        </button>
      </li>
    </ul>
  );
}

export default Offcanvas;