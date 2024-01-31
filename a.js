function zoomImage(element) {
    element.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
}

function unzoomImage(element) {
    element.style.boxShadow = 'none';
}

function showModal(imageSrc) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc;
    modal.style.display = 'block';
}

function hideModal() {
    document.getElementById('myModal').style.display = 'none';
}