import React, { useState } from 'react';
const ImageGallery = ({ images: galleryImages }) => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleImageClick = (image) => {
      setSelectedImage(image);
    };
  
    const defaultImages = [
    {
      thumbnailUrl: './assets/images/HomeCol1.png',
      fullImageUrl: './assets/images/GrafficHeader.png',
      
    },
    {
        thumbnailUrl: './assets/images/HomeCol1.png',
        fullImageUrl: './assets/images/GrafficHeader.png',
        
      },
      {
        thumbnailUrl: './assets/images/HomeCol1.png',
        fullImageUrl: './assets/images/GrafficHeader.png',
        
      },
      {
        thumbnailUrl: './assets/images/HomeCol1.png',
        fullImageUrl: './assets/images/GrafficHeader.png',
        
      },
  
  ];

  const allImages = galleryImages || defaultImages;

  return (
    <div>
      <div className="thumbnail-container">
        {allImages.map((image, index) => (
          <img
            key={index}
            src={image.thumbnailUrl}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="full-image-container">
          <img src={selectedImage.fullImageUrl} alt="Graffiti" />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;