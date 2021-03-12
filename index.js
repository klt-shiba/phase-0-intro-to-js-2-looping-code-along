// Code your solutions in this file
const person = [ 'Lisa', 'Kaitlin', 'Jan'];



function writeCards(person) {

  const personArray = [];

  for (let i = 0; i < person.length; i++) {
    personArray.push(`Thank you, ${person[i]}, for the wonderful surprise gift!`);
  }
  return personArray;
}

writeCards(person);


function countDown(number) {
    while (number >= 0) {

        console.log(number--);
        // number--
      }
      return "All done";
}
countDown(10);



