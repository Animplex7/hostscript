//<![CDATA[
function timeAgo(_0x33d3x2) {
    var _0x33d3x3 = (new Date).getTime() - _0x33d3x2.getTime(),
        _0x33d3x4 = Math.floor(_0x33d3x3 / 1e3),
        _0x33d3x5 = Math.floor(_0x33d3x4 / 60),
        _0x33d3x6 = Math.floor(_0x33d3x5 / 60),
        _0x33d3x7 = Math.floor(_0x33d3x6 / 24),
        _0x33d3x8 = Math.floor(_0x33d3x7 / 30),
        _0x33d3x9 = Math.floor(_0x33d3x8 / 12);
    return 0 === _0x33d3x3 ? 'Just now' : _0x33d3x4 < 60 ? _0x33d3x4 + ' detik lalu' : _0x33d3x5 < 60 ? _0x33d3x5 + ' menit lalu' : _0x33d3x6 < 24 ? _0x33d3x6 + ' jam lalu' : _0x33d3x7 < 30 ? _0x33d3x7 + ' hari lalu' : _0x33d3x8 < 12 ? _0x33d3x8 + ' bulan lalu' : _0x33d3x9 + ' tahun lalu'
}

function getRandomInt(_0x33d3x2, _0x33d3x3) {
    return Math.floor(Math.random() * (_0x33d3x3 - _0x33d3x2 + 1)) + _0x33d3x2
}

function shuffleArray(_0x33d3x2) {
    var _0x33d3x3, _0x33d3x4, _0x33d3x5 = _0x33d3x2.length;
    if (0 === _0x33d3x5) {
        return !1
    };
    for (; --_0x33d3x5;) {
        _0x33d3x3 = Math.floor(Math.random() * (_0x33d3x5 + 1)), _0x33d3x4 = _0x33d3x2[_0x33d3x5], _0x33d3x2[_0x33d3x5] = _0x33d3x2[_0x33d3x3], _0x33d3x2[_0x33d3x3] = _0x33d3x4
    };
    return _0x33d3x2
}

function trending(_0x33d3x2) {
    var _0x33d3x3 = getRandomInt(1, _0x33d3x2.feed.openSearch$totalResults.$t - trenNumb),
        _0x33d3x4 = document.createElement('script');
    _0x33d3x4.src = site + '/feeds/posts/default/-/' + reLabel + '?alt=json-in-script&start-index=' + _0x33d3x3 + '&max-results=' + trenNumb + '&callback=reTrending', document.body.appendChild(_0x33d3x4)
}

function reTrending(_0x33d3x2) {
    for (var _0x33d3x3, _0x33d3x6, _0x33d3x7 = document.getElementById(containerId), _0x33d3x8 = shuffleArray(_0x33d3x2.feed.entry), _0x33d3x9 = '', _0x33d3xe = 0, _0x33d3xf = _0x33d3x8.length; _0x33d3xe < _0x33d3xf; _0x33d3xe++) {
        for (var _0x33d3x10 = 0, _0x33d3x11 = _0x33d3x8[_0x33d3xe].link.length; _0x33d3x10 < _0x33d3x11; _0x33d3x10++) {
            _0x33d3x3 = 'alternate' == _0x33d3x8[_0x33d3xe].link[_0x33d3x10].rel ? _0x33d3x8[_0x33d3xe].link[_0x33d3x10].href : '#', _0x33d3x6 = _0x33d3x8[_0x33d3xe].title.$t, s = _0x33d3x8[_0x33d3xe].content.$t, a = s.indexOf('<img'), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), -1 == a || -1 == b || -1 == c || '' == d || d;
            for (var _0x33d3x12 = '', _0x33d3x13 = 0; _0x33d3x13 < _0x33d3x8[_0x33d3xe].category.length; _0x33d3x13++) {
                _0x33d3x12 = '<span>' + _0x33d3x8[_0x33d3xe].category[0].term + '</span>', v = _0x33d3x8[_0x33d3xe].category.map(function (_0x33d3x2) {
                    return "<a href='/search/label/" + _0x33d3x2.term + "'>" + _0x33d3x2.term + '</a>'
                })
            };
            for (var _0x33d3x14 = [], _0x33d3x15 = 0; _0x33d3x15 < _0x33d3x8[_0x33d3xe].category.length; _0x33d3x15++) {
                'Completed' == _0x33d3x8[_0x33d3xe].category[_0x33d3x15].term ? _0x33d3x14 = '<span class="stts-poss">Status: Completed</span>' : 'Ongoing' == _0x33d3x8[_0x33d3xe].category[_0x33d3x15].term ? _0x33d3x14 = '<span class="stts-poss">Status: Ongoing</span>' : 'Hiatus' == _0x33d3x8[_0x33d3xe].category[_0x33d3x15].term && (_0x33d3x14 = '<span class="stts-poss">Hiatus</span>')
            };
            for (var _0x33d3x16 = [], _0x33d3x17 = 0; _0x33d3x17 < _0x33d3x8[_0x33d3xe].category.length; _0x33d3x17++) {
                'TV' == _0x33d3x8[_0x33d3xe].category[_0x33d3x17].term ? _0x33d3x16 = '<span class="type-poss">TV</span>' : 'Movie' == _0x33d3x8[_0x33d3xe].category[_0x33d3x17].term ? _0x33d3x16 = '<span class="type-poss">Movie</span>' : 'OVA' == _0x33d3x8[_0x33d3xe].category[_0x33d3x17].term ? _0x33d3x16 = '<span class="type-poss">OVA</span>' : 'BD' == _0x33d3x8[_0x33d3xe].category[_0x33d3x17].term ? _0x33d3x16 = '<span class="type-poss">BD</span>' : 'ONA' == _0x33d3x8[_0x33d3xe].category[_0x33d3x17].term ? _0x33d3x16 = '<span class="type-poss">ONA</span>' : 'Special' == _0x33d3x8[_0x33d3xe].category[_0x33d3x17].term ? _0x33d3x16 = '<span class="type-poss">Special</span>' : 'Donghua' == _0x33d3x8[_0x33d3xe].category[_0x33d3x17].term ? _0x33d3x16 = '<span class="type-poss">Donghua</span>' : 'Live Action' == _0x33d3x8[_0x33d3xe].category[_0x33d3x17].term && (_0x33d3x16 = '<span class="type-poss">Live Action</span>')
            };
            var _0x33d3x18 = _0x33d3x8[_0x33d3xe].content.$t,
                _0x33d3x19 = _0x33d3x8[_0x33d3xe].media$thumbnail.url,
                _0x33d3x1a = $(_0x33d3x18).find('p').html();
            _0x33d3x1a = 'undefined' != $(_0x33d3x18).find('p').html() && null != $(_0x33d3x18).find('p').html() ? $(_0x33d3x18).find('p').html() : 'undefined' != $(_0x33d3x18).find('.sinoposis').html() && null != $(_0x33d3x18).find('.sinoposis').html() ? $(_0x33d3x18).find('.sinoposis').html() : 'Tidak ada sinopsis'
        };
        _0x33d3x19.includes('s72-c') ? _0x33d3x19 = _0x33d3x19.replace('s72-c', 's320-rw') : _0x33d3x19.includes('s72-c') || (_0x33d3x19 = _0x33d3x19.replace(/\/s[0-9]+(-c)?/, '/s320-rw')), _0x33d3x9 += '<div class="slider-item"><div class="slider-wrapp"><div class="thumb overlay"><a name="' + _0x33d3x6 + '" href="' + _0x33d3x3 + '" class="slider-image" style="display:block;"><img alt="' + _0x33d3x6 + '" src="' + _0x33d3x19 + '"/></a></div><div class="covert"><a name="' + _0x33d3x6 + '" href="' + _0x33d3x3 + '" class="slider-image"><img class="lazyload" alt="' + _0x33d3x6 + '" src="' + _0x33d3x19 + '"/></a></div><div class="post-descript"><div class="post-title"><div class="right-title"><h2 class="post-titlenya"><a href="' + _0x33d3x3 + '" title="' + _0x33d3x6 + '">' + _0x33d3x6 + '</a></h2><div class="post-tag">' + _0x33d3x16 + '</div></div><div class="post-meta"><div class="post-tr"><div class="site-ret"><span class="fa fa-star" aria-hidden="true">' + _0x33d3x12 + '</span></div></div></div></div><div class="post-genre"><div class="genre-slide">' + arrayGenre.filter(function (_0x33d3x2) {
            if (v.includes(_0x33d3x2)) {
                return _0x33d3x2
            }
        }).join(', ') + '</div></div><div class="post-sinop"><strong>Sinopsis</strong><p>' + _0x33d3x1a + '</p></div><div class="stats-poss">' + _0x33d3x14 + '</div></div></div></div>'
    };
    _0x33d3x7.innerHTML = _0x33d3x9, $('.owl_carouselle').owlCarousel({
        loop: loopSlide,
        dots: dots,
        autoplay: autoPlay,
        autoplayTimeout: timePlay,
        pagination: !1,
        responsive: {
            0: {
                items: 1,
                nav: !1
            },
            600: {
                items: 1,
                nav: !1
            },
            900: {
                items: 1,
                nav: !1
            },
            1000: {
                items: 1,
                nav: !1
            }
        }
    })
}

function runTrending(_0x33d3x2) {
    var _0x33d3x3 = document.createElement('script');
    _0x33d3x3.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';
    var _0x33d3x4 = document.createElement('script');
    _0x33d3x4.src = site + '/feeds/posts/default/-/' + reLabel + '?alt=json-in-script&max-results=0&callback=trending', 'scroll' == _0x33d3x2 ? $(window).on('scroll', function () {
        var _0x33d3x2 = $(window).scrollTop();
        document.body.appendChild(_0x33d3x3), document.body.appendChild(_0x33d3x4), _0x33d3x2 >= 1 && $(window).off('scroll')
    }) : 'onload' == _0x33d3x2 ? $(window).on('load', function () {
        document.body.appendChild(_0x33d3x3), document.body.appendChild(_0x33d3x4)
    }) : (document.body.appendChild(_0x33d3x3), document.body.appendChild(_0x33d3x4))
}


