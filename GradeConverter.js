console.log("Welcome to the grade converter app");

for (let i=0; i < 5; i++) {
    // generate random # between 60 adn 100
    let pct = (Math.floor(Math.random()*41)) + 60;
    console.log("Numberic Grade = "+pct);

    let letterGrade = "F";
    if (pct >= 88) {
        letterGrade = "A";
    } else if (pct >= 80) {
        letterGrade = "B";
    } else if (pct >= 67) {
        letterGrade = "C";
    } else if (pct >= 60) {
        letterGrade = "D";
    }

    console.log("Letter grade = " + letterGrade);
}