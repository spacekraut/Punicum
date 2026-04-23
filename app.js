/* ── TRANSLATIONS ───────────────────────────────────────── */
const translations = {
    en: {
        'nav.about':    'About',
        'nav.menu':     'Menu',
        'nav.gallery':  'Gallery',
        'nav.contacts': 'Contacts',
        'nav.reserve':  'Reserve',

        'hero.title':    'The Sea,<br>On Your Plate',
        'hero.desc':     'Fresh catch from the Tyrrhenian Sea,<br>served with passion and Italian tradition',
        'hero.cta':      'Reserve Your Table',
        'hero.whatsapp': 'WhatsApp Us',

        'about.label': 'Our Story',
        'about.title': 'Where the Sea<br>Meets the Table',
        'about.p1':    'Punicum is a small, passionate restaurant on the promenade of Santa Marinella, where every dish tells the story of the Tyrrhenian Sea. We select our fish daily from local fishermen, ensuring that what reaches your plate is always at its freshest.',
        'about.p2':    'Our kitchen honours the Mediterranean tradition – simple techniques that let the quality of the ingredients shine, prepared with the care and warmth of true Italian hospitality.',
        'about.cta':   'Explore the Menu',
        'about.badge': 'Google Rating',

        'quote.text': '"Every morning we choose the best of what the sea offers.<br>Every evening you taste it."',

        'menu.label': 'Specialities',
        'menu.title': 'A Taste of the Tyrrhenian Sea',
        'menu.desc':  'From classic spaghetti alle vongole to whole grilled lobster, our menu celebrates the finest catch of the day.',
        'menu.c1.desc': 'Spider crab with crustacean bisque and tomato',
        'menu.c2.desc': 'Our signature dish – local clams, white wine, garlic, and fresh parsley',
        'menu.c3.desc': 'Tender grilled octopus with lemon, olive oil, and fresh garden herbs',
        'menu.c4.desc': 'Fresh egg pasta with cuttlefish, squid, prawns, mussels, clams, and tomato',
        'menu.c5.desc': 'Mussels au gratin with seasoned breadcrumbs, pecorino, and fresh herbs',
        'menu.c6.desc': 'A generous selection of lightly battered and fried seafood, crispy and golden',

        'gallery.label': 'Gallery',
        'gallery.title': 'Moments at Punicum',
        'gallery.g1':    'Astice alla Catalana',

        'booking.label': 'Reservations',
        'booking.title': 'Reserve Your Table',
        'booking.desc':  "We look forward to welcoming you. Write to us on WhatsApp and we'll confirm your reservation as soon as possible.",

        'form.name.label':    'Full Name *',
        'form.name.ph':       'Your full name',
        'form.email.label':   'Email *',
        'form.phone.label':   'Phone',
        'form.guests.label':  'Guests *',
        'form.guests.default':'Number of guests',
        'form.guests.more':   '7 or more',
        'form.date.label':    'Date *',
        'form.time.label':    'Preferred Time *',
        'form.time.default':  'Select time',
        'form.time.lunch':    'Lunch',
        'form.time.dinner':   'Dinner (Fri & Sat only)',
        'form.notes.label':   'Special Requests',
        'form.notes.ph':      'Allergies, special occasions, seating preferences...',
        'form.submit':        'Send Reservation Request',

        'success.title': 'Reservation Request Sent!',
        'success.desc':  "Thank you! We'll confirm your table at Punicum as soon as possible.",

        'contacts.label':      'Visit Us',
        'contacts.title':      'Find Punicum',
        'contacts.addr.title': 'Address',
        'contacts.map':        'Open in Google Maps \u2192',
        'contacts.ct.title':   'Phone &amp; Email',
        'contacts.hrs.title':  'Opening Hours',

        'hours.mon':    'Monday',
        'hours.closed': 'Closed',
        'hours.open':   'Open',
        'hours.tuethu': 'Tue \u2013 Thu',
        'hours.fri':    'Friday',
        'hours.sat':    'Saturday',
        'hours.sun':    'Sunday',

        'footer.desc':   'Fresh fish restaurant on the promenade<br>of Santa Marinella, Lazio, Italy',
        'footer.hours':  'Mon: Closed &nbsp;|&nbsp; Tue&ndash;Sun: Open',
        'footer.bottom': '&copy; 2025 Punicum &middot; Fresh Fish Restaurant &middot; Santa Marinella &middot; All rights reserved',
    },

    it: {
        'nav.about':    'Chi Siamo',
        'nav.menu':     'Menu',
        'nav.gallery':  'Galleria',
        'nav.contacts': 'Contatti',
        'nav.reserve':  'Prenota',

        'hero.title':    'Il Mare,<br>nel Piatto',
        'hero.desc':     'Pesce fresco dal Mar Tirreno,<br>servito con passione e tradizione italiana',
        'hero.cta':      'Prenota un Tavolo',
        'hero.whatsapp': 'Scrivici su WhatsApp',

        'about.label': 'La Nostra Storia',
        'about.title': 'Dove il Mare<br>Incontra la Tavola',
        'about.p1':    'Punicum è un piccolo, appassionato ristorante sul lungomare di Santa Marinella, dove ogni piatto racconta la storia del Mar Tirreno. Selezioniamo il pesce ogni giorno dai pescatori locali, garantendo che ciò che raggiunge il tuo piatto sia sempre freschissimo.',
        'about.p2':    'La nostra cucina onora la tradizione mediterranea – tecniche semplici che esaltano la qualità degli ingredienti, preparati con la cura e il calore della vera ospitalità italiana.',
        'about.cta':   'Esplora il Menu',
        'about.badge': 'Valutazione Google',

        'quote.text': '"Ogni mattina scegliamo il meglio di ciò che il mare offre.<br>Ogni sera lo assaporate."',

        'menu.label': 'Specialità',
        'menu.title': 'Un Assaggio del Mar Tirreno',
        'menu.desc':  'Dagli spaghetti alle vongole all\'astice intero alla griglia, il nostro menu celebra il pescato del giorno.',
        'menu.c1.desc': 'Granseola con bisque di crostacei e pomodoro',
        'menu.c2.desc': 'vongole, vino bianco, aglio e prezzemolo fresco',
        'menu.c3.desc': 'Polpo tenero alla griglia con limone, olio extravergine e erbe fresche dell\'orto',
        'menu.c4.desc': 'Pasta all\'uovo con seppia, calamaro, gamberi, cozze, vongole e pomodoro',
        'menu.c5.desc': 'Cozze gratinate con pangrattato aromatico, pecorino ed erbe fresche',
        'menu.c6.desc': 'Una generosa selezione di frutti di mare in leggera pastella, croccanti e dorati',

        'gallery.label': 'Galleria',
        'gallery.title': 'Momenti a Punicum',
        'gallery.g1':    'Astice alla Catalana',

        'booking.label': 'Prenotazioni',
        'booking.title': 'Prenota il Tuo Tavolo',
        'booking.desc':  'Non vediamo l\'ora di accogliervi. Scrivici su WhatsApp e confermeremo la tua prenotazione il prima possibile.',

        'form.name.label':    'Nome e Cognome *',
        'form.name.ph':       'Il tuo nome completo',
        'form.email.label':   'Email *',
        'form.phone.label':   'Telefono',
        'form.guests.label':  'Ospiti *',
        'form.guests.default':'Numero di ospiti',
        'form.guests.more':   '7 o più',
        'form.date.label':    'Data *',
        'form.time.label':    'Orario Preferito *',
        'form.time.default':  'Seleziona orario',
        'form.time.lunch':    'Pranzo',
        'form.time.dinner':   'Cena (solo Ven & Sab)',
        'form.notes.label':   'Richieste Speciali',
        'form.notes.ph':      'Allergie, occasioni speciali, preferenze di posto...',
        'form.submit':        'Invia Richiesta di Prenotazione',

        'success.title': 'Richiesta Inviata!',
        'success.desc':  'Grazie! Confermeremo il tuo tavolo da Punicum il prima possibile.',

        'contacts.label':      'Vieni a Trovarci',
        'contacts.title':      'Trova Punicum',
        'contacts.addr.title': 'Indirizzo',
        'contacts.map':        'Apri su Google Maps \u2192',
        'contacts.ct.title':   'Telefono &amp; Email',
        'contacts.hrs.title':  'Orari di Apertura',

        'hours.mon':    'Luned\u00ec',
        'hours.closed': 'Chiuso',
        'hours.open':   'Aperto',
        'hours.tuethu': 'Mar \u2013 Gio',
        'hours.fri':    'Venerd\u00ec',
        'hours.sat':    'Sabato',
        'hours.sun':    'Domenica',

        'footer.desc':   'Ristorante di pesce fresco sul lungomare<br>di Santa Marinella, Lazio, Italia',
        'footer.hours':  'Lun: Chiuso &nbsp;|&nbsp; Mar&ndash;Dom: Aperto',
        'footer.bottom': '&copy; 2025 Punicum &middot; Ristorante di Pesce Fresco &middot; Santa Marinella &middot; Tutti i diritti riservati',
    }
};

