define([
    'jquery', 'underscore', 'backbone', 'pinyinUtil', 'banner'
    , "text!templates/app/tab-nav.html"

], function ($, _, Backbone, pinyinUtil, banner,
             _tabNavTemplate) {
    return Backbone.View.extend({
        tagName: "div"
        , className: "tab-pane"
        , initialize: function () {
            this.id = pinyinUtil.getPinyin(this.options.title, '', false).trim().toLowerCase().replace(/\W/g, '');
            this.tabNavTemplate = _.template(_tabNavTemplate);
            this.render();
        }
        , render: function () {
            // Render Snippet Views
            var that = this;
            if (that.collection !== undefined) {
                _.each(this.collection.renderAll(), function (snippet) {
                    that.$el.append(snippet);
                });
            } else if (that.options.content) {
                that.$el.append(that.options.content);
            }
            // Render & append nav for tab
            $("#formtabs").append(this.tabNavTemplate({title: this.options.title, id: this.id}))
            // Render tab
            this.$el.attr("id", this.id);
            this.$el.appendTo(".tab-content");
            // banner.setUpSwiper();
            this.delegateEvents();
        }
    });
});
