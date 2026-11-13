(function () {
    var root = document.documentElement;

    var burger = document.getElementById('dcBurger');
    var nav = document.getElementById('dcNav');
    if (burger && nav) {
        burger.addEventListener('click', function () {
            var open = nav.classList.toggle('open');
            burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    }

    var themeBtn = document.getElementById('dcTheme');
    if (themeBtn) {
        themeBtn.addEventListener('click', function () {
            var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            try { localStorage.setItem('dc-theme', next); } catch (e) { }
        });
    }

    // Contact form: send to Formspree without leaving the page
    var form = document.getElementById('contactForm');
    if (form) {
        var box = document.getElementById('formMsg');
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var btn = form.querySelector('button[type="submit"]');
            btn.disabled = true;
            fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            }).then(function (r) {
                if (r.ok) {
                    form.reset();
                    box.className = 'dc-alert dc-alert-ok';
                    box.textContent = "Thanks! We'll get back to you within 24 hours.";
                } else { throw new Error('bad'); }
            }).catch(function () {
                box.className = 'dc-alert dc-alert-err';
                box.textContent = "Sorry, your message couldn't be sent. Please email us at hello@dicorelabs.com.";
            }).finally(function () { btn.disabled = false; });
        });
    }
})();
