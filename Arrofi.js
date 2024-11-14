const sections = document.querySelectorAll('section'); // Ambil semua section
const navLinks = document.querySelectorAll('ul li'); // Ambil semua link navigasi

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop; // Posisi atas section
        const sectionHeight = section.clientHeight; // Tinggi section

        // Cek apakah section saat ini terlihat di viewport
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id'); // Ambil id section yang terlihat
        }
    });

    // Mengubah kelas active pada link navigasi
    navLinks.forEach(li => {
        li.classList.remove('active'); // Hapus kelas active dari semua link
        if (li.querySelector('a').getAttribute('href') === `#${current}`) {
            li.classList.add('active'); // Tambahkan kelas active pada link yang sesuai
        }
    });
});
const menuToggle = document.querySelector('.menu-toggle');
const navbarUl = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
    navbarUl.classList.toggle('show');
});
