const howAreYouString = 'how are you?';
const friends = ['Romain', 'Fanny','PP','Pierre', 'JC'];

friends.forEach(hello);
howAreYou();

///////// My functions ////////

function hello(name) {
  console.log(`hello ${name}`);
}

function howAreYou(){
  console.log(howAreYouString);
}
