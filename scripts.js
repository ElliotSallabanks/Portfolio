
console.log("Scripts Loaded");

const navBar = document.getElementById("nav-bar");
const content = document.getElementById("content");

navBar.addEventListener("mouseover", () =>
{
    if (window.innerWidth > 800) {
        content.style.paddingLeft  = "200px";
        console.log("changed");
    }
});

navBar.addEventListener("mouseout", () => 
{
    content.style.paddingLeft = "80px";
});

window.onerror = function (msg, url, lineNo, columnNo, error) {
    // Check if the error is related to the Google Docs iframe CSP
    if (msg.includes("Content Security Policy") && url.includes("google.com")) {
        // Ignore CSP errors related to Google Docs
        return true; // Suppress the error
    }
    return false; // Let other errors go through
};
