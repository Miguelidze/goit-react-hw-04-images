import React from 'react';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ img, tags, modalImg, handleTogleModal }) {

    return (
        <li className={s.ImageGalleryItem} onClick={() => handleTogleModal(modalImg, tags)}>
            <img src={img} alt={tags} className={s.ImageGalleryItemImage} />
        </li>
    )
}
// import s from "./ImageGalleryItem.module.css"
// const ImageGalleryItem = ({ img, modalImg, handleTogleModal }) => {
//     return (
//         <li className={s.ImageGalleryItem}
//             onClick={() => handleTogleModal(modalImg)}>
//             <img className={s.ImageGalleryItemImage} src={img} alt="" />
//         </li >
//     );
// };
// export default ImageGalleryItem;