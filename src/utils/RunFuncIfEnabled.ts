import getIsEnabled from "./GetIsEnabled";

export default async function RunFuncIfEnabled(func?: () => void) {
    const isEnable = await getIsEnabled();
    if (isEnable && func != undefined) {
        func();
    }
}
