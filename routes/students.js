const express = require("express");
const router = express.Router();
const StudentController = require("../controllers/students");
const JWTController = require("../controllers/jwt_controller");
const verifyJWT = JWTController.verifyJWT;
const allowAction = JWTController.allowAction;

router.get(
	"/",
	[verifyJWT, allowAction("students", "find")],
	StudentController.getAll
);
router.post(
	"/",
	// [verifyJWT, allowAction("students", "create")],
	StudentController.add
);
router.get(
	"/:id",
	[
		verifyJWT,
		allowAction("students", "findOne"),
		StudentController.getStudentById,
	],
	StudentController.getStudent
);
router.patch(
	"/:id",
	[
		verifyJWT,
		allowAction("students", "update"),
		StudentController.getStudentById,
	],
	StudentController.updateStudent
);
router.delete(
	"/:id",
	[
		verifyJWT,
		allowAction("students", "delete"),
		StudentController.getStudentById,
	],
	StudentController.deleteStudent
);
module.exports = router;
