import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  console.log(data.seconds);
};

const throttled = throttle(onPlay, 1000);

player.on('timeupdate', throttled);

if (localStorage.getItem('videoplayer-current-time') || 0) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
