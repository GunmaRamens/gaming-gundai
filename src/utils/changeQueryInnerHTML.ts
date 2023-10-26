export default function changeQueryInnerHTML(query: string, innerHTML: string) {
    const elements = document.querySelectorAll(query);
    elements.forEach((element) => {
        element.innerHTML = innerHTML;
    });
}
