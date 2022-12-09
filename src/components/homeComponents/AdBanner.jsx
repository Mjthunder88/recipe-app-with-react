import React from "react";
import salmon from "../../assets/salmon.jpg";
import { Link, useNavigate } from "react-router-dom";
import classes from '../../UI/AdBanner.module.css'

const AdBanner = () => {
  return (
    <div
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${salmon})`,
        backgroundSize: "cover",
        width: "100%",
        height: "25em",
        marginBottom: "2rem"
      }}
    >
      <div className={classes.text}>
        <h3>New Recipe</h3>
        <h1 className={classes.main_header}>Pineapple Salmon</h1>
        <h3 className={classes.text_body}>
          This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
          brown sugar rub, baked for 25 minutes on a bed of pineapple, and garnished in butter, garlic, and chives. You won’t want to miss it!
        </h3>
        <Link to="/recipe-details/3">
          <button className={classes.main_button}>Check it out</button>
        </Link>
      </div>
    </div>
  );
};

export default AdBanner;
