document.getElementById("actionButton").addEventListener("click", function () {
    toggleContent();
    alert("Button clicked!");
});

// JavaScript for dynamic date in the footer
document.getElementById('currentYear').innerText = new Date().getFullYear();

// JavaScript for content toggle
function toggleContent() {
    var content = document.getElementById('description');
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}
