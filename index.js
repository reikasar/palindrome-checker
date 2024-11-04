const input = document.querySelector("#input");
const btn = document.querySelector("button");

function check() {
  const value = input.value.toLowerCase();
  const reversed = value.split("").reverse().join("");

  if (value == reversed) {
    alert(`${value} is a palindrome`);
  }
  else {
    alert(`${value} is not a palindrome`);
  }
  input.value = "";
}

btn.addEventListener("click", check);

