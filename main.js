const parentFunction = (person) => {
  let coins = 3;
  return () => {
    coins -= 1;
    if (coins > 0) console.log(`${person} has ${coins} left`);
    else console.log(`${person} is out of coins`);
  };
};

const son = parentFunction("Son");
const daughter = parentFunction("daughter");

son();
son();
son();

daughter();
son();
daughter();

function human(name) {
  function sayHi() {
    console.log(`Hi I am ${name}`);
  }
  function howYouFeel() {
    console.log(`${name} is feeling good.`);
  }
  return {
    sayHi,
    howYouFeel,
  };
}
const rakib = human("Rakib");
rakib.sayHi();