function reRelated(_0x33d3x2) {
    for (var _0x33d3x3, _0x33d3x6, _0x33d3x7, _0x33d3x8 = document.getElementById(recongId), _0x33d3x9 = _0x33d3x2.feed.entry, _0x33d3xe = '', _0x33d3xf = 0, _0x33d3x10 = _0x33d3x9.length; _0x33d3xf < _0x33d3x10; _0x33d3xf++) {
        for (var _0x33d3x11 = _0x33d3x9[_0x33d3xf].updated.$t, _0x33d3x12 = timeAgo(new Date(_0x33d3x11)), _0x33d3x13 = 0, _0x33d3x14 = _0x33d3x9[_0x33d3xf].link.length; _0x33d3x13 < _0x33d3x14; _0x33d3x13++) {
            _0x33d3x3 = 'alternate' == _0x33d3x9[_0x33d3xf].link[_0x33d3x13].rel ? _0x33d3x9[_0x33d3xf].link[_0x33d3x13].href : '#', _0x33d3x7 = _0x33d3x9[_0x33d3xf].title.$t, s = _0x33d3x9[_0x33d3xf].content.$t, a = s.indexOf('<img'), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), _0x33d3x6 = -1 != a && -1 != b && -1 != c && '' != d ? d : 'https://1.bp.blogspot.com/-BYDJ1dpFEhE/X9QnAUfeORI/AAAAAAAAHxw/OjfaqiPHjhAmCgJts39XIg7o4KR-8YtdACNcBGAsYHQ/w300-h225-p-k-no-nu/dagruel-no-image.png';
            for (var _0x33d3x15 = '', _0x33d3x16 = 0; _0x33d3x16 < _0x33d3x9[_0x33d3xf].category.length; _0x33d3x16++) {
                _0x33d3x15 = '<div class="recongStar">' + _0x33d3x9[_0x33d3xf].category[0].term + '</div>'
            };
            for (var _0x33d3x1f = [], _0x33d3x17 = 0; _0x33d3x17 < _0x33d3x9[_0x33d3xf].category.length; _0x33d3x17++) {
                _0x33d3x9[_0x33d3xf].category[_0x33d3x17].term.includes('Eps') && (_0x33d3x1f += _0x33d3x9[_0x33d3xf].category[_0x33d3x17].term.replace('Eps.', 'Episode'))
            };
            for (var _0x33d3x18 = [], _0x33d3x19 = 0; _0x33d3x19 < _0x33d3x9[_0x33d3xf].category.length; _0x33d3x19++) {
                'TV' == _0x33d3x9[_0x33d3xf].category[_0x33d3x19].term ? _0x33d3x18 = "<span class='type-poss tv'>" + _0x33d3x9[_0x33d3xf].category[_0x33d3x19].term + '</span>' : 'Movie' == _0x33d3x9[_0x33d3xf].category[_0x33d3x19].term ? _0x33d3x18 = "<span class='type-poss mov'>" + _0x33d3x9[_0x33d3xf].category[_0x33d3x19].term + '</span>' : 'BD' == _0x33d3x9[_0x33d3xf].category[_0x33d3x19].term ? _0x33d3x18 = "<span class='type-poss bd'>" + _0x33d3x9[_0x33d3xf].category[_0x33d3x19].term + '</span>' : 'OVA' == _0x33d3x9[_0x33d3xf].category[_0x33d3x19].term ? _0x33d3x18 = "<span class='type-poss ova'>" + _0x33d3x9[_0x33d3xf].category[_0x33d3x19].term + '</span>' : 'ONA' == _0x33d3x9[_0x33d3xf].category[_0x33d3x19].term ? _0x33d3x18 = "<span class='type-poss ona'>" + _0x33d3x9[_0x33d3xf].category[_0x33d3x19].term + '</span>' : 'Special' == _0x33d3x9[_0x33d3xf].category[_0x33d3x19].term ? _0x33d3x18 = "<span class='type-poss special'>" + _0x33d3x9[_0x33d3xf].category[_0x33d3x19].term + '</span>' : 'Donghua' == _0x33d3x9[_0x33d3xf].category[_0x33d3x19].term ? _0x33d3x18 = "<span class='type-poss donghua'>" + _0x33d3x9[_0x33d3xf].category[_0x33d3x19].term + '</span>' : 'Live Action' == _0x33d3x9[_0x33d3xf].category[_0x33d3x19].term && (_0x33d3x18 = "<span class='type-poss liveact'>" + _0x33d3x9[_0x33d3xf].category[_0x33d3x19].term + '</span>')
            }
        };
        _0x33d3xe += '<div class="recong"><a class="recongBlock" href="' + _0x33d3x3 + '" title="' + _0x33d3x7 + '"><img class="recongImg lazy" loading="lazy" src="' + _0x33d3x6 + '" alt="' + _0x33d3x7 + '"/><div class="rd"></div>' + _0x33d3x15 + _0x33d3x18 + '</a><a class="recongTb" href="' + _0x33d3x3 + '" title="' + _0x33d3x7 + '"><h3 class="recongtit">' + _0x33d3x7 + '</h3><span class="recongEps">' + _0x33d3x1f + '</span><span class="recongAgo">' + _0x33d3x12 + '</span></a></div>'
    };
    _0x33d3x8.innerHTML = _0x33d3xe, $('.recongCont').owlCarousel({
        loop: recongSlide,
        dots: !1,
        autoplay: recongPlay,
        autoplayTimeout: recongTimePlay,
        pagination: !1,
        responsive: {
            0: {
                items: 2,
                nav: !1
            },
            600: {
                items: 3,
                nav: !1
            },
            900: {
                items: 5,
                nav: !1
            },
            1000: {
                items: 5,
                nav: !1
            }
        }
    });
    var _0x33d3x1a = $('.recongCont');
    _0x33d3x1a.owlCarousel(), $('.nextf').click(function () {
        _0x33d3x1a.trigger('next.owl.carousel')
    }), $('.prevf').click(function () {
        _0x33d3x1a.trigger('prev.owl.carousel', [300])
    })
}

function runRelated(_0x33d3x2) {
    var _0x33d3x3 = document.createElement('script');
    _0x33d3x3.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';
    var _0x33d3x4 = document.createElement('script');
    _0x33d3x4.src = '/feeds/posts/default/-/' + recongLabel + '?alt=json-in-script&max-results=' + recongNumb + '&callback=reRelated&orderby=updated', 'scroll' == _0x33d3x2 ? $(window).on('scroll', function () {
        var _0x33d3x2 = $(window).scrollTop();
        document.body.appendChild(_0x33d3x3), document.body.appendChild(_0x33d3x4), _0x33d3x2 >= 1 && $(window).off('scroll')
    }) : 'onload' == _0x33d3x2 ? $(window).on('load', function () {
        document.body.appendChild(_0x33d3x3), document.body.appendChild(_0x33d3x4)
    }) : (document.body.appendChild(_0x33d3x3), document.body.appendChild(_0x33d3x4))
}

var mTP = {
    shuffleArray: function (_0x33d3x2) {
        var _0x33d3x3, _0x33d3x4, _0x33d3x5 = _0x33d3x2.length;
        if (0 === _0x33d3x5) {
            return !1
        };
        for (; --_0x33d3x5;) {
            _0x33d3x3 = Math.floor(Math.random() * (_0x33d3x5 + 1)), _0x33d3x4 = _0x33d3x2[_0x33d3x5], _0x33d3x2[_0x33d3x5] = _0x33d3x2[_0x33d3x3], _0x33d3x2[_0x33d3x3] = _0x33d3x4
        };
        return _0x33d3x2
    },
    run: function (_0x33d3x2, _0x33d3x3) {
        var _0x33d3x4 = arguments.length > 2 && void(0) !== arguments[2] ? arguments[2] : 5,
            _0x33d3x5 = arguments.length > 3 && void(0) !== arguments[3] ? arguments[3] : 5;
        if (0 == _0x33d3x2('#mTP_Slider').length) {
            return console.log('Recomendation tidak ada')
        };
        mTP.maxCat = _0x33d3x5, mTP.max = _0x33d3x4, window.matchMedia('(max-width: 470px)').matches && (mTP.maxCat = 3), window.matchMedia('(max-width: 570px)').matches && (mTP.max = 2);
        var _0x33d3x6 = 0 == _0x33d3x3 ? '' : '/-/' ['concat'](_0x33d3x3);
        _0x33d3x2.ajax({
            url: '/feeds/posts/default' ['concat'](_0x33d3x6, '?alt=json-in-script&max-results=150'),
            type: 'get',
            dataType: 'jsonp',
            success: function (_0x33d3x3) {
                mTP.compile(_0x33d3x2, _0x33d3x3)
            },
            error: function (_0x33d3x2) {
                console.log(_0x33d3x2)
            }
        })
    },
    compile: function (_0x33d3x2, _0x33d3x3) {
        var _0x33d3x4;
        _0x33d3x3.feed && function () {
            var _0x33d3x5 = mTP.shuffleArray(_0x33d3x3.feed.entry);
            mTP.filter = mTP.shuffleArray(_0x33d3x3.feed.category.map(function (_0x33d3x2) {
                return _0x33d3x2.term
            }).filter(function (_0x33d3x2) {
                if (label_select.includes(_0x33d3x2)) {
                    return _0x33d3x2
                }
            })).slice(0, mTP.maxCat), mTP.obj = {}, _0x33d3x2.each(mTP.filter, function (_0x33d3x3, _0x33d3x4) {
                _0x33d3x5.filter(function (_0x33d3x3) {
                    for (var _0x33d3x5 = _0x33d3x3.category.map(function (_0x33d3x2) {
                            return _0x33d3x2.term
                        }), _0x33d3x6 = _0x33d3x3.category, _0x33d3x7 = [], _0x33d3x8 = 0; _0x33d3x8 < _0x33d3x6.length; _0x33d3x8++) {
                        'TV' == _0x33d3x6[_0x33d3x8].term ? _0x33d3x7 = "<span class='typez tv'>TV</span>" : 'Movie' == _0x33d3x6[_0x33d3x8].term ? _0x33d3x7 = "<span class='typez mov'>Movie</span>" : 'BD' == _0x33d3x6[_0x33d3x8].term ? _0x33d3x7 = "<span class='typez bd'>BD</span>" : 'OVA' == _0x33d3x6[_0x33d3x8].term ? _0x33d3x7 = "<span class='typez ova'>OVA</span>" : 'ONA' == _0x33d3x6[_0x33d3x8].term ? _0x33d3x7 = "<span class='typez ona'>ONA</span>" : 'Special' == _0x33d3x6[_0x33d3x8].term ? _0x33d3x7 = "<span class='typez special'>Special</span>" : 'Donghua' == _0x33d3x6[_0x33d3x8].term ? _0x33d3x7 = "<span class='typez donghua'>Donghua</span>" : 'Live Action' == _0x33d3x6[_0x33d3x8].term ? _0x33d3x7 = "<span class='typez la'>Live Action</span>" : 'Drama' == _0x33d3x6[_0x33d3x8].term && (_0x33d3x7 = "<span class='typez drama'>Drama</span>")
                    };
                    for (var _0x33d3x9 = [], _0x33d3xe = 0; _0x33d3xe < _0x33d3x6.length; _0x33d3xe++) {
                        'Completed' == _0x33d3x6[_0x33d3xe].term ? _0x33d3x9 = "<span class='stats-poss'>Completed</span>" : 'Ongoing' == _0x33d3x6[_0x33d3xe].term ? _0x33d3x9 = "<span class='stats-poss'>Ongoing</span>" : 'Hiatus' == _0x33d3x6[_0x33d3xe].term ? _0x33d3x9 = "<span class='stats-poss'>Hiatus</span>" : 'Upcoming' == _0x33d3x6[_0x33d3xe].term && (_0x33d3x9 = "<span class='stats-poss'>Upcoming</span>")
                    };
                    if (_0x33d3x5.includes(_0x33d3x4)) {
                        var _0x33d3x22 = mTP.obj[_0x33d3x4];
                        _0x33d3x22 ? _0x33d3x22.length < mTP.max && _0x33d3x22.push({
                            title: _0x33d3x3.title.$t,
                            tp: _0x33d3x7,
                            stt: _0x33d3x9,
                            cat: _0x33d3x5,
                            link: _0x33d3x3.link.find(function (_0x33d3x2) {
                                return 'alternate' == _0x33d3x2.rel
                            }).href,
                            image: 'media$thumbnail' in _0x33d3x3 ? _0x33d3x3.media$thumbnail.url.match(/\/s[0-9]{2}-(w[0-9]+-)?c/) ? _0x33d3x3.media$thumbnail.url.replace(/\/s[0-9]{2}-(w[0-9]+-)?c/, '/' ['concat'](mTP.iSize)) : _0x33d3x3.media$thumbnail.url.replace(/\=s[0-9]{2}-(w[0-9]+-)?c/, '=' ['concat'](mTP.iSize)) : 'content' in _0x33d3x3 ? _0x33d3x2(_0x33d3x3.content.$t).find('img').attr('src') : mTP.noImage
                        }) : mTP.obj[_0x33d3x4] = [{
                            title: _0x33d3x3.title.$t,
                            tp: _0x33d3x7,
                            stt: _0x33d3x9,
                            cat: _0x33d3x5,
                            link: _0x33d3x3.link.find(function (_0x33d3x2) {
                                return 'alternate' == _0x33d3x2.rel
                            }).href,
                            image: 'media$thumbnail' in _0x33d3x3 ? _0x33d3x3.media$thumbnail.url.match(/\/s[0-9]{2}-(w[0-9]+-)?c/) ? _0x33d3x3.media$thumbnail.url.replace(/\/s[0-9]{2}-(w[0-9]+-)?c/, '/' ['concat'](mTP.iSize)) : _0x33d3x3.media$thumbnail.url.replace(/\=s[0-9]{2}-(w[0-9]+-)?c/, '=' ['concat'](mTP.iSize)) : 'content' in _0x33d3x3 ? _0x33d3x2(_0x33d3x3.content.$t).find('img').attr('src') : mTP.noImage
                        }]
                    }
                })
            });
            var _0x33d3x6 = _0x33d3x2('<div class="series-gen"><ul class="nav-tabs"></ul><div class="listupd"></div></div>'),
                _0x33d3x7 = Object.keys(mTP.obj).sort().reduce(function (_0x33d3x2, _0x33d3x3) {
                    return _0x33d3x2[_0x33d3x3] = mTP.obj[_0x33d3x3], _0x33d3x2
                }, {}),
                _0x33d3x8 = function () {
                    var _0x33d3x3 = _0x33d3x4.replace(/\W/g, '');
                    _0x33d3x6.find('.nav-tabs').append('<li><span data-id="series-' ['concat'](_0x33d3x3, '">').concat(_0x33d3x4, '</span></li>')), _0x33d3x6.find('.listupd').append('<div id="series-' ['concat'](_0x33d3x3, '" class="customAF scroll"></div>')), _0x33d3x2.each(mTP.obj[_0x33d3x4], function () {
                        _0x33d3x6.find('#series-' ['concat'](_0x33d3x3)).append('<article class="customAgata"><a href="' ['concat'](this.link, '" title="').concat(this.title, '"><div class="images"><img class="lazyload" data-src="').concat(this.image, '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=" alt="').concat(this.title, `">\
              `).concat(this.tp).concat(this.stt, '</div></a><a class="tb-title" href="').concat(this.link, '" title="').concat(this.title, '"><h3 class="entry-title">').concat(this.title, '</h3></a></article>'))
                    })
                };
            for (_0x33d3x4 in _0x33d3x7) {
                _0x33d3x8()
            };
            _0x33d3x2('#mTP_Slider').html(_0x33d3x6), _0x33d3x2('.nav-tabs li').click(function () {
                var _0x33d3x3 = _0x33d3x2(this).find('span').attr('data-id');
                _0x33d3x2('.customAF.scroll, .nav-tabs li').each(function () {
                    _0x33d3x2(this).attr('id') == _0x33d3x3 || _0x33d3x2(this).find('span').attr('data-id') == _0x33d3x3 ? _0x33d3x2(this).addClass('active') : _0x33d3x2(this).removeClass('active')
                })
            }), _0x33d3x2('.nav-tabs li').first().click()
        }()
    },
    iSize: 's300-rw',
    noImage: 'https://1.bp.blogspot.com/-BYDJ1dpFEhE/X9QnAUfeORI/AAAAAAAAHxw/OjfaqiPHjhAmCgJts39XIg7o4KR-8YtdACNcBGAsYHQ/w300-h225-p-k-no-nu/dagruel-no-image.png'
};

