const sunIcon = document.getElementById("sun");
const moonIcon = document.getElementById("moon");
const switcher = document.getElementById("switch");

switcher.addEventListener('change', () => {
    if(switcher.checked) {
        moonIcon.hidden = false;
        sunIcon.hidden = true;
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        moonIcon.hidden = true;
        sunIcon.hidden = false;
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

//Check local storage
const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === "dark") {
        switcher.checked = true;
        moonIcon.hidden = false;
        sunIcon.hidden = true;
    }
}