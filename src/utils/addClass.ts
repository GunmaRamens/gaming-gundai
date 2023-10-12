export function addClass(queries: string[], classNames: string[]) {
    queries.forEach((query) => {
        const elements = document.querySelectorAll(query);
        elements.forEach((element) => {
            //console.log("adding classes to", element);
            element.classList.add(...classNames);
        });
    });
}

export function removeClass(queries: string[], classNames: string[]) {
    queries.forEach((query) => {
        const elements = document.querySelectorAll(query);
        elements.forEach((element) => {
            //console.log("removing classes from", element);
            element.classList.remove(...classNames);
        });
    });
}

export function addRainbowBg(...queries: string[]) {
    addClass(queries, ["rainbow-bg"]);
}

export function addRainbowText(...queries: string[]) {
    addClass(queries, ["rainbow-text"]);
}

export function removeRainbowBg(...queries: string[]) {
    removeClass(queries, ["rainbow-bg"]);
}

export function removeRainbowText(...queries: string[]) {
    removeClass(queries, ["rainbow-text"]);
}
