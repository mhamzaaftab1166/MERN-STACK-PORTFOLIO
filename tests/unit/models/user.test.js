const { User } = require("../../../modules/user");
const jwt = require("jsonwebtoken");
const config = require("config");
const mongoose = require("mongoose");

describe("user.generateAuthToken", () => {
  it("should return a valid JWT", () => {
    const payload = {
      _id: new mongoose.Types.ObjectId().toHexString(),
      isAdmin: true,
    };
    const user = new User(payload);
    const token = user.generateAuthToken(); //test wali key use kry ga.
    const decoded = jwt.verify(token, config.get("jwtpk"));
    expect(decoded).toMatchObject(payload);
  });
});
