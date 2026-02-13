const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const title = document.getElementById("title");
const image = document.getElementById("mainImage");
const buttonsContainer = document.querySelector(".buttons");

let noClickCount = 0;
let scale = 1;
let isEscaping = false;

const messages = [
    "Emin misin? 🥺",
    "Bir daha düşün... 💔",
    "Kalbimi kırıyorsun 😢",
    "Son kararın mı? 😔",
    "Son şansın iyi düşün 😈"
];

const images = [
    "images/2.gif",
    "images/3.gif",
    "images/4.gif",
    "images/5.gif",
    "images/6.gif"
];

noBtn.addEventListener("click", () => {

    if (noClickCount < messages.length) {
        title.innerHTML = messages[noClickCount];
        image.src = images[noClickCount];
    }

    noClickCount++;

    // Yes büyüsün
    scale += 0.2;
    yesBtn.style.transform = `scale(${scale})`;

    // 5. tıklamadan sonra kaçma aktif
    if (noClickCount >= 5 && !isEscaping) {
        isEscaping = true;
        noBtn.style.position = "absolute";
    }
});

noBtn.addEventListener("mouseenter", () => {
    if (!isEscaping) return;
    moveButton();
});

function moveButton() {

    const container = document.querySelector(".container");
    const rect = container.getBoundingClientRect();

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const padding = 10;

    const maxX = rect.width - buttonWidth - padding;
    const maxY = rect.height - buttonHeight - padding;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

yesBtn.addEventListener("click", () => {
    title.innerHTML = "Biliyordum! Seni hep seveceğim ve gıcık edeceğim! Sevgililer Günün Kutlu Olsun💖🥰";
    image.src = "images/7.gif";
    createHearts();
    noBtn.disabled = true;

});


function createHearts() {

    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heart.style.animationDuration = Math.random() * 2 + 2 + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}
