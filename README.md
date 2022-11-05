# 表格和滚动插件

~~~bash
$('.a').tableRander({
    titleArr:['模板左','测点','变化量','1'],
    dataArr:[
        ['模板左','模板左','模板左','模板左'],
        ['模板左','模板左','模板左','模板左'],
        ['模板左','模板左','模板左','模板左'],
        ['模板左','模板左','模板左','模板左'],
        ['模板左','模板左','模板左','模板左'],
        ['模板左','模板左','模板左','模板左'],
        ['模板左','模板左','模板左','模板左'],
        ['模板左','模板左','模板左','模板左'],
        ['模板左','模板左','模板左','模板左'],
        ['模板左','模板左','模板左','模板左']
    ],
    // autoScroll:false
})
~~~

~~~bash
#config
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
~~~