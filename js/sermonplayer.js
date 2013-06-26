function changePlayingSermon(title, passage, speaker, file) {
  var titleText = document.getElementById("sermon-player-title");
  var passageText = document.getElementById("sermon-player-passage");
  var speakerText = document.getElementById("sermon-player-speaker");
  var player = document.getElementById("sermon-player").getElementsByTagName("audio")[0];
  
  titleText.innerHTML = title;
  passageText.innerHTML = passage;
  speakerText.innerHTML = speaker;
  player.src = file;
}