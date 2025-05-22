import uniqid from "uniqid";
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  const formData = await req.formData();

  if (formData.has('file')) {
    const file = formData.get('file');
    
    // Collect file data
    const chunks = [];
    for await (const chunk of file.stream()) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);
    
    // Create unique filename
    const randomId = uniqid();
    const ext = file.name.split('.').pop();
    const newFilename = randomId + '.' + ext;
    
    // Create a temporary file path for Cloudinary upload
    // Buffer upload to Cloudinary
    try {
      // Convert buffer to base64 for Cloudinary
      const base64Data = buffer.toString('base64');
      const fileType = file.type;
      const base64File = `data:${fileType};base64,${base64Data}`;
      
      // Upload to Cloudinary
      const uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
          base64File,
          {
            folder: 'linkedtree',
            public_id: randomId,
            resource_type: 'auto'
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
      });
      
      // Return the secure URL of the uploaded image
      return Response.json(uploadResult.secure_url);
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      return Response.json({ error: 'Upload failed' }, { status: 500 });
    }
  }
}
