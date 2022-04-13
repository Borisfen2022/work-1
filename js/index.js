const handleSwitchClick = () => {
  const round = document.querySelector(".round");

  if (round.classList.contains("round-off")) {
    round.classList.remove("round-off");
    round.classList.add("round-on");
  } else {
    round.classList.remove("round-on");
    round.classList.add("round-off");
  }
};

const handleMonthlyClick = (num) => {
  alert(num);
  const monthlyLabel = document.querySelector(".monthly");

  if (monthlyLabel.classList.contains("not-selected")) {
    monthlyLabel.classList.remove("not-selected");
  }

  let temp = 19;
  console.log(temp);

  getTemp(temp);
};

function getTemp {
  console.log(arg);
}
