(function () {
  document.getElementById("message-form").addEventListener("submit", (e) => {
    // prevent defult behaviour
    e.preventDefault();

    // getting a value
    const message = document.getElementById("message");
    const value = message.value;

    // check for empty value
    if (value === "") {
      const feeback = document.querySelector(".feedback");
      feeback.classList.add("show");
      setTimeout(() => {
        feeback.classList.remove("show");
      }, 3000);
    } else {
      // change value
      document.querySelector(".message-content").textContent = value;
      message.value = "";
    }
  });
})();
