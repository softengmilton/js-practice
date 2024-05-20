window.onload = () => {
    main();
};

function main() {
    const root = document.getElementById("root");
    const btn = document.getElementById("change-btn");

    btn.addEventListener('click', function() {
        const bgColor = generateRGBcolor();
        root.style.background = bgColor;
        console.log(bgColor);
    });
}

function generateRGBcolor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let rgb = `rgb(${red}, ${green}, ${blue})`;
    return rgb;
}
