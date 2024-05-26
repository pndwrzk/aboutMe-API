const express = require("express");
const aboutController = require("../controllers/aboutController")


const router = express.Router();
const apiRoute = router.use("/api", router);

apiRoute.get("/aboutMe", aboutController.aboutMe)


module.exports = router;