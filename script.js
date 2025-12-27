console.log("موقع المهندس أحمد علي محمد عواد يعمل بنجاح 🌱");

document.getElementById("consultForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = this[0].value;
    const phone = this[1].value;
    const crop = this[2].value;
    const msg = this[3].value;

    const whatsappURL = `https://wa.me/201011156559?text=
الاسم: ${name}%0A
الهاتف: ${phone}%0A
المحصول: ${crop}%0A
المشكلة: ${msg}`;

    window.open(whatsappURL, "_blank");
});