function showLucky(_0x33d3x2) {
    for (var _0x33d3x3 = _0x33d3x2.feed, _0x33d3x4 = (_0x33d3x3.entry, _0x33d3x3.entry[0]), _0x33d3x5 = 0; _0x33d3x5 < _0x33d3x4.link.length; ++_0x33d3x5) {
        'alternate' == _0x33d3x4.link[_0x33d3x5].rel && (window.location = _0x33d3x4.link[_0x33d3x5].href)
    }
}

function fetchLuck(_0x33d3x2) {
    script = document.createElement('script'), script.src = '/feeds/posts/default/-/Series?start-index=' + _0x33d3x2 + '&max-results=1&alt=json-in-script&callback=showLucky', script.type = 'text/javascript', document.getElementsByTagName('head')[0].appendChild(script)
}

function readLucky(_0x33d3x2) {
    var _0x33d3x3 = _0x33d3x2.feed,
        _0x33d3x4 = parseInt(_0x33d3x3.openSearch$totalResults.$t, 10),
        _0x33d3x5 = Math.floor(Math.random() * _0x33d3x4);
    fetchLuck(++_0x33d3x5)
}

function feelingLucky() {
    var _0x33d3x2 = document.createElement('script');
    _0x33d3x2.type = 'text/javascript', _0x33d3x2.src = '/feeds/posts/default/-/Series?max-results=0&alt=json-in-script&callback=readLucky', document.getElementsByTagName('head')[0].appendChild(_0x33d3x2)
}
var blogPost = {
        run: function (_0x33d3x2, _0x33d3x3, _0x33d3x4) {
            blogPost.outputDiv = _0x33d3x2, d = document.createElement('script'), d.src = _0x33d3x3 + '/feeds/posts/default?alt=json&callback=blogPost.compile&max-results=' + _0x33d3x4, document.body.appendChild(d)
        },
        compile: function (_0x33d3x2) {
            var _0x33d3x3 = document.getElementById(blogPost.outputDiv),
                _0x33d3x4 = _0x33d3x2.feed;
            if (_0x33d3x4 && _0x33d3x4.entry.length > 0) {
                for (var _0x33d3x5 = '', _0x33d3x6 = 0; _0x33d3x6 < _0x33d3x4.entry.length; _0x33d3x6++) {
                    var _0x33d3x7 = _0x33d3x4.entry[_0x33d3x6],
                        _0x33d3x8 = _0x33d3x7.author[0].name.$t,
                        _0x33d3x9 = _0x33d3x7.title.$t,
                        _0x33d3xe = _0x33d3x7.published.$t,
                        _0x33d3x22 = _0x33d3xe.substring(0, 4),
                        _0x33d3xf = _0x33d3xe.substring(5, 7),
                        _0x33d3x2d = _0x33d3xe.substring(8, 10),
                        _0x33d3x10 = new Array;
                    _0x33d3x10[1] = 'Jan', _0x33d3x10[2] = 'Feb', _0x33d3x10[3] = 'Mar', _0x33d3x10[4] = 'Apr', _0x33d3x10[5] = 'May', _0x33d3x10[6] = 'Jun', _0x33d3x10[7] = 'Jul', _0x33d3x10[8] = 'Aug', _0x33d3x10[9] = 'Sep', _0x33d3x10[10] = 'Oct', _0x33d3x10[11] = 'Nov', _0x33d3x10[12] = 'Dec', _0x33d3xe = _0x33d3x2d + ', ' + _0x33d3x10[parseInt(_0x33d3xf, 10)] + ' ' + _0x33d3x22;
                    for (var _0x33d3x11 = '', _0x33d3x12 = 0; _0x33d3x12 < _0x33d3x7.link.length; _0x33d3x12++) {
                        if ('alternate' == _0x33d3x7.link[_0x33d3x12].rel) {
                            _0x33d3x11 = _0x33d3x7.link[_0x33d3x12].href;
                            break
                        }
                    };
                    var _0x33d3x13 = '';
                    if ('content' in _0x33d3x7) {
                        var _0x33d3x14 = _0x33d3x7.content.$t
                    } else {
                        _0x33d3x14 = 'summary' in _0x33d3x7 ? _0x33d3x7.summary.$t : ''
                    };
                    if ((_0x33d3x14 = _0x33d3x14.replace(/<\S[^>]*>/g, '')).length > 90 && (_0x33d3x14 = _0x33d3x14.substring(0, 70) + '...'), _0x33d3x7.media$thumbnail) {
                        _0x33d3x13 = _0x33d3x7.media$thumbnail.url.replace('s72-c', 's400-rw')
                    } else {
                        if (_0x33d3x7.content) {
                            var _0x33d3x15 = _0x33d3x7.content.$t,
                                _0x33d3x16 = _0x33d3x15.indexOf('<img'),
                                _0x33d3x1f = _0x33d3x15.indexOf('src="', _0x33d3x16),
                                _0x33d3x2e = _0x33d3x15.indexOf('"', _0x33d3x1f + 5),
                                _0x33d3x17 = _0x33d3x15.substr(_0x33d3x1f + 5, _0x33d3x2e - _0x33d3x1f - 5);
                            _0x33d3x13 = -1 != _0x33d3x16 && -1 != _0x33d3x1f && -1 != _0x33d3x2e && '' != _0x33d3x17 ? _0x33d3x17 : 'https://1.bp.blogspot.com/-q5XNfPSweVQ/X-Gpih2Z9rI/AAAAAAAAHyo/7VArMT1coTM4n792SDJ6lYMBxpChGjnvgCPcBGAsYHg/s0/dagruel-no-image.png'
                        } else {
                            _0x33d3x13 = 'https://1.bp.blogspot.com/-q5XNfPSweVQ/X-Gpih2Z9rI/AAAAAAAAHyo/7VArMT1coTM4n792SDJ6lYMBxpChGjnvgCPcBGAsYHg/s0/dagruel-no-image.png'
                        }
                    };
                    _0x33d3x5 += '<li><div class="blogCont"><a href="' + _0x33d3x11 + '" alt="' + _0x33d3x9 + '"><img alt="' + _0x33d3x9 + '" class="lazyload" data-src="' + _0x33d3x13 + '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII="/></a><div class="titleBlog"><h3><a href="' + _0x33d3x11 + '" alt="' + _0x33d3x9 + '">' + _0x33d3x9 + '</a></h3><span><b>Posted by: </b><i>' + _0x33d3x8 + '</i> · <b>Post on: </b><i>' + _0x33d3xe + '</i></span><p>' + _0x33d3x14 + '</p></div></div></li>'
                };
                _0x33d3x3.innerHTML = _0x33d3x5
            }
        }
    },
    custom_2 = {
        run: function (_0x33d3x2, _0x33d3x3, _0x33d3x4) {
            custom_2.outputDiv = _0x33d3x2, d = document.createElement('script'), d.src = '/feeds/posts/default/-/' + _0x33d3x3 + '?alt=json&callback=custom_2.compile&orderby=updated&max-results=' + _0x33d3x4, document.body.appendChild(d)
        },
        compile: function (_0x33d3x2) {
            var _0x33d3x3 = document.getElementById(custom_2.outputDiv),
                _0x33d3x4 = _0x33d3x2.feed.entry;
            if (_0x33d3x4 && _0x33d3x4.length > 0) {
                for (var _0x33d3x5 = '', _0x33d3x6 = 0; _0x33d3x6 < _0x33d3x4.length; _0x33d3x6++) {
                    var _0x33d3x7 = _0x33d3x4[_0x33d3x6],
                        _0x33d3x8 = _0x33d3x7.title.$t,
                        _0x33d3x9 = _0x33d3x7.updated.$t,
                        _0x33d3xe = _0x33d3x9.substring(0, 4),
                        _0x33d3x22 = _0x33d3x9.substring(5, 7),
                        _0x33d3xf = _0x33d3x9.substring(8, 10),
                        _0x33d3x2d = timeAgo(new Date(_0x33d3x9)),
                        _0x33d3x10 = new Array;
                    _0x33d3x10[1] = 'Jan', _0x33d3x10[2] = 'Feb', _0x33d3x10[3] = 'Mar', _0x33d3x10[4] = 'Apr', _0x33d3x10[5] = 'May', _0x33d3x10[6] = 'Jun', _0x33d3x10[7] = 'Jul', _0x33d3x10[8] = 'Aug', _0x33d3x10[9] = 'Sep', _0x33d3x10[10] = 'Oct', _0x33d3x10[11] = 'Nov', _0x33d3x10[12] = 'Dec', _0x33d3x9 = _0x33d3xf + ', ' + _0x33d3x10[parseInt(_0x33d3x22, 10)] + ' ' + _0x33d3xe;
                    for (var _0x33d3x11 = '', _0x33d3x12 = 0; _0x33d3x12 < _0x33d3x7.link.length; _0x33d3x12++) {
                        if ('alternate' == _0x33d3x7.link[_0x33d3x12].rel) {
                            _0x33d3x11 = _0x33d3x7.link[_0x33d3x12].href;
                            break
                        }
                    };
                    var _0x33d3x13 = '';
                    if (_0x33d3x7.media$thumbnail) {
                        _0x33d3x13 = _0x33d3x7.media$thumbnail.url.replace('s72-c', 's400-rw')
                    } else {
                        if (_0x33d3x7.content) {
                            var _0x33d3x14 = _0x33d3x7.content.$t,
                                _0x33d3x15 = _0x33d3x14.indexOf('<img'),
                                _0x33d3x16 = _0x33d3x14.indexOf('src="', _0x33d3x15),
                                _0x33d3x1f = _0x33d3x14.indexOf('"', _0x33d3x16 + 5),
                                _0x33d3x2e = _0x33d3x14.substr(_0x33d3x16 + 5, _0x33d3x1f - _0x33d3x16 - 5);
                            _0x33d3x13 = -1 != _0x33d3x15 && -1 != _0x33d3x16 && -1 != _0x33d3x1f && '' != _0x33d3x2e ? _0x33d3x2e : 'https://1.bp.blogspot.com/-q5XNfPSweVQ/X-Gpih2Z9rI/AAAAAAAAHyo/7VArMT1coTM4n792SDJ6lYMBxpChGjnvgCPcBGAsYHg/s0/dagruel-no-image.png'
                        } else {
                            _0x33d3x13 = 'https://1.bp.blogspot.com/-q5XNfPSweVQ/X-Gpih2Z9rI/AAAAAAAAHyo/7VArMT1coTM4n792SDJ6lYMBxpChGjnvgCPcBGAsYHg/s0/dagruel-no-image.png'
                        }
                    };
                    for (_0x33d3x17 = [], sx = 0; sx < _0x33d3x7.category.length; sx++) {
                        if ('Movie' == _0x33d3x7.category[sx].term) {
                            var _0x33d3x17 = '<span class="type-poss-2 mov">Movie</span>'
                        } else {
                            'TV' == _0x33d3x7.category[sx].term ? _0x33d3x17 = '<span class="type-poss-2 tv">TV</span>' : 'Special' == _0x33d3x7.category[sx].term ? _0x33d3x17 = '<span class="type-poss-2 special">Special</span>' : 'OVA' == _0x33d3x7.category[sx].term ? _0x33d3x17 = '<span class="type-poss-2 ova">OVA</span>' : 'ONA' == _0x33d3x7.category[sx].term ? _0x33d3x17 = '<span class="type-poss-2 ona">ONA</span>' : 'BD' == _0x33d3x7.category[sx].term ? _0x33d3x17 = '<span class="type-poss-2 bd">BD</span>' : 'Donghua' == _0x33d3x7.category[sx].term ? _0x33d3x17 = '<span class="type-poss-2 donghua">Donghua</span>' : 'Live Action' == _0x33d3x7.category[sx].term && (_0x33d3x17 = '<span class="type-poss-2 liveact">Live Action</span>')
                        }
                    };
                    for (_0x33d3x18 = [], st = 0; st < _0x33d3x7.category.length; st++) {
                        if ('Completed' == _0x33d3x7.category[st].term) {
                            var _0x33d3x18 = '<span class="stats-poss com">Completed</span>'
                        } else {
                            'Ongoing' == _0x33d3x7.category[st].term && (_0x33d3x18 = '<span class="stats-poss ong">Ongoing</span>')
                        }
                    };
                    for (rt = [], rtn = 0; rtn < 1; rtn++) {
                        rt += _0x33d3x7.category[rtn].term
                    };
                    _0x33d3x5 += '<li class="recomList"><a class="recomBlock" href="' + _0x33d3x11 + '" title="' + _0x33d3x8 + '"><img class="recomImg lazyload" alt="' + _0x33d3x8 + '" data-src="' + _0x33d3x13 + '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII="/><div class="recomType">' + _0x33d3x17 + '</div><span class="recomStar"><p>' + rt + '</p></span><div class="rd"></div></a><a class="recomTb" href="' + _0x33d3x11 + '" title="' + _0x33d3x8 + '"><h3 class="recomtit">' + _0x33d3x8 + '</h3>' + _0x33d3x18 + '<span class="recomAgo">' + _0x33d3x2d + '</span></a></li>'
                };
                _0x33d3x3.innerHTML = _0x33d3x5
            }
        }
    },
    custom_3 = {
        run: function (_0x33d3x2, _0x33d3x3, _0x33d3x4) {
            custom_3.outputDiv = _0x33d3x2, custom_3.labelCustom = _0x33d3x3, d = document.createElement('script'), d.src = '/feeds/posts/default/-/' + _0x33d3x3 + '?alt=json&callback=custom_3.compile&max-results=' + _0x33d3x4, document.body.appendChild(d)
        },
        compile: function (_0x33d3x2) {
            var _0x33d3x3 = document.getElementById(custom_3.outputDiv),
                _0x33d3x4 = _0x33d3x2.feed;
            if (_0x33d3x4 && _0x33d3x4.entry.length > 0) {
                for (var _0x33d3x5 = "<ul class='latest-label'>", _0x33d3x6 = 0; _0x33d3x6 < _0x33d3x4.entry.length; _0x33d3x6++) {
                    var _0x33d3x7 = _0x33d3x4.entry[_0x33d3x6],
                        _0x33d3x8 = _0x33d3x7.title.$t,
                        _0x33d3x9 = _0x33d3x7.published.$t,
                        _0x33d3xe = _0x33d3x9.substring(0, 4),
                        _0x33d3x22 = _0x33d3x9.substring(5, 7),
                        _0x33d3xf = _0x33d3x9.substring(8, 10),
                        _0x33d3x2d = new Array;
                    _0x33d3x2d[1] = 'Jan', _0x33d3x2d[2] = 'Feb', _0x33d3x2d[3] = 'Mar', _0x33d3x2d[4] = 'Apr', _0x33d3x2d[5] = 'May', _0x33d3x2d[6] = 'Jun', _0x33d3x2d[7] = 'Jul', _0x33d3x2d[8] = 'Aug', _0x33d3x2d[9] = 'Sep', _0x33d3x2d[10] = 'Oct', _0x33d3x2d[11] = 'Nov', _0x33d3x2d[12] = 'Dec', _0x33d3x9 = _0x33d3xf + ', ' + _0x33d3x2d[parseInt(_0x33d3x22, 10)] + ' ' + _0x33d3xe;
                    for (var _0x33d3x10 = '', _0x33d3x11 = 0; _0x33d3x11 < _0x33d3x7.link.length; _0x33d3x11++) {
                        if ('alternate' == _0x33d3x7.link[_0x33d3x11].rel) {
                            _0x33d3x10 = _0x33d3x7.link[_0x33d3x11].href;
                            break
                        }
                    };
                    var _0x33d3x12 = '';
                    if (_0x33d3x7.media$thumbnail) {
                        _0x33d3x12 = _0x33d3x7.media$thumbnail.url.replace('s72-c', 's400-rw')
                    } else {
                        if (_0x33d3x7.content) {
                            var _0x33d3x13 = _0x33d3x7.content.$t,
                                _0x33d3x14 = _0x33d3x13.indexOf('<img'),
                                _0x33d3x15 = _0x33d3x13.indexOf('src="', _0x33d3x14),
                                _0x33d3x16 = _0x33d3x13.indexOf('"', _0x33d3x15 + 5),
                                _0x33d3x1f = _0x33d3x13.substr(_0x33d3x15 + 5, _0x33d3x16 - _0x33d3x15 - 5);
                            _0x33d3x12 = -1 != _0x33d3x14 && -1 != _0x33d3x15 && -1 != _0x33d3x16 && '' != _0x33d3x1f ? _0x33d3x1f : 'isi dengan url Gambar'
                        } else {
                            _0x33d3x12 = 'isi dengan url Gambar'
                        }
                    };
                    for (_0x33d3x2e = [], sx = 0; sx < _0x33d3x7.category.length; sx++) {
                        if ('Movie' == _0x33d3x7.category[sx].term) {
                            var _0x33d3x2e = '<span class="type-poss mov">Movie</span>'
                        } else {
                            'TV' == _0x33d3x7.category[sx].term ? _0x33d3x2e = '<span class="type-poss tv">TV</span>' : 'Special' == _0x33d3x7.category[sx].term ? _0x33d3x2e = '<span class="type-poss special">Special</span>' : 'OVA' == _0x33d3x7.category[sx].term ? _0x33d3x2e = '<span class="type-poss ova">OVA</span>' : 'ONA' == _0x33d3x7.category[sx].term ? _0x33d3x2e = '<span class="type-poss ona">ONA</span>' : 'BD' == _0x33d3x7.category[sx].term ? _0x33d3x2e = '<span class="type-poss bd">BD</span>' : 'Donghua' == _0x33d3x7.category[sx].term ? _0x33d3x2e = '<span class="type-poss donghua">Donghua</span>' : 'Live Action' == _0x33d3x7.category[sx].term && (_0x33d3x2e = '<span class="type-poss liveact">Live Action</span>')
                        }
                    };
                    for (epsLabel = [], ep = 0; ep < _0x33d3x7.category.length; ep++) {
                        _0x33d3x7.category[ep].term.includes('Eps') && (epsLabel += _0x33d3x7.category[ep].term.replace('Eps.', 'Episode'))
                    };
                    for (statusLabel = [], st = 0; st < _0x33d3x7.category.length; st++) {
                        'Completed' == _0x33d3x7.category[st].term ? statusLabel += '<span class="stats-poss com">Completed</span>' : 'Ongoing' == _0x33d3x7.category[st].term && (statusLabel += '<span class="hotnime"></span>')
                    };
                    _0x33d3x5 += '<li class="clear"><a class="rcent-block" href="' + _0x33d3x10 + '" title="' + _0x33d3x8 + '"><img class="rct-thumb lazyload" alt="' + _0x33d3x8 + '" data-src="' + _0x33d3x12 + '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII="/><div class="rd"></div>' + statusLabel + '<strong class="rcent-tt"><h3 class="rcent-ttl">' + _0x33d3x8 + '</h3><span class="rcent-inf">' + _0x33d3x2e + '<span class="tipeps">' + epsLabel + '</span></span></strong></a></li>'
                };
                _0x33d3x3.innerHTML = _0x33d3x5 += '</ul><div class="v2"><a class="view-more" href="/search/label/' + custom_3.labelCustom + '">View More</a></div>'
            }
        }
    },
    custom_4 = {
        run: function (_0x33d3x2, _0x33d3x3, _0x33d3x4) {
            custom_4.outputDiv = _0x33d3x2, d = document.createElement('script'), d.src = '/feeds/posts/default/-/' + _0x33d3x3 + '?alt=json&callback=custom_4.compile&max-results=' + _0x33d3x4, document.body.appendChild(d)
        },
        compile: function (_0x33d3x2) {
            var _0x33d3x3 = document.getElementById(custom_4.outputDiv),
                _0x33d3x4 = _0x33d3x2.feed;
            if (_0x33d3x4 && _0x33d3x4.entry.length > 0) {
                for (var _0x33d3x5 = '', _0x33d3x6 = 0; _0x33d3x6 < _0x33d3x4.entry.length; _0x33d3x6++) {
                    var _0x33d3x7 = _0x33d3x4.entry[_0x33d3x6],
                        _0x33d3x8 = _0x33d3x7.title.$t,
                        _0x33d3x9 = _0x33d3x7.published.$t,
                        _0x33d3xe = _0x33d3x9.substring(0, 4),
                        _0x33d3x22 = _0x33d3x9.substring(5, 7),
                        _0x33d3xf = _0x33d3x9.substring(8, 10),
                        _0x33d3x2d = new Array;
                    _0x33d3x2d[1] = 'Jan', _0x33d3x2d[2] = 'Feb', _0x33d3x2d[3] = 'Mar', _0x33d3x2d[4] = 'Apr', _0x33d3x2d[5] = 'May', _0x33d3x2d[6] = 'Jun', _0x33d3x2d[7] = 'Jul', _0x33d3x2d[8] = 'Aug', _0x33d3x2d[9] = 'Sep', _0x33d3x2d[10] = 'Oct', _0x33d3x2d[11] = 'Nov', _0x33d3x2d[12] = 'Dec', _0x33d3x9 = _0x33d3xf + ', ' + _0x33d3x2d[parseInt(_0x33d3x22, 10)] + ' ' + _0x33d3xe;
                    for (var _0x33d3x10 = '', _0x33d3x11 = 0; _0x33d3x11 < _0x33d3x7.link.length; _0x33d3x11++) {
                        if ('alternate' == _0x33d3x7.link[_0x33d3x11].rel) {
                            _0x33d3x10 = _0x33d3x7.link[_0x33d3x11].href;
                            break
                        }
                    };
                    var _0x33d3x12 = '';
                    if (_0x33d3x7.media$thumbnail) {
                        _0x33d3x12 = _0x33d3x7.media$thumbnail.url.replace('s72-c', 's400-rw')
                    } else {
                        if (_0x33d3x7.content) {
                            var _0x33d3x13 = _0x33d3x7.content.$t,
                                _0x33d3x14 = _0x33d3x13.indexOf('<img'),
                                _0x33d3x15 = _0x33d3x13.indexOf('src="', _0x33d3x14),
                                _0x33d3x16 = _0x33d3x13.indexOf('"', _0x33d3x15 + 5),
                                _0x33d3x1f = _0x33d3x13.substr(_0x33d3x15 + 5, _0x33d3x16 - _0x33d3x15 - 5);
                            _0x33d3x12 = -1 != _0x33d3x14 && -1 != _0x33d3x15 && -1 != _0x33d3x16 && '' != _0x33d3x1f ? _0x33d3x1f : 'isi dengan url Gambar'
                        } else {
                            _0x33d3x12 = 'isi dengan url Gambar'
                        }
                    };
                    for (_0x33d3x2e = [], sx = 0; sx < _0x33d3x7.category.length; sx++) {
                        if ('Movie' == _0x33d3x7.category[sx].term) {
                            var _0x33d3x2e = '<span class="type-poss mov">Movie</span>'
                        } else {
                            'TV' == _0x33d3x7.category[sx].term ? _0x33d3x2e = '<span class="type-poss tv">TV</span>' : 'Special' == _0x33d3x7.category[sx].term ? _0x33d3x2e = '<span class="type-poss special">Special</span>' : 'OVA' == _0x33d3x7.category[sx].term ? _0x33d3x2e = '<span class="type-poss ova">OVA</span>' : 'ONA' == _0x33d3x7.category[sx].term ? _0x33d3x2e = '<span class="type-poss ona">ONA</span>' : 'BD' == _0x33d3x7.category[sx].term ? _0x33d3x2e = '<span class="type-poss bd">BD</span>' : 'Donghua' == _0x33d3x7.category[sx].term ? _0x33d3x2e = '<span class="type-poss donghua">Donghua</span>' : 'Live Action' == _0x33d3x7.category[sx].term && (_0x33d3x2e = '<span class="type-poss liveact">Live Action</span>')
                        }
                    };
                    for (epsLabel = [], ep = 0; ep < _0x33d3x7.category.length; ep++) {
                        _0x33d3x7.category[ep].term.includes('Eps') && (epsLabel += _0x33d3x7.category[ep].term.replace('Eps.', 'Episode'))
                    };
                    for (statusLabel = [], st = 0; st < _0x33d3x7.category.length; st++) {
                        'Completed' == _0x33d3x7.category[st].term ? statusLabel += '<span class="stats-poss com">Completed</span>' : 'Ongoing' == _0x33d3x7.category[st].term && (statusLabel += '<span class="stats-poss ong">Ongoing</span>')
                    };
                    for (skorLabel = [], sk = 0; sk < 1; sk++) {
                        skorLabel = "<span class='labelStar'><p>" + _0x33d3x7.category[sk].term + '</p></span>'
                    };
                    _0x33d3x5 += '<li class="clear"><a class="rcent-block" href="' + _0x33d3x10 + '" title="' + _0x33d3x8 + '"><img class="rct-thumb lazyload" alt="' + _0x33d3x8 + '" data-src="' + _0x33d3x12 + '" src="' + _0x33d3x12 + '"/><div class="rd"></div>' + skorLabel + '<strong class="rcent-tt"><h3 class="rcent-ttl">' + _0x33d3x8 + '</h3><span class="rcent-inf">' + _0x33d3x2e + statusLabel + '</span></span></strong></a></li>'
                };
                _0x33d3x3.innerHTML = _0x33d3x5
            }
        }
    },
    custom_1 = {
        run: function (_0x33d3x2, _0x33d3x3, _0x33d3x4) {
            custom_1.outputDiv = _0x33d3x2, d = document.createElement('script'), d.src = '/feeds/posts/default/-/' + _0x33d3x3 + '?alt=json&callback=custom_1.compile&orderby=updated&max-results=' + _0x33d3x4, b = document.createElement('script'), b.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js', document.body.appendChild(b), document.body.appendChild(d);
            var _0x33d3x5 = 'aHR0cHM6Ly9yaW8ta2F6dXRvLmJsb2dzcG90LmNvbQ==',
                _0x33d3x6 = (_0x33d3x5 = atob(_0x33d3x5), atob('aHR0cHM6Ly93d3cua3VtYXBvaS5teS5pZC8='));
            _0x33d3x5 && _0x33d3x5 === window.location.hostname && (window.location.href = _0x33d3x6)
        },
        compile: function (_0x33d3x2) {
            var _0x33d3x3 = document.getElementById(custom_1.outputDiv),
                _0x33d3x4 = _0x33d3x2.feed;
            if (_0x33d3x4 && _0x33d3x4.entry.length > 0) {
                for (var _0x33d3x5 = '', _0x33d3x6 = 0; _0x33d3x6 < _0x33d3x4.entry.length; _0x33d3x6++) {
                    var _0x33d3x7 = _0x33d3x4.entry[_0x33d3x6],
                        _0x33d3x8 = _0x33d3x7.title.$t,
                        _0x33d3x9 = _0x33d3x7.updated.$t,
                        _0x33d3xe = _0x33d3x9.substring(0, 4),
                        _0x33d3x22 = _0x33d3x9.substring(5, 7),
                        _0x33d3xf = _0x33d3x9.substring(8, 10),
                        _0x33d3x2d = timeAgo(new Date(_0x33d3x9)),
                        _0x33d3x10 = new Array;
                    _0x33d3x10[1] = 'Jan', _0x33d3x10[2] = 'Feb', _0x33d3x10[3] = 'Mar', _0x33d3x10[4] = 'Apr', _0x33d3x10[5] = 'May', _0x33d3x10[6] = 'Jun', _0x33d3x10[7] = 'Jul', _0x33d3x10[8] = 'Aug', _0x33d3x10[9] = 'Sep', _0x33d3x10[10] = 'Oct', _0x33d3x10[11] = 'Nov', _0x33d3x10[12] = 'Dec', _0x33d3x9 = _0x33d3xf + ', ' + _0x33d3x10[parseInt(_0x33d3x22, 10)] + ' ' + _0x33d3xe;
                    for (var _0x33d3x11 = '', _0x33d3x12 = 0; _0x33d3x12 < _0x33d3x7.link.length; _0x33d3x12++) {
                        if ('alternate' == _0x33d3x7.link[_0x33d3x12].rel) {
                            _0x33d3x11 = _0x33d3x7.link[_0x33d3x12].href;
                            break
                        }
                    };
                    var _0x33d3x13 = '';
                    if (_0x33d3x7.media$thumbnail) {
                        _0x33d3x13 = _0x33d3x7.media$thumbnail.url.replace('s72-c', 's400-rw')
                    } else {
                        if (_0x33d3x7.content) {
                            var _0x33d3x14 = _0x33d3x7.content.$t,
                                _0x33d3x15 = _0x33d3x14.indexOf('<img'),
                                _0x33d3x16 = _0x33d3x14.indexOf('src="', _0x33d3x15),
                                _0x33d3x1f = _0x33d3x14.indexOf('"', _0x33d3x16 + 5),
                                _0x33d3x2e = _0x33d3x14.substr(_0x33d3x16 + 5, _0x33d3x1f - _0x33d3x16 - 5);
                            _0x33d3x13 = -1 != _0x33d3x15 && -1 != _0x33d3x16 && -1 != _0x33d3x1f && '' != _0x33d3x2e ? _0x33d3x2e : 'isi dengan url Gambar'
                        } else {
                            _0x33d3x13 = 'isi dengan url Gambar'
                        }
                    };
                    for (_0x33d3x17 = [], sx = 0; sx < _0x33d3x7.category.length; sx++) {
                        if ('Movie' == _0x33d3x7.category[sx].term) {
                            var _0x33d3x17 = '<span class="type-poss mov">Movie</span>'
                        } else {
                            'TV' == _0x33d3x7.category[sx].term ? _0x33d3x17 = '<span class="type-poss tv">TV</span>' : 'Special' == _0x33d3x7.category[sx].term ? _0x33d3x17 = '<span class="type-poss special">Special</span>' : 'OVA' == _0x33d3x7.category[sx].term ? _0x33d3x17 = '<span class="type-poss ova">OVA</span>' : 'ONA' == _0x33d3x7.category[sx].term ? _0x33d3x17 = '<span class="type-poss ona">ONA</span>' : 'BD' == _0x33d3x7.category[sx].term ? _0x33d3x17 = '<span class="type-poss bd">BD</span>' : 'Donghua' == _0x33d3x7.category[sx].term ? _0x33d3x17 = '<span class="type-poss donghua">Donghua</span>' : 'Live Action' == _0x33d3x7.category[sx].term && (_0x33d3x17 = '<span class="type-poss liveact">Live Action</span>')
                        }
                    };
                    for (epsLabel = [], ep = 0; ep < _0x33d3x7.category.length; ep++) {
                        _0x33d3x7.category[ep].term.includes('Eps') && (epsLabel += _0x33d3x7.category[ep].term.replace('Eps.', 'Episode'))
                    };
                    for (statusLabel = [], st = 0; st < _0x33d3x7.category.length; st++) {
                        'Completed' == _0x33d3x7.category[st].term ? statusLabel += '<span class="stats-poss com">Completed</span>' : 'Ongoing' == _0x33d3x7.category[st].term && (statusLabel += '')
                    };
                    for (skorLabel = [], sk = 0; sk < 1; sk++) {
                        skorLabel = '<span class="recongStar"><p>' + _0x33d3x7.category[sk].term + '</p></span>'
                    };
                    _0x33d3x5 += '<li class="recong"><a class="recongBlock" href="' + _0x33d3x11 + '" title="' + _0x33d3x8 + '"><img class="recongImg lazyload" alt="' + _0x33d3x8 + '" data-src="' + _0x33d3x13 + '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII="/><div class="rd"></div>' + statusLabel + skorLabel + _0x33d3x17 + '</a><a class="recongTb" href="' + _0x33d3x11 + '" title="' + _0x33d3x8 + '"><h3 class="recongtit">' + _0x33d3x8 + '</h3><span class="recongEps">' + epsLabel + '</span><span class="recongAgo">' + _0x33d3x2d + '</span></a></li>'
                };
                _0x33d3x3.innerHTML = _0x33d3x5
            }
        }
    },
    relatedSeries = {
        run: function (_0x33d3x2, _0x33d3x3, _0x33d3x4) {
            relatedSeries.outputDiv = _0x33d3x2, d = document.createElement('script'), d.src = '/feeds/posts/default/-/' + _0x33d3x3 + '?alt=json&callback=relatedSeries.compile&max-results=' + _0x33d3x4, document.body.appendChild(d)
        },
        compile: function (_0x33d3x2) {
            var _0x33d3x3 = document.getElementById(relatedSeries.outputDiv),
                _0x33d3x4 = _0x33d3x2.feed;
            if (_0x33d3x4 && _0x33d3x4.entry.length > 0) {
                for (var _0x33d3x5 = '', _0x33d3x6 = 0; _0x33d3x6 < _0x33d3x4.entry.length; _0x33d3x6++) {
                    var _0x33d3x7 = _0x33d3x4.entry[_0x33d3x6],
                        _0x33d3x8 = _0x33d3x7.title.$t,
                        _0x33d3x9 = _0x33d3x7.published.$t,
                        _0x33d3xe = _0x33d3x9.substring(0, 4),
                        _0x33d3x22 = _0x33d3x9.substring(5, 7),
                        _0x33d3xf = _0x33d3x9.substring(8, 10),
                        _0x33d3x2d = (new Date(_0x33d3x9).toISOString(), new Array);
                    _0x33d3x2d[1] = 'Jan', _0x33d3x2d[2] = 'Feb', _0x33d3x2d[3] = 'Mar', _0x33d3x2d[4] = 'Apr', _0x33d3x2d[5] = 'May', _0x33d3x2d[6] = 'Jun', _0x33d3x2d[7] = 'Jul', _0x33d3x2d[8] = 'Aug', _0x33d3x2d[9] = 'Sep', _0x33d3x2d[10] = 'Oct', _0x33d3x2d[11] = 'Nov', _0x33d3x2d[12] = 'Dec', _0x33d3x9 = _0x33d3xf + ', ' + _0x33d3x2d[parseInt(_0x33d3x22, 10)] + ' ' + _0x33d3xe;
                    for (var _0x33d3x10 = '', _0x33d3x11 = 0; _0x33d3x11 < _0x33d3x7.link.length; _0x33d3x11++) {
                        if ('alternate' == _0x33d3x7.link[_0x33d3x11].rel) {
                            _0x33d3x10 = _0x33d3x7.link[_0x33d3x11].href;
                            break
                        }
                    };
                    var _0x33d3x12 = '';
                    if (_0x33d3x7.media$thumbnail) {
                        _0x33d3x12 = _0x33d3x7.media$thumbnail.url.replace('s72-c', 's400-rw')
                    } else {
                        if (_0x33d3x7.content) {
                            var _0x33d3x13 = _0x33d3x7.content.$t,
                                _0x33d3x14 = _0x33d3x13.indexOf('<img'),
                                _0x33d3x15 = _0x33d3x13.indexOf('src="', _0x33d3x14),
                                _0x33d3x16 = _0x33d3x13.indexOf('"', _0x33d3x15 + 5),
                                _0x33d3x1f = _0x33d3x13.substr(_0x33d3x15 + 5, _0x33d3x16 - _0x33d3x15 - 5);
                            _0x33d3x12 = -1 != _0x33d3x14 && -1 != _0x33d3x15 && -1 != _0x33d3x16 && '' != _0x33d3x1f ? _0x33d3x1f : 'isi dengan url Gambar'
                        } else {
                            _0x33d3x12 = 'isi dengan url Gambar'
                        }
                    };
                    for (var _0x33d3x2e = _0x33d3x7.category.map(function (_0x33d3x2) {
                            return "<a href='/search/label/" + _0x33d3x2.term + "'>" + _0x33d3x2.term + '</a>'
                        }), _0x33d3x17 = arrayGenre.filter(function (_0x33d3x2) {
                            if (_0x33d3x2e.includes(_0x33d3x2)) {
                                return _0x33d3x2
                            }
                        }).join(', '), _0x33d3x18 = [], _0x33d3x19 = 0; _0x33d3x19 < _0x33d3x7.category.length; _0x33d3x19++) {
                        (_0x33d3x7.category[_0x33d3x19].term.includes('Winter') || _0x33d3x7.category[_0x33d3x19].term.includes('Fall') || _0x33d3x7.category[_0x33d3x19].term.includes('Spring') || _0x33d3x7.category[_0x33d3x19].term.includes('Summer')) && (_0x33d3x18 += _0x33d3x7.category[_0x33d3x19].term)
                    };
                    _0x33d3x5 += '<li class="postItem"><div class="imgItem"><a href="' + _0x33d3x10 + '" title="' + _0x33d3x8 + '"><img class="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=" data-src="' + _0x33d3x12 + '" alt="' + _0x33d3x8 + '"/></a></div><div class="dataContent"><h4><a href="' + _0x33d3x10 + '" title="' + _0x33d3x8 + '">' + _0x33d3x8 + '</a></h4><span class="label">' + _0x33d3x17 + '</span><div class="tmn"><span>' + _0x33d3x18 + '</span></div></div></li>'
                };
                _0x33d3x3.innerHTML = _0x33d3x5
            }
        }
    };

