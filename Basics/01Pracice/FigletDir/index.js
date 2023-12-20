var figlet = require("figlet");

figlet("Farhad Ali Shaikh", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});