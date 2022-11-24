import * as elements from "./elements.js";
import * as engine from "./engine.js";

let search = elements.searchInput.value;

elements.searchForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    search = elements.searchInput.value;
    engine.search(search);
    elements.searchInput.value = "";
})