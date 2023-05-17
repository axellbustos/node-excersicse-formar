const fizz_buzz = (n) => {
    let result = []
    for (let i = 1; i < n; i++) {
        switch (true) {
            case i % 3 === 0:
                result.push("Fizz")
                break;
            case i % 5 === 0:
                result.push("Buzz")
                break;
            case i % 3 === 0 && i % 5 === 0:
                result.push("Fizz_Buzz")
                break;

            default: result.push(i)
                break;
        }
    }
    return console.log(result)
}

fizz_buzz(20);