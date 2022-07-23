function phoneNumberChangeHandler() {
  const phoneNumberValue = document.getElementById("phoneNumber").value;
  const phoneNumberArray = phoneNumberValue.split("");

  const firstDigitsOfPhoneNumber = phoneNumberArray.slice(0, 4);

  const firstDigitsString = firstDigitsOfPhoneNumber
    .toString()
    .replace(/,/g, "");

  const phoneNumberRegex = /^0[789][01][0-9]{8}$/;
  let phoneTest = phoneNumberRegex.test(phoneNumberValue);
  console.log(phoneTest);

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
    const oldImg = document.querySelector(".inputDiv > div:nth-child(3)");
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
    const oldImg = document.querySelector(".inputDiv > div:nth-child(3)");
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
    const oldImg = document.querySelector(".inputDiv > div:nth-child(3)");
    oldImg.innerHTML =
      "<img src = './Assets/Images/GLO logo.svg' class = 'icon'/>";
  } else if (
    firstDigitsString === "0809" ||
    firstDigitsString === "0817" ||
    firstDigitsString === "0818" ||
    firstDigitsString === "0908" ||
    firstDigitsString === "0909"
  ) {
    const oldImg = document.querySelector(".inputDiv > div:nth-child(3)");
    oldImg.innerHTML =
      "<img src = './Assets/Images/ETISALAT logo.svg' class = 'icon'/>";
  } else {
    const oldImg = document.querySelector(".inputDiv > div:nth-child(3)");
    oldImg.innerHTML = "<div></div>";
  }

  if (phoneTest === false) {
    document.getElementById("validationAlert").style.display = "block";
    document.getElementById("validationAlert").innerText =
      "This number is not valid*";
    document.getElementById("validationAlert").style.color = "#e20010";
    if (!phoneNumberValue) {
      document.getElementById("validationAlert").style.display = "none";
    }
  } else {
    document.getElementById("validationAlert").innerText =
      "This number is valid*";
    document.getElementById("validationAlert").style.color = "#2CC713";
  }
}

function dropdownToggleHandler() {
  const dropdown = document.getElementById("dropdown");
  const angleDown = document.getElementById("angleDown");

  dropdown.classList.toggle("active");
  angleDown.classList.toggle("active");
}

let counteries = [
  {
    title: "Ghana",
    flag: "./Assets/Icons/flag-icons-main/flags/1x1/gh.svg",
    isActive: false,
  },
  {
    title: "Nigeria",
    flag: "./Assets/Icons/flag-icons-main/flags/1x1/ng.svg",
    isActive: false,
  },
  {
    title: "Togo",
    flag: "./Assets/Icons/flag-icons-main/flags/1x1/tg.svg",
    isActive: false,
  },
  {
    title: "South Africa",
    flag: "./Assets/Icons/flag-icons-main/flags/1x1/za.svg",
    isActive: false,
  },
];

const country = counteries
  .map((data, i) => {
    return `<div onclick = activeChangeHandler(${i})>
    <img src = ${data.flag} />
    <p>${data.title}</p>
    </div>`;
  })
  .join("");

dropdown.innerHTML = country;

function activeChangeHandler(index) {
  const countryCopy = counteries.map((data, i) => {
    if (index === i) {
      return { ...data, isActive: true };
    }
    return { ...data, isActive: false };
  });

  counteries = countryCopy;
  console.log(counteries);

  if (counteries[index].isActive) {
    const activeFlag = counteries[index].flag;
    const newImg = `<img src=${activeFlag} id="countryFlag" />`;
    console.log(newImg);
    document.getElementById("dropdownMainInner").innerHTML = newImg;
  }
}

const dropDownMain = document
  .getElementById("dropdownMain")
  .querySelector("img:nth-child(1)");
console.log(dropDownMain);
