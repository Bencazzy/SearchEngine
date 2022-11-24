import * as data from "../sites/data.js";
import * as elements from "./elements.js";
import * as display from "./display.js";

let isFound = false;
let searchSlice;
let alreadyFound = [];

export const search = (search) => {
    display.clear(elements.display);
    display.header(elements.display);
    isFound = false;
    searchSlice;
    alreadyFound = [];
    for (let j = 0; j <= search.length; j++) {
        searchSlice = search.slice(0, search.length-j);
        for (let i = 0; i < data.sites.length; i++) {
            if (data.sites[i].toLowerCase().includes(searchSlice.toLowerCase()) && searchSlice.length > 2 && !alreadyFound.includes(data.sites[i])) {
                display.create(data.sites[i], elements.display);
                alreadyFound.push(data.sites[i]);
                isFound = true;
            }
        }
    }
    if (!isFound) display.noresult(elements.display);
}