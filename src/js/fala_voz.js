function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    speechSynthesis.speak(utterance);
  }

  function startRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'pt-BR';
    recognition.start();

    recognition.onresult = function(event) {
      const result = event.results[0][0].transcript;
      document.getElementById('result').textContent = `Você disse: ${result}`;
      speak(result);
    };

    recognition.onerror = function(event) {
      document.getElementById('result').textContent = `Erro: ${event.error}`;
    };
  }

  function salvarFrase() {
    const input = document.getElementById("fraseInput");
    const texto = input.value.trim();
    if (texto !== "") {
      const frases = JSON.parse(localStorage.getItem("frasesPersonalizadas")) || [];
      frases.push(texto);
      localStorage.setItem("frasesPersonalizadas", JSON.stringify(frases));
      input.value = "";
      exibirFrases();
    }
  }

  function exibirFrases() {
    const container = document.getElementById("cardsContainer");
    container.innerHTML = "";
    const frases = JSON.parse(localStorage.getItem("frasesPersonalizadas")) || [];

    frases.forEach((frase, index) => {
      const card = document.createElement("div");
      card.className = "card";

      const fraseTexto = document.createElement("div");
      fraseTexto.textContent = frase;
      card.appendChild(fraseTexto);

      const speakBtn = document.createElement("button");
      speakBtn.className = "speak-btn";
      speakBtn.textContent = "Falar";
      speakBtn.onclick = () => speak(frase);
      card.appendChild(speakBtn);

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.textContent = "×";
      deleteBtn.onclick = function() {
        frases.splice(index, 1);
        localStorage.setItem("frasesPersonalizadas", JSON.stringify(frases));
        exibirFrases();
      };
      card.appendChild(deleteBtn);

      container.appendChild(card);
    });
  }

  window.onload = exibirFrases;