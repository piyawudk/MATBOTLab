import React from "react";
import "./style.css";
import {
  FaHeart,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
      {socialprofils.mainweb && (
          <li>
            <a href={socialprofils.mainweb}>
              <FaHeart />
            </a>
          </li>
        )}
        {socialprofils.instagram && (
          <li>
            <a href={socialprofils.instagram}>
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Us</p>
    </div>
  );
};
