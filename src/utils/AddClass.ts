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
            classNames.forEach((className) => {
                if (element.classList.contains(className)) element.classList.remove(className);
            });
        });
    });
}

export function AddRainbowBg(...queries: string[]) {
    AddClass(queries, ["rainbow-bg"]);
}

export function AddRainbowBgWithShadow(...queries: string[]) {
    AddClass(queries, ["rainbow-bg", "rainbow-bg-shadow"]);
}

export function AddRainbowText(...queries: string[]) {
    AddClass(queries, ["rainbow-text"]);
}

export function AddRainbowTextWithShadow(...queries: string[]) {
    AddClass(queries, ["rainbow-text", "rainbow-text-shadow"]);
}

export function RemoveRainbowBg(...queries: string[]) {
    RemoveClass(queries, ["rainbow-bg"]);
}

export function RemoveRainbowBgWithShadow(...queries: string[]) {
    RemoveClass(queries, ["rainbow-bg", "rainbow-bg-shadow"]);
}

export function RemoveRainbowText(...queries: string[]) {
    RemoveClass(queries, ["rainbow-text", "rainbow-text-shadow"]);
}
