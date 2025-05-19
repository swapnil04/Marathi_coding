function transpileCode() {
  const marathi = document.getElementById("marathiCode").value;

  let python = marathi
    .replace(/जर/g, "if")
    .replace(/नाहीतर/g, "else")
    .replace(/तर/g, ":")
    .replace(/छापा\((.*?)\)/g, "print($1)")
    .replace(/प्रमाण/g, "while")
    .replace(/साठी/g, "for")
    .replace(/मध्ये/g, "in");

  document.getElementById("output").textContent = python;
}
