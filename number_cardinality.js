const number_cardinality = (n) => {
    switch (true) {
        case parseInt(n) % 10 === 0:
            console.log("zero");
            break;
        case parseInt(n) % 5 === 0:
            console.log("five");
            break;
        case parseInt(n) % 2 === 0:
            console.log("even");
            break;

        default: console.log("odd");
            break;
    }

}
number_cardinality(105.9)