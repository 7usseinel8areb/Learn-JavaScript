let product = ["Keyboard", "Mouse", "Pen", "Monitor", "Iphone", "Pad"];
let colors = ["red", "green", "blue","gray","purple"];
let showProduct = 5;

document.write(`<h1>Show ${showProduct} products</h1>`);
for (let i = 0; i < showProduct; i++) {
    let randomIndex = Math.floor(Math.random() * colors.length);

    document.write(`
        <div>
            <h3 style="color:${colors[randomIndex]}">[${i + 1}]: ${product[i]}</h3>
            <p>${colors.join(' | ')}</p>
        </div>
        `)
}