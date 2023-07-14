//<![CDATA[
var bookmark = {
    addBtn: function () {
        var _0x7f2ax3 = this;
        jQuery('.hartomy-bookmark-btn').click(function () {
            var _0x7f2ax5 = {
                id: jQuery(this).data('id'),
                title: jQuery(this).data('title'),
                link: jQuery(this).data('link'),
                image: jQuery(this).data('image'),
                skor: jQuery(this).data('skor'),
                type: jQuery(this).data('type'),
                status: jQuery(this).data('status'),
                episode: jQuery(this).data('episode')
            };
            if (1 == _0x7f2ax3.find(_0x7f2ax5.id)) {
                _0x7f2ax3.remove(_0x7f2ax5.id), jQuery(this).removeClass('marked'), jQuery(this).html(_0x7f2ax3.settings.buttonNoMarked)
            } else {
                if (_0x7f2ax3.get().length == _0x7f2ax3.settings.max) {
                    return alert('Bookmark Sudah Maksimum')
                };
                _0x7f2ax3.set(_0x7f2ax5), jQuery(this).addClass('marked'), jQuery(this).html(_0x7f2ax3.settings.buttonMarked), _0x7f2ax3.compile()
            };
            jQuery('#bookmarkNumb').html(_0x7f2ax3.get().length)
        })
    },
    check: function () {
        return 'function' == typeof Storage
    },
    checkBtn: function () {
        var _0x7f2ax3 = this;
        jQuery('.hartomy-bookmark-btn').each(function () {
            1 == _0x7f2ax3.find(jQuery(this).data('id')) && (jQuery(this).addClass('marked'), jQuery(this).html(_0x7f2ax3.settings.buttonMarked)), 1 != _0x7f2ax3.find(jQuery(this).data('id')) && (jQuery(this).removeClass('marked'), jQuery(this).html(_0x7f2ax3.settings.buttonNoMarked))
        })
    },
    compile: function () {
        var _0x7f2ax3 = jQuery('#bookmark'),
            _0x7f2ax5 = this;
        if (0 != _0x7f2ax3.length) {
            var _0x7f2ax6 = _0x7f2ax5.get();
            if (_0x7f2ax6.length > 0) {
                var _0x7f2ax7 = '';
                jQuery.map(_0x7f2ax6, function (_0x7f2ax3) {
                    _0x7f2ax7 += '<div class="bookmark-list"><div class="bookmark-post" data-id="' + _0x7f2ax3.id + '"><div class="remove-bookmark">Delete</div><a href="' + _0x7f2ax3.link + '" title="' + _0x7f2ax3.title + '"><div class="bookmark-thumbnail"><img src="' + _0x7f2ax3.image + '"/><span class="bookmark-skor">' + _0x7f2ax3.skor + '</span><span class="bookmark-type ' + _0x7f2ax3.type + '">' + _0x7f2ax3.type + '</span><span class="bookmark-status">' + _0x7f2ax3.status + '</span></div><div class="data"><h3 class="bookmark-title">' + _0x7f2ax3.title + '</h3></div></a></div></div>'
                }), _0x7f2ax3.hasClass('no-bookmark') && _0x7f2ax3.removeClass('no-bookmark'), _0x7f2ax3.html(_0x7f2ax7), jQuery('.remove-bookmark').click(function () {
                    var _0x7f2ax3 = jQuery(this).parent().data('id');
                    _0x7f2ax5.remove(_0x7f2ax3), _0x7f2ax5.checkBtn(), jQuery('#bookmarkNumb').html(_0x7f2ax5.get().length)
                })
            } else {
                _0x7f2ax3.addClass('no-bookmark'), _0x7f2ax3.html('<h4><center>YOU HAVE NO BOOKMARK, NOTHING TO SHOW</center></h4>')
            }
        }
    },
    find: function (_0x7f2ax3) {
        for (var _0x7f2ax5 = this.get(_0x7f2ax3), _0x7f2ax6 = 0; _0x7f2ax6 < _0x7f2ax5.length; _0x7f2ax6++) {
            if (_0x7f2ax5[_0x7f2ax6].id == _0x7f2ax3) {
                return !0
            }
        }
    },
    get: function () {
        return !0 === this.check() && JSON.parse(localStorage.getItem('BOOKMARK')) || []
    },
    remove: function (_0x7f2ax3) {
        for (var _0x7f2ax5 = this.get(), _0x7f2ax6 = 0; _0x7f2ax6 < _0x7f2ax5.length; _0x7f2ax6++) {
            _0x7f2ax5[_0x7f2ax6].id == _0x7f2ax3 && _0x7f2ax5.splice(_0x7f2ax6, 1)
        };
        localStorage.setItem('BOOKMARK', JSON.stringify(_0x7f2ax5)), this.compile()
    },
    set: function (_0x7f2ax3) {
        if (1 == this.check()) {
            var _0x7f2ax5 = [];
            (_0x7f2ax5 = null === localStorage.getItem('BOOKMARK') ? [] : JSON.parse(localStorage.getItem('BOOKMARK'))).unshift(_0x7f2ax3), localStorage.setItem('BOOKMARK', JSON.stringify(_0x7f2ax5))
        } else {
            alert('Browser tidak Support Bookmark')
        }
    },
    settings: {
        max: 10,
        buttonMarked: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" /></svg> Bookmarked',
        buttonNoMarked: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" /></svg> Bookmark'
    }
};
'function' == typeof jQuery && jQuery(document).ready(function () {
    var _0x7f2ax3 = bookmark;
    _0x7f2ax3.compile(), _0x7f2ax3.checkBtn(), _0x7f2ax3.addBtn(), jQuery('#bookmarkNumb').html(_0x7f2ax3.get().length)
})
//]]>
