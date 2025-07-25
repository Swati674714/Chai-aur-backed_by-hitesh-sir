// import { cloudinary} from "cloudinary";
// import fs from "fs"

//     cloudinary.config({ 
//         cloud_name  :  process.env.CLOUDINARY_CLOUD_NAME, 
//         api_key:  CLOUDINARY_API_KEY , 
//         api_secret: CLOUDINARY__API_SECRET
//     });


//     const uploadOncloudinary = async (localFilePath) => {
//         try {
//               if (!localFilePath) return null
//               //upload the file on cloudinary
//               cloudinary.uploader.upload(localFilePath , {
//                 resource_type : "auto"
//               })
//             // file has been uploaded successful
//            // console.log("file is uploaded on cloudinary",response.url);
//            fs.unlinkSync(localFilePath)
//             return response;

//         } catch (error) {
//               fs.unlinkSync(localFilePath)   //  remove the locally save temporary file as the upload operation got failed
//               return null;
//         }
//     }



//     export {uploadOncloudinary };
 
     
  import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configure cloudinary
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto"
    });

    // Remove file from local storage
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return response;
  } catch (error) {
    // Clean up local file if upload fails
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    console.error("Cloudinary upload error:", error);
    return null;
  }
};

export { uploadOnCloudinary };
