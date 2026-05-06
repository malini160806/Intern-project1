const searchInput = document.querySelector(".search-input-wrap input");

searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const query = searchInput.value.trim();
        if (query !== "") {
            alert("Searching for: " + query);
        }
    }
});


const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    item.addEventListener("click", function () {
        item.classList.toggle("active");
    });
});



const pills = document.querySelectorAll(".feature-pill, .pill");

pills.forEach(pill => {
    pill.addEventListener("click", function () {
        alert("Feature clicked: " + pill.innerText);
    });
});


const learnMore = document.querySelector(".learn-more");

if (learnMore) {
    learnMore.addEventListener("click", function () {
        window.scrollBy({
            top: 500,
            behavior: "smooth"
        });
    });
}

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 100);
    });
});