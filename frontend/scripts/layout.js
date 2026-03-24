Promise.all([
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        }),
    
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
]).then(() => {
    document.body.classList.remove('no-fouc');

    var currentPath = window.location.pathname.split('/').pop();
    if(currentPath === '') {
        currentPath = 'index.html';
    }

    const navLinks = document.querySelectorAll('.header-links a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');

        if (href === currentPath || (currentPath === 'index.html' && href === './')) {
            link.classList.add('active');
        }
    })
});