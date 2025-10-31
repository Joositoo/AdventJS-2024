/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
    let pairedShoes = [];
    let takenShoes = [];

    shoes.forEach(shoe => {
        if (shoe.type == "I"){
            for (const s of shoes) {
                if (s.type != "I" && s.size == shoe.size && !takenShoes.includes(shoe) && !takenShoes.includes(s)){
                    pairedShoes.push(shoe.size);

                    takenShoes.push(shoe);
                    takenShoes.push(s)
                }
            }
        }
        else{
            for (const s of shoes) {
                if (s.type != "R" && s.size == shoe.size && !takenShoes.includes(shoe) && !takenShoes.includes(s)){
                    pairedShoes.push(shoe.size);

                    takenShoes.push(shoe);
                    takenShoes.push(s)
                }
            }
        }
    });

    return pairedShoes;
}

/*   -- PRUEBAS --   */
const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
]

console.log(organizeShoes(shoes))
// [38, 42]

const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
]
console.log(organizeShoes(shoes2))
// [38, 38]

const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
]

console.log(organizeShoes(shoes3))
// []