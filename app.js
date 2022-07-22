function phoneNumberChangeHandler() {
  const phoneNumberValue = document.getElementById("phoneNumber").value;
  const phoneNumberArray = phoneNumberValue.split("");

  const firstDigitsOfPhoneNumber = phoneNumberArray.slice(0, 4);

  const firstDigitsString = firstDigitsOfPhoneNumber
    .toString()
    .replace(/,/g, "");

  console.log(firstDigitsString, typeof phoneNumberArray);

  if (
    firstDigitsString === "0803" ||
    firstDigitsString === "0702" ||
    firstDigitsString === "0703" ||
    firstDigitsString === "0704" ||
    firstDigitsString === "0706" ||
    firstDigitsString === "0803" ||
    firstDigitsString === "0806" ||
    firstDigitsString === "0810" ||
    firstDigitsString === "0813" ||
    firstDigitsString === "0814" ||
    firstDigitsString === "0816" ||
    firstDigitsString === "0903" ||
    firstDigitsString === "0906"
  ) {
    const oldImg = document.querySelector(".inputDiv > div:last-child");
    oldImg.innerHTML =
      "<img src = './Assets/Images/MTN logo.svg' class = 'icon'/>";
  } else if (
    firstDigitsString === "0802" ||
    firstDigitsString === "0808" ||
    firstDigitsString === "0812" ||
    firstDigitsString === "0701" ||
    firstDigitsString === "0708" ||
    firstDigitsString === "0902" ||
    firstDigitsString === "0907" ||
    firstDigitsString === "0901"
  ) {
    const oldImg = document.querySelector(".inputDiv > div:last-child");
    oldImg.innerHTML =
      "<img src = './Assets/Images/AIRTEL logo.svg' class = 'icon'/>";
  } else if (
    firstDigitsString === "0805" ||
    firstDigitsString === "0807" ||
    firstDigitsString === "0811" ||
    firstDigitsString === "0705" ||
    firstDigitsString === "0815" ||
    firstDigitsString === "0905"
  ) {
    const oldImg = document.querySelector(".inputDiv > div:last-child");
    oldImg.innerHTML =
      "<img src = './Assets/Images/GLO logo.svg' class = 'icon'/>";
  } else if (
    firstDigitsString === "0809" ||
    firstDigitsString === "0817" ||
    firstDigitsString === "0818" ||
    firstDigitsString === "0908" ||
    firstDigitsString === "0909"
  ) {
    const oldImg = document.querySelector(".inputDiv > div:last-child");
    oldImg.innerHTML =
      "<img src = './Assets/Images/ETISALAT logo.svg' class = 'icon'/>";
  } else {
    const oldImg = document.querySelector(".inputDiv > div:last-child");
    oldImg.innerHTML = "<div></div>";
  }
}
