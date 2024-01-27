"use strict";
const year = document.querySelector("#year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
