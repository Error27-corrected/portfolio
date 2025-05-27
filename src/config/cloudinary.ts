import { Cloudinary } from 'cloudinary-react';

// Replace 'your_cloud_name' with the cloud name from your Cloudinary dashboard
export const cloudinaryConfig = {
  cloudName: 'your_cloud_name'  // Get this from your Cloudinary dashboard
};

export const cl = new Cloudinary({
  cloud_name: cloudinaryConfig.cloudName,
  secure: true
});

/*
To upload your profile picture:
1. Go to your Cloudinary dashboard
2. Click on "Media Library"
3. Click "Upload" button
4. Upload your profile picture
5. After uploading, rename it to "portfolio/profile"
6. The image will be available at: https://res.cloudinary.com/your_cloud_name/image/upload/portfolio/profile
*/ 