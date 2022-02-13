import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.scss";
import footerLogo from "../../assets/icons/logoFotter.svg";
import playMarket from "../../assets/icons/playMarket.svg";
import appStore from "../../assets/icons/appleStore.svg";
import FooterItem from "../../components/Footer/FooterItem";
import FooterSocialItem from "../../components/Footer/FooterSocialItem";
import { useTranslation } from "react-i18next";

function Footer({ display, setDisplay }) {
  const { t, i18n } = useTranslation();
  return (
    <footer style={{ display: display }} className={classes.Footer}>
      <div className={classes.FooterTop}>
        <div className="container">
          <div>
            <div className={classes.Logo}>
              <Link to="/">
                <img src={footerLogo} alt="logo" />
              </Link>
              <div>
                <p>{t("foot1")}</p>
              </div>
            </div>
            <div className={classes.Text}>
              <p>
                {t("foot2")}
              </p>
            </div>
            <ul>
              <FooterSocialItem src={appStore} alt="apple store" />
              <FooterSocialItem src={playMarket} alt="apple store" />
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.FooterBottom}>
        <div className="container">
          <ul>
            <FooterItem title={t('foot3')} />
            <FooterItem title={t('foot4')} />
            <FooterItem title={t('foot5')} />
            <FooterItem title={t('foot6')} />
            <FooterItem title={t('foot7')} />
            <FooterItem title={t('foot8')} />
            <FooterItem title={t('foot9')} />
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
