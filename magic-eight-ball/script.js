function shakeEightBall() {
    const answers = [
      "It is certain",
      "Without a doubt",
      "You may rely on it",
      "Ask again later",
      "Better not tell you now",
      "Don't count on it",
      "My reply is no",
      "Outlook not so good"
    ];
  
    const question = document.getElementById("question").value;
    const answerElement = document.getElementById("answer");
  
    if (!question) {
      answerElement.textContent = "Please enter a question!";
    } else {
      const randomIndex = Math.floor(Math.random() * answers.length);
      answerElement.textContent = answers[randomIndex];
    }
  }
  