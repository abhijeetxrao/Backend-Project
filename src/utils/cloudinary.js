import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadCloudinary = (localFilePath)=>{
  try{
    if (!localFilePath) return null
    const response = cloudinary.uploader.upload(localFilePath,{resource_type:"auto"})
    console.log("File has been uploaded successfully",response.url);
    return response;
  }
  catch(err){
    fs.unlinkSync(localFilePath) //It will remove the locally saved temporary file as upload got saved
    return null;
  }
}

export {uploadCloudinary}