function getRandomInt(_0x33d3x2, _0x33d3x3) {
    return Math.floor(Math.random() * (_0x33d3x3 - _0x33d3x2 + 1)) + _0x33d3x2
}

function shuffleArray(_0x33d3x2) {
    var _0x33d3x3, _0x33d3x4, _0x33d3x5 = _0x33d3x2.length;
    if (0 === _0x33d3x5) {
        return !1
    };
    for (; --_0x33d3x5;) {
        _0x33d3x3 = Math.floor(Math.random() * (_0x33d3x5 + 1)), _0x33d3x4 = _0x33d3x2[_0x33d3x5], _0x33d3x2[_0x33d3x5] = _0x33d3x2[_0x33d3x3], _0x33d3x2[_0x33d3x3] = _0x33d3x4
    };
    return _0x33d3x2
}

function random(_0x33d3x2) {
    var _0x33d3x3 = getRandomInt(1, _0x33d3x2.feed.openSearch$totalResults.$t - randomNumb),
        _0x33d3x4 = document.createElement('script');
    _0x33d3x4.src = '/feeds/posts/default/-/' + randomLabel + '?alt=json-in-script&start-index=' + _0x33d3x3 + '&max-results=' + randomNumb + '&callback=reRandom', document.body.appendChild(_0x33d3x4)
}

