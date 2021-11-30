const arr1 = ["Passion and purpose", " You’ve got the ability", "Your visionary perspective", "A little distance", " You may find it difficult", "Pay attention"];
const arr2 = ["are your magic words", "to focus on nitty gritty details", "could be just what you need", "let down your walls a little"];
const arr3 = ["so don’t waste your time trying.","to get your gears turning again.", "let the seduction begin!"];

const createRandomMessage = () => {
    const output = `${arr1[Math.floor(Math.random() * arr1.length)]} ${arr2[Math.floor(Math.random() * arr2.length)]}
    ${arr3[Math.floor(Math.random() * arr3.length)]}`;
    return output;
}
console.log(createRandomMessage());