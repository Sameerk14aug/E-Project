document.addEventListener('DOMContentLoaded', function() {
    const shows = [
        {
            title: "Hamlet",
            language: "english",
            date: "2024-03-15",
            image: "hamlet.jpg",
            description: "Shakespeare's classic tragedy"
        },
        {
            title: "Anarkali",
            language: "urdu",
            date: "2024-03-20",
            image: "anarkali.jpg",
            description: "A historical love story"
        },
        {
            title: "Romeo and Juliet",
            language: "english",
            date: "2024-04-01",
            image: "romeo.jpg",
            description: "A tale of star-crossed lovers"
        },
        {
            title: "Mughal-e-Azam",
            language: "urdu",
            date: "2024-04-10",
            image: "mughal.jpg",
            description: "Epic historical drama"
        },
        {
            title: "Chanakya",
            language: "hindi",
            date: "2024-04-15",
            image: "chanakya.jpg",
            description: "Political drama based on ancient India"
        },
        {
            title: "Dharti Ka Lal",
            language: "hindi",
            date: "2024-04-20",
            image: "dharti.jpg",
            description: "Social drama exploring rural life"
        },
        {
            title: "Othello",
            language: "english",
            date: "2024-05-01",
            image: "othello.jpg",
            description: "Shakespeare's tragic tale of jealousy"
        },
        {
            title: "Umrao Jaan",
            language: "urdu",
            date: "2024-05-10",
            image: "umrao.jpg",
            description: "Classic tale of a courtesan's life"
        },
        {
            title: "Andha Yug",
            language: "hindi",
            date: "2024-05-15",
            image: "andhayug.jpg",
            description: "Post-Mahabharata war drama"
        },
        {
            title: "Macbeth",
            language: "english",
            date: "2024-05-20",
            image: "macbeth.jpg",
            description: "The Scottish play of ambition"
        },
        {
            title: "Aangan Terha",
            language: "urdu",
            date: "2024-05-25",
            image: "aangan.jpg",
            description: "Satirical comedy on society"
        },
        {
            title: "Adhe Adhure",
            language: "hindi",
            date: "2024-06-01",
            image: "adhe.jpg",
            description: "Modern family drama"
        }
    ];

    const gallery = document.querySelector('.shows-gallery');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function displayShows(category) {
        gallery.innerHTML = '';
        shows.forEach(show => {
            if (category === 'all' || show.language === category) {
                const card = `
                    <div class="show-card">
                        <img src="${show.image}" alt="${show.title}">
                        <div class="show-info">
                            <h3>${show.title}</h3>
                            <p>${show.description}</p>
                            <div class="show-date">${show.date}</div>
                        </div>
                    </div>
                `;
                gallery.innerHTML += card;
            }
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            displayShows(this.getAttribute('data-filter'));
        });
    });

    // Initial display
    displayShows('all');
});
