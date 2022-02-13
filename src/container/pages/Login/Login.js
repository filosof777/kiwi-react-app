import React, { useState } from "react";
import classes from "./Login.module.scss";
import kiwIcon from "../../../assets/icons/kiwi-icon.svg";
import prevArrow from "../../../assets/icons/prev-arrow.svg";
import { Link } from "react-router-dom";
import { t } from "i18next";

function Login() {
  const [time, setTime] = useState(90);

  const [displayOne, setDisplayOne] = useState("block");
  const [displayTwo, setDisplayTwo] = useState("none");
  const [displayThree, setDisplayThree] = useState("none");
  const [displayFour, setDisplayFour] = useState("none");
  const [text, setText] = useState("none");

  const [smallNumber, setSmallNumber] = useState("");
  const [bigNumber, setBigNumber] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [passwordValue, setPasswordValue] = useState("");
  const [code, setCode] = useState("");

  const [inputValue, setInputValue] = useState("");
  const [border, setBorder] = useState("1px solid #e0e0e0");

  function stepOneHandler() {
    if (inputValue !== "") {
      setDisplayOne("none");
      setDisplayTwo("block");
      setBorder("1px solid #e0e0e0");
      setText("none");
    } else {
      setBorder("1px solid red");
      setText("block");
    }
  }

  function stepTwoHandler() {
    if (smallNumber !== "" && bigNumber !== "" && email !== "") {
      setDisplayTwo("none");
      setDisplayOne("none");
      setDisplayThree("block");
      setBorder("1px solid #e0e0e0");
      setText("none");
    } else {
      setBorder("1px solid red");
      setText("block");
    }
  }

  function stepThreeHandler() {
    if (password !== "") {
      setDisplayThree("none");
      setDisplayTwo("none");
      setDisplayFour("block");
      setBorder("1px solid #e0e0e0");
      setText("none");
    } else {
      setBorder("1px solid red");
      setText("block");
    }
  }

  function stepFourHandler() {
    if (passwordValue !== "" && code !== "") {
      setDisplayFour("none");
      setDisplayThree("none");
      setDisplayOne("block");
      setBorder("1px solid #e0e0e0");
      setText("none");
    } else {
      setBorder("1px solid red");
      setText("block");
    }
  }

  return (
    <div className={classes.Login}>
      <div className="container">
        <div className={classes.Wrapper}>
          <div className={classes.Registration}>
            <form>
              <div style={{ display: displayOne }} className={classes.StepOne}>
                <h2>{t('log1')}</h2>
                <input
                  style={{ border: border }}
                  onChange={(e) => setInputValue(e.target.value)}
                  type="text"
                  placeholder={t('log3')}
                  value={inputValue}
                />
                <p style={{ display: text }} className={classes.Text}>
                {t('log4')}
                </p>
                <button onClick={stepOneHandler} type="button">
                  {t('log5')}
                </button>
              </div>
              <div style={{ display: displayTwo }} className={classes.StepTwo}>
                <label htmlFor="email">{t('log6')}</label>
                <input
                  style={{ border: border }}
                  className={classes.Email}
                  type="email"
                  id="email"
                  placeholder="example@kiwi.uz"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p style={{ display: text }} className={classes.Text}>
                {t('log7')}
                </p>
                <label htmlFor="number">{t('log8')}</label>
                <div className={classes.Input}>
                  <input
                    style={{ border: border }}
                    onChange={(e) => setSmallNumber(e.target.value)}
                    type="number"
                    id="number"
                    placeholder="998"
                    max={3}
                  />
                  <input
                    style={{ border: border }}
                    onChange={(e) => setBigNumber(e.target.value)}
                    type="number"
                    placeholder="99 987 65 43"
                  />
                </div>
                <p style={{ display: text }} className={classes.Text}>
                {t('log8')}
                </p>
                <span>
                  <a href="#">{t('log10')}</a>
                  {t('log11')}
                </span>
                <div className={classes.Button}>
                  <button
                    type="button"
                    onClick={() => {
                      setDisplayOne("block");
                      setDisplayTwo("none");
                    }}
                  >
                    <img src={prevArrow} alt="back" />
                  </button>
                  <button type="button" onClick={stepTwoHandler}>
                  {t('log12')}
                  </button>
                </div>
              </div>
              <div
                style={{ display: displayThree }}
                className={classes.StepThree}
              >
                <p>{t('log13')}</p>
                <p>{t('log8')}</p>
                <div>
                  <input
                    type="text"
                    value={smallNumber + " " + bigNumber}
                    disabled
                  />
                  <span>{time}s</span>
                </div>
                <input
                  style={{ border: border }}
                  onChange={(e) => setPassword(e.target.value)}
                  className={classes.Input}
                  type="text"
                  placeholder={t("log15")}
                />

                <p style={{ display: text }} className={classes.Text}>
                  {t("log15")}
                </p>
                <button onClick={stepThreeHandler} type="button">
                {t("log5")}
                </button>
              </div>
              <div
                style={{ display: displayFour }}
                className={classes.StepFour}
              >
                <p>
                {t('log16')}
                </p>
                <label htmlFor="text">{t('log17')}</label>
                <input
                  type="text"
                  onChange={(e) => setPasswordValue(e.target.value)}
                />
                <p style={{ display: text }} className={classes.Text}>
                {t('log18')}
                </p>
                <label htmlFor="password">{t('log19')}</label>
                <input
                  type="password"
                  placeholder="********"
                  onChange={(e) => setCode(e.target.value)}
                />
                <p style={{ display: text }} className={classes.Text}>
                {t('log20')}
                </p>
                <Link onSubmit={stepFourHandler} to="/" type="submit">
                {t('log24')}
                </Link>
              </div>
            </form>

            <div className={classes.LoginFooter}>
              <p>{t('log25')}</p>
              <a href="#">
              {t('log21')}
              </a>
            </div>
          </div>
          <div className={classes.Image}>
            <div>
              <img src={kiwIcon} alt="kiwi icon" />
              <p>{t('log22')}</p>
              <button>{t('log23')}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
