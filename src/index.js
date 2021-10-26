function subscribe() {
  let name = prompt("What's your name?");
  let email = prompt("What's your email address?");
  let question = prompt(
    "Would you like to recieve our full weekly newsletter?"
  );
  let h3 = document.querySelector("h3");

  if (question === "no" || question === "No") {
    h3.innerHTML =
      "Thanks " +
      name +
      "! 😸 You're now subscribed to our monthly newsletter!";
  } else {
    h3.innerHTML =
      "Thanks " +
      name +
      "! 😻 You're now subscribed to full weekly newsletter!";
  }
}

let subscribeButton = document.querySelector("button");
subscribeButton.addEventListener("click", subscribe);
