import { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import "./App.css";

import Searchbar from "./components/Searchbar/Searchbar";
import Button from "./components/Button/Button";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import {fetchImages} from "./services/api";

export default function App() {

  const [imagesName, setImagesName] = useState('');
  const [currentPage, setCurrenPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [isPanding, setIsPanding] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImg, setModalImage] = useState('');
  const [modalTags, setModalTags] = useState('');
  const [endPage, setEndPage] = useState(1);

  useEffect(
    () => {
      setEndPage(1);
      fetchImages({ imagesName })
        .then(data => {
          (data.totalHits % 12) === 0
          ? setEndPage(data.totalHits / 12)
          : setEndPage(Math.floor(data.totalHits / 12) + 1)
        }
        )
    }
    , [imagesName]);

  useEffect(
    () => {
      if (isPanding) {
        fetchImages({ imagesName, currentPage })
          .then(response => {
            currentPage > 1
            ? setCurrentItems(prevItems => ([...prevItems, ...response.hits]))
            : setCurrentItems(response.hits);
          })
          .finally(() => setIsPanding(false));
      }
    }
    , [currentPage, imagesName, isPanding]);

  const handleFormSubmit = (imageName) => {
    setImagesName(imageName);
    setCurrenPage(1);
    setCurrentItems([]);
    setIsPanding(!isPanding);
  };

  const handleTogleModal = (image, tags) => {
    setIsModalOpen(!isModalOpen);
    setModalImage(image);
    setModalTags(tags);
  };

  const handleLoadMore = () => {
    setCurrenPage(currentPage + 1);
    setIsPanding(!isPanding);
  };


  console.log(endPage, currentPage);
  return (
    <div className="finder">
      <>
        <Searchbar handleFormSubmit={handleFormSubmit} />
        <ImageGallery className="finder"
          currentItems={currentItems}
          handleTogleModal={handleTogleModal}
        />
        {(endPage > currentPage && currentItems.length > 0) &&
          <Button handleLoadMore={handleLoadMore} />}
        {isModalOpen && <Modal
          modalImg={modalImg}
          modalTags={modalTags}
          handleTogleModal={handleTogleModal}
        />}
        <ToastContainer theme="dark"
          autoClose={4500}
        />
        {isPanding && <Loader />}
      </>
    </div>
  )
}


