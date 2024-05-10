const form = document.getElementById("form")
 const listener = addEventListener("submit", function (event) {
   event.preventDefault();
    const exercise = document.getElementById("exercise").value;
    const sets = document.getElementById("sets").value;
    const time = document.getElementById("time").value;
      if (exercise && sets && time) {
        const totalTime = sets * time * 60 * 10;
        const messageDiv = document.createElement("div");
      document.body.appendChild(messageDiv);
        const startExercise = () => {
            messageDiv.textContent = `Start your ${exercise}.`;
        };
        const stopExercise = () => {
            messageDiv.textContent = `No more ${exercise}.`;
        };
        startExercise();
        setTimeout(stopExercise, totalTime);
    } else {
        messageDiv.textContent = "Please fill out the form.";
    }
});