const sunIcon = document.getElementById("sun");
const moonIcon = document.getElementById("moon");
const switcher = document.querySelector('input[name=theme]');

function toggleSwitch() {
    if (switcher.style.display === "none") {
        switcher.style.display = "block";
    } else {

    }
}

switcher.addEventListener('change', () => {
    if(this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});