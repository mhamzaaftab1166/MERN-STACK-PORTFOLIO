const mongoose = require("mongoose");
const Joi = require("joi");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 15,
  },
  isGold: {
    type: Boolean,
    default: true, //be default means agr n dia to wo by defult true assign kry ga
  },
  phone: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 15,
  },
});
const Customer = mongoose.model("Customer", customerSchema);
function validateCustomer(customer) {
  const schema = {
    name: Joi.string().min(5).max(15).required(),
    phone: Joi.string().min(5).max(15).required(),
    isGold: Joi.boolean(),
  };

  return Joi.validate(customer, schema);
}
exports.Customer = Customer;
exports.validate = validateCustomer;
