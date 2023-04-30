const container = document.querySelector(".container");
const heading = document.querySelector("[data-split]");
const transformEl = (char) => {
    const el = document.createElement("span");
    el.textContent = char ;
    return el;
};

const splitByLetter = (chars) => [...chars].map(transform);
heading.replaceChildren(...splitByLetter(heading.textContent));

container.addEventListener("mousemove", (e) => {
    for (const el of heading.children) {
        const distanceFromCenter = Math.floor (
            Math.sqrt(
                Math.pow(el.offsetWidth / 2 - (e.clientX - el.offsetLeft), 2) +
                Math.pow(el.offsetHeight / 2 - (e.clientX - el.offsetTop), 2)
            )
        );

        const minThreshold = 20;
        const maxDistance = 100;
        const value = distanceFromCenter > maxDistance 
            ? minThreshold 
            : maxDistance - distanceFromCenter < 20
                ? minThreshold
                : maxDistance - distanceFromCenter 
        el.style.setProperty("--opacity", value);
    }
});