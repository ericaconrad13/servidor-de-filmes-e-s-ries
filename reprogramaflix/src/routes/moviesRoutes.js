const controller = require("../controllers/moviesControllers");

const express = require("express");
const router = express.Router();

router.get("/",controller.home);
router.get("/todos", controller.getAll);
router.get("/titulo", controller.getByTitle);
router.get("/:id", controller.getById);
module.exports = router
