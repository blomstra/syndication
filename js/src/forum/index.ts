import app from 'flarum/forum/app';
import addFeedIcons from './addFeedIcons';

app.initializers.add('blomstra-syndication', () => {
  addFeedIcons();
});
