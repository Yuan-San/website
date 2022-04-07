function myFunction() {
  /* Get the text field */
  const copyText = "Yuan Mizuna!#9666";

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText);

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied!";
} 
function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}