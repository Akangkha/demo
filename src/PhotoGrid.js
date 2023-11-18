import React, { useState, useEffect } from "react";
import "./App.css";
const PhotoGrid = () => {
  const [photos, setPhotos] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="photo-grid">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-item">
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
