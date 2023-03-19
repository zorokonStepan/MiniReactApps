
export const is_only_numeric = (txt) => {
    let tmp = txt;
    tmp = tmp.replace(/[^0-9]/g,"");

    return tmp.length === txt.length;
}