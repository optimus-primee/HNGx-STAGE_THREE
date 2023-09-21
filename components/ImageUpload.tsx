"use client"
import React, { useState } from 'react';

const ImageUpload: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    processImageFiles(files);
  };

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    processImageFiles(files);
  };

  const processImageFiles = (files: FileList | null) => {
    if (files && files.length > 0) {
      const imageUrls: string[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (file.type.startsWith('image/')) {
          const imageUrl = URL.createObjectURL(file);
          imageUrls.push(imageUrl);
        }
      }

      setImages([...images, ...imageUrls]);
    }
  };

  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        style={{
          border: '2px dashed #ccc',
          borderRadius: '5px',
          padding: '20px',
          textAlign: 'center',
          cursor: 'pointer',
        }}
      >
        <span style={{ fontSize: '18px' }}>Drag & Drop Images Here</span>
        <input
          type="file"
          accept="image/*"
          multiple
          style={{ display: 'none' }}
          onChange={handleFileInputChange}
        />
      </div>
      <div className="preview">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index}`} style={{ maxWidth: '100%' }} />
        ))}
      </div>
    </div>
  );
};

export default ImageUpload