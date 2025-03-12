function createTable() {
    //Write your code here
    const table = document.getElementById("myTable");
    table.innerHTML = "";

    const rows = prompt("Input number of rows");
    const columns = prompt("Input number of columns");

    if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
        alert("Please enter positive numeric values for rows and columns.");
        return;
    }

    const rn = parseInt(rows);
    const cn = parseInt(columns);

    for (let i = 0; i < rn; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < cn; j++) {
            const cell = document.createElement("td");
            cell.textContent = `Row-${i} Column-${j}`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    
}

  
}
