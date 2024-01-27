/* const year = document.querySelector("#year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear; */

// Fix, first variation
/* let year: HTMLElement | null = document.querySelector("#year");
let thisYear: string = new Date().getFullYear().toString();
if (year) {
  year.setAttribute("datetime", thisYear);
  year.textContent = thisYear;
} */

// Fix, second variation
const year = document.querySelector("#year") as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
