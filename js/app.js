const endDate = "29 March 2025 10:00:00 AM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
  const end = new Date(endDate);
  const now = new Date();

  const diff = (end - now) / 1000; //converting milisec into sec by dividing by 1000

  //timeout
  if (diff < 0) return;

  //converting secs into days
  inputs[0].value = Math.floor(diff / 3600 / 24);
  //converting secs into hours excluding the hrs included in days
  inputs[1].value = Math.floor(diff / 3600) % 24;
  //converting secs into mins excluding the mins included in hrs
  inputs[2].value = Math.floor(diff / 60) % 60;
  //in secs excluding the sec included in mins
  inputs[3].value = Math.floor(diff) % 60;
};

setInterval(() => {
  clock();
}, 1000);
