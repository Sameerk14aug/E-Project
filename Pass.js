document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Form handling
    const feedbackForm = document.getElementById('feedbackForm');
    const queryForm = document.getElementById('queryForm');

    function validateForm(formData) {
        const errors = {};
        
        if (!formData.get('name').trim()) {
            errors.name = 'Name is required';
        } else if (formData.get('name').trim().length < 2) {
            errors.name = 'Name must be at least 2 characters';
        }
        
        if (!formData.get('email').trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get('email'))) {
            errors.email = 'Please enter a valid email';
        }
        
        if (!formData.get('message').trim()) {
            errors.message = 'Message is required';
        } else if (formData.get('message').trim().length < 10) {
            errors.message = 'Message must be at least 10 characters';
        }
        
        return errors;
    }

    function showError(input, message) {
        const formGroup = input.parentElement;
        formGroup.classList.add('error');
        const error = formGroup.querySelector('.error-message');
        error.textContent = message;
    }

    function clearErrors(form) {
        form.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
            const error = group.querySelector('.error-message');
            if (error) error.textContent = '';
        });
    }

    [feedbackForm, queryForm].forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            clearErrors(form);
            
            const formData = new FormData(form);
            const errors = validateForm(formData);
            
            if (Object.keys(errors).length === 0) {
                // Form is valid
                const formType = form.id === 'feedbackForm' ? 'feedback' : 'query';
                alert(`Thank you! Your ${formType} has been submitted successfully.`);
                form.reset();
            } else {
                // Show errors
                Object.keys(errors).forEach(field => {
                    const input = form.querySelector(`[name="${field}"]`);
                    showError(input, errors[field]);
                });
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Artists page filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const artistCards = document.querySelectorAll('.artist-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            artistCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Magazine page specific functionality
    const magazineCards = document.querySelectorAll('.magazine-card');

    // Add animation on scroll
    function checkScroll() {
        magazineCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight * 0.8;

            if (cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }

    // Initialize cards
    magazineCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.5s ease';
    });

    // Check scroll position
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check
});
