export type Elements = HTMLElement | NodeListOf<HTMLElement> | string;

export function addClass(elements: Elements[], classNames: string[]) {
    elements.forEach((element) => {
        if (typeof element === "string") {
            const elements = document.querySelectorAll(element);
            elements.forEach((element) => {
                //console.log("adding classes to", element);
                element.classList.add(...classNames);
            });
        } else {
            let list: HTMLElement[];
            if (element instanceof HTMLElement) list = [element];
            else list = Array.from(element);

            list.forEach((element) => {
                //console.log("adding classes to", element);
                element.classList.add(...classNames);
            });
        }
    });
}

export function removeClass(elements: Elements[], classNames: string[]) {
    elements.forEach((element) => {
        if (typeof element === "string") {
            const elements = document.querySelectorAll(element);
            elements.forEach((element) => {
                element.classList.remove(...classNames);
            });
        } else {
            let list: HTMLElement[];
            if (element instanceof HTMLElement) list = [element];
            else list = Array.from(element);

            list.forEach((element) => {
                element.classList.remove(...classNames);
            });
        }
    });
}

/*
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
*/
