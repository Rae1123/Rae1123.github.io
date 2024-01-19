// main.js
document.addEventListener('DOMContentLoaded', function () {
    const contentContainer = document.getElementById('content-container');

    function loadContent(page) {
        fetch(`${page}.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${page}.html`);
                }
                return response.text();
            })
            .then(html => {
                contentContainer.innerHTML = html;
            })
            .catch(error => {
                console.error(error);
                // 여기에서 적절한 에러 처리를 추가할 수 있습니다.
            });
    }

    const menuItems = document.querySelectorAll('.menu');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            loadContent(item.id);
        });
    });
    
    const experienceItem = document.querySelectorAll('.experience-item');
    experienceItem.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = '#f0f0f0';
        });
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = '#fff';
        });
    });
});

function toggleDetails(projectId) {
    const projectDetails = document.getElementById(projectId);
    projectDetails.style.display = projectDetails.style.display === 'none' ? 'block' : 'none';
}

function openModal(imageId) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImg.src = document.getElementById(imageId).src;
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}


