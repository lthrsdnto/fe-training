import React from "react";

const Header = ({ name, title, description }) => {
  return (
    <header>
      <h1>{name}</h1>
      <p>{title}</p>
      <p>{description}</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};

// Header.propTypes = {
//   title: PropTypes.string,
//   name: PropTypes.string,
//   description: PropTypes.string,
// };

export default Header;
