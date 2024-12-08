document.addEventListener('DOMContentLoaded', function() {
  fetch('data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("Błąd wczytywania pliku JSON");
      }
      return response.json();
    })
    .then(data => {
      function updateData(option) {
        for (let i = 0; i < data.length; i++) {
          const current = data[i].timeframes[option]?.current;
          const previous = data[i].timeframes[option]?.previous;

          if (current !== undefined) {
            const currentTimeElement = document.querySelector(`.text${i+1}_current_time p`);
            if (currentTimeElement) {
              currentTimeElement.innerText = `${current}hrs`;
            }
            const lastTimeElement = document.querySelector(`.text${i+1}_last_time p`);
            if (lastTimeElement) {
              lastTimeElement.innerText = `Last Week - ${previous}hrs`;
            }
          }
        }
      }

      const navigation = document.getElementById('navigation');

      navigation.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
          const option = event.target.textContent.trim().toLowerCase();
          if (["daily", "weekly", "monthly"].includes(option)) {
            updateData(option);
          }
        }
      });
    })
    .catch(error => {
      console.error("Błąd:", error);
    });
});
