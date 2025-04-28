    import express from "express"
    import { login, logout, register, update } from "../controllers/user.controller.js"
    import upload from "../middleware/multer.js"
import isauthentication from "../middleware/isauthentication.js"
    const router =express.Router()


    router.route("/register").post(register)
    router.route("/login").post(login)
    router.route("/logout").get(logout)
    router.route("/update").put(isauthentication, upload.single("profilephoto"),update)
    export default router
