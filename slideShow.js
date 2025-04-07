var slideIndex = 0 ;
showSlides();

function addSlide(n) { // khai baos function để gán sử dụng onclick cho button

    showSlides2(slideIndex += n); // gán function cho biến index của đối số nhập vào

}

function showSlides2(n) { // tạo function để chạy ảnh, hiện thị anh, và ẩn ảnh 

    var x = document.getElementsByClassName("conten__img-item"); // gọi đến img 

    if (n > x.length) { /// nếu lớn hơn thì ảnh sẽ puay lại vị trí ban đầu
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length; // ảnh nhỏ hơn sẽ puay lại vị trị lớn nhất
    }
    for (var i = 0; i < x.length; i++) { // dòng lập ẩn đi ảnh theo chiều dọc và hiiden ảnh còn lại

        x[i].style.display = "none"; // ẩn ảnh

    }

    x[slideIndex -1].style.display = "block"; // hiện thì lại ảnh


}

function showSlides() {
    var i;
    var x = document.getElementsByClassName("conten__img-item");
    for (var i = 0; i < x.length; i++) {

        x[i].style.display = "none";
    }
     slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    };
    x[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}