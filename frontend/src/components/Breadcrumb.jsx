import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ paths }) => {
  return (
    <nav className="text-gray-600 text-sm mb-4">
      {paths.map((path, index) => (
        <span key={index}>
          {index > 0 && <span> » </span>}
          {path.link ? (
            <Link to={path.link} className="hover:underline">
              {path.label}
            </Link>
          ) : (
            <span className="text-gray-800 font-semibold">{path.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
