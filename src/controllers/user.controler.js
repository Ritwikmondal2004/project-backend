import { asyncHandler } from "../utils/asyncHandler.js";


const userRegister = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "hello my name is ritwik"
    });
});

export { userRegister };