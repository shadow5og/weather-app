console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form"),
  messageOne = document.querySelector("#message-1"),
  messageTwo = document.querySelector("#message-2"),
  requestWeather = async (e) => {
    e.preventDefault();

    messageTwo.textContent = "";
    messageOne.textContent = "Loading... ";

    const address = e.target.firstElementChild.value,
      url = `/weather?address=${address}`;

    try {
      const response = await fetch(url),
        { forecast, location, error } = await response.json();

      if (error) return (messageOne.textContent = error);

      messageOne.textContent = location;
      messageTwo.textContent = forecast;
    } catch (err) {
      messageOne.textContent = err.message;
    }
  };

weatherForm.addEventListener("submit", requestWeather);
