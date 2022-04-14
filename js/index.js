const handleSwitchClick = () => {
  const round = document.querySelector(".round");
  const annually = document.querySelector(".annually");
  const monthly = document.querySelector(".monthly");

  if (round.classList.contains("round-off")) {
    round.classList.remove("round-off");
    round.classList.add("round-on");
    annually.classList.add("selected");
    monthly.classList.remove("selected");
  } else {
    round.classList.remove("round-on");
    round.classList.add("round-off");
    annually.classList.remove("selected");
    monthly.classList.add("selected");
  }
};

const handleMonthlyClick = () => {
  const monthly = document.querySelector(".monthly");
  const annually = document.querySelector(".annually");
  monthly.classList.add("selected");
  annually.classList.remove("selected");
};

const handleAnnualyClick = () => {
  const annually = document.querySelector(".annually");
  const monthly = document.querySelector(".monthly");
  annually.classList.add("selected");
  monthly.classList.remove("selected");
};
