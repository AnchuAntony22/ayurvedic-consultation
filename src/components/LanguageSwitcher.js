import React from 'react';
import { useTranslation } from 'react-i18next';


const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('en')} className="btn btn-language">
        <img src={`${process.env.PUBLIC_URL}/Active/assets/img/flags/en.png`} alt="English" className="flag-icon" /> English
      </button>
      <button onClick={() => changeLanguage('sv')} className="btn btn-language">
        <img src={`${process.env.PUBLIC_URL}/Active/assets/img/flags/sv.png`} alt="Svenska" className="flag-icon" /> Svenska
      </button>
    </div>
  );
};

export default LanguageSwitcher;