/* ── LANGUAGE SYSTEM ────────────────────────────────────── */
let currentLang = localStorage.getItem('punicum-lang') || 'it';

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('punicum-lang', lang);
    document.documentElement.lang = lang;

    const t = translations[lang];

    /* Text content via data-i18n */
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    /* Placeholder attributes via data-i18n-ph */
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (t[key] !== undefined) el.placeholder = t[key];
    });

    /* optgroup label attributes */
    document.querySelectorAll('[data-i18n-label]').forEach(el => {
        const key = el.getAttribute('data-i18n-label');
        if (t[key] !== undefined) el.label = t[key];
    });

    /* Update active state on all lang buttons */
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

function initLangToggle() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });
    applyLanguage(currentLang);
}


/* ── HERO SLIDER ────────────────────────────────────────── */
(function () {
    const slides  = document.querySelectorAll('.slide');
    const dots    = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('slidePrev');
    const nextBtn = document.getElementById('slideNext');
    let current   = 0;
    let timer     = null;

    function goTo(index) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startTimer() {
        clearInterval(timer);
        timer = setInterval(next, 5000);
    }

    prevBtn.addEventListener('click', () => { prev(); startTimer(); });
    nextBtn.addEventListener('click', () => { next(); startTimer(); });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            goTo(parseInt(dot.dataset.index, 10));
            startTimer();
        });
    });

    const slider = document.getElementById('slider');
    slider.addEventListener('mouseenter', () => clearInterval(timer));
    slider.addEventListener('mouseleave', startTimer);

    let touchStartX = 0;
    slider.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
    slider.addEventListener('touchend',   e => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); startTimer(); }
    });

    startTimer();
})();


