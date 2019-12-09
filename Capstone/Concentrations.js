function throttle(fn, delay) {
    let last;
    let timer;

    return () => {
        const now = +new Date();

        if (last && now < last + delay) {
            clearTimeout(timer);

            timer = setTimeout(() => {
                last = now;
                fn();
            }, delay);
        } else {
            last = now;
            fn();
        }

    };
}

function onScroll() {
    if (window.pageYOffset) {
        $$header.classList.add('is-active');
    } else {
        $$header.classList.remove('is-active');
    }
}

const $$header = document.querySelector('.js-header');

window.addEventListener('scroll', throttle(onScroll, 25));

const details = document.querySelectorAll("details");

function toggleOpen() {
    if (this.open) {
        return;
        // if the user tries to close the existing open element
    }

    for (i = 0; i < details.length; ++i) {
        if (details[i].open) {
            details[i].removeAttribute("open");
            // close the already open details element
        }
    }
}

details.forEach(detail => detail.addEventListener('click', toggleOpen));