document.addEventListener('DOMContentLoaded', function() {
    // Pobranie danych z pliku JSON
    fetch('data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error("Błąd wczytywania pliku JSON");
        }
        return response.json();
      })
      .then(data => {
        function updateData(option){
            for (let i = 0; i < data.length; i++) {
                if(data[i].option === "daily"){
                    document.getQuerySelector(".text1_current_time").innerHTML = data[i].current_time;
                }
            }
        }
      })
      .catch(error => {
        console.error("Błąd:", error);
      });

      const navigation = document.getElementById('navigation');

      navigation.addEventListener("click", function(event) {
        if (event.target.tagName === "LI"){
            const option = event.target.textContent.trim();
            console.log("Option: ", option);

            if(option === "daily") {
                console.log("Daily");
                updateData(option);
            }
            if(option === "weekly") {
                console.log("Weekly");
                updateData(option);
            }
            if(option === "monthly") {
                console.log("Monthly");
                updateData(option);
            }
        }
    });

  });
  