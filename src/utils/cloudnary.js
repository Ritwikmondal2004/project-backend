import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        // quick check for configuration
        if (
            !process.env.CLOUDINARY_CLOUD_NAME ||
            !process.env.CLOUDINARY_API_KEY ||
            !process.env.CLOUDINARY_API_SECRET
        ) {
            throw new Error(
                "Cloudinary is not configured. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET in environment."
            );
        }

        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });

        // file has been uploaded successfully
        try {
            if (fs.existsSync(localFilePath)) fs.unlinkSync(localFilePath);
        } catch (e) {
            console.error("[uploadOnCloudinary] failed to remove temp file:", e && e.message ? e.message : e);
        }

        return response;
    } catch (error) {
        // log error for debugging and remove temp file if present
        console.error("[uploadOnCloudinary] upload failed:", error && error.message ? error.message : error);
        try {
            if (localFilePath && fs.existsSync(localFilePath)) fs.unlinkSync(localFilePath);
        } catch (e) {
            console.error("[uploadOnCloudinary] failed to remove temp file:", e && e.message ? e.message : e);
        }
        // rethrow so caller can handle the failure
        throw error;
    }
};

export { uploadOnCloudinary };