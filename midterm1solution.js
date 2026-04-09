function checkNumber() {
    let n = document.getElementById("num").value;
    let result = document.getElementById("result");
    let numbers = document.getElementById("numbers");

    n = Number(n);

    if (n % 2 === 0) {
        result.innerHTML = "Number is Even";
    } else {
        result.innerHTML = "Number is Odd";
    }

    // Loop from 1 to n
    let output = "";
    for (let i = 1; i <= n; i++) {
        output += i + " ";
    }

    numbers.innerHTML = output;
}