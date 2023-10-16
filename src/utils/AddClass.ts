export function AddClass(queries: string[], classNames: string[]) {
    queries.forEach((query) => {
        const elements = document.querySelectorAll(query);
        elements.forEach((element) => {
            //console.log("adding classes to", element);
            element.classList.add(...classNames);
        });
    });
}

export function RemoveClass(queries: string[], classNames: string[]) {
    queries.forEach((query) => {
        const elements = document.querySelectorAll(query);
        elements.forEach((element) => {
            //console.log("removing classes from", element);
            element.classList.remove(...classNames);
        });
    });
}

export function AddRainbowBg(...queries: string[]) {
    AddClass(queries, ["rainbow-bg"]);
}

export function AddRainbowText(...queries: string[]) {
    AddClass(queries, ["rainbow-text"]);
}

export function RemoveRainbowBg(...queries: string[]) {
    RemoveClass(queries, ["rainbow-bg"]);
}

export function RemoveRainbowText(...queries: string[]) {
    RemoveClass(queries, ["rainbow-text"]);
}
