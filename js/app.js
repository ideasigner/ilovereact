// 当页面加载完毕时开始动画。
"use strict";
window.onload = function() {
  animateLogo();
  animateRobot();
  addSmoothScrolling();
};

window.onscroll = function() {
  // ...
  updateSliderControl();
}

function animateLogo() {

	TweenMax.fromTo("#logo",2, {
    // from
    css: {
      y: "-20px",
    }
  },{
    // to
    css: {
      y: "20px",
    },

    // 永久重复动画的选项
    repeat: -1,

    // 反转、重新运行动画的选项
    yoyo: true,

    // 改变 easing 类型
    ease: Power2.easeInOut,
  }
)
};

function animateRobot() {
	var t = new TimelineMax({yoyo: true, repeat: -1});
	t.to("#android-robot",0.5,{rotation: "-60deg"})
	 .to("#android-robot",0.5,{rotation: "-10deg"})
		;
}




     // 侧滑更新------------------------

function updateSliderControl() {
  // get all the slider links
  var links = document.querySelectorAll("#slider-control a");     // 获取所有侧面按钮



  for(var i = 0; i < links.length; i++) {
    var link = links[i];


    // Get the section pointed to by the link

    var selectorCurr =  link.getAttribute("href");     // 获取圆点link的href属性
    // console.log(selectorCurr);
    var section = document.querySelector(selectorCurr);     
    // 按照圆点的属性名选择相应的section
    var sectionTop = section.offsetTop;     // 获取所选section与父容器偏移的距离

    var sectionBottom = sectionTop + section.offsetHeight; 
      
     //console.log(section.offsetHeight);
      console.log(i+"  "+"top-"+sectionTop);
      console.log(i+"  "+"bottom-"+sectionBottom);
      console.log(i+"  "+"scrollY-"+window.scrollY);

    // Check if window.scrollY is between the section.
    if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {

      link.className = "active";
      console.log(link);

    } else {
      link.className = "";
    }
  }
}

     // 网页滚动动画------------------------

// function scrollToElement(element) {
//   var topOfElement = element.offsetTop;

//   TweenMax.to(window,1,{
//     scrollTo: {
//       y: topOfElement,
//     },

//     ease: Power2.easeInOut,
//   });
// }

// function addSmoothScrolling() {
//   var links = document.querySelectorAll("#slider-control a")

//   for(...) {
//     var link = links[i];

//     link.addEventListener("click",function(event) {
//       // `event` 是鼠标点击事件

//       // BUG 警告！使用闭包或者 ES6 `let` 修复。
//       var href = link.blahblahblah;

//       scrollToElement(...);
//     });
//   }
// }















