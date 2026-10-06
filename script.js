const startBtn = document.getElementById("startBtn");
const introSection = document.getElementById("intro");


// ===============================
// OPEN YOUR SURPRISE BUTTON
// ===============================

startBtn.addEventListener("click", function () {

    // अगले sections को दिखाओ
    document.body.classList.add("surprise-open");

    // थोड़ा नीचे जाकर Intro section पर ले जाओ
    setTimeout(function () {
        introSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 200);

});


// ===============================
// FINAL SURPRISE BUTTON
// ===============================

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

if (surpriseBtn) {

    surpriseBtn.addEventListener("click", function () {

        surpriseMessage.classList.add("show");

        surpriseBtn.innerHTML = "Surprise Opened 💖";

        createHearts();

    });

}


// ===============================
// HEART EFFECT
// ===============================

function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.innerHTML =
            ["💗", "💕", "💖", "✨", "🌸"][Math.floor(Math.random() * 5)];

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "70vh";
        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        heart.animate(
            [
                {
                    transform: "translateY(0) scale(1)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(-${300 + Math.random() * 400}px)
                         translateX(${Math.random() * 150 - 75}px)
                         scale(0.3)`,
                    opacity: 0
                }
            ],
            {
                duration: 2000 + Math.random() * 1000,
                easing: "ease-out"
            }
        );

        setTimeout(function () {
            heart.remove();
        }, 3500);
    }
}