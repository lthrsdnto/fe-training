import React from "react";

const Footer = ({ email, mobile }) => {
  return (
    <footer>
      Contact: {email} / {mobile}
    </footer>
  );
};

export default Footer;
