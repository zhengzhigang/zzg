export function hasClass(el, cls) {
    if (!el || !cls) return;
    if (cls.indexOf(' ') !== -1) {
        throw new Error('className should not contain space.');
    }
    if (el.classList) {
        return el.classList.contains(cls);
    } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
}

export function addClass(el, cls) {
    if (!el) return;
    let curClass = el.className
    let classes = (cls || '').split(' ');
    for (let i = 0; i < classes.length; i++) {
        let clsName = classes[i];
        if (el.classList) {
            el.classList.add(clsName);
        } else if (!hasClass(el, clsName)) {
            curClass += ' ' + clsName;
        }
    }
}