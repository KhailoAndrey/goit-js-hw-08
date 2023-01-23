import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = function (timeupdate) {
  throttle(
    localStorage.setItem('videoplayer-current-time', timeupdate.seconds),
    1000
  );
};

player.on('timeupdate', onPlay);

if (localStorage.getItem('videoplayer-current-time') || 0) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
