import { token } from "./api_key";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const getTickers = async () => {
  const url =
    "https://api.polygon.io/v3/reference/tickers?&sort=ticker&order=asc&limit=1000";

  const response = await fetch(url, config);
  console.log("oops i did it again ");
  return response.json();
};

export const getTickerDetails = async (value) => {
  const url = `https://api.polygon.io/v1/meta/symbols/${value}/company?`;

  const response = await fetch(url, config);
  return response.json();
};

export const getstats = async (value) => {
  let d = new Date();
  d.setDate(d.getDate() - 3);

  let dd = d.getDate();
  let mm = d.getMonth() + 1;

  let yyyy = d.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  d = yyyy + "-" + mm + "-" + dd;
  const url = `https://api.polygon.io/v1/open-close/${value}/${d}?adjusted=true`;

  const response = await fetch(url, config);
  return response.json();
};
