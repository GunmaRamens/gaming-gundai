export const elements = document.querySelectorAll("body");

export function Test(): void {
    console.log("test");
}

elements.forEach(function () {
    window.addEventListener("load", Test);
});
