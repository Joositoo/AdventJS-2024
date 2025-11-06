/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    let race = "";

    for (let i = 0; i < indices.length; i++) {
      let space = " ".repeat(indices.length - (i + 1));
      let end = " /" +(i + 1)+ "\n";      
      let reno = null;
      
      if (indices[i] == 0){
        reno = "~".repeat(length);
      }
      else if (indices[i] > 0){
        reno = "~".repeat(indices[i])+ "r" + "~".repeat(length - indices[i] - 1);
      }
      else{
        reno = "~".repeat(length + indices[i]) + "r" + "~".repeat(-indices[i] - 1);
      }

      race += space + reno + end;
    }
    
    return race;
}


/*   -- PRUEBAS --   */
console.log(drawRace([0, 5, -3], 10));
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

console.log(drawRace([2, -1, 0, 5], 8));
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

console.log(drawRace([3, 7, -2], 12));
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/