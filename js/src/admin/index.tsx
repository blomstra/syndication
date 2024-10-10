import app from 'flarum/admin/app';

app.initializers.add('blomstra-syndication', () => {
  const typeOptions = {
    atom: 'atom',
    rss: 'rss',
  };

  app.extensionData
    .for('blomstra-syndication')
    .registerSetting({
      label: app.translator.trans('blomstra-syndication.admin.settings.full-text.label'),
      setting: 'blomstra-syndication.plugin.full-text',
      type: 'boolean',
      help: app.translator.trans('blomstra-syndication.admin.settings.full-text.help'),
    })
    .registerSetting({
      label: app.translator.trans('blomstra-syndication.admin.settings.html.label'),
      setting: 'blomstra-syndication.plugin.html',
      type: 'boolean',
      help: app.translator.trans('blomstra-syndication.admin.settings.html.help'),
    })
    .registerSetting({
      label: app.translator.trans('blomstra-syndication.admin.settings.include-tags.label'),
      setting: 'blomstra-syndication.plugin.include-tags',
      type: 'boolean',
      help: app.translator.trans('blomstra-syndication.admin.settings.include-tags.help'),
    })
    .registerSetting({
      label: app.translator.trans('blomstra-syndication.admin.settings.entries-count'),
      setting: 'blomstra-syndication.plugin.entries-count',
      type: 'number',
      placeholder: 100,
      min: 1,
    })
    .registerSetting({
      label: app.translator.trans('blomstra-syndication.admin.settings.forum-icons.label'),
      help: app.translator.trans('blomstra-syndication.admin.settings.forum-icons.help'),
      setting: 'blomstra-syndication.plugin.forum-icons',
      type: 'boolean',
    })
    .registerSetting({
      label: app.translator.trans('blomstra-syndication.admin.settings.forum-link-format.label'),
      help: app.translator.trans('blomstra-syndication.admin.settings.forum-link-format.help'),
      setting: 'blomstra-syndication.plugin.forum-format',
      type: 'select',
      options: typeOptions,
      default: 'atom',
    });
});
