export default function ChangeQueryInnerHTML(queries: string[], innerHTML: string) {
    queries.forEach((query) => {
        const elements = document.querySelectorAll(query);
        elements.forEach((element) => {
            element.innerHTML = innerHTML;
        });
    });
}
