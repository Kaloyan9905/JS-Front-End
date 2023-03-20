function calc() {
  let first = document.getElementById("num1").value;
  let second = document.getElementById("num2").value;

  let sum = Number(first) + Number(second);

  document.getElementById("sum").value = sum;
}
