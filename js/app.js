(function () {
  document.getElementById("message-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const message = document.getElementById("message");
    const value = message.value;

    if (message.value === "") {
      document.querySelector(".feedback").classList.add("show");
      setTimeout(() => {
        document.querySelector(".feedback").classList.remove("show");
      }, 3000);
    } else {
      document.querySelector(".message-content").textContent = value;
      message.value = "";
    }
  });
})();
