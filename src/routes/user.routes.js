import {Router} from 'express'
import {registerUser} from "../controllers/user.controllers.js"
const router = Router()

router.route("api/v1/users/register").post(registerUser)

export default router;