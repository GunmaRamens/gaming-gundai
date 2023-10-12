export default function addClass(query: string, ...className: string[]) {
    const elements = document.querySelectorAll(query);
    elements.forEach((element) => {
        console.log("adding classes to", element)
        element.classList.add(...className);
    });
}