document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    });
});

const testimonials = [
    { text: "Si necesitas que te arreglen la compu o te instalen un programa, esta es una buena opción.", author: "Jonathan M." },
    { text: "Excelente servicio, la atención fue muy amable y eficiente en el trabajo", author: "Uriel C." },
    { text: "Excelente servicio, rápido y confiable. ¡Recomendado 100%!", author: "Carlos M." },
    { text: "Me ayudaron con el formateo y todo quedó respaldado. ¡Buen trato!", author: "Diana R." },
    { text: "Armaron mi PC gamer justo como la quería, excelente asesoría.", author: "Luis G." },
    { text: "Siempre atentos, incluso después del servicio. Gracias.", author: "Julia V." },
    { text: "Me resolvieron un problema que otros no pudieron. ¡Cracks!", author: "Mario L." },
    { text: "Fueron súper rápidos, todo quedó funcionando perfecto.", author: "Karla S." }
];

const container = document.getElementById("testimonial-container");
let currentIndex = 0;

function getCardsToShow() {
    const width = window.innerWidth;
    if (width < 600) return 1;
    if (width < 1024) return 2;
    return 3;
}

function showTestimonials() {
    container.classList.add("fade-out");

    setTimeout(() => {
        container.innerHTML = "";

        const cardsToShow = getCardsToShow();
        const totalGroups = Math.ceil(testimonials.length / cardsToShow);
        const groupIndex = Math.floor(currentIndex / cardsToShow) % totalGroups;

        for (let i = 0; i < cardsToShow; i++) {
            const index = (groupIndex * cardsToShow + i) % testimonials.length;
            const item = testimonials[index];

            const card = document.createElement("div");
            card.className = "card-coment";
            card.innerHTML = `
          <i class="fas fa-quote-left"></i>
          <p>"${item.text}"</p>
          <h4>${item.author}</h4>
        `;
            container.appendChild(card);
        }
    }, 400);

    setTimeout(() => {
        container.classList.remove("fade-out");
    }, 450);
}

showTestimonials();
setInterval(() => {
    currentIndex += getCardsToShow();
    showTestimonials();
}, 5000);