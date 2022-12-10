import React from 'react';

export const PaginationControl = () => {
  return (
    <nav>
    <ul className="col justify-content-center pagination ">
      <li className="page-item ">
        <a className="page-link" href="#" tabIndex="-1">Anterior</a>
      </li>
      <li className="page-item"><a className="page-link" href="#">1</a></li>
      <li className="page-item active">
        <a className="page-link" href="#">2 </a>
      </li>
      <li className="page-item"><a className="page-link">3</a></li>
      <li className="page-item">
        <a className="page-link">Siguente</a>
      </li>
    </ul>
  </nav>
  );
};
