import { useState, useEffect } from 'react';
import FlipCard from './FlipCard'
import axios from 'axios';
import { API_URL } from "../api/Api";

const FlipCardList = () => {
    const [images, setImages] = useState([]);

    const getGalleryImages = async () => {
        try {
          const response = await axios.get(`${API_URL}/galleries`);
          // Limit the response to only the first 3 items
          const limitedImages = response.data.slice(0, 6);
          setImages(limitedImages);
        } catch (error) {
          console.error("Error fetching gallery images:", error);
        }
      }
    useEffect(() => {
        getGalleryImages();
    }, []);

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[40px] mt-[20px] lg:mt-[60px]">
                {images.map((img) => <FlipCard key={img._id} image={img} />)}
            </div>
        </div>
    )
}

export default FlipCardList