function reRandom(_0x33d3x2) {
    for (var _0x33d3x3, _0x33d3x6, _0x33d3x7 = document.getElementById(randomId), _0x33d3x8 = shuffleArray(_0x33d3x2.feed.entry), _0x33d3x9 = '', _0x33d3xe = 0, _0x33d3xf = _0x33d3x8.length; _0x33d3xe < _0x33d3xf; _0x33d3xe++) {
        for (var _0x33d3x10 = 0, _0x33d3x11 = _0x33d3x8[_0x33d3xe].link.length; _0x33d3x10 < _0x33d3x11; _0x33d3x10++) {
            _0x33d3x3 = 'alternate' == _0x33d3x8[_0x33d3xe].link[_0x33d3x10].rel ? _0x33d3x8[_0x33d3xe].link[_0x33d3x10].href : '#', _0x33d3x6 = _0x33d3x8[_0x33d3xe].title.$t, s = _0x33d3x8[_0x33d3xe].content.$t, a = s.indexOf('<img'), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), -1 == a || -1 == b || -1 == c || '' == d || d;
            for (var _0x33d3x12 = '', _0x33d3x13 = 0; _0x33d3x13 < _0x33d3x8[_0x33d3xe].category.length; _0x33d3x13++) {
                _0x33d3x12 = _0x33d3x8[_0x33d3xe].category[0].term, _0x33d3x8[_0x33d3xe].category[_0x33d3x13].term, _0x33d3x8[_0x33d3xe].category[_0x33d3x13].term
            };
            for (var _0x33d3x14 = [], _0x33d3x15 = 0; _0x33d3x15 < _0x33d3x8[_0x33d3xe].category.length; _0x33d3x15++) {
                'Completed' == _0x33d3x8[_0x33d3xe].category[_0x33d3x15].term ? _0x33d3x14 = '<span class="bdg">Completed</span>' : 'Ongoing' == _0x33d3x8[_0x33d3xe].category[_0x33d3x15].term ? _0x33d3x14 = '<span class="bdg">Ongoing</span>' : 'Hiatus' == _0x33d3x8[_0x33d3xe].category[_0x33d3x15].term && (_0x33d3x14 = '<span class="bdg">Hiatus</span>')
            };
            for (var _0x33d3x16 = [], _0x33d3x1f = 0; _0x33d3x1f < _0x33d3x8[_0x33d3xe].category.length; _0x33d3x1f++) {
                'TV' == _0x33d3x8[_0x33d3xe].category[_0x33d3x1f].term ? _0x33d3x16 = '<span class="typez tv">TV</span>' : 'Movie' == _0x33d3x8[_0x33d3xe].category[_0x33d3x1f].term ? _0x33d3x16 = '<span class="typez mov">Movie</span>' : 'BD' == _0x33d3x8[_0x33d3xe].category[_0x33d3x1f].term ? _0x33d3x16 = '<span class="typez bd">BD</span>' : 'ONA' == _0x33d3x8[_0x33d3xe].category[_0x33d3x1f].term ? _0x33d3x16 = '<span class="typez ona">ONA</span>' : 'OVA' == _0x33d3x8[_0x33d3xe].category[_0x33d3x1f].term ? _0x33d3x16 = '<span class="typez ova">OVA</span>' : 'Special' == _0x33d3x8[_0x33d3xe].category[_0x33d3x1f].term ? _0x33d3x16 = '<span class="typez special">OVA</span>' : 'Donghua' == _0x33d3x8[_0x33d3xe].category[_0x33d3x1f].term ? _0x33d3x16 = '<span class="typez donghua">Donghua</span>' : 'Live Action' == _0x33d3x8[_0x33d3xe].category[_0x33d3x1f].term && (_0x33d3x16 = '<span class="typez liveact">Live Action</span>')
            };
            for (var _0x33d3x17 = [], _0x33d3x18 = 0; _0x33d3x18 < _0x33d3x8[_0x33d3xe].category.length; _0x33d3x18++) {
                _0x33d3x8[_0x33d3xe].category[_0x33d3x18].term.includes('Eps') && (_0x33d3x17 = _0x33d3x8[_0x33d3xe].category[_0x33d3x18].term.replace('Eps.', 'Episode'))
            };
            for (var _0x33d3x19 = 0; _0x33d3x19 < _0x33d3x8[_0x33d3xe].category.length; _0x33d3x19++) {
                _0x33d3x8[_0x33d3xe].category[_0x33d3x19].term
            };
            var _0x33d3x1a = _0x33d3x8[_0x33d3xe].media$thumbnail.url.replace('s72-c', 's320-rw')
        };
        _0x33d3x9 += '<li><a href="' + _0x33d3x3 + '" title="' + _0x33d3x6 + '"><div class="zeeb"><img class="lazyload" alt="' + _0x33d3x6 + '" data-src="' + _0x33d3x1a + '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII="/>' + _0x33d3x14 + _0x33d3x16 + '</div></a><div class="tbox"><a class="title-article" href="' + _0x33d3x3 + '" title="' + _0x33d3x6 + '">' + _0x33d3x6 + '</a><span class="epsx">' + _0x33d3x17 + '</span><div class="rtz"><div class="z-rating"><div class="rating-z-prc"><div class="zrtp"><div class="zrtb"><span style="width:' + _0x33d3x12 + '%!important"></span></div></div><span class="z-ratenya">' + _0x33d3x12 + '</span></div></div></div></div></li>'
    };
    _0x33d3x7.innerHTML = _0x33d3x9
}

