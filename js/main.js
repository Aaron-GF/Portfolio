// email icon display and copy function ///////////////////////////////////
const emailIcon = document.getElementById('email-icon');
const email = document.getElementById('email');
const copyBtn = document.getElementById('copy-btn');
const copied = document.getElementById('copied');
const copyMsg = document.querySelector('.tooltip-text')

emailIcon.addEventListener('click', () => {
    if (email.style.display === 'none' || email.style.display === '') {
        email.style.display = 'flex';
        emailIcon.style.background = ' #00abf0';
        emailIcon.style.color = '#081b29';
        emailIcon.style.boxShadow = '0 0 10px #00abf0, 0 0 20px rgba(0, 171, 240, 0.3)';
    } else {
        email.style.display = 'none';
        emailIcon.style.background = '';
        emailIcon.style.color = '';
        emailIcon.style.boxShadow = '';
    }
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('aarongarcia567@gmail.com')
        .then(() => {
            copied.style.display = 'block';
            copyBtn.style.display = 'none';
            copyMsg.style.display = 'none';
            setTimeout(() => {
                copied.style.display = 'none'
                copyBtn.style.display = 'block'
                copyMsg.style.display = 'inline-block'
            }, 5000)
        })
})

// Reset form after submit ///////////////////////////////////
const form = document.getElementById('contactForm');

form.addEventListener('submit', e => {
    setTimeout(() => {
        form.reset();
    }, 100);
})

// active menu on little screens////////////////////////////////////
const menuLi = document.querySelectorAll('header ul li a');
const section = document.querySelectorAll('section');

const activeMenu = () => {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) { }
    menuLi.forEach(sec => sec.classList.remove('active'));
    menuLi[len].classList.add('active');
};

activeMenu();
window.addEventListener("scroll", activeMenu);

// sticky navbar ///////////////////////////////////
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 50)
})

// icon navbar ///////////////////////////////////
const menuIcon = document.getElementById('menu-icon');
const navlist = document.querySelector('.navlist');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navlist.classList.remove('open');
}

// scroll animations ///////////////////////////////////
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-items');
        } else {
            entry.target.classList.remove('show-items');
        }
    });
});

const scrollScale = document.querySelectorAll('.scroll-scale');
scrollScale.forEach(e => observer.observe(e));

const scrollBottom = document.querySelectorAll('.scroll-bottom');
scrollBottom.forEach(e => observer.observe(e));

// touch screen projects section ///////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    const hoverItems = document.querySelectorAll('.port-box');

    const isTouchDevice = () => {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }

    if (isTouchDevice()) {
        hoverItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();

                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                } else {
                    hoverItems.forEach(el => el.classList.remove('active'));
                    item.classList.add('active');
                    e.preventDefault();
                }
            });
        });

        document.addEventListener('click', () => {
            hoverItems.forEach(el => el.classList.remove('active'));
        });

        window.addEventListener('scroll', () => {
            hoverItems.forEach(el => el.classList.remove('active'));
        });
    }
});
