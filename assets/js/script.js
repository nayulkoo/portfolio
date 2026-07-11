const THEME_STORAGE_KEY = 'portfolio-theme-preference';
const THEME_CHOICES = new Set(['auto', 'light', 'dark']);
const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';
const DESKTOP_QUERY = '(min-width: 721px)';

function isValidThemePreference(value) {
    return THEME_CHOICES.has(value);
}

function getStoredThemePreference() {
    try {
        const stored = window.localStorage?.getItem(THEME_STORAGE_KEY);
        return isValidThemePreference(stored) ? stored : 'auto';
    } catch (error) {
        return 'auto';
    }
}

function persistThemePreference(preference) {
    try {
        window.localStorage?.setItem(THEME_STORAGE_KEY, preference);
    } catch (error) {
        return;
    }
}

function resolveTimeFallbackTheme(now = () => new Date()) {
    const hour = now().getHours();
    return hour >= 6 && hour < 18 ? 'light' : 'dark';
}

function getColorSchemeQuery() {
    try {
        return window.matchMedia?.(COLOR_SCHEME_QUERY) ?? null;
    } catch (error) {
        return null;
    }
}

function resolveAutoTheme() {
    const query = getColorSchemeQuery();
    return query ? (query.matches ? 'dark' : 'light') : resolveTimeFallbackTheme();
}

const themeButtons = [...document.querySelectorAll('[data-theme-choice]')];

function applyThemePreference(preference, { persist = false } = {}) {
    const selected = isValidThemePreference(preference) ? preference : 'auto';
    const resolved = selected === 'auto' ? resolveAutoTheme() : selected;

    document.documentElement.dataset.themePreference = selected;
    document.documentElement.dataset.theme = resolved;
    themeButtons.forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.themeChoice === selected));
    });

    if (persist) persistThemePreference(selected);
}

themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        applyThemePreference(button.dataset.themeChoice, { persist: true });
    });
});

function refreshAutoTheme() {
    if (document.documentElement.dataset.themePreference === 'auto') {
        applyThemePreference('auto');
    }
}

const colorSchemeQuery = getColorSchemeQuery();
if (colorSchemeQuery?.addEventListener) {
    colorSchemeQuery.addEventListener('change', refreshAutoTheme);
} else {
    colorSchemeQuery?.addListener?.(refreshAutoTheme);
}

window.addEventListener('focus', refreshAutoTheme);
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) refreshAutoTheme();
});
applyThemePreference(getStoredThemePreference());

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');

function setMenuExpanded(expanded) {
    navToggle?.setAttribute('aria-expanded', String(expanded));
    navToggle?.setAttribute('aria-label', expanded ? '메뉴 닫기' : '메뉴 열기');
    nav?.classList.toggle('open', expanded);
}

navToggle?.addEventListener('click', (event) => {
    event.stopPropagation();
    setMenuExpanded(navToggle.getAttribute('aria-expanded') !== 'true');
});

nav?.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) setMenuExpanded(false);
});

document.addEventListener('click', (event) => {
    if (navToggle?.getAttribute('aria-expanded') !== 'true') return;
    if (!(event.target instanceof Node)) return;
    if (nav?.contains(event.target) || navToggle.contains(event.target)) return;
    setMenuExpanded(false);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuExpanded(false);
});

const desktopQuery = window.matchMedia?.(DESKTOP_QUERY);
if (desktopQuery?.addEventListener) {
    desktopQuery.addEventListener('change', ({ matches }) => {
        if (matches) setMenuExpanded(false);
    });
}
