import React, { useState, useEffect } from 'react';
import './offcanvas.css';
// import { FaTrash } from "react-icons/fa";

const Offcanvas = ({updateSection}) => {



  return (
    <ul className="ul-offcanvas">
      <li>
        <button onClick={() => { updateSection("kitchen") }}>
          1- Kitchen
        </button>
      </li>
      <li>
        <button onClick={() => { updateSection("barroom") }}>
          2- Barrroom
        </button>
      </li>
      <li>
        <button onClick={() => { updateSection("takeaway") }}>
          3- Takeaway
        </button>
      </li>
      <li>
        <button onClick={() => { updateSection("storeroom") }}>
          4- Storeroom
        </button>
      </li>
      <li>
        <button onClick={() => { updateSection("kalleh") }}>
          5- Kalleh
        </button>
      </li>
      <li>
        <button onClick={() => { updateSection("vegetable") }}>
          6- Vegetable
        </button>
      </li>
    </ul>
  );
}

export default Offcanvas;