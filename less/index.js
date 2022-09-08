var tops = [
    { id: 0, text: "全部" },
    { id: 1, text: "HTML&CSS" },
    { id: 2, text: "JavaScript" },
    { id: 3, text: "bootstrap" },
    { id: 4, text: "jQuery" },
    { id: 5, text: "html5&css3" }
]

var numbers = [
    {
        id: 1,
        htt: "./整形静态页面/doctor.html",
        text: "整形静态页面",
        img: "./img/整形静态页面.png"
    },
    {
        id: 1,
        htt: "./儿童静态页面/kiddy.html",
        text: "儿童静态页面",
        img: "./img/儿童静态页面.png"
    },
    {
        id: 1,
        htt: "./同城静态页面/排版.html",
        text: "同城静态页面",
        img: "./img/同城静态页面.png"
    },
    {
        id: 1,
        htt: "./360/360.html",
        text: "360静态页面",
        img: "./img/360.png"
    },
    {
        id: 2,
        htt: "./九宫格抽奖/test.html",
        text: "九宫格抽奖",
        img: "./img/九宫格抽奖.gif"
    },
    {
        id: 2,
        htt: "./js放大镜/放大镜-test.html",
        text: "放大镜",
        img: "./img/js放大镜.png"
    },
    {
        id: 2,
        htt: "./js手风琴/手风琴.html",
        text: "js手风琴",
        img: "./img/js手风琴.png"
    },
    {
        id: 2,
        htt: "./js轮播图/轮播图练习2.html",
        text: "js简易轮播图",
        img: "./img/js简易轮播图.png"
    },
    {
        id: 2,
        htt: "./时钟/指针时钟.html",
        text: "指针时钟",
        img: "./img/指针时钟.png"
    },
    {
        id: 2,
        htt: "./小游戏/钢琴.html",
        text: "钢琴",
        img: "./img/钢琴.png"
    },
    {
        id: 2,
        htt: "./时钟/滚动时钟-test.html",
        text: "滚动时钟",
        img: "./img/滚动时钟.png"
    },
    {
        id: 2,
        htt: "./时钟/方块时钟.html",
        text: "方块时钟",
        img: "./img/方块时钟.png"
    },
    {
        id: 2,
        htt: "./小游戏/卡片记忆.html",
        text: "卡片记忆",
        img: "./img/卡片记忆.png"
    },
    {
        id: 2,
        htt: "./小游戏/别踩白块.html",
        text: "别踩白块",
        img: "./img/别踩白块.png"
    },
    {
        id: 2,
        htt: "./小游戏/找色块游戏.html",
        text: "找色块游戏",
        img: "./img/找色块.png"
    },
    {
        id: 3,
        htt: "./服装响应式页面/dress.html",
        text: "服装响应式页面",
        img: "./img/服装响应式页面.png"
    },
    {
        id: 3,
        htt: "./整形响应式页面/整形.html",
        text: "整形响应式页面",
        img: "./img/整形静态页面.png"
    },
    {
        id: 4,
        htt: "./jq无缝轮播图/无缝轮播图.html",
        text: "无缝轮播图",
        img: "./img/jq无缝轮播图.png"
    },
    {
        id: 4,
        htt: "./b站弹幕&王者荣耀手风琴/b站-test.html",
        text: "b站弹幕",
        img: "./img/b站弹幕.gif"
    },
    {
        id: 4,
        htt: "./B站漫画/b-ajax.html",
        text: "B站漫画",
        img: "./img/b站漫画.png"
    },
    {
        id: 4,
        htt: "./b站弹幕&王者荣耀手风琴/手风琴.html",
        text: "王者荣耀手风琴",
        img: "./img/王者荣耀手风琴.gif"
    },
    {
        id: 5,
        htt: "./音乐播放器/音乐.html",
        text: "音乐播放器",
        img: "./img/音乐播放器.png"
    },
    {
        id: 5,
        htt: "./css3/动画.html",
        text: "动画",
        img: "./img/动画.png"
    },
    {
        id: 5,
        htt: "./loading/loading.html",
        text: "loading",
        img: "./img/loading.png"
    },
    {
        id: 5,
        htt: "./3d动画/3d-box.html",
        text: "3d动画",
        img: "./img/3d动画.png"
    },
]

$(".top").append(`${tops.map(function (ele) {
    return `
    <li data-id="${ele.id}">
        <h3>${ele.text}</h3>
        </li>`
}).join("")}`)

function qunbu() {

    $(".top li").eq(0).addClass("active")

    tops.slice(1, tops.length).map(function (index) {
        // console.log(index);
        $(".center").append(`
        <h2>${index.text}</h2>
        <div class="${index.id}">
            </div>
        `)
        numbers.map(function (ele) {
            // console.log(ele);
            if (index.id == ele.id) {
                $('.center .' + index.id).append(`
                <li>
        <a href="${ele.htt}">
        <div class="big">
            <img src="${ele.img}">
            <div class="mask">
                <h1>${ele.text}</h1>
                </div>
            </div>
        </a>
        <h3>${ele.text}</h3>
        </li>
                `)
            }
        })
    })


}
qunbu()

$(".top li").on("click", function () {
    $(".bottom").html(" ")
    $(".center").html(" ")
    console.log($(this).data("id"));
    var _this = $(this).data("id")
    if (_this == 0) {
        qunbu()
    } else {
        $(".bottom").append(`
        <h2>${tops[_this].text}</h2>
        <div class="s"></div>
        `)
    }
    numbers.map(function (ele) {

        if (_this == ele.id) {
            // console.log(ele);
            $(".bottom .s").append(`
            <li>
        <a href="${ele.htt}">
        <div class="big">
            <img src="${ele.img}">
            <div class="mask">
                <h1>${ele.text}</h1>
                </div>
            </div>

        </a>
        <h3>${ele.text}</h3>
        </li>
            `)
        }
    })
})

$(".top li").click(function () {
    // console.log($(this));
    $(this).addClass("active").siblings().removeClass("active")
})