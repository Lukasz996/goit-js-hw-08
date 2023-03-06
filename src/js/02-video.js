
import Player from '@vimeo/player';
import { throttle } from 'lodash';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});
player.on('timeupdate',throttle(() => {player.getCurrentTime().then(seconds => {
      localStorage.setItem('videoplayer-current-time', seconds);
    })
    .catch(error => {
        console.log(error);
      });
    }, 1000)
    );
const time = localStorage.getItem('videoplayer-current-time');
if (time) {
  player.setCurrentTime(time);
}





// import Player from '@vimeo/player';
// import { throttle } from 'lodash';

// const player = new Player('handstick', {
//     id: 19231868,
//     width: 640
// });

// player.on('play', function() {
//     console.log('played the video!');
// });



// const player = new Player('player-container', {
//     url: 'https://player.vimeo.com/video/236203659',
//     width: 640,
//     height: 360,
//     autoplay: true,
//     muted: true,
//     playsinline: true,
//     background: true,
//   });
// player.on('timeupdate', throttle(function(data) {
//     const currentTime = data.seconds;
//     localStorage.setItem('videoplayer-current-time', currentTime);
//   }, 1000));

//   const currentTime = localStorage.getItem('videoplayer-current-time');
// if (currentTime) {
//   player.setCurrentTime(currentTime);
// }