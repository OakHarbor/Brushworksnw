

function toggleNav() {
    document.getElementById("bottom-menu").style.display = "none";
    document.getElementById("side-menu").style.display = "block";
    document.getElementById("on-top").style.display = "block";
    document.getElementById("side-menu").style.width = "50%";
    document.getElementById("side-hidden").style.width = "60%";
    document.getElementById("noScroll").style.overflow = "hidden";
    document.getElementById("btn-close").style.color = "#000000";
    document.getElementById("btn-close").style.background = "white";
}

function closeSideMenu() {
    document.getElementById("bottom-menu").style.display = "block";
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("side-hidden").style.width = "0";
    document.getElementById("noScroll").style.overflow = "scroll";
    document.getElementById("btn-close").style.background = "white";
    document.getElementById("btn-close").style.color = "#CE2026";
    document.getElementById("on-top").style.display = "none";
}
