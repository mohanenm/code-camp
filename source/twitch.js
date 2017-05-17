 var hardcoded =[
  {
    "stream": {
      "mature": false,
      "status": "Greg working on Electron-Vue boilerplate w/ Akira #programming #vuejs #electron",
      "broadcaster_language": "en",
      "display_name": "FreeCodeCamp",
      "game": "Creative",
      "language": "en",
      "_id": 79776140,
      "name": "freecodecamp",
      "created_at": "2015-01-14T03:36:47Z",
      "updated_at": "2016-09-17T05:00:52Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
      "profile_banner_background_color": null,
      "partner": false,
      "url": "https://www.twitch.tv/freecodecamp",
      "views": 161989,
      "followers": 10048,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/freecodecamp",
        "follows": "https://api.twitch.tv/kraken/channels/freecodecamp/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/freecodecamp/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/freecodecamp/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/freecodecamp",
        "subscriptions": "https://api.twitch.tv/kraken/channels/freecodecamp/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/freecodecamp/editors",
        "teams": "https://api.twitch.tv/kraken/channels/freecodecamp/teams",
        "videos": "https://api.twitch.tv/kraken/channels/freecodecamp/videos"
      }
    },
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/freecodecamp",
      "channel": "https://api.twitch.tv/kraken/channels/freecodecamp"
    }
  },
  {
    "stream": null,
    "display_name": "OgamingSC2",
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/ogamingsc2",
      "channel": "https://api.twitch.tv/kraken/channels/ogamingsc2"
    }
  },
  {
    "stream": {
      "mature": false,
      "status": "RERUN: StarCraft 2 - Kane vs. HuK (ZvP) - WCS Season 3 Challenger AM - Match 4",
      "broadcaster_language": "en",
      "display_name": "ESL_SC2",
      "game": "StarCraft II",
      "language": "en",
      "_id": 30220059,
      "name": "esl_sc2",
      "created_at": "2012-05-02T09:59:20Z",
      "updated_at": "2016-09-17T06:02:57Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-channel_offline_image-5a8657f8393c9d85-1920x1080.jpeg",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_banner-f8295b33d1846e75-480.jpeg",
      "profile_banner_background_color": "#050506",
      "partner": true,
      "url": "https://www.twitch.tv/esl_sc2",
      "views": 60843789,
      "followers": 135275,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/esl_sc2",
        "follows": "https://api.twitch.tv/kraken/channels/esl_sc2/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/esl_sc2/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/esl_sc2/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/esl_sc2",
        "subscriptions": "https://api.twitch.tv/kraken/channels/esl_sc2/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/esl_sc2/editors",
        "teams": "https://api.twitch.tv/kraken/channels/esl_sc2/teams",
        "videos": "https://api.twitch.tv/kraken/channels/esl_sc2/videos"
      }
    },
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/esl_sc2",
      "channel": "https://api.twitch.tv/kraken/channels/esl_sc2"
    }
  },
  {
    "stream": null,
    "display_name": "noobs2ninjas",
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/noob2ninjas",
      "channel": "https://api.twitch.tv/kraken/channels/oob2ninjas"
    }
  },
  {
    "error": "Not Found",
    "status": 404,
    "message": "Channel 'not-a-valid-account' does not exist"
  }
]

$(document).ready(function(){
 //clearly a illogical solution to copensate for my lack of understanding of another one 
  $('#online').click(function(){
   $(".two-info").hide();
   $(".four-info").hide();    
   $(".two-name").hide();
   $(".four-name").hide();
  })
  $('#offline').click(function(){
   $(".one-info").hide();
   $(".three-info").hide();
   $(".one-name").hide();
   $(".three-name").hide();
  })
  $('#all').click(function(){
 location.reload();

  })

//$(".one-info").html( '<a href = "https://www.twitch.tv/freecodecamp">' + hardcoded[0].stream.display_name + '</a>' );
$(".one-info").append('<a href = "https://www.twitch.tv/freecodecamp">' + hardcoded[0].stream.display_name + '</a>');
$(".two-info").append('<a href = "https://www.twitch.tv/ogamingsc2">' + hardcoded[1].display_name + '</a>');
$(".three-info").append('<a href = "https://www.twitch.tv/sl_sc2">' + hardcoded[2].stream.display_name + '</a>');
$(".four-info").append('<a href = "https://www.twitch.tv/noobs2ninjas">' + hardcoded[3].display_name + '</a>');

var game, status;
      if (hardcoded[0].stream === null) {
        game = "Offline";
        status = "offline";
      } else if (hardcoded[0].stream === undefined) {
        game = "Account Closed";
        status = "offline";
      } else {
        game = hardcoded[0].stream.status;
        status = "online";
      }
  $(".one-name").html(game + '<br>' + status);
  var game, status;
      if (hardcoded[1].stream === null) {
        game = "Offline";
        status = "offline";
      } else if (hardcoded[1].stream === undefined) {
        game = "Account Closed";
        status = "offline";
      } else {
        game = hardcoded[1].stream.status;
        status = "online";
      }
  $(".two-name").html(game + '<br>' + status);
  var game, status;
      if (hardcoded[2].stream === null) {
        game = "Offline";
        status = "offline";
      } else if (hardcoded[2].stream === undefined) {
        game = "Account Closed";
        status = "offline";
      } else {
        game = hardcoded[2].stream.status;
        status = "online";
      }
  $(".three-name").html(game + '<br>' + status);
        // $(".two-name").html(game + status);
        // $(".three-name").html(game + status);
        // $(".four-name").html(game + status);
         var game, status;
      if (hardcoded[3].stream === null) {
        game = "Offline";
        status = "offline";
      } else if (hardcoded[3].stream === undefined) {
        game = "Account Closed";
        status = "offline";
      } else {
        game = hardcoded[3].stream.game;
        status = "online";
      }
  $(".four-name").html( game + '<br>' + status);
      
      });
 
