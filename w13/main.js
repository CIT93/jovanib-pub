const form = document.getElementById("form");

const startExercise = (exercise, messageDiv) => {
  if (exercise && messageDiv) {
    messageDiv.textContent = `Start your ${exercise}.`;
    return Promise.resolve();
  } else {
    return Promise.reject("Exercise is not defined");
  }
};

const stopExercise = (exercise, messageDiv) => {
  if (exercise && messageDiv) {
    messageDiv.textContent = `Stop your ${exercise}.`;
    return Promise.resolve();
  } else {
    return Promise.reject("Exercise  is not defined");
  }
};
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const exercise = document.getElementById("exercise").value;
  const sets = document.getElementById("sets").value;
  const time = document.getElementById("time").value;

  if (exercise && sets && time) {
      const totalTime = sets * time * 60 * 10;
      const messageDiv = document.createElement("div");
      document.body.appendChild(messageDiv);

      startExercise(exercise, messageDiv)
          .then(() => {
              setTimeout(() => {
                  stopExercise(exercise, messageDiv)
                      .catch((error) => {
                          console.log("An error occurred");
                      });
              }, totalTime);
          })
          .catch((error) => {
            console.log( "An error occurred.")
          });

      // Clear form
      document.getElementById("exercise").value = "";
      document.getElementById("sets").value = "";
      document.getElementById("time").value = "";
        }
});