(function () {
    var nav = document.querySelector('nav');
    if (!nav) return;
    var toggle = nav.querySelector('.nav-toggle');
    var backdrop = nav.querySelector('.nav-backdrop');
    var links = nav.querySelector('.nav-links');
    if (!toggle || !links) return;

    function setOpen(open) {
        nav.classList.toggle('menu-open', open);
        toggle.setAttribute('aria-expanded', open);
        document.body.classList.toggle('nav-menu-open', open);
        if (backdrop) {
            backdrop.setAttribute('aria-hidden', open ? 'false' : 'true');
        }
    }

    toggle.addEventListener('click', function () {
        setOpen(!nav.classList.contains('menu-open'));
    });

    if (backdrop) {
        backdrop.addEventListener('click', function () {
            setOpen(false);
        });
    }

    links.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
            setOpen(false);
        });
    });

    window.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') setOpen(false);
    });

    window.addEventListener('resize', function () {
        if (window.matchMedia('(min-width: 769px)').matches) setOpen(false);
    });
})();
