export default function changeQueryInnerHTML(query: string, innerHTML: string) {
    const elements = document.querySelectorAll(query);
    elements.forEach((element) => {
        /* eslint-disable-next-line no-unsanitized/property */
        element.innerHTML = innerHTML;
    });
}
