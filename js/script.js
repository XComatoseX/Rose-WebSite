
function showText() {
  const outputElement = document.getElementById('output');
  const smileText = document.getElementById(`smile-text`)
  let rose = "" 
  for (let i = 0; i < 101; i++) { 
    rose += "🌹" 
  }
  outputElement.innerHTML = '';

  for (let i = 0; i < rose.length; i++) {
      setTimeout(() => {
          outputElement.innerHTML += rose[i];
      }, i * 70);
  }
  setTimeout(() => {
    smileText.style.display = `block`
  }, rose.length * 75)

  outputElement.style.display = 'block';
}