import React from "react";

function FooterSocialItem({ src, alt}) {
  return (
    <li>
      <a href="#">
        <img src={src} alt={alt} />
      </a>
    </li>
  );
}

export default FooterSocialItem;
