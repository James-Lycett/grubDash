const crypto = require("crypto");

// generates random 16 character string to use when assigning new ids for orders and dishes
function nextId() {
  return crypto.randomBytes(16).toString("hex");
}

module.exports = nextId;
