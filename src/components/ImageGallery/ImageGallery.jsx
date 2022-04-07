import React from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

export default function ImageGallery({ currentItems, handleTogleModal, }) {

    return (
        <ul className={styles.ImageGallery}>
            {currentItems.map(({ id, webformatURL, tags, largeImageURL }) => (<ImageGalleryItem
                key={id}
                img={webformatURL}
                tags={tags}
                modalImg={largeImageURL}
                handleTogleModal={handleTogleModal}
            />))}
        </ul>
    )
}
// import React from "react";
// import s from "./ImageGallery.module.css";
// import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

// const ImageGallery = ({ images, handleTogleModal}) => {
//     return (
//         < ul className={s.ImageGallery}>
//             {images.map(({ id, webformatURL, largeImageURL }) => (
//             <ImageGalleryItem
//             handleTogleModal={handleTogleModal}
//             modalImg={largeImageURL}
//             key={id}
//             img={webformatURL}/>
//         ))}
//     </ul >
//     );
// };

// export default ImageGallery;
