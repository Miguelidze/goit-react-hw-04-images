
export const fetchImages = ({ imagesName, currentPage }) => {
    return fetch(`https://pixabay.com/api/?q=${imagesName}&page=${currentPage}&key=24956916-3e1f68b95206d43ba1c29444e&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => { return response.json() })
}
