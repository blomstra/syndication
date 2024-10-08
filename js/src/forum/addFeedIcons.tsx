import ItemList from 'flarum/common/utils/ItemList';
import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import type Mithril from 'mithril';
import DiscussionControls from 'flarum/forum/utils/DiscussionControls';
import LinkButton from 'flarum/common/components/LinkButton';
import Discussion from 'flarum/common/models/Discussion';
import UserPage from 'flarum/forum/components/UserPage';
import type User from 'flarum/common/models/User';

export default function addFeedIcons() {
  extend(IndexPage.prototype, 'actionItems', function (items: ItemList<Mithril.Children>) {
    if (!app.forum.attribute('blomstra-syndication.plugin.forum-icons')) {
      return;
    }

    if (items.has('refresh')) items.setPriority('refresh', 100);
    if (items.has('markAllAsRead')) items.setPriority('markAllAsRead', 90);

    const format = app.forum.attribute('blomstra-syndication.plugin.forum-format');

    let url = app.forum.attribute('baseUrl') + '/' + format;

    if ('flarum-tags' in flarum.extensions && this.currentTag()) {
      url = url + '/t/' + this.currentTag().slug();
    }

    items.add('rss-feed', <LinkButton icon="fas fa-rss" className="Button Button--icon" href={url} target="_blank" />, 105);
  });

  extend(DiscussionControls, 'userControls', function (items: ItemList<Mithril.Children>, discussion: Discussion) {
    if (!app.forum.attribute('blomstra-syndication.plugin.forum-icons')) {
      return;
    }

    const format = app.forum.attribute('blomstra-syndication.plugin.forum-format');

    items.add(
      'rss-link',
      <LinkButton icon="fas fa-rss" href={app.forum.attribute('baseUrl') + `/${format}/d/` + discussion.id()} external={true} target="_blank">
        {app.translator.trans('blomstra-syndication.forum.discussion.feed_link')}
      </LinkButton>
    );
  });

  extend(UserPage.prototype, 'navItems', function (this: UserPage, items) {
    if (!app.forum.attribute('blomstra-syndication.plugin.forum-icons')) {
      return;
    }

    const format = app.forum.attribute('blomstra-syndication.plugin.forum-format');
    const url = app.forum.attribute('baseUrl') + '/' + format + '/u/' + this.user.username() + '/posts';

    items.add(
      'rss-feed',
      <LinkButton icon="fas fa-rss" href={url} external={true} target="_blank">
        {app.translator.trans('blomstra-syndication.forum.discussion.feed_link')}
      </LinkButton>,
      40
    );
  });
}
