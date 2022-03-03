$(function () {
    $("nav").css({ //页面刷新导航栏透明度显示
        opacity: "1"
    })
    $(".slideshow").css({ //页面刷新轮播图透明度显示
        opacity: "1"
    })

    $(".briefIntroduction").css("marginTop", $(window).height() + 100); //给简介处理上边距
    /*搜索按钮点击开始*/
    var navKey = true; //改bug钥匙，点击执行一次后再也不执行
    $(".searchBtn").click(function () {
        /*修复点击过后二级菜单宽度不整*/
        if (navKey == true) {
            var navWidth = $("nav").css("width"); //获取当前nav的宽度
            var containerLeft = $(".container").offset().left; //获取偏移位解决点击后宽度不为100%；
            $("nav .nav_bottom").css("width", navWidth);
            $("nav .nav_bottom").offset({ //赋值
                left: -containerLeft
            })
            navKey = false;
        }
        /*bug修复结束*/
        var bodyHeight = $(document.body).outerHeight(true); //获取浏览器当前窗口文档body的总高度 包括border padding margin 
        $(".masking").css("height", bodyHeight);
        $(".searchBox").attr("class", "searchBox");
        $(".masking").attr("class", "masking");
        $("nav").css("background", "black");
        $(".container").css({
            transform: "scale(0)"
        });
        setTimeout(function () {
            $(".container").css({
                display: "none"
            });
            $(".searchBox").css({
                transform: "translateX(0)",
                opacity: 1
            })
            $(".masking").css({
                transform: "translateX(0)",
                opacity: 1
            })
        }, 500);

    })

    $(".x").click(function () {
        $("nav").css("background", "rgba(0, 0, 0, 0.7)");
        $(".container").css({
            display: "block",
        });
        $(".searchBox").css({
            transform: "translateX(200px)",
            opacity: 0
        });
        $(".masking").css({
            transform: "translateX(200px)",
            opacity: 0
        });
        setTimeout(function () {
            $(".container").css({
                transform: "scale(1)"
            });
            $(".searchBox").attr("class", "searchBox hidden");
            $(".masking").attr("class", "masking hidden");
        }, 500)
        $(".searchBox_center input").val("");
    })
    /*搜索按钮点击结束*/
    /*个人中心开始*/
    $(".inp").attr("disabled", true);
    $(".personalCenterBtn").click(function () { //点击个人中心弹出个人中心的框
        $(".personalCenter").css({
            transform: "translateX(0px)",
            opacity: "1",
            boxShadow: "none"
        })
    })

    $(".closePersonalCenter").click(function () { //点击关闭个人中心的框
        $(".personalCenter").css({      //把个人中心移出
            transform: "translateX(100%)",
            opacity: "0"
        })
        for (let i = 0; i < $(".inp1").length; i++) {   //点击了修改没保存点击关闭清空所有内容
            $(".inp1").eq(i).val("");
        }
        for (var i = 0; i < $(".warning").length; i++) {    //点击了修改没保存点击关闭隐藏所有提示警报
            $(".warning").eq(i).css("display","none")
        }
        $(".modifyBtn").attr("disabled", true)  //保存按钮设置为不可点
        $(".modifyBtn").css({
            backgroundColor: "#b0c4de",
            cursor: "no-drop"
        })
        $(".preservationBtn").attr("disabled", false)   //修改按钮设置为可点
        $(".preservationBtn").css({
            backgroundColor: "#219167",
            cursor: "pointer"
        })
        $(".inp").attr("disabled", true);   //所有个人中心的选项设置为不可更改
        $(".inp").css({
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none"
        })
        $(".inp1").eq(0).attr("placeholder", FinalUser);    //重新赋值没保存前的数据
        $(".inp1").eq(1).attr("placeholder", FinalPhone);
        $(".inp1").eq(2).attr("placeholder", FinalEmail);
    })
    $(".preservationBtn").click(function () { //点击修改按钮后
        $(".preservationBtn").attr("disabled", true)    //修改按钮设置为不可点
        $(".preservationBtn").css({
            backgroundColor: "#b0c4de",
            cursor: "no-drop"
        })
        $(".modifyBtn").attr("disabled", false) //保存按钮设置为可点
        $(".modifyBtn").css({
            backgroundColor: "#6495ed",
            cursor: "pointer"
        })
        $(".inp").attr("disabled", false);  //所有个人中心的选项设置为可更改
        $(".inp").css({ 
            backgroundColor: "#ffffff",
            border: "1px solid #66afe9",
            boxShadow: "inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, 0.6)"
        })
    })
    var FinalUser = "daixu";    //保存最终用户名
    var FinalEmail = "wjw_daixu@163.com";   //保存最终邮箱
    var FinalPhone = "13858707362"; //保存最终手机
    $(".personalCenterBtn span").text(FinalUser);
    $(".inp1").eq(0).attr("placeholder",FinalUser); 
    $(".inp1").eq(1).attr("placeholder",FinalPhone);
    $(".inp1").eq(2).attr("placeholder",FinalEmail);
    $(".inp1").eq(3).attr("placeholder","学生");
    $(".inp1").eq(4).attr("placeholder","王建炜最帅！王建炜最帅!");
    var reg = /^[a-zA-Z0-9_-]{4,16}$/; //判断用户名 4到16位（字母，数字，下划线，减号）
    var reg1 = /^[1][3,4,5,6,7,8,9][0-9]{9}$/; //判断手机号
    var reg2 = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/; //判断邮箱
    var flag = false;   //判断用户名邮箱及手机号格式是否正确
    $(".user").on("input", function () {    //给用户名添加输入判断是否正确事件
        if (reg.test($(".user").val()) == false) {
            $(".warning").eq(0).css("display", "block");
        } else {
            $(".warning").eq(0).css("display", "none");
        }
        if ($(".user").val() == "") {
            $(".warning").eq(0).css("display", "none");
        }
    })
    $(".phone").on("input", function () {   //给手机号添加输入判断是否正确事件
        if (reg1.test($(".phone").val()) == false) {
            $(".warning").eq(1).css("display", "block");
        } else {
            $(".warning").eq(1).css("display", "none");
        }
        if ($(".phone").val() == "") {
            $(".warning").eq(1).css("display", "none");
        }
    })  
    $(".email").on("input", function () {   //给邮箱添加输入判断是否正确事件
        if (reg2.test($(".email").val()) == false) {
            $(".warning").eq(2).css("display", "block");
        } else {
            $(".warning").eq(2).css("display", "none");
        }
        if ($(".email").val() == "") {
            $(".warning").eq(2).css("display", "none");
        }
    })
    $(".modifyBtn").click(function () {     //点击保存后
        for (let i = 0; i < $(".warning").length; i++) {    //循环判断是否用户名手机号邮箱都正确
            if ($(".warning").eq(i).css("display") == "none") {
                flag = true;    //全部为正确给flag赋值true
            } else {
                flag = false;   //有一个不正确停止循环并且给flag赋值false
                break;
            }
        }
        if (flag == true) { //如果上面输入格式没有错保存数据
            if ($(".inp1").eq(0).val() != "") {     //如果用户名不为空则给FinalUser重新赋值
                FinalUser = $(".inp1").eq(0).val();
            }
            if ($(".inp1").eq(1).val() != "") {     //同上
                FinalPhone = $(".inp1").eq(1).val();
            }
            if ($(".inp1").eq(2).val() != "") {      //同上
                FinalEmail = $(".inp1").eq(2).val();
            }
            $(".personalCenterBtn span").text(FinalUser);   //用户名修改成功重新在导航栏刷新修改后的用户名
            $(".modifyBtn").attr("disabled", true); //保存按钮设置为不可点状态
            $(".modifyBtn").css({
                backgroundColor: "#b0c4de",
                cursor: "no-drop"
            })
            $(".preservationBtn").attr("disabled", false);  //修改按钮设置为可点状态
            $(".preservationBtn").css({
                backgroundColor: "#219167",
                cursor: "pointer"
            })
            $(".inp").attr("disabled", true);   //所有表单设置为不可操作
            $(".inp").css({
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none"
            })
            for (let i = 0; i < $(".inp1").length; i++) {   //循环一遍所有表单保存输入的数据
                if ($(".inp1").eq(i).val() != "") {     //不为空情况下更改表单信息
                    $(".inp1").eq(i).attr("placeholder", $(".inp1").eq(i).val())
                }
                $(".inp1").eq(i).val("");   //赋值完成后清空输入值
            }
        } else {    //如果有红色信息警报则弹出错误框
            alert("信息有错误，请检查修改后再保存");
        }
    })
    /*个人中心结束*/
    /*轮播图开始*/
    function title() { //该函数用于判断轮播图是否为第二张图
        if (-parseInt($(".slideshow .slideImg li").css("width")) == parseInt($(".slideshow .slideImg").css("left"))) {
            //如果等于第二张图则出现文字动画
            $(".slideshow .slideTitle p:nth-child(1)").css({ //设置样式使文字出现，一下相同
                transform: "translate(0px)",
                opacity: "1"
            })
            $(".slideshow .slideTitle p:nth-child(2)").css({
                transform: "translate(0px)",
                opacity: "1"
            })
            $(".slideshow .slideTitle p:nth-child(3)").css({
                transform: "translate(0px)",
                opacity: "1"
            })
        } else { //如果不是则返回原来样式
            $(".slideshow .slideTitle p:nth-child(1)").css({
                transform: "translate(-100%)",
                opacity: "0"
            })
            $(".slideshow .slideTitle p:nth-child(2)").css({
                transform: "translate(-100%)",
                opacity: "0"
            })
            $(".slideshow .slideTitle p:nth-child(3)").css({
                transform: "translate(-100%)",
                opacity: "0"
            })
        }
    }
    var slideIndex = 0; //储存当前位置下标
    for (var i = 0; i < $(".slideDot li").length; i++) { //添加循环时间
        (function (i) { //创建立即执行函数处理闭包
            $(".slideDot li").eq(i).click(function () {
                var temp = parseInt($(".slideshow .slideImg li").css("width")); //获取li此时的宽度
                temp = -temp * i; //计算即将偏移的位置
                $(".slideDot li").removeClass("active"); //删除所有原始样式
                $(this).addClass("active"); //给选定元素添加选中样式
                $(".slideshow .slideImg").animate({ //跳转下一张图片
                    left: temp
                }, 300, function () {
                    title(); //切换完图片进行判断是否为第二张，是的话则出现文字动画
                })
                slideIndex = i; //点击过后给下标重新赋值
            })
        }(i))
    }
    var slideshowTimer = null; //轮播定时器
    function AutomaticallyRound() { //自动轮播，注释同上
        clearInterval(slideshowTimer); //运行前清空避免bug
        slideshowTimer = setInterval(function () {
            slideIndex++; //每次切换下标+1
            var temp = parseInt($(".slideshow .slideImg li").css("width"));
            temp = -temp * slideIndex;
            $(".slideDot li").removeClass("active");
            $(".slideDot li").eq(slideIndex).addClass("active");
            $(".slideshow .slideImg").animate({
                left: temp
            }, 300, function () {
                if (-parseInt($(".slideshow .slideImg li").css("width")) == parseInt($(".slideshow .slideImg").css("left"))) {
                    //如果当前为第二张图片则是轮播图停止五秒
                    clearInterval(slideshowTimer); //停止定时器
                    setTimeout(function () { //创建周期定时器五秒后在自动运行自动轮播的定时器
                        AutomaticallyRound();
                    }, 5000)
                }
                title(); //切换完图片进行判断是否为第二张，是的话则出现文字动画
                //判断当图片为最后一张时，后面的||解决js精度不足导致轮播图越界bug
                if (slideIndex == $(".slideDot li").length || (parseInt($(".slideshow .slideImg").css("left")) <= -parseInt($(".slideshow .slideImg li").css("width")) * ($(".slideDot li").length))) {
                    $(".slideDot li").removeClass("active"); //清空所有切换按钮样式
                    slideIndex = 0; //初始化下标志
                    $(".slideDot li").eq(slideIndex).addClass("active"); //给第一个切换按钮增加样式
                    $(".slideshow .slideImg").css("left", "0") //瞬间切换到第一张达到无限循环效果
                }
            })
        }, 3000)
    }
    AutomaticallyRound(); //调用自动轮播
    $(".slideshow").mouseover(function () { //移入暂停轮播
        clearInterval(slideshowTimer);
    })
    $(".slideshow").mouseout(function () { //移出开始轮播
        AutomaticallyRound();
    })

    /*轮播图结束*/

    /*阻止超链接的默认跳转行为开始 */
    $(".aboutUs_left_centerRight a").click(function () {
        return false;
    })
    $(".videos_top a").click(function () {
        return false;
    })

    /*阻止超链接的默认跳转行为结束 */

    /*视频区域开始*/
    for (var i = 0; i < $(".videos_bottomBox").length; i++) { //循环添加事件
        (function (i) { //解决闭包                         
            $(".videos_bottomBox").eq(i).click(function () { //点击开启蒙版
                var temp = $(this).children(".videos_bottom_txt").text(); //获取当前标题
                $(".videoPlaying_top span:nth-child(1)").text(temp); //赋值
                var temp = "<embed src=\"images/video" + (i) + "_2.mp4\" width=\"880\" height=\"495\" />" //创建节点
                $(".videoPlaying_bottom").after(temp); //添加节点
                $(".videoPlaying").removeClass("hidden") //开启蒙版
            })
            $(".closeVideo").click(function () {
                $(".videoPlaying").addClass("hidden"); //点击关闭蒙版
                $("embed").remove(); //删除视频节点
            })
        }(i))
    }
    /*视频区域结束*/

    /*返回火箭开始*/

    function getRandom(min, max) { //返回一个随机整数
        return Math.floor(Math.random() * (max - min)) + min;
    };
    var heightWindow = $(window).height(); //获取浏览器可视区窗口高度
    var sz = [-298, -447, -596, -745]; //火箭四张图
    var rocketTimer = null; //火箭喷火动画定时器
    $(".returnTop").mouseover(function () { //鼠标移入显示颜色火箭
        $(".returnTop .changing").css("zIndex", "11");
        $(".returnTop .original").stop().fadeOut(500);
        $(".returnTop .changing").stop().fadeIn(500);
    })
    $(".returnTop").mouseout(function () { //鼠标移出去掉颜色
        $(".returnTop .changing").css("zIndex", "9");
        $(".returnTop .original").stop().fadeIn(500);
        $(".returnTop .changing").stop().fadeOut(500);
    })
    $(window).scroll(function () { //滚动条事件
        $(".returnTop").mouseover(function () { //鼠标移入显示颜色火箭
            $(".returnTop .changing").css("zIndex", "11");
            $(".returnTop .original").stop().fadeOut(500);
            $(".returnTop .changing").stop().fadeIn(500);
        })
        $(".returnTop").mouseout(function () { //鼠标移出去掉颜色
            $(".returnTop .changing").css("zIndex", "9");
            $(".returnTop .original").stop().fadeIn(500);
            $(".returnTop .changing").stop().fadeOut(500);
        })
        if ($(window).scrollTop() != 0) { //如果滚动条不在顶端
            $(".returnTop").css("bottom", "-50px"); //火箭飞完之后位置初始化
            $(".returnTop").stop().fadeIn(1000); //显示整个火箭区域
            $(".returnTop .original").stop().fadeIn(1000); //自动显示没颜色的火箭
            clearInterval(rocketTimer); //避免bug事先清除定时器
            $(".returnTop .changing").css({ //初始化有颜色火箭，避免火箭飞一半滚动条拉回来bug
                backgroundPosition: "-149px 0",
                display: "none"
            })
        } else { //如果滚动条到达最顶端
            $(".returnTop").unbind(); //解决火箭在上升阶段鼠标快速移入移出产生火箭不喷火的bug
            $(".returnTop .changing").css({ //增加有颜色火箭宽度，因为要显示喷火动画
                zIndex: "11",
                height: "100%"
            });
            $(".returnTop .original").stop().fadeOut(300); //让无色火箭隐藏
            $(".returnTop .changing").stop().fadeIn(300); //让有颜色的火箭显示
            rocketTimer = setInterval(function () { //喷火切换动画
                var temp = sz[getRandom(0, 4)]; //随机获取一个火焰大小
                temp = temp + "px 0";
                $(".returnTop .changing").css("backgroundPosition", temp); //完成喷火赋值
            }, 30)
            $(".returnTop").animate({ //火箭先向下
                bottom: "-120px"
            }, 500, function () { //完成向下之后往上跑
                $(".returnTop").animate({
                    bottom: heightWindow //跑出浏览器可视区
                }, 600, function () { //火箭发射完成下面是火箭初始化代码
                    $(".returnTop").css("display", "none");
                    $(".returnTop .changing").css({
                        zIndex: "9",
                        height: "150px"
                    });
                    $(".returnTop .original").stop().fadeIn(500);
                    $(".returnTop .changing").stop().fadeOut(500);
                    clearInterval(rocketTimer);
                    $(".returnTop .changing").css("backgroundPosition", "-149px 0")
                })
            })
        }
    })
    $(".returnTop .changing").click(function () { //点击火箭发射
        var temp = $("html").scrollTop(); //获取滚动条当前值
        var timer = setInterval(function () { //滚动条返回动画
            temp = temp - 100;
            $("html").scrollTop(temp)
            if ($("html").scrollTop() == 0) { //到底顶部，动画暂停
                clearInterval(timer);
            }
        }, 30)
    })
    /*返回火箭结束*/

    /*生日下拉框开始*/
    var selects = document.getElementsByTagName("select"); //通过标签名获取select对象
    var date = new Date();
    var nowYear = date.getFullYear(); //获取当前的年
    for (var i = nowYear - 100; i <= nowYear; i++) { //循环添加一百次年份
        var optionYear = document.createElement("option");
        optionYear.innerHTML = i;
        optionYear.value = i;
        selects[0].appendChild(optionYear);
    }
    for (var i = 1; i <= 12; i++) { //添加十二个月份
        var optionMonth = document.createElement("option");
        optionMonth.innerHTML = i;
        optionMonth.value = i;
        selects[1].appendChild(optionMonth);
    }
    getDays(selects[1].value, selects[0].value, selects);

    // 获取某年某月存在多少天
    function getDaysInMonth(month, year) { //该函数用于判断当前月份有多少天
        var days; //最后返回的天数结果
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            days = 31;
        } else if (month == 4 || month == 6 || month == 9 || month == 11) {
            days = 30;
        } else {
            if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) { // 判断是否为润二月
                days = 29;
            } else {
                days = 28;
            }
        }
        return days;
    }

    function setDays() {
        var selects = document.getElementsByTagName("select");
        var year = selects[0].options[selects[0].selectedIndex].value; //返回选中的月份
        var month = selects[1].options[selects[1].selectedIndex].value; //返回选中的月份
        getDays(month, year, selects); //调用之前的函数计算当前年月的天数
    }

    function getDays(month, year, selects) {
        var days = getDaysInMonth(month, year); //得到具体当前月天数
        selects[2].options.length = 0; //清空日的下拉框
        for (var i = 1; i <= days; i++) { //给日的下拉框添加列表  
            var optionDay = document.createElement("option");
            optionDay.innerHTML = i;
            optionDay.value = i;
            selects[2].appendChild(optionDay);
        }
    }
    /*生日下拉框结束*/

    /*以下全是滚动条事件集合*/
    $(window).scroll(function () { //给滚动条绑定事件
        //如果元素到文档顶部距离小于可视区高度+滚动距离则执行if内函数
        if ($(".briefIntroduction .briefIntroduction_left").offset().top < heightWindow + $(window).scrollTop()) {
            //赋值返回原始形态
            $(".briefIntroduction .briefIntroduction_left").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        //下面代码相同不用翻了
        if ($(".briefIntroduction .briefIntroduction_right div:nth-child(1)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".briefIntroduction .briefIntroduction_right div:nth-child(1)").css({
                transform: "translate(0px,0px)",
                opacity: "1"
            })
        }
        if ($(".briefIntroduction .briefIntroduction_right div:nth-child(2)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".briefIntroduction .briefIntroduction_right div:nth-child(2)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".briefIntroduction .briefIntroduction_right div:nth-child(3)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".briefIntroduction .briefIntroduction_right div:nth-child(3)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".developmentHistory .developmentHistory_top .developmentHistory_topRight p:nth-child(1)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".developmentHistory .developmentHistory_top .developmentHistory_topRight p:nth-child(1)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".developmentHistory .developmentHistory_top .developmentHistory_topRight p:nth-child(2)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".developmentHistory .developmentHistory_top .developmentHistory_topRight p:nth-child(2)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".developmentHistory .developmentHistory_bottom .developmentHistory_bottomLeft p:nth-child(1)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".developmentHistory .developmentHistory_bottom .developmentHistory_bottomLeft p:nth-child(1)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".developmentHistory .developmentHistory_bottom .developmentHistory_bottomLeft p:nth-child(2)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".developmentHistory .developmentHistory_bottom .developmentHistory_bottomLeft p:nth-child(2)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".developmentHistory .developmentHistory_top .developmentHistory_topLeft").offset().top < heightWindow + $(window).scrollTop()) {
            $(".developmentHistory .developmentHistory_top .developmentHistory_topLeft").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".developmentHistory .developmentHistory_bottom .developmentHistory_bottomRight").offset().top < heightWindow + $(window).scrollTop()) {
            $(".developmentHistory .developmentHistory_bottom .developmentHistory_bottomRight").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".developmentHistory .developmentHistory_center").offset().top < heightWindow + $(window).scrollTop()) {
            $(".developmentHistory .developmentHistory_center").css({
                opacity: "1"
            })
        }
        if ($(".developmentHistory .developmentHistory_center p:nth-child(1)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".developmentHistory .developmentHistory_center p:nth-child(1)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".developmentHistory .developmentHistory_center p:nth-child(2)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".developmentHistory .developmentHistory_center p:nth-child(2)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".caseToAppreciate .caseToAppreciate_left p:nth-child(1)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".caseToAppreciate .caseToAppreciate_left p:nth-child(1)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".caseToAppreciate .caseToAppreciate_left p:nth-child(2)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".caseToAppreciate .caseToAppreciate_left p:nth-child(2)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".caseToAppreciate .caseToAppreciate_left p:nth-child(3)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".caseToAppreciate .caseToAppreciate_left p:nth-child(3)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".caseToAppreciate .caseToAppreciate_left button").offset().top < heightWindow + $(window).scrollTop()) {
            $(".caseToAppreciate .caseToAppreciate_left button").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".caseToAppreciate .caseToAppreciate_right .caseToAppreciate_rightImgs:nth-child(1)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".caseToAppreciate .caseToAppreciate_right .caseToAppreciate_rightImgs:nth-child(1)").css({
                transform: "translate(0px,0px)",
                opacity: "1"
            })
        }
        if ($(".caseToAppreciate .caseToAppreciate_right .caseToAppreciate_rightImgs:nth-child(2)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".caseToAppreciate .caseToAppreciate_right .caseToAppreciate_rightImgs:nth-child(2)").css({
                transform: "translate(0px,0px)",
                opacity: "1"
            })
        }
        if ($(".caseToAppreciate .caseToAppreciate_right .caseToAppreciate_rightImgs:nth-child(3)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".caseToAppreciate .caseToAppreciate_right .caseToAppreciate_rightImgs:nth-child(3)").css({
                transform: "translate(0px,0px)",
                opacity: "1"
            })
        }
        if ($(".caseToAppreciate .caseToAppreciate_right .caseToAppreciate_rightImgs:nth-child(4)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".caseToAppreciate .caseToAppreciate_right .caseToAppreciate_rightImgs:nth-child(4)").css({
                transform: "translate(0px,0px)",
                opacity: "1"
            })
        }
        if ($(".involvedField .involvedField_bottom .involvedField_BL").offset().top < heightWindow + $(window).scrollTop()) {
            $(".involvedField .involvedField_bottom .involvedField_BL").css({
                transform: "translateY(0px)",
                opacity: "1"
            })
        }
        if ($(".involvedField .involvedField_bottom .involvedField_BR").offset().top < heightWindow + $(window).scrollTop()) {
            $(".involvedField .involvedField_bottom .involvedField_BR").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".involvedField .involvedField_title p:nth-child(1)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".involvedField .involvedField_title p:nth-child(1)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".involvedField .involvedField_title p:nth-child(2)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".involvedField .involvedField_title p:nth-child(2)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".aboutUs .aboutUsTop p:nth-child(1)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".aboutUs .aboutUsTop p:nth-child(1)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".aboutUs .aboutUsTop p:nth-child(2)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".aboutUs .aboutUsTop p:nth-child(2)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".aboutUs .aboutUs_left .aboutUs_left_top").offset().top < heightWindow + $(window).scrollTop()) {
            $(".aboutUs .aboutUs_left .aboutUs_left_top").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".aboutUs .aboutUs_left .aboutUs_left_center").offset().top < heightWindow + $(window).scrollTop()) {
            $(".aboutUs .aboutUs_left .aboutUs_left_center").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".aboutUs .aboutUs_left .aboutUs_left_bottom").offset().top < heightWindow + $(window).scrollTop()) {
            $(".aboutUs .aboutUs_left .aboutUs_left_bottom").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".aboutUs .aboutUs_right .aboutUs_right_top").offset().top < heightWindow + $(window).scrollTop()) {
            $(".aboutUs .aboutUs_right .aboutUs_right_top").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".aboutUs .aboutUs_right .aboutUs_right_bottom").offset().top < heightWindow + $(window).scrollTop()) {
            $(".aboutUs .aboutUs_right .aboutUs_right_bottom").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".videos .videos_top span:nth-child(1)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".videos .videos_top span:nth-child(1)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".videos .videos_top span:nth-child(2)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".videos .videos_top span:nth-child(2)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".videos .videos_bottom .videos_bottomBox:nth-child(1)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".videos .videos_bottom .videos_bottomBox:nth-child(1)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".videos .videos_bottom .videos_bottomBox:nth-child(2)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".videos .videos_bottom .videos_bottomBox:nth-child(2)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".videos .videos_bottom .videos_bottomBox:nth-child(3)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".videos .videos_bottom .videos_bottomBox:nth-child(3)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".videos .videos_bottom .videos_bottomBox:nth-child(4)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".videos .videos_bottom .videos_bottomBox:nth-child(4)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".ending p:nth-child(1)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".ending p:nth-child(1)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".ending p:nth-child(2)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".ending p:nth-child(2)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".ending p:nth-child(3)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".ending p:nth-child(3)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }
        if ($(".ending p:nth-child(4)").offset().top < heightWindow + $(window).scrollTop()) {
            $(".ending p:nth-child(4)").css({
                transform: "translateX(0px)",
                opacity: "1"
            })
        }

    })
})