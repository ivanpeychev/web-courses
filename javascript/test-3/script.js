function sum() {
  document.getElementById('sum').value = Number(document.getElementById('num1').value) + Number(document.getElementById('num2').value);
};

let show = document.getElementById('show');
show.onclick = function() {
  document.getElementById('text').innerText = "Once upon a time they all lived happily ever after - or so everyone was led to believe. Emma Swan knows how to take care of herself. She's a 28-year-old bail bonds collector who's been on her own ever since she was abandoned as a baby. But when the son she gave up years ago finds her, everything starts to change. Henry is now 10 years old and in desperate need of Emma's help. He believes that Emma actually comes from an alternate world and is Snow White and Prince Charming's missing daughter. According to his book of fairytales, they sent her away to protect her from the Evil Queen's curse, which trapped the fairytale world forever, frozen in time, and brought them into our modern world.";
  this.parentNode.removeChild(document.getElementById('show'));
}