/* ── STICKY HEADER ──────────────────────────────────────── */
(function () {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
})();


/* ── MOBILE MENU ────────────────────────────────────────── */
(function () {
    const hamburger = document.getElementById('hamburger');
    const header    = document.getElementById('header');
    const navLeft   = document.querySelector('.nav-left');

    hamburger.addEventListener('click', () => {
        header.classList.toggle('open');
    });

    navLeft.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => header.classList.remove('open'));
    });

    document.addEventListener('click', e => {
        if (!header.contains(e.target)) header.classList.remove('open');
    });
})();


/* ── SCROLL REVEAL ──────────────────────────────────────── */
(function () {
    const selectors = [
        '.about-grid', '.menu-card', '.gallery-item',
        '.contact-block', '.quote-section blockquote',
        '.section-header', '.map-embed',
    ];

    const elements = document.querySelectorAll(selectors.join(','));
    elements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const siblings = Array.from(entry.target.parentElement.children);
                const delay    = siblings.indexOf(entry.target) * 80;
                setTimeout(() => entry.target.classList.add('visible'), delay);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    elements.forEach(el => observer.observe(el));
})();




/* ── SMOOTH SCROLL (fixed header offset) ────────────────── */
(function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            const offset = document.getElementById('header').offsetHeight;
            window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
        });
    });
})();


/* ── INIT ───────────────────────────────────────────────── */
initLangToggle();
