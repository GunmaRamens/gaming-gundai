export default function changeQueryInnerHTML(queries: string[], innerHTML: string) {
    queries.forEach((query) => {
        const elements = document.querySelectorAll(query);
        elements.forEach((element) => {
            element.innerHTML = innerHTML;
        });
    });
}
