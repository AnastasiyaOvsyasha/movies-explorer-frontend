const MOVIES_API_URL = "https://api.nomoreparties.co";
const MAIN_API_URL = "https://api.diploma.praktikum.nomoredomains.icu";
const EMAIL_REGEX =
  /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
const NAME_REGEX = /[A-Za-zА-Яа-я-\s]+$/;
const SHORT_DURATION = 40;
const CARDS_PER_PAGE_LARGE = 12;
const CARDS_PER_PAGE_MEDIUM = 8;
const CARDS_PER_PAGE_SMALL = 5;
const CARDS_ADD_LARGE = 3;
const CARDS_ADD_MEDIUM = 2;

export {
  MOVIES_API_URL,
  EMAIL_REGEX,
  MAIN_API_URL,
  NAME_REGEX,
  SHORT_DURATION,
  CARDS_PER_PAGE_LARGE,
  CARDS_PER_PAGE_MEDIUM,
  CARDS_PER_PAGE_SMALL,
  CARDS_ADD_LARGE,
  CARDS_ADD_MEDIUM,
};
