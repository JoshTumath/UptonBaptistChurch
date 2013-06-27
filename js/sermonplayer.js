function changePlayingSermon(title, passage, speaker, file) {
  var titleText = document.getElementById('sermon-player-title');
  var passageText = document.getElementById('sermon-player-passage');
  var speakerText = document.getElementById('sermon-player-speaker');
  var text = document.getElementById('sermon-player').getElementsByTagName('p')[0];
  var player = document.getElementById('sermon-player').getElementsByTagName('audio')[0];
  
  titleText.replaceChild(document.createTextNode(title), titleText.firstChild);
  passageText.replaceChild(document.createTextNode(passage), passageText.firstChild);
  speakerText.replaceChild(document.createTextNode(speaker), speakerText.firstChild);
  player.src = file;
  
  text.removeAttribute('hidden');
  player.removeAttribute('hidden');
}

//document.onload = function() {
  var links = document.getElementById('sermons').getElementsByTagName('a');
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
      event.preventDefault();
      
      var title = this.getElementsByClassName('sermon-title')[0].firstChild.nodeValue;
      var passage = this.getElementsByClassName('sermon-passage')[0].firstChild.nodeValue;
      var speaker = this.getElementsByClassName('sermon-speaker')[0].firstChild.nodeValue;
      var file = this.href;
      
      changePlayingSermon(title, passage, speaker, file);
    }, false);
  }
//}