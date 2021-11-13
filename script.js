"use strict";

const invested = document.querySelector("#invested");
const investedOutput = document.querySelectorAll(".invested-output");

const returned = document.querySelector("#returned");
const returnedOutput = document.querySelector(".returned-output");

let roi;

let investedAmount, returnedAmount, timePeriod;

invested.addEventListener("input", function (e) {
  e.preventDefault();

  investedAmount = Number(e.target.value);

  if (String(investedAmount).length === 0) {
    investedOutput.textContent = `~ CAKE 0.000`;
    return;
  }

  investedOutput[0].textContent = `~ CAKE ${investedAmount}`;
  investedOutput[1].textContent = `~ CAKE ${investedAmount}`;
});

returned.addEventListener("input", function (e) {
  e.preventDefault();

  returnedAmount = Number(e.target.value);

  if (String(returnedAmount).length === 0) {
    investedOutput.textContent = `~ CAKE 0.000`;
    return;
  }

  returnedOutput.textContent = ` ${returnedAmount} DON`;
});

//Timeframe

const timeframeList = document.querySelector(".timeframe-list");
let activeTimeframeList = document.querySelector(
  ".timeframe-list .roi-list-active"
);

timeframeList.addEventListener("click", function (e) {
  const list = e.target.closest(".roi-list-item");

  activeTimeframeList.classList.value = "roi-list-item";
  activeTimeframeList = list;
  list.classList.value = "roi-list-item roi-list-active";

  timePeriod = list.textContent;
  console.log(parseInt(timePeriod));
});

//APY

const apyList = document.querySelector(".apy-list");
let activeAPYList = document.querySelector(".apy-list .roi-list-active");

apyList.addEventListener("click", function (e) {
  const list = e.target.closest(".roi-list-item");

  console.log(list);
  activeAPYList.classList.value = "roi-list-item";
  activeAPYList = list;
  list.classList.value = "roi-list-item roi-list-active";

  timePeriod = list.textContent;
  console.log(parseInt(timePeriod));
});

//APY SWITCH
const apyListContainer = document.querySelector(".apy-list-container");
const apySwitch = document.querySelector("#apy-switch");

apySwitch.addEventListener("click", function () {
  if (apySwitch.checked === false) {
    apyListContainer.style.display = "none";
  }

  if (apySwitch.checked === true) {
    apyListContainer.style.display = "block";
  }
});

//Hide ROI
const roiContainer = document.querySelector(".roi-container");
const hideButton = document.querySelector(".hide-details");

let hide = "block";

hideButton.addEventListener("click", function () {
  if (hide === "block") {
    hide = "none";
    roiContainer.style.display = "none";
    hideButton.innerHTML = "<p>Hide Details ᐯ</p>";
    return;
  }

  if (hide === "none") {
    hide = "block";
    roiContainer.style.display = `${hide}`;
    hideButton.innerHTML = "<p>Hide Details ᐱ</p>";
    return;
  }
  //   hide = hide === "block" ? "none" : "block";
  //   roiContainer.style.display = `${hide}`;
});

//ROI Calculation
const roiCalculation = function (value) {
  // roi =
};