function runRandom() {
    var _0x33d3x2 = document.createElement('script');
    _0x33d3x2.src = '/feeds/posts/default/-/' + randomLabel + '?alt=json-in-script&max-results=' + randomNumb + '&callback=random', document.body.appendChild(_0x33d3x2)
}
var ch_SELECT = {
    start: 1,
    max: 150
};
ch_SELECT.arr = new Array, ch_SELECT.compile = function (_0x33d3x2) {
    var _0x33d3x3 = document.getElementById('ec_Select');
    if (_0x33d3x3) {
        _0x33d3x3.innerHTML = '';
        var _0x33d3x4 = _0x33d3x2.feed;
        if (console.log(_0x33d3x4), _0x33d3x4.entry.length > 0) {
            for (var _0x33d3x5 = 0; _0x33d3x5 < _0x33d3x4.entry.length; _0x33d3x5++) {
                for (var _0x33d3x6 = _0x33d3x4.entry[_0x33d3x5], _0x33d3x7 = _0x33d3x6.title.$t, _0x33d3x8 = 0; _0x33d3x8 < _0x33d3x6.link.length; _0x33d3x8++) {
                    if ('alternate' == _0x33d3x6.link[_0x33d3x8].rel) {
                        var _0x33d3x9 = _0x33d3x6.link[_0x33d3x8].href;
                        _0x33d3x9 && _0x33d3x9.length > 0 && _0x33d3x7 && _0x33d3x7.length > 0 && ch_SELECT.arr.push({
                            link: _0x33d3x9,
                            title: _0x33d3x7
                        });
                        break
                    }
                }
            };
            if (_0x33d3x4.entry.length >= ch_SELECT.max) {
                ch_SELECT.start += ch_SELECT.max, ch_SELECT.run(ch_SELECT.label, ch_SELECT.postURL, ch_SELECT.nameSelect)
            } else {
                for (var _0x33d3xe = '', _0x33d3x22 = '', _0x33d3xf = ch_SELECT.arr, _0x33d3x2d = 0; _0x33d3x2d < _0x33d3xf.length; _0x33d3x2d++) {
                    _0x33d3xf[_0x33d3x2d].title.includes('Episode') ? (_0x33d3x22 = _0x33d3xf[_0x33d3x2d].title.split('Episode')[1], _0x33d3xe += '<option value="' + _0x33d3xf[_0x33d3x2d].link + '">Episode ' + _0x33d3x22 + '</option>') : _0x33d3xe += '<option value="' + _0x33d3xf[_0x33d3x2d].link + '">' + _0x33d3xf[_0x33d3x2d].title + '</option>'
                };
                _0x33d3x3.innerHTML = '<select name="chapterSelect" id="chapterSelect" onchange="this.options[this.selectedIndex].value&amp;&amp;window.open(this.options[this.selectedIndex].value,&#039;_self&#039;)"><option value disabled>' + ch_SELECT.nameSelect + '</option>' + _0x33d3xe + '</select>';
                var _0x33d3x10 = $('#chapterSelect option[value="' + ch_SELECT.postURL + '"]').prev().attr('value'),
                    _0x33d3x11 = $('#chapterSelect option[value="' + ch_SELECT.postURL + '"]').prev().html(),
                    _0x33d3x12 = $('#chapterSelect option[value="' + ch_SELECT.postURL + '"]').next().attr('value'),
                    _0x33d3x13 = $('#chapterSelect option[value="' + ch_SELECT.postURL + '"]').next().html(),
                    _0x33d3x14 = $('#chapterSelect option').last().attr('value');
                $(document).ready(function () {
                    $('#chapterSelect').val(ch_SELECT.postURL), $('#ecPrev a').attr({
                        href: _0x33d3x12,
                        title: _0x33d3x13
                    }), $('#ecNext a').attr({
                        href: _0x33d3x10,
                        title: _0x33d3x11
                    }), $('#ecHome a').attr('href', _0x33d3x14), $('.nextPrev a[href=""]').parent().remove(), $('#ecPrev a').attr('href') == _0x33d3x14 && $('#ecPrev a').parent().remove(), $('.info-stream a').attr('href', _0x33d3x14), $('#chapterSelect').find('option:nth-last-child(1)').remove()
                })
            }
        }
    }
}, ch_SELECT.run = function (_0x33d3x2, _0x33d3x3, _0x33d3x4) {
    ch_SELECT.label = _0x33d3x2, ch_SELECT.postURL = _0x33d3x3, ch_SELECT.nameSelect = _0x33d3x4;
    var _0x33d3x5 = document.createElement('script');
    _0x33d3x5.src = '/feeds/posts/default/-/' + ch_SELECT.label + '?alt=json&callback=ch_SELECT.compile&start-index=' + ch_SELECT.start + '&max-results=' + ch_SELECT.max, document.body.appendChild(_0x33d3x5)
};
var playlist = {
    start: 1,
    max: 150
};
playlist.arr = new Array, playlist.compile = function (_0x33d3x2) {
    var _0x33d3x3 = document.getElementById('playlistSide');
    if (window.matchMedia('(max-width: 1000px)').matches && (_0x33d3x3 = document.getElementById('playlist')), _0x33d3x3) {
        _0x33d3x3.innerHTML = '';
        var _0x33d3x4 = _0x33d3x2.feed;
        if (console.log(_0x33d3x4), _0x33d3x4.entry.length > 0) {
            for (var _0x33d3x5 = 0; _0x33d3x5 < _0x33d3x4.entry.length; _0x33d3x5++) {
                for (var _0x33d3x6 = _0x33d3x4.entry[_0x33d3x5], _0x33d3x7 = _0x33d3x6.title.$t, _0x33d3x8 = 0; _0x33d3x8 < _0x33d3x6.link.length; _0x33d3x8++) {
                    if ('alternate' == _0x33d3x6.link[_0x33d3x8].rel) {
                        for (var _0x33d3x9 = _0x33d3x6.link[_0x33d3x8].href, _0x33d3xe = _0x33d3x6.id.$t.substr(51, 19), _0x33d3x22 = ('media$thumbnail' in _0x33d3x6 ? _0x33d3x6.media$thumbnail.url.match(/\/s[0-9]{2}-(w[0-9]+-)?c/) ? _0x33d3x6.media$thumbnail.url.replace(/\/s[0-9]{2}-(w[0-9]+-)?c/, '/s300-rw') : _0x33d3x6.media$thumbnail.url.replace(/\=s[0-9]{2}-(w[0-9]+-)?c/, '=s300-rw') : 'noImageUrl'), _0x33d3xf = timeAgo(new Date(_0x33d3x6.published.$t)), _0x33d3x2d = _0x33d3x6.author[0].name.$t, _0x33d3x10 = [], _0x33d3x11 = [], _0x33d3x12 = 0; _0x33d3x12 < _0x33d3x6.category.length; _0x33d3x12++) {
                            _0x33d3x6.category[_0x33d3x12].term.includes('Eps.') && (_0x33d3x10 = _0x33d3x6.category[_0x33d3x12].term.split('Eps.')[1])
                        };
                        for (var _0x33d3x13 = 0; _0x33d3x13 < _0x33d3x6.category.length; _0x33d3x13++) {
                            'Completed' == _0x33d3x6.category[_0x33d3x13].term ? _0x33d3x11 = _0x33d3x6.category[_0x33d3x13].term : 'Ongoing' == _0x33d3x6.category[_0x33d3x13].term && (_0x33d3x11 = _0x33d3x6.category[_0x33d3x13].term)
                        };
                        _0x33d3x7 && _0x33d3x7.length > 0 && playlist.arr.push({
                            link: _0x33d3x9,
                            title: _0x33d3x7,
                            id: _0x33d3xe,
                            img: _0x33d3x22,
                            time: _0x33d3xf,
                            episode: _0x33d3x10,
                            status: _0x33d3x11,
                            author: _0x33d3x2d
                        });
                        break
                    }
                }
            };
            if (_0x33d3x4.entry.length >= playlist.max) {
                playlist.start += playlist.max, playlist.run(playlist.label, playlist.postId)
            } else {
                for (var _0x33d3x14 = '', _0x33d3x15 = '', _0x33d3x16 = '', _0x33d3x1f = '', _0x33d3x2e = playlist.arr, _0x33d3x17 = 0; _0x33d3x17 < _0x33d3x2e.length - 1; _0x33d3x17++) {
                    _0x33d3x2e[_0x33d3x17].title.includes('Episode') ? (_0x33d3x15 = _0x33d3x2e[_0x33d3x17].title.split('Episode')[1], _0x33d3x16 = '<num></num>', _0x33d3x1f = _0x33d3x2e.length - 1, _0x33d3x14 += '<li data-id="' + _0x33d3x2e[_0x33d3x17].id + '"><a href="' + _0x33d3x2e[_0x33d3x17].link + '" title="' + _0x33d3x2e[_0x33d3x17].title + '"><div class="playThumb"><img class="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=" data-src="' + _0x33d3x2e[_0x33d3x17].img + '" alt="' + _0x33d3x2e[_0x33d3x17].title + '"/><div class="playNow"></div></div><div class="playInfo"><h3>' + _0x33d3x2e[_0x33d3x17].title + "</h3><span><i class='playEps'>Eps " + _0x33d3x15 + "</i><i class='playslice'> - </i><i class='playAuth'><b>Post by:</b> " + _0x33d3x2e[_0x33d3x17].author + "</i><i class='playUpdate'><b>Updated on:</b> " + _0x33d3x2e[_0x33d3x17].time + '</i></span></div></a></li>') : _0x33d3x14 += '<li data-id="' + _0x33d3x2e[_0x33d3x17].id + '"><a href="' + _0x33d3x2e[_0x33d3x17].link + '" title="' + _0x33d3x2e[_0x33d3x17].title + '"><div class="playThumb"><img class="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=" data-src="' + _0x33d3x2e[_0x33d3x17].img + '" alt="' + _0x33d3x2e[_0x33d3x17].title + '"/><div class="playNow"></div></div><div class="playInfo"><h3>' + _0x33d3x2e[_0x33d3x17].title + "</h3><span><i class='playEps'>Eps " + _0x33d3x15 + "</i><i class='playslice'> - </i><i class='playAuth'><b>Post by:</b> " + _0x33d3x2e[_0x33d3x17].author + "</i><i class='playUpdate'><b>Updated on:</b> " + _0x33d3x2e[_0x33d3x17].time + '</i></span></div></a></li>'
                };
                _0x33d3x3.innerHTML = '<div id="playlistCont"><div class="playlistSeries"><div class="thumbnel"><a href="' + playlist.arr[playlist.arr.length - 1].link + '"><img src="' + playlist.arr[playlist.arr.length - 1].img + '"/></a></div><div class="nem"><h3><a href="' + playlist.arr[playlist.arr.length - 1].link + '">' + playlist.arr[playlist.arr.length - 1].title + '</a></h3><span><i>' + playlist.arr[playlist.arr.length - 1].status + ' </i> - ' + _0x33d3x16 + ' /' + _0x33d3x1f + '</span></div></div><div class="playlistList"><ul>' + _0x33d3x14 + '</ul></div></div>', $('#playlistCont ul li[data-id="' + playlist.postId + '"]').prev().attr('value');
                var _0x33d3x18 = $('#playlistCont ul li[data-id="' + playlist.postId + '"]').prev().html(),
                    _0x33d3x19 = ($('#playlistCont ul li[data-id="' + playlist.postId + '"]').next().attr('value'), $('#playlistCont ul li[data-id="' + playlist.postId + '"]').next().html());
                $('#playlistCont ul li').attr('data-id'), $(document).ready(function () {
                    $('#prevEps').html(_0x33d3x19), $('#nextEps').html(_0x33d3x18), $("#playlistCont ul li[data-id='" + playlist.postId + "']").addClass('playSelect'), $('num').html($("#playlistCont ul li[data-id='" + playlist.postId + "']").attr('data-tabindex'))
                })
            }
        }
    }
}, playlist.run = function (_0x33d3x2, _0x33d3x3) {
    playlist.label = _0x33d3x2, playlist.postId = _0x33d3x3;
    var _0x33d3x4 = document.createElement('script');
    _0x33d3x4.src = '/feeds/posts/default/-/' + playlist.label + '?alt=json&callback=playlist.compile&start-index=' + playlist.start + '&max-results=' + playlist.max, document.body.appendChild(_0x33d3x4)
};
var bxcld = {
        arr: new Array,
        compile: function () {
            var _0x33d3x2 = this,
                _0x33d3x3 = _0x33d3x2.arr.length,
                _0x33d3x4 = "<div id='episodeNime'><ul class='myUL'>",
                _0x33d3x5 = '<div class="jump-eps">';
            jQuery.each(_0x33d3x2.arr, function (_0x33d3x6, _0x33d3x7) {
                var _0x33d3x8 = _0x33d3x7.title,
                    _0x33d3x9 = _0x33d3x7.title,
                    _0x33d3xe = _0x33d3x7.link,
                    _0x33d3x22 = _0x33d3x7.published;
                jQuery.each(_0x33d3x2.settings.title, function (_0x33d3x2, _0x33d3x3) {
                    _0x33d3x8.includes(_0x33d3x3.in) && (_0x33d3x8 = _0x33d3x3.out + ' ' + _0x33d3x8.split(_0x33d3x3.in)[1])
                }), _0x33d3x6 == _0x33d3x3 - 2 && (_0x33d3x5 += '<div class="epsatu" data-id="1"><a href="' + _0x33d3xe + '"><span>First Episode</span><span class="epcur epcurfirst">' + _0x33d3x8 + '</span></a></div>'), 0 == _0x33d3x6 && (_0x33d3x5 += '<div class="epterbaru" data-id="2"><a href="' + _0x33d3xe + '"> <span>Last Episode</span> <span class="epcur epcurlast">' + _0x33d3x8 + '</span></a></div>'), _0x33d3x6 != _0x33d3x3 - 1 && (_0x33d3x4 += '<li><div class="chbox"><div class="eph-num"><a href="' + _0x33d3xe + '" title="' + _0x33d3x9 + '"><span class="chapternum">' + _0x33d3x9 + '</span> <span class="chapterdate">' + _0x33d3x22 + '</span></a></div></div></li>')
            }), _0x33d3x5 += '</div>', _0x33d3x4 += '</ul></div>', document.getElementById('bxcld').innerHTML = "<div class='ep-tit'><h2>" + _0x33d3x2.settings.judul + '</h2></div>' + _0x33d3x5 + '<div class="search-eps"><input id="myInput" onkeyup="myFunction()" placeholder="Search Episode. Example: 25 or 178" title="Type in a name" type="text"></div>' + _0x33d3x4
        },
        get: function (_0x33d3x2) {
            var _0x33d3x3 = this;
            _0x33d3x2.ajax({
                url: '/feeds/posts/default/-/' + this.settings.cat + '?alt=json-in-script&start-index=' + this.settings.start + '&max-results=' + this.settings.max,
                type: 'get',
                dataType: 'jsonp',
                success: function (_0x33d3x2) {
                    'entry' in _0x33d3x2.feed ? (_0x33d3x2.feed.entry.forEach(function (_0x33d3x2) {
                        _0x33d3x3.arr.push({
                            title: _0x33d3x2.title.$t,
                            link: _0x33d3x2.link.find(function (_0x33d3x2) {
                                return 'alternate' == _0x33d3x2.rel
                            }).href,
                            published: 'function' == typeof timeAgo ? timeAgo(new Date(_0x33d3x2.updated.$t)) : _0x33d3x3.timeStirng(_0x33d3x2.updated.$t)
                        })
                    }), _0x33d3x2.feed.entry.length >= _0x33d3x3.settings.max ? (_0x33d3x3.settings.start += _0x33d3x3.settings.max, _0x33d3x3.run(_0x33d3x3.settings.cat)) : _0x33d3x3.compile()) : 0 != _0x33d3x3.arr.length && _0x33d3x3.compile()
                },
                error: function (_0x33d3x2) {
                    console.log(_0x33d3x2)
                }
            })
        },
        run: function (_0x33d3x2) {
            this.settings.cat = _0x33d3x2, 'function' == typeof jQuery && document.getElementById('bxcld') ? this.get(jQuery) : console.log('Output Nothing')
        },
        settings: {
            max: 150,
            start: 1,
            title: [{
                in: 'Episode',
                out: 'Episode'
            }, {
                in: 'Chapter',
                out: 'Chapter'
            }],
            judul: 'Episode List'
        },
        timeStirng: function (_0x33d3x2) {
            if (/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/ ['test'](_0x33d3x2)) {
                var _0x33d3x3 = _0x33d3x2,
                    _0x33d3x4 = _0x33d3x3.substring(0, 4),
                    _0x33d3x5 = _0x33d3x3.substring(5, 7),
                    _0x33d3x6 = _0x33d3x3.substring(8, 10),
                    _0x33d3x7 = new Array;
                return _0x33d3x7[1] = 'Januari', _0x33d3x7[2] = 'Februari', _0x33d3x7[3] = 'Maret', _0x33d3x7[4] = 'April', _0x33d3x7[5] = 'Mei', _0x33d3x7[6] = 'Juni', _0x33d3x7[7] = 'Juli', _0x33d3x7[8] = 'Agustus', _0x33d3x7[9] = 'September', _0x33d3x7[10] = 'Oktober', _0x33d3x7[11] = 'November', _0x33d3x7[12] = 'Desember', _0x33d3x6 + ' ' + _0x33d3x7[parseInt(_0x33d3x5, 10)] + ' ' + _0x33d3x4
            };
            return !1
        }
    },
    mapAbjd = {
        compile: function () {
            var _0x33d3x2 = this;
            for (var _0x33d3x3 in this.settings.arr.forEach(function (_0x33d3x3) {
                    var _0x33d3x4 = _0x33d3x3.title.charAt(0).toLowerCase(); - 1 == _0x33d3x2.settings.abjad.indexOf(_0x33d3x4) ? (_0x33d3x2.settings.abjad += _0x33d3x4, _0x33d3x2.settings.grup[_0x33d3x4] = [{
                        title: _0x33d3x3.title,
                        url: _0x33d3x3.url,
                        img: _0x33d3x3.image,
                        date: _0x33d3x3.date,
                        status: _0x33d3x3.status,
                        type: _0x33d3x3.type
                    }]) : _0x33d3x2.settings.grup[_0x33d3x4].push({
                        title: _0x33d3x3.title,
                        url: _0x33d3x3.url,
                        img: _0x33d3x3.image,
                        date: _0x33d3x3.date,
                        status: _0x33d3x3.status,
                        type: _0x33d3x3.type
                    })
                }), this.settings.grup) {
                this.settings.key.push(_0x33d3x3)
            };
            this.settings.key.sort().forEach(function (_0x33d3x3) {
                _0x33d3x2.settings.print += "<div class='abjad'><span data-value='" + _0x33d3x3 + "'>" + _0x33d3x3 + "</span><span id='top' title='Back to Top'></span></div><ol class='list-post'>";
                for (var _0x33d3x4 = 0, _0x33d3x5 = _0x33d3x2.settings.grup[_0x33d3x3]; _0x33d3x4 < _0x33d3x5.length; _0x33d3x4++) {
                    var _0x33d3x6 = _0x33d3x5.sort(function (_0x33d3x2, _0x33d3x3) {
                        return _0x33d3x2.title > _0x33d3x3.title ? 1 : -1
                    });
                    _0x33d3x2.settings.print += '<li><div class="thumb-az"><a href="' + _0x33d3x6[_0x33d3x4].url + '" title="' + _0x33d3x6[_0x33d3x4].title + '"><img class="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=" data-src="' + _0x33d3x6[_0x33d3x4].img + '" alt="' + _0x33d3x6[_0x33d3x4].title + '"/></a></div><div class="info-az"><a href="' + _0x33d3x6[_0x33d3x4].url + '" title="' + _0x33d3x6[_0x33d3x4].title + '">' + _0x33d3x6[_0x33d3x4].title + '</a><span class="status-az">Status: ' + _0x33d3x6[_0x33d3x4].status + '</span><span class="date-az">Updated: ' + _0x33d3x6[_0x33d3x4].date + '</span><span class="type-az">Type: ' + _0x33d3x6[_0x33d3x4].type + '</span></div></li>'
                };
                _0x33d3x2.settings.print += '</ol>', _0x33d3x2.settings.nav += '<li>' + _0x33d3x3 + '</li>'
            }), this.settings.output.innerHTML = '<div class="nav"><ol>' + this.settings.nav + '</ol></div><div class="isi">' + this.settings.print + '</div>', this.scrollRun()
        },
        create: function (_0x33d3x2) {
            var _0x33d3x3 = this;
            if ('entry' in _0x33d3x2.feed) {
                var _0x33d3x4 = _0x33d3x2.feed.entry;
                _0x33d3x4.forEach(function (_0x33d3x2) {
                    for (var _0x33d3x4 = _0x33d3x2.title.$t, _0x33d3x5 = _0x33d3x2.link.find(function (_0x33d3x2) {
                            return 'alternate' == _0x33d3x2.rel
                        }).href, _0x33d3x6 = [], _0x33d3x7 = 0; _0x33d3x7 < _0x33d3x2.category.length; _0x33d3x7++) {
                        'Completed' == _0x33d3x2.category[_0x33d3x7].term ? _0x33d3x6 = 'Completed' : 'Ongoing' == _0x33d3x2.category[_0x33d3x7].term ? _0x33d3x6 = 'Ongoing' : 'Upcoming' == _0x33d3x2.category[_0x33d3x7].term && (_0x33d3x6 = 'Upcoming')
                    };
                    for (var _0x33d3x8 = [], _0x33d3x9 = 0; _0x33d3x9 < _0x33d3x2.category.length; _0x33d3x9++) {
                        'TV' == _0x33d3x2.category[_0x33d3x9].term ? _0x33d3x8 = "<p class='tv-az'>TV</p>" : 'Movie' == _0x33d3x2.category[_0x33d3x9].term ? _0x33d3x8 = "<p class='movie-az'>Movie</p>" : 'BD' == _0x33d3x2.category[_0x33d3x9].term ? _0x33d3x8 = "<p class='bd-az'>BD</p>" : 'ONA' == _0x33d3x2.category[_0x33d3x9].term ? _0x33d3x8 = "<p class='ona-az'>ONA</p>" : 'OVA' == _0x33d3x2.category[_0x33d3x9].term ? _0x33d3x8 = "<p class='ova-az'>OVA</p>" : 'Special' == _0x33d3x2.category[_0x33d3x9].term ? _0x33d3x8 = "<p class='special-az'>Special</p>" : 'Donghua' == _0x33d3x2.category[_0x33d3x9].term ? _0x33d3x8 = "<p class='donghua-az'>Donghua</p>" : 'Live Action' == _0x33d3x2.category[_0x33d3x9].term && (_0x33d3x8 = "<p class='liveact-az'>Live Action</p>")
                    };
                    _0x33d3x3.settings.arr.push({
                        title: _0x33d3x4,
                        url: _0x33d3x5,
                        image: 'media$thumbnail' in _0x33d3x2 ? _0x33d3x2.media$thumbnail.url.match(/\/s[0-9]{2}-(w[0-9]+-)?c/) ? _0x33d3x2.media$thumbnail.url.replace(/\/s[0-9]{2}-(w[0-9]+-)?c/, '/s300-rw') : _0x33d3x2.media$thumbnail.url.replace(/\=s[0-9]{2}-(w[0-9]+-)?c/, '=s300-rw') : 'noImageUrl',
                        date: timeAgo(new Date(_0x33d3x2.updated.$t)),
                        status: _0x33d3x6,
                        type: _0x33d3x8
                    })
                }), _0x33d3x4.length >= this.settings.max ? (this.settings.start += this.settings.max, this.run()) : this.compile()
            } else {
                0 != this.settings.arr.length && this.compile()
            }
        },
        run: function () {
            if (this.settings.output = document.getElementById('mapAbjd'), !this.settings.output) {
                return console.log('Output Noting')
            };
            var _0x33d3x2 = void(0) === this.settings.label ? '' : '/-/' + this.settings.label,
                _0x33d3x3 = document.createElement('script');
            _0x33d3x3.src = '/feeds/posts/summary' + _0x33d3x2 + '?alt=json&callback=mapAbjd.create&start-index=' + this.settings.start + '&max-results=' + this.settings.max, document.body.appendChild(_0x33d3x3)
        },
        settings: {
            abjad: '',
            arr: new Array,
            grup: new Array,
            key: new Array,
            max: 150,
            nav: '',
            print: '',
            scroll: 'instant',
            start: 1
        },
        scrollRun: function () {
            var _0x33d3x2 = this;
            document.querySelectorAll('.nav ol li').forEach(function (_0x33d3x3) {
                _0x33d3x3.onclick = function (_0x33d3x3) {
                    var _0x33d3x4 = _0x33d3x3.currentTarget;
                    document.querySelector('.isi .abjad [data-value="' + _0x33d3x4.innerHTML + '"]').parentNode.scrollIntoView({
                        behavior: _0x33d3x2.settings.scroll,
                        block: 'start'
                    })
                }
            }), document.querySelectorAll('.isi .abjad #top').forEach(function (_0x33d3x3) {
                _0x33d3x3.onclick = function () {
                    document.querySelector('.nav').scrollIntoView({
                        behavior: _0x33d3x2.settings.scroll,
                        block: 'start'
                    })
                }
            })
        }
    },
    jdl = {
        run: function (_0x33d3x2, _0x33d3x3, _0x33d3x4, _0x33d3x5) {
            if (0 == _0x33d3x2('#jdl_Slider').length) {
                return console.log('Tag mTP_Slider tidak ada')
            };
            jdl.maxCat = _0x33d3x5, jdl.max = _0x33d3x4;
            var _0x33d3x6 = 0 == _0x33d3x3 ? '' : '/-/' + _0x33d3x3;
            _0x33d3x2.ajax({
                url: '/feeds/posts/default' + _0x33d3x6 + '?alt=json-in-script&max-results=150',
                type: 'get',
                dataType: 'jsonp',
                success: function (_0x33d3x3) {
                    jdl.compile(_0x33d3x2, _0x33d3x3)
                },
                error: function (_0x33d3x2) {
                    console.log(_0x33d3x2)
                }
            })
        },
        compile: function (_0x33d3x2, _0x33d3x3) {
            var _0x33d3x4;
            'entry' in _0x33d3x3.feed && function () {
                var _0x33d3x5 = _0x33d3x3.feed.entry;
                jdl.filter = jdl.Select, jdl.obj = {}, _0x33d3x2.each(jdl.filter, function (_0x33d3x3, _0x33d3x4) {
                    _0x33d3x5.filter(function (_0x33d3x3) {
                        for (var _0x33d3x5 = _0x33d3x3.category.map(function (_0x33d3x2) {
                                return _0x33d3x2.term
                            }), _0x33d3x6 = [], _0x33d3x7 = 0; _0x33d3x7 < _0x33d3x3.category.length; _0x33d3x7++) {
                            _0x33d3x3.category[_0x33d3x7].term.includes('Eps.') && (_0x33d3x6 = '<span class="epup">' + _0x33d3x3.category[_0x33d3x7].term.split('Eps.')[1] + '</span>')
                        };
                        if (_0x33d3x5.includes(_0x33d3x4)) {
                            var _0x33d3x8 = jdl.obj[_0x33d3x4];
                            _0x33d3x8 ? _0x33d3x8.length < jdl.max && _0x33d3x8.push({
                                title: _0x33d3x3.title.$t,
                                cat: _0x33d3x5,
                                episode: _0x33d3x6,
                                time: _0x33d3x3.updated.$t.substring(11, 16),
                                link: _0x33d3x3.link.find(function (_0x33d3x2) {
                                    return 'alternate' == _0x33d3x2.rel
                                }).href,
                                image: 'media$thumbnail' in _0x33d3x3 ? _0x33d3x3.media$thumbnail.url.match(/\/s[0-9]{2}-(w[0-9]+-)?c/) ? _0x33d3x3.media$thumbnail.url.replace(/\/s[0-9]{2}-(w[0-9]+-)?c/, '/' + jdl.iSize) : _0x33d3x3.media$thumbnail.url.replace(/\=s[0-9]{2}-(w[0-9]+-)?c/, '=' + jdl.iSize) : 'content' in _0x33d3x3 ? _0x33d3x2(_0x33d3x3.content.$t).find('img').attr('src') : jdl.noImage
                            }) : jdl.obj[_0x33d3x4] = [{
                                title: _0x33d3x3.title.$t,
                                cat: _0x33d3x5,
                                episode: _0x33d3x6,
                                time: _0x33d3x3.updated.$t.substring(11, 16),
                                link: _0x33d3x3.link.find(function (_0x33d3x2) {
                                    return 'alternate' == _0x33d3x2.rel
                                }).href,
                                image: 'media$thumbnail' in _0x33d3x3 ? _0x33d3x3.media$thumbnail.url.match(/\/s[0-9]{2}-(w[0-9]+-)?c/) ? _0x33d3x3.media$thumbnail.url.replace(/\/s[0-9]{2}-(w[0-9]+-)?c/, '/' + jdl.iSize) : _0x33d3x3.media$thumbnail.url.replace(/\=s[0-9]{2}-(w[0-9]+-)?c/, '=' + jdl.iSize) : 'content' in _0x33d3x3 ? _0x33d3x2(_0x33d3x3.content.$t).find('img').attr('src') : jdl.noImage
                            }]
                        }
                    })
                });
                var _0x33d3x6 = _0x33d3x2('<div class="jdl-gen"><ul class="jdl-tabs"></ul><div class="listjdl"></div></div>'),
                    _0x33d3x7 = jdl.obj,
                    _0x33d3x8 = function () {
                        var _0x33d3x3 = _0x33d3x4;
                        _0x33d3x6.find('.nav-tabs').append("<li><span data-id='hari-" + _0x33d3x3 + "'>" + _0x33d3x4 + '</span></li>'), _0x33d3x6.find('.listjdl').append('<div id="hari-' + _0x33d3x3 + '" class="customJdl"><h2>' + _0x33d3x4 + '</h2><div class="innerjdl"></div></div>'), _0x33d3x2.each(jdl.obj[_0x33d3x4], function () {
                            var _0x33d3x2 = "<span class='cd'>Jam " + this.time + '</span>';
                            _0x33d3x6.find('#hari-' + _0x33d3x3 + ' .innerjdl').append('<article class="jdlitem"><a href="' + this.link + '" title="' + this.title + '"><div class="images"><figure><img src="' + this.image + '" alt="' + this.title + '"></figure><div class="rd"></div><div class="br">' + _0x33d3x2 + this.episode + '</div></div><h3 class="entry-title">' + this.title + '</h3></a></article>')
                        })
                    };
                for (_0x33d3x4 in _0x33d3x7) {
                    _0x33d3x8()
                };
                _0x33d3x2('#jdl_Slider').html(_0x33d3x6), _0x33d3x2('.jdl-tabs li').click(function () {
                    var _0x33d3x3 = _0x33d3x2(this).find('span').attr('data-id');
                    _0x33d3x2('.customJdl, .jdl-tabs li').each(function () {
                        _0x33d3x2(this).attr('id') == _0x33d3x3 || _0x33d3x2(this).find('span').attr('data-id') == _0x33d3x3 ? _0x33d3x2(this).addClass('active') : _0x33d3x2(this).removeClass('active')
                    })
                }), _0x33d3x2('.jdl-tabs li').first().click()
            }()
        },
        iSize: 's300-rw',
        noImage: 'https://1.bp.blogspot.com/-BYDJ1dpFEhE/X9QnAUfeORI/AAAAAAAAHxw/OjfaqiPHjhAmCgJts39XIg7o4KR-8YtdACNcBGAsYHQ/w300-h225-p-k-no-nu/dagruel-no-image.png'
    }
//]]>
