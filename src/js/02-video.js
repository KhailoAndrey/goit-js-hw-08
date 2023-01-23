import player from '@vimeo/player';
import _ from 'lodash';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

const onPlay = function (timeupdate) {
  _.throttle(() => {
    localStorage.setItem('videoplayer-current-time', timeupdate.seconds), 1000;
  });
};

player.on('play', onPlay);

if (localStorage.getItem('videoplayer-current-time') || 0) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
