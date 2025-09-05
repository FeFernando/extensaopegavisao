document.getElementById("ler").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: lerTextoSelecionado
  });
});

function lerTextoSelecionado() {
  let texto = window.getSelection().toString();
  if (texto.trim().length > 0) {
    let utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = "pt-BR"; // voz em português
    speechSynthesis.speak(utterance);
  } else {
    alert("Selecione um texto na página primeiro. Caso o texto não for conteudo fixo a extensão não lerá.");
  }
}
