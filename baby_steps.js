var sum = 0;
var input = process.argv.slice(2);

for (i in input) {
    sum += parseInt(input[i]);
}

console.log(sum);
