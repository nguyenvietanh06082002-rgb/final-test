//---back to top
const backToTopButton = document.getElementById("backToTop");

// Hiện nút khi cuộn xuống
window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Cuộn về đầu trang
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

//---open video
function swapImage(button, newSrc) {
    const mainImg = document.getElementById('mainVehicleImage');
    if (newSrc && newSrc !== 'placeholder') {
        mainImg.src = newSrc;
    }
    // Update active state on thumbnails
    document.querySelectorAll('.gallery-thumb').forEach(t => {
        t.classList.remove('ring-2', 'ring-primary-container', 'opacity-100');
        t.classList.add('opacity-70');
    });
    button.classList.add('ring-2', 'ring-primary-container', 'opacity-100');
    button.classList.remove('opacity-70');
}

function estimateShipping() {
    const zip = document.getElementById('destZip').value;
    const result = document.getElementById('shippingResult');
    if (!zip || zip.length < 5) {
        result.innerHTML = '<span class="text-error font-caption">Please enter a valid 5-digit US postal code.</span>';
        return;
    }
    result.innerHTML = `Enclosed Transit to <strong>${zip}</strong>: <strong>$1,250</strong> (ETA: 3-4 days via Plycar/Intercity).`;
}

const bookmarkBtn = document.getElementById('bookmarkBtn');
let isSaved = true;
bookmarkBtn.addEventListener('click', () => {
    isSaved = !isSaved;
    const savedCount = document.getElementById('savedCount');
    if (isSaved) {
        bookmarkBtn.classList.add('text-primary');
        savedCount.textContent = 'Saved';
    } else {
        bookmarkBtn.classList.remove('text-primary');
        savedCount.textContent = 'Save';
    }
});

function toggleCalcModal() {
    alert('Opening AutoHunt Direct Lending Calculator for Stock #AH-992-0481');
}

//---button video
const openButton = document.getElementById("openVideoButton");
const modal = document.getElementById("videoModal");
const closeButton = document.getElementById("closeVideo");
const video = document.getElementById("myVideo");

// Mở Modal
openButton.onclick = function () {
    modal.style.display = "flex";
    video.play();
};

// Đóng Modal
closeButton.onclick = function () {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
};

// Đóng khi nhấn ra ngoài Modal
modal.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0;
    }
};

//---Comment---
const commentForm = document.getElementById("commentForm");
const commentInput = document.getElementById("commentInput");

// Xử lý khi gửi bình luận
commentForm.addEventListener("", function (event) {

    // Ngăn form tải lại trang
    event.preventDefault();

    // Lấy nội dung và loại bỏ khoảng trắng đầu/cuối
    const commentText = commentInput.value.trim();

    // Kiểm tra nội dung
    if (commentText.length < 2) {
        alert("Bình luận phải có ít nhất 2 ký tự!");
        return;
    }
});

//---User Logout---
const username =
    localStorage.getItem("username") || "User";

const userEmail =
    localStorage.getItem("userEmail") || "";

const userNameElement =
    document.getElementById("userName");

const userEmailElement =
    document.getElementById("userEmail");

const menuUserNameElement =
    document.getElementById("menuUserName");

const userAvatarElement =
    document.getElementById("userAvatar");


// HIỆN TÊN
if (userNameElement) {

    userNameElement.textContent =
        username;

}


// HIỆN EMAIL
if (userEmailElement) {

    userEmailElement.textContent =
        userEmail;

}


// HIỆN TÊN TRONG DROPDOWN
if (menuUserNameElement) {

    menuUserNameElement.textContent =
        username;
}


// AVATAR LẤY CHỮ CÁI ĐẦU
if (userAvatarElement) {

    userAvatarElement.textContent =
        username.charAt(0).toUpperCase();

}


// MỞ / ĐÓNG USER MENU
function toggleUserMenu() {

    const menu =
        document.getElementById("userMenu");

    if (menu) {

        menu.classList.toggle("hidden");

    }

}


// CLICK RA NGOÀI THÌ ĐÓNG MENU
document.addEventListener("click", function (event) {

    const userArea =
        document.getElementById("userArea");

    const menu =
        document.getElementById("userMenu");

    if (
        userArea &&
        menu &&
        !userArea.contains(event.target)
    ) {

        menu.classList.add("hidden");

    }

});
// ĐĂNG XUẤT
function logout() {

    localStorage.removeItem("loginStatus");
    localStorage.removeItem("userRole");
    localStorage.removeItem("username");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("rememberLogin");

    alert("Đăng xuất thành công!");

    window.location.href = "CustomerLogin.html";

}

//---Admin logout---
// =========================
// ADMIN MENU
// =========================

function toggleAdminMenu() {

    const menu = document.getElementById("adminMenu");

    if (menu) {

        menu.classList.toggle("hidden");

    }

}

// =========================
// CLICK OUTSIDE
// =========================

document.addEventListener("click", function (event) {

    const adminArea = document.getElementById("adminArea");

    const adminMenu = document.getElementById("adminMenu");

    if (
        adminArea &&
        adminMenu &&
        !adminArea.contains(event.target)
    ) {

        adminMenu.classList.add("hidden");

    }

});


// =========================
// LOGOUT
// =========================

function logout() {

    localStorage.removeItem("loginStatus");
    localStorage.removeItem("userRole");
    localStorage.removeItem("username");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("rememberLogin");

    alert("Đăng xuất thành công!");

    window.location.href = "CustomerLogin.html";

}
