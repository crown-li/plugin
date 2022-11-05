;(function ($) {
    function loadAutoScrollPlugin(a = $) {
        var b;
        (b = (function () {
          function b(b, c) {
            (this.elements = {
              wrap: b,
              ul: b.children(),
              li: b.children().children(),
            }),
              (this.settings = a.extend({}, a.fn.marquee.defaults, c)),
              (this.cache = { allowMarquee: !0 });
          }
          return (
            (b.prototype.init = function () {
              this.setStyle(), this.move(), this.bind();
            }),
            (b.prototype.setStyle = function () {
              var a, b, c, d, e, f, g, h;
              switch (
                ((d = this.elements.li.outerWidth(!0)),
                (c = this.elements.li.outerHeight(!0)),
                (b = Math.max(
                  parseInt(this.elements.li.css("margin-top"), 10),
                  parseInt(this.elements.li.css("margin-bottom"), 10)
                )),
                this.settings.type)
              ) {
                case "horizontal":
                  (h = this.settings.showNum * d),
                    (g = c),
                    (f = 9999),
                    (e = "auto"),
                    (a = "left"),
                    (this.cache.stepW = this.settings.stepLen * d),
                    (this.cache.prevAnimateObj = { left: -this.cache.stepW }),
                    (this.cache.nextAnimateObj = { left: 0 }),
                    (this.cache.leftOrTop = "left");
                  break;
                case "vertical":
                  (h = d),
                    (g = this.settings.showNum * c - b),
                    (f = "auto"),
                    (e = 9999),
                    (a = "none"),
                    (this.cache.stepW = this.settings.stepLen * c - b),
                    (this.cache.prevAnimateObj = { top: -this.cache.stepW }),
                    (this.cache.nextAnimateObj = { top: 0 }),
                    (this.cache.leftOrTop = "top");
              }
              this.elements.wrap.css({
                position: "relative",
                width: h,
                height: g,
                overflow: "hidden",
              }),
                this.elements.ul.css({ position: "relative", width: f, height: e }),
                this.elements.li.css({ float: a });
            }),
            (b.prototype.bind = function () {
              var a, b, c, d, e, f;
              (f = this),
                null != (a = this.settings.prevElement) &&
                  a.click(function (a) {
                    a.preventDefault(), f.prev();
                  }),
                null != (b = this.settings.nextElement) &&
                  b.click(function (a) {
                    a.preventDefault(), f.next();
                  }),
                null != (c = this.settings.pauseElement) &&
                  c.click(function (a) {
                    a.preventDefault(), f.pause();
                  }),
                null != (d = this.settings.resumeElement) &&
                  d.click(function (a) {
                    a.preventDefault(), f.resume();
                  }),
                null != (e = this.elements.wrap) &&
                  e.hover(
                    function () {
                      f.pause();
                    },
                    function () {
                      f.resume();
                    }
                  );
            }),
            (b.prototype.move = function () {
              var a, b, c;
              if (((c = this), this.settings.auto)) {
                switch (this.settings.direction) {
                  case "forward":
                    b = c.prev;
                    break;
                  case "backward":
                    b = c.next;
                }
                (a = c.settings.interval),
                  setTimeout(function callee() {
                    b.call(c), setTimeout(callee, a);
                  }, a),
                  (this.cache.moveBefore = this.cache.moveAfter =
                    function () {
                      return null;
                    });
              } else
                (this.cache.moveBefore = function () {
                  return (c.cache.allowMarquee = !1);
                }),
                  (this.cache.moveAfter = function () {
                    return (c.cache.allowMarquee = !0);
                  });
            }),
            (b.prototype.prev = function () {
              var a, b, c;
              (c = this),
                this.cache.allowMarquee &&
                  (this.cache.moveBefore.call(this),
                  this.settings.prevBefore.call(this),
                  (b = this.elements.ul),
                  (a = b.children().slice(0, this.settings.stepLen)),
                  a.clone().appendTo(b),
                  b.animate(
                    this.cache.prevAnimateObj,
                    this.settings.speed,
                    function () {
                      b.css(c.cache.leftOrTop, 0),
                        a.remove(),
                        c.cache.moveAfter.call(c),
                        c.settings.prevAfter.call(c);
                    }
                  ));
            }),
            (b.prototype.next = function () {
              var a, b, c;
              (c = this),
                this.cache.allowMarquee &&
                  (this.cache.moveBefore.call(this),
                  this.settings.nextBefore.call(this),
                  (b = this.elements.ul),
                  (a = b.children().slice(-this.settings.stepLen)),
                  a.clone().prependTo(b),
                  b
                    .css(c.cache.leftOrTop, -this.cache.stepW)
                    .animate(
                      this.cache.nextAnimateObj,
                      this.settings.speed,
                      function () {
                        a.remove(),
                          c.cache.moveAfter.call(c),
                          c.settings.nextAfter.call(c);
                      }
                    ));
            }),
            (b.prototype.pause = function () {
              this.settings.pauseBefore.call(this),
                (this.cache.allowMarquee = !1),
                this.settings.pauseAfter.call(this);
            }),
            (b.prototype.resume = function () {
              this.settings.resumeBefore.call(this),
                (this.cache.allowMarquee = !0),
                this.settings.resumeAfter.call(this);
            }),
            b
          );
        })()),
          (a.fn.marquee = function (c) {
            this.each(function () {
              var d;
              (d = new b(a(this), c)), d.init();
            });
          }),
          (a.fn.marquee.defaults = {
            auto: !0,
            interval: 3e3,
            direction: "forward",
            speed: 500,
            showNum: 1,
            stepLen: 1,
            type: "horizontal",
            prevElement: null,
            prevBefore: function () {},
            prevAfter: function () {},
            nextElement: null,
            nextBefore: function () {},
            nextAfter: function () {},
            pauseElement: null,
            pauseBefore: function () {},
            pauseAfter: function () {},
            resumeElement: null,
            resumeBefore: function () {},
            resumeAfter: function () {},
          });
    }

    $.fn.extend({
        tableRander({
            titleArr,
            dataArr,
            isAdaptive = true,
            autoScroll = true,
            height = 40,
            borderColor = 'rgba(25, 229, 192, 0.15)',
            titleBg = 'rgba(23, 93, 98, 0.63)',
            dataBg = 'rgba(2, 65, 93, 0.39)',

            //marquee config
            type = 'vertical', 
            auto = true,
            interval = 2000,
            speed = 500,
            showNum = 5,
            stepLen = 1
        }) {

            const calc = isAdaptive ? `calc(100% / ${titleArr.length})` : 'auto'
            let style = document.createElement('style'); 
            style.type = 'text/css'; 
            style.innerHTML=`ul{list-style:none;margin: 0;padding: 0;} 
                        .tableRander{width:100%;color:white}
                        .tableRander .thTitle{background:${titleBg}}
                        .tableRander .marquee_slide{background:${dataBg}}
                        .tableRander .marquee_slide .li:nth-child(2n+1){background:'red';}
                        .tableRander .liList{display: flex;align-items: center;height:${height}px;border-bottom: 1px solid ${borderColor};} 
                        .tableRander .liList .item{width:${calc};text-align:center;}
                    `;
            document.getElementsByTagName('HEAD').item(0).appendChild(style); 

            let title_item = '';
            let li_item = '';

            titleArr && titleArr.forEach(item => {
                title_item += `<div class="item">${item}</div>`
            });

            dataArr && dataArr.forEach(item => {
                let data_item = '';

                item.forEach(item_child => {
                    data_item += `<div class="item">${item_child}</div>`
                })

                li_item += `<li>
                            <div class="liList">
                                ${data_item}
                            </div>
                        </li>`
            });

            let _dom = `<div class="tableRander">
                            <div class="thTitle liList">
                                ${title_item}
                            </div>
                            <div class="marquee_slide">
                                <ul>
                                    ${li_item}
                                </ul>
                            </div>
                        </div>`

            $(this).append(_dom)

            if(!autoScroll) return;

            if(autoScroll && !$.fn.marquee){
                loadAutoScrollPlugin()
            }
            $(this).find(`.tableRander .marquee_slide`).marquee({
                type, 
                auto,
                interval,
                speed,
                showNum,
                stepLen
            });
        },
    })
})(jQuery)