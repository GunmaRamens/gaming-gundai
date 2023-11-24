export default function changeQueryTextContent(query: string, textContent: string) {
    const elements = document.querySelectorAll(query);
    elements.forEach((element) => {
        element.textContent = textContent;
    });
}
