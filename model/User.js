const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	firstname: { type: String, trim: true },
	lastname: { type: String, trim: true },
	email: { type: String, unique: true, trim: true },
	phonenumber: { type: String, unique: true, trim: true },
	password: { type: String, unique: true, trim: true },
	role: { type: String, enum: ["generalManager", "parkingUnit", "batteryUnit"], default: null},
});

module.exports = mongoose.model('User', userSchema);