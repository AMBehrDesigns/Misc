function findYear(number) {
    for (let n = 2000; n <= 9999; n += 4) {
        let value = n, sum = 0;
        if (value % 100 == 0 && value % 400 != 0 ) {
            continue;
        } 
        else {
            let valueString = String(value);
            let digits = valueString.split("");
            digits.forEach( digit => {
                sum += Number(digit);
            });
        }
        if (sum === number) {
            console.log(n);
        } 
    }
}

findYear();

