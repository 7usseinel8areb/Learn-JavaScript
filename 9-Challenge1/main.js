let theTitle = "Elzero", theDescription = "Elzero web school", theDate = "25/10";

var card = `
    <div>
        <div>
            <h3>${theTitle}</h3>
            <p>${theDescription}</p>
            <span>${theDate}</span>
        </div>
    </div>
`;

for (let i = 0; i < 4; i++) {
    document.write(card);    
}