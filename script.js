const about = document.getElementById("about");
const conect = document.getElementById("conect");

about.addEventListener("click", function () {
    window.scrollTo(0, 3000);
});
conect.addEventListener("click", function () {
    window.scrollTo(0, 4000);
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
            message: document.getElementById("message").value
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




