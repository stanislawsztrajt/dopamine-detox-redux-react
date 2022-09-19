import { jwt } from "src/utils/constants";

export const milisecondsToTimer = (ms: number) => {
  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  const daysms = ms % (24 * 60 * 60 * 1000);
  const hours = Math.floor(daysms / (60 * 60 * 1000));
  const hoursms = ms % (60 * 60 * 1000);
  const minutes = Math.floor(hoursms / (60 * 1000));
  const minutesms = ms % (60 * 1000);
  const sec = Math.floor(minutesms / 1000);

  return `${Math.abs(days) > 9 ? Math.abs(days) : `0${Math.abs(days)}`}:${
    Math.abs(hours) > 9 ? Math.abs(hours) : `0${Math.abs(hours)}`
  }:${Math.abs(minutes) > 9 ? Math.abs(minutes) : `0${Math.abs(minutes)}`}:${
    Math.abs(sec) > 9 ? Math.abs(sec) : `0${Math.abs(sec)}`
  }`;
};

export const checkIsUserLoggedIn = () => {
  if (jwt) window.location.href = "/dashboard";
};

export const checkIsUserNotLoggedIn = () => {
  if (!jwt) window.location.href = "/login";
};

export const logout = () => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("user");

  window.location.href = "/";
};
