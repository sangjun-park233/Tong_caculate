function showTab(tabName) {
    document.getElementById("stats").classList.add("hidden");
    document.getElementById("permcomb").classList.add("hidden");

    document.getElementById(tabName).classList.remove("hidden");
}
