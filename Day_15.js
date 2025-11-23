/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
    let table;
    let longestLeftWord = 0;
    let longestRightWord = 0;
    let header = Object.keys(data[0]);

    for (let i = 0; i < header.length; i++) {
        header[i] = header[i][0].toUpperCase() + header[i].slice(1)
    }

    longestLeftWord = header[0].length;
    longestRightWord = header[1].length;

    for (const d of data) {
        const leftValue = String(Object.values(d)[0]);
        const rightValue = String(Object.values(d)[1]);

        if (longestLeftWord < leftValue.length) {
            longestLeftWord = leftValue.length;
        }
        if (longestRightWord < rightValue.length) {
            longestRightWord = rightValue.length;
        }
    }

    table = "+" + "-".repeat(longestLeftWord + 2) + "+" + "-".repeat(longestRightWord + 2) + "+\n";
    table += "| " + header[0] + " ".repeat(longestLeftWord - header[0].length) +
        " | " + header[1] + " ".repeat(longestRightWord - header[1].length) + " |\n";
    table += "+" + "-".repeat(longestLeftWord + 2) + "+" + "-".repeat(longestRightWord + 2) + "+\n";

    for (const d of data) {
        const leftValue = String(Object.values(d)[0]);
        const rightValue = String(Object.values(d)[1]);

        table += "| " + leftValue + " ".repeat(longestLeftWord - leftValue.length) +
            " | " + rightValue + " ".repeat(longestRightWord - rightValue.length) + " |\n";
    }

    table += "+" + "-".repeat(longestLeftWord + 2) + "+" + "-".repeat(longestRightWord + 2) + "+\n";

    return table;
}


console.log(drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
]));
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

console.log(drawTable([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 }
]));
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+