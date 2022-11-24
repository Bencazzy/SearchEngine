export const create = (value, display) => {
    const newElement = document.createElement("p");
    newElement.innerText = value;
    display.appendChild(newElement);
}

export const clear = (display) => {
    display.innerHTML = "";
    display.innerHTML = "<div id='display'></div>";
}

export const header = (display) => {
    const newElement = document.createElement("h1");
    newElement.innerText = "Results:";
    display.appendChild(newElement);
}

export const noresult = (display) => {
    const newElement = document.createElement("h2");
    newElement.innerText = "There are no results";
    display.appendChild(newElement);
}