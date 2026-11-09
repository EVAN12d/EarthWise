function openPurposeImage() {
    const lightbox = document.getElementById("purposeLightbox");
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";

}
function closePurposeImage() {
    const lightbox = document.getElementById("purposeLightbox");
    lightbox.classList.remove("active");
    document.body.style.overflow = "";

}
// Close image when pressing Escape
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closePurposeImage();
    }
});
