function showDetails(item) {
    var detailsSection = document.getElementById('itemDetails');
    detailsSection.style.display = 'flex'; // Display the details section
    // You can dynamically load and display the details of the selected item here
}

function hideDetails() {
    var detailsSection = document.getElementById('itemDetails');
    detailsSection.style.display = 'none'; // Hide the details section
}

document.getElementById('bannerSection').addEventListener('mousemove', function(e) {
    const bannerImage = document.getElementById('bannerImage');
    const { offsetX, offsetY, target } = e;
    const { clientWidth, clientHeight } = target;

    const xPercentage = (offsetX / clientWidth) * 100;
    const yPercentage = (offsetY / clientHeight) * 100;

    bannerImage.style.setProperty('--mouse-x', `${xPercentage}%`);
    bannerImage.style.setProperty('--mouse-y', `${yPercentage}%`);
});

document.getElementById('bannerSection').addEventListener('mouseleave', function() {
    const bannerImage = document.getElementById('bannerImage');
    bannerImage.style.removeProperty('--mouse-x');
    bannerImage.style.removeProperty('--mouse-y');
    bannerImage.style.transform = 'translate(-50%, -50%) scale(1)';
});