const topBtn = document.getElementById("topBtn");
const toggleBtn = document.getElementById("toggleFaq");
const faqBox = document.getElementById("faqBox");
const aboutBtn = document.getElementById("about");
const contactBtn = document.getElementById("conect");

aboutBtn.addEventListener("click", () => {
    document.querySelector(".about").scrollIntoView({
        behavior: "smooth"
    });
});

contactBtn.addEventListener("click", () => {
    document.querySelector(".contact").scrollIntoView({
        behavior: "smooth"
    });
});;


window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



toggleBtn.addEventListener("click", () => {
    if (faqBox.style.display === "none") {
        faqBox.style.display = "block";
    } else {
        faqBox.style.display = "none";
    }
});








emailjs.init({
    publicKey: "vXcIvWAgYn19ZlWGR",
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.send(
        "service_hkr8un8",
        "template_bp21tgy",
        {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("message").value,
            title: document.getElementById("title").value,
        }
    )
    .then(() => {
        
        alert("تم إرسال الرسالة بنجاح");
    })
    .catch((error) => {
        alert("حدث خطأ");
        console.log(error);
    });
});




