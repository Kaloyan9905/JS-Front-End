function colorize() {
  let rows = document.getElementsByTagName("tr");
  let index = 1;

  for (const row of rows) {
    if (index % 2 == 0) {
      row.style.background = "Teal";
    }
    
    index++;
  }
}
