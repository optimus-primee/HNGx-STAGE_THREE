// pages/gallery.tsx

import React from 'react';
import ImageGallery from '../../components/ImageGallery';
import { images } from '../../components/Images'

const GalleryPage: React.FC = () => {
  return (
    <div className="gallery-page">
      <h1>Image Gallery</h1>
      <ImageGallery images={images} />
    </div>
  );
};

export default GalleryPage;
