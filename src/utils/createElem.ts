export const createElem = (tag: string, attr: { [key: string]: string }, ...children: (Node | string)[]) => {
    const elem = document.createElement(tag);
    for (const [key, value] of Object.entries(attr)) {
        elem.setAttribute(key, value);
    }
    for (const child of children) {
        if (typeof child === "string") elem.innerText = child;
        else elem.appendChild(child);
    }
    return elem;
};

export default createElem;
