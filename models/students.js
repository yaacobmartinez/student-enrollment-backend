const mongoose = require("mongoose");

const Student = new mongoose.Schema({
	PSABirthCertificateNo: {
		type: String,
	},
	LRN: {
		type: Number,
	},
	last_name: {
		type: String,
		required: [true, `Last Name is required.`],
	},
	first_name: {
		type: String,
		required: [true, `First Name is required.`],
	},
	middle_name: {
		type: String,
		required: [true, `Middle Name is required.`],
	},
	extension_name: {
		type: String,
	},
	date_of_birth: {
		type: Date,
		required: [true, `Date of Birth is required`],
	},
	sex: {
		type: String,
		enum: ["male", "female"],
		required: true,
	},
	houseNumberAndStreet: {
		type: String,
	},
	barangay: {
		type: String,
	},
	cityMunicipalityProvinceCountry: {
		type: String,
	},
	father_first_name: {
		type: String,
	},
	father_last_name: {
		type: String,
	},
	father_middle_name: {
		type: String,
	},
	mother_first_name: {
		type: String,
	},
	mother_last_name: {
		type: String,
	},
	mother_middle_name: {
		type: String,
	},
	guardian_first_name: {
		type: String,
	},
	guardian_last_name: {
		type: String,
	},
	guardian_middle_name: {
		type: String,
	},
	contact: {
		type: String,
	},
	student_type: {
		type: String,
	},
	gradeLevel: {
		type: Number,
	},
	course: {
		type: String,
	},
	track: {
		type: String,
	},
	strand: {
		type: String,
	},
	semester: {
		type: Number,
	},
	active: {
		type: Boolean,
		default: true,
	},
	verified: {
		type: Boolean,
		default: false,
	},
	date_created: {
		type: Date,
		required: true,
		default: Date.now,
	},
});

module.exports = mongoose.model("Student", Student, "students");
