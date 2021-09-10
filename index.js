const dateOfBirth = document.getElementById("date-of-birth");
const luckyNum = document.getElementById("lucky-num");
const checkBtn = document.getElementById("check-btn");
const unluckGif = document.getElementById("unlucky-image");
const luckyGif = document.getElementById("lucky-image");
const message = document.getElementById("message");

const showMessage = (msg) => {
  message.textContent = msg;
};
//compare dob and lucky number
const compareValues = (sum, luckyNum) => {
  if (sum % luckyNum == 0) {
    //console.log("lucky");
    luckyGif.style.display = "block";
    showMessage("Congrats your birth date is lucky!!🎉");
  } else {
    //console.log("unlucky");

    unluckGif.style.display = "block";
    showMessage("Sorry, not lucky enough 😪");
  }
};
const hideImage = () => {
  luckyGif.style.display = "none";
  unluckGif.style.display = "none";
};

const checkBirthdayIsLucky = () => {
  const dob = dateOfBirth.value;

  if (dob == "") {
    showMessage("Please enter yout birthdate");
    hideImage();
  } else if (luckyNum.value == "") {
    showMessage("Please enter your lucky Number");
    hideImage();
  } else {
    const sum = calculateSum(dob);
    compareValues(sum, luckyNum.value);
  }
};

//adding the number together in date
const calculateSum = (dob) => {
  //replace - using replaceAll
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (i = 0; i < dob.length; i++) {
    sum += Number(dob.charAt(i));
  }
  return sum;
};

checkBtn.addEventListener("click", checkBirthdayIsLucky);
