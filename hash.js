const bcrypt = require("bcrypt");
async function run() {
  //const salt = await bcrypt.genSalt(10);
  const salt = "$2b$10$cB/CQ15GpUCl/oyfVstKMe";
  hash = await bcrypt.hash("1122", salt);
  //console.log(salt);
  console.log(hash);
}
run();
