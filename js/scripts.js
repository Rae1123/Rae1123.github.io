function showDetails(projectTitle) {
    document.getElementById('projectTitle').innerText = projectTitle;
    document.getElementById('projectDetailsModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('projectDetailsModal').style.display = 'none';
}

// Close modal if clicked outside the modal content
window.onclick = function(event) {
    var modal = document.getElementById('projectDetailsModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}