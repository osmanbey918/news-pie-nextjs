const shuffle = (array) => array.sort(() => Math.random() - 0.5)

// console.log(shuffle([1, 2, 3, 4, 5, 6, 7]));
// console.log(shuffle([7, 6, 5, 4, 3, 2, 1]));


const quiz =
{
    "category": "Entertainment: Video Games",
    "correct_answer": "The Pentagon Thief",
    "difficulty": "easy",
    "incorrect_answers": ["Hellhounds", "Jumping Jacks", "Napalm Zombie"],
    "question": "What is the boss round featured in the \"Call Of Duty: Zombies\" map \"Five\"?",
    "type": "multiple"
}
// console.log({
//     ...quiz,
//     options: shuffle([...quiz.incorrect_answers, quiz.correct_answer]),
// });


const data = [
    {
        "name": "Usman",
        "class": "Matric"
    },
    {
        "name": "Zain Usm",
        "class": "Matric"
    },
    {
        "name": "Zawyar khan",
        "class": "Matric"
    },
    {
        "name": "Junaid jameel",
        "class": "Matric"
    },
    {
        "name": "Hamza khan",
        "class": "Matric"
    }

]

function live(str) {

    let res = []
    for (let e of data) {
        let y = e.name.toLowerCase()
        if (y.includes(str)) {
            console.log(y);
            res.push(e.name)
        }
        // console.log(y);

    }
    return res
}
console.log(live("us"));



console.log("usm".includes('') ? true : false);
