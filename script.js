// 1. Projects Data Object (Detailed Information in English)
const projectDetailsData = {
    p1: {
        title: 'Employee Data Analytics (100K Records)',
        category: 'Data Analytics & Machine Learning',
        description: 'This data analytics project focuses on processing an extensive enterprise dataset containing over 100,000 employee records. The pipeline includes end-to-end data engineering operations such as structural integrity cleaning, null value imputation, and anomaly handling. Advanced Exploratory Data Analysis (EDA) was performed alongside predictive machine learning algorithms to identify core operational patterns, culminating in a data-driven enterprise recommendation report.',
        tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'MS Excel', 'Machine Learning'],
        link: '#'
    },
    p2: {
        title: 'Language Learning Website',
        category: 'Full-Stack Web Development',
        description: 'A fully responsive, multi-page learning platform designed to provide a seamless language acquisition experience. The application integrates modular academic lessons, real-time interactive dictionary searching tools, and client-side progress dashboard configurations. Built with a secure backend structure using a MySQL database to manage user profiles, authorization tokens, and personal history logs.',
        tech: ['React.js', 'JavaScript (ES6)', 'Node.js', 'MySQL', 'CSS3 Layouts'],
        link: '#'
    },
    p3: {
        title: 'Banking Management System',
        category: 'Software Architecture & Data Structures',
        description: 'A core terminal application engineered in Java utilizing fundamental Object-Oriented Programming (OOP) paradigms. It securely models crucial banking procedures including user account instantiation, transactional log computations (deposits, transfers, and withdrawals), and historic dataset lookups. Integrated custom optimized data structures to ensure high-velocity lookup rates and strict operational processing stability.',
        tech: ['Java', 'IntelliJ IDEA', 'Data Structures', 'OOP Concepts'],
        link: '#'
    },
    p4: {
        title: 'Mini Operating System',
        category: 'Low-Level System Engineering',
        description: 'Developed a lightweight standalone operational framework programmed entirely in Assembly language to simulate low-level hardware micro-architectures. Running directly on the Emu8086 register architecture, it features fully functional desktop utility models including a core binary arithmetic Calculator, a real-time system digital Clock, an interactive custom Typing Speed Testing environment, and a game subsystem.',
        tech: ['Assembly Language', 'Emu8086 micro-architecture'],
        link: '#'
    },
    p5: {
        title: 'Book Search System',
        category: 'Theory of Automata & Databases',
        description: 'An advanced library system designed by implementing state-machine theory and pattern-matching mathematical engines. By utilizing core Theory of Automata (TOA) concepts, incoming user queries are translated and processed via state transitions to optimize the underlying database indexing. This methodology dramatically reduces text string retrieval latencies and ensures fast search matching.',
        tech: ['Java', 'SQL Server', 'Theory of Automata (TOA)', 'Pattern Matching'],
        link: '#'
    },
    p6: {
        title: 'Amazon & Dawn News Clones',
        category: 'Frontend UI/UX Layouts',
        description: 'Pixel-perfect desktop layouts built from scratch to master modern semantic markup and flexible presentation guidelines. The project reproduces high-traffic consumer interfaces with meticulous attention to clean structural layouts, multi-tier nested navigation grids, interactive CSS transition keyframes, and cross-device structural responsiveness.',
        tech: ['HTML5 Semantic Elements', 'CSS3 Flexbox & Grid', 'VS Code UI Design'],
        link: '#'
    }
};

// 2. DOM Initialization & Loader handling
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }, 800);
    }

    initTypeEffect();
    initScrollEffects();
    initNavbar();
    initThemeToggle();
    initProjectModal(); 
    initProjectFilters();
    initContactForm();
    initParticles();
});

// 3. Automated Typing Text Configuration
function initTypeEffect() {
    if (document.getElementById('typing')) {
        new Typed('#typing', {
            strings: ['Computer Science Undergraduate', 'Python Developer', 'Data Analyst', 'Web Developer'],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true
        });
    }
}

// 4. Dynamic Pop-up Modal Operations (Labels updated to English)
function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const modalData = document.getElementById('modalData');
    const closeBtn = document.querySelector('.close-modal');
    
    document.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('view-details-btn')) {
            e.preventDefault();
            
            const projectId = e.target.getAttribute('data-project');
            const data = projectDetailsData[projectId];

            if (data && modal && modalData) {
                let techTagsHTML = data.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
                
                // All tags and headings converted to English
                modalData.innerHTML = `
                    <h2 style="font-size:1.8rem; margin-bottom:0.5rem; font-weight:700;">${data.title}</h2>
                    <p class="modal-category"><strong>Category:</strong> ${data.category}</p>
                    <hr style="opacity:0.1; margin-bottom:1rem;">
                    <p class="modal-desc">${data.description}</p>
                    <h4 style="margin-bottom:0.5rem; font-size:1rem; color:#fff;">Technologies Used:</h4>
                    <div class="modal-tech-tags">${techTagsHTML}</div>
                    <a href="${data.link}" class="btn" target="_blank" style="margin-top:2rem; display:inline-block; width:max-content;">View Source Code</a>
                `;
                
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden'; 
            }
        }
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// 5. Filter Controls Logics
function initProjectFilters() {
    const searchInput = document.getElementById('projectSearch');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    function filterProjects() {
        const searchValue = searchInput ? searchInput.value.toLowerCase() : '';
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');

        projectCards.forEach(card => {
            const title = card.getAttribute('data-title').toLowerCase();
            const category = card.getAttribute('data-category');

            const matchesSearch = title.includes(searchValue);
            const matchesFilter = (activeFilter === 'all' || category === activeFilter);

            if (matchesSearch && matchesFilter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterProjects);
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProjects();
        });
    });
}

// 6. Responsive UI Menus & Active Track Links
function initNavbar() {
    const menuBtn = document.getElementById('menuBtn');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('#navbar ul li a');

    if (menuBtn && navbar) {
        menuBtn.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuBtn.classList.toggle('fa-times');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            if (menuBtn) menuBtn.classList.remove('fa-times');
        });
    });

    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
}

// 7. Light Theme Manager
function initThemeToggle() {
    const themeBtn = document.getElementById('themeBtn');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        if (themeBtn) themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            let theme = 'dark';
            if (document.body.classList.contains('light-mode')) {
                theme = 'light';
                themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
            }
            localStorage.setItem('theme', theme);
        });
    }
}

// 8. Top Button Controls
function initScrollEffects() {
    const progressBar = document.getElementById('progress-bar');
    const topBtn = document.getElementById('topBtn');

    window.addEventListener('scroll', () => {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (totalScroll > 0) {
            progressBar.style.width = (window.scrollY / totalScroll) * 100 + '%';
        }

        if (topBtn) {
            if (window.scrollY > 500) {
                topBtn.classList.add('show');
            } else {
                topBtn.classList.remove('show');
            }
        }
    });

    if (topBtn) {
        topBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// 9. Client Form Submissions
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your message configuration was successfully captured.');
        form.reset();
    });
}

// 10. Background Canvas
function initParticles() {
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: '#0071e3' },
                shape: { type: 'circle' },
                opacity: { value: 0.2 },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: '#0071e3', opacity: 0.1, width: 1 },
                move: { enable: true, speed: 2, out_mode: 'out' }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: true, mode: 'grab' } }
            },
            retina_detect: true
        });
    }
}