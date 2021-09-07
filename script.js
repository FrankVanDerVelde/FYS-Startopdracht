function switchNavClass() {
    var nav = document.getElementById("pageNavigation");
    if (nav.className === "pageNavigation") {
        nav.className += " responsive";
    } else {
        nav.className = "pageNavigation";
    }
}

window.onload = (event) => {
    document.querySelectorAll('.spoiler-warning').forEach(spoilerWarningElement => {
        spoilerWarningElement.addEventListener('click', () => {
            spoilerWarningElement.parentElement.querySelectorAll('.spoiler-content').forEach(spoilerContent => {
                spoilerContent.classList.remove('hidden');
            })
        });
    })
};