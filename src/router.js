const { Router } = require("express");
const { quizController, mainController, tagController, userAuthController, userController, levelController, adminController } = require("./controllers");
const { isConnected, isAdmin } = require ('./middlewares');

const router = Router();


router.get("/", mainController.renderHomePage);

router.get("/quiz/:id", isConnected, quizController.renderQuizPage);

router.get("/tags", tagController.renderTagsPage);

router.get("/signup", userAuthController.renderSignupPage);
router.post("/signup", userAuthController.doSignup);
router.get("/login", userAuthController.renderLoginPage);
router.post("/login", userAuthController.doLogin);
router.get("/logout", userAuthController.doLogout);

router.get("/profile", isConnected, userController.renderProfilePage);

router.get('/levels', isConnected, isAdmin, levelController.indexPage);
router.post('/levels/add', isConnected, isAdmin, levelController.addPage);
router.get('/levels/remove/:id', isConnected, isAdmin, levelController.removePage);
router.get('/levels/edit/:id', isConnected, isAdmin, levelController.editPage);
router.post('/levels/edit/:id', isConnected, isAdmin, levelController.updatePage);

router.get("/admin", isConnected, isAdmin, adminController.renderAdminPage);


module.exports = router;
