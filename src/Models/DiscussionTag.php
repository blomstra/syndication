<?php

namespace IanM\FlarumFeeds\Models;

use Flarum\Database\AbstractModel;

class DiscussionTag extends AbstractModel
{
    protected $table = 'discussion_tag';
    public static function appliedTags($id)
    {
        return static::where('discussion_id', $id)->get();
    }
}
