
async function fetchNewData() {
    const sheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSt3qcuq7cvQ1xRJAplEYbKoYqtsnPKQ9PPGzRBx2WF4WazK_AsB_66JkQu5ckzwA/pubhtml';

    const response = await fetch(sheetURL);
    const html = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const rows = [...doc.querySelectorAll('table tbody tr')];

    rows.forEach((row) => {
        const columns = row.querySelectorAll('td');
        console.log({
            Name: columns[0]?.textContent.trim(),
            Category: columns[1]?.textContent.trim(),
            Colour: columns[2]?.textContent.trim(),
            Size: columns[3]?.textContent.trim(),
            Quantity: columns[4]?.textContent.trim(),
            Bin: columns[5]?.textContent.trim(),
            Tags: columns[6]?.textContent.trim(),
        });
    });
}

fetchNewData();

git add script.js
git commit -m "Added fetchNewData function for updated Google Sheet"


cd /path/to/your/project
vim script.js

fetchNewData();

);
async function fetchCostumes() {
    const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSt3qcuq7cvQ1xRJAplEYbKoYqtsnPKQ9PPGzRBx2WF4WazK_AsB_66JkQu5ckzwA/pubhtml";
    const response = await fetch(sheetURL);
    const html = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const rows = [...doc.querySelectorAll("table tbody tr")];

    const costumeList = document.getElementById("costume-list");
    costumeList.innerHTML = ""; // Clear any existing content

    rows.forEach((row) => {
        const columns = row.querySelectorAll("td");
        if (columns.length) {
            costumeList.innerHTML += `
                <div>
                    <h3>${columns[0]?.textContent.trim()}</h3>
                    <p><strong>Category:</strong> ${columns[1]?.textContent.trim()}</p>
                    <p><strong>Colour:</strong> ${columns[2]?.textContent.trim()}</p>
                    <p><strong>Size:</strong> ${columns[3]?.textContent.trim()}</p>
                    <p><strong>Quantity:</strong> ${columns[4]?.textContent.trim()}</p>
                    <p><strong>Bin:</strong> ${columns[5]?.textContent.trim()}</p>
                    <p><strong>Tags:</strong> ${columns[6]?.textContent.trim()}</p>
                </div>
            `;
        }
    });
}

fetchCostumes();

