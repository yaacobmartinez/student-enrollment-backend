const Student = require("../models/students");

exports.getAll = async (req, res) => {
	try {
		const students = await Student.find({
			verified: true,
			active: true,
		});
		res.json(students);
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};
exports.getUnverified = async (req, res) => {
	try {
		const students = await Student.find({
			verified: false,
		});
		res.json(students);
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};
exports.getInactive = async (req, res) => {
	try {
		const students = await Student.find({
			active: false,
		});
		res.json(students);
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};

exports.getStudent = async (req, res) => {
	res.json(res.student);
};

exports.getStudentById = async (req, res, next) => {
	try {
		student = await Student.findById(req.params.id);
		if (student == null)
			return res
				.status(500)
				.json({ success: false, message: `Student Not Found` });
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
	res.student = student;
	next();
};

exports.add = async (req, res) => {
	const studentExists = await Student.findOne({
		last_name: req.body.last_name,
		first_name: req.body.first_name,
		middle_name: req.body.middle_name,
	});
	if (studentExists) {
		return res.status(500).json({
			success: false,
			message: `Student already exists`,
		});
	}
	const student = new Student({
		LRN: req.body.LRN,
		last_name: req.body.last_name,
		first_name: req.body.first_name,
		middle_name: req.body.middle_name,
		extension_name: req.body.extension_name,
		date_of_birth: req.body.date_of_birth,
		sex: req.body.sex,
		houseNumberAndStreet: req.body.houseNumberAndStreet,
		barangay: req.body.barangay,
		cityMunicipalityProvinceCountry: req.body.cityMunicipalityProvinceCountry,
		father_first_name: req.body.father_first_name,
		father_last_name: req.body.father_last_name,
		father_middle_name: req.body.father_middle_name,
		mother_first_name: req.body.mother_first_name,
		mother_last_name: req.body.mother_last_name,
		mother_middle_name: req.body.mother_middle_name,
		guardian_first_name: req.body.guardian_first_name,
		guardian_last_name: req.body.guardian_last_name,
		guardian_middle_name: req.body.guardian_middle_name,
		contact: req.body.contact,
		student_type: req.body.student_type,
		gradeLevel: req.body.gradeLevel,
		section: req.body.section,
		course: req.body.course,
		track: req.body.track,
		strand: req.body.strand,
		semester: req.body.semester,
	});
	const errors = student.validateSync();
	if (errors) {
		const error = Object.values(errors.errors);
		const e = getErrors(error);
		return res.status(500).json({ success: false, errors: e });
	}
	try {
		const newStudent = await student.save();
		res.json({ success: true, message: `Student added.` });
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};

exports.updateStudent = async (req, res) => {
	if (req.body.LRN != null) {
		res.student.LRN = req.body.LRN;
	}
	if (req.body.last_name != null) {
		res.student.last_name = req.body.last_name;
	}
	if (req.body.first_name != null) {
		res.student.first_name = req.body.first_name;
	}
	if (req.body.middle_name != null) {
		res.student.middle_name = req.body.middle_name;
	}
	if (req.body.extension_name != null) {
		res.student.extension_name = req.body.extension_name;
	}
	if (req.body.date_of_birth != null) {
		res.student.date_of_birth = req.body.date_of_birth;
	}
	if (req.body.sex != null) {
		res.student.sex = req.body.sex;
	}
	if (req.body.houseNumberAndStreet != null) {
		res.student.houseNumberAndStreet = req.body.houseNumberAndStreet;
	}
	if (req.body.barangay != null) {
		res.student.barangay = req.body.barangay;
	}
	if (req.body.cityMunicipalityProvinceCountry != null) {
		res.student.cityMunicipalityProvinceCountry =
			req.body.cityMunicipalityProvinceCountry;
	}
	if (req.body.father_first_name != null) {
		res.student.father_first_name = req.body.father_first_name;
	}
	if (req.body.father_last_name != null) {
		res.student.father_last_name = req.body.father_last_name;
	}
	if (req.body.father_middle_name != null) {
		res.student.father_middle_name = req.body.father_middle_name;
	}
	if (req.body.mother_first_name != null) {
		res.student.mother_first_name = req.body.mother_first_name;
	}
	if (req.body.mother_last_name != null) {
		res.student.mother_last_name = req.body.mother_last_name;
	}
	if (req.body.mother_middle_name != null) {
		res.student.mother_middle_name = req.body.mother_middle_name;
	}
	if (req.body.guardian_first_name != null) {
		res.student.guardian_first_name = req.body.guardian_first_name;
	}
	if (req.body.guardian_last_name != null) {
		res.student.guardian_last_name = req.body.guardian_last_name;
	}
	if (req.body.guardian_middle_name != null) {
		res.student.guardian_middle_name = req.body.guardian_middle_name;
	}
	if (req.body.contact != null) {
		res.student.contact = req.body.contact;
	}
	if (req.body.student_type != null) {
		res.student.student_type = req.body.student_type;
	}
	if (req.body.gradeLevel != null) {
		res.student.gradeLevel = req.body.gradeLevel;
	}
	if (req.body.section != null) {
		res.student.section = req.body.section;
	}
	if (req.body.course != null) {
		res.student.course = req.body.course;
	}
	if (req.body.track != null) {
		res.student.track = req.body.track;
	}
	if (req.body.strand != null) {
		res.student.strand = req.body.strand;
	}
	if (req.body.semester != null) {
		res.student.semester = req.body.semester;
	}

	try {
		const student = await res.student.save();
		res.json({
			success: true,
			message: `Student updated`,
		});
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};

exports.deleteStudent = async (req, res) => {
	try {
		const student = res.student.remove();
		res.json({ success: false, message: `Student removed` });
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};

const getErrors = (error) => {
	var e = {};
	for (var key in error) {
		if (error.hasOwnProperty(key)) {
			e[error[key].properties["path"]] = error[key].message;
		}
	}
	return e;
};
