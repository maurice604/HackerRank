let grades = [4, 73, 67, 38, 33]

function gradingStudents(grades) {
    // Write your code here
    let res = [];
    let math = [];
    let e;
    let notaFinal = 40

    for(let c = 1; c <= 20; c ++){
        math.push(c * 5);
    }

    for(let i = 1; i < grades.length; i ++){
        e = math.find(element => element > grades[i])
        grades[i] < notaFinal - 2 ? res.push(grades[i]) :
        (e - grades[i] < 3 ? res.push(e) :  res.push(grades[i]));
    }

    return res;
}

console.log(gradingStudents(grades));
