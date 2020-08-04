const form = document.querySelector("#info")
const email = document.querySelector("#email")
const emailHelp = document.querySelector("#emailHelp")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  if (email.value === "")  {
    if (email.value === "") {
      emailHelp.innerText = "Por favor, completar"
    }
  } else {
    form.submit();
  }
})
