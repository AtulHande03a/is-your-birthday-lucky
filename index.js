const dateOfBirth = document.getElementById("date-of-birth");
const luckyNum = document.getElementById("lucky-num");
const checkBtn = document.getElementById("check-btn");
const unluckGif = document.getElementById("unlucky-image");
const luckyGif = document.getElementById("lucky-image");
const message = document.getElementById("message");

const compareValues = (sum, luckyNum) => {
  if (sum % luckyNum == 0) {
    //console.log("lucky");
    unluckGif.style.display = "block";
    message.textContent = "Congrats your birth date is lucky!!🎉";
  } else {
    //console.log("unlucky");
    luckyGif.style.display = "block";
    message.textContent = "Sorry, not lucky enough 😪";
  }
};

const checkBirthdayIsLucky = () => {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  compareValues(sum, luckyNum.value);
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
