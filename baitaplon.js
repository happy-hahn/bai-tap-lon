
function locSach(theLoai) {
    const danhSachSach = document.querySelectorAll(".book-card");

    danhSachSach.forEach(function(sach) {
        if (theLoai === "all" ||
            sach.dataset.category === theLoai) {
            sach.style.display = "";
        } else {
            sach.style.display = "none";
        }
    });

    const danhSach = document.querySelector(".book-grid");

    if (danhSach) {
        danhSach.scrollIntoView({ behavior: "smooth" });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const thamSo = new URLSearchParams(window.location.search);
    const theLoai = thamSo.get("theloai");

    if (theLoai) {
        locSach(theLoai);
    }
});
