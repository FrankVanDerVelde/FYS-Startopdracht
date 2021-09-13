function switchNavClass() {
    var nav = document.getElementById("page-navigation");
    if (nav.className === "page-navigation") {
        nav.className += " responsive";
    } else {
        nav.className = "page-navigation";
    }
}

window.onload = (event) => {
    document.querySelectorAll('.spoiler-card').forEach(spoilercard => {
        const spoilerButton = spoilercard.querySelector('.spoiler-button');
        spoilerButton.addEventListener('click', () => {
            const spoilerButtonIcon = spoilerButton.querySelector('i');spoilercard.querySelector('.spoiler-content').classList.toggle('hidden');
            if (spoilerButtonIcon.classList.contains('fa-eye-slash')) {
                spoilerButtonIcon.classList.replace('fa-eye-slash', 'fa-eye');
            } else {
                spoilerButtonIcon.classList.replace('fa-eye', 'fa-eye-slash');
            }
        })
    })
};