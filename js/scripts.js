$('a[href^="#"]').click(function(){var t=$(this).attr("href"),t=$(t).offset().top-60;return jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop:t},800),!1}),$(".faq__item").on("click",function(){$(this).toggleClass("active"),$(this).children(".faq__answer").slideToggle(300)}),$(document).ready(function(){var n,a=900;function t(){a-=1;var t=Math.floor(a/60),e=a-60*t;0==t&&0==e&&clearInterval(n),e=10<=e?e:"0"+e,$(".minutes").html(10<=t?t:"0"+t),$(".seconds").html(e)}n=setInterval(t,1e3)}),$(".resume__inner").each(function(){var t=$(this).find(".resume__btn"),e=$(this).find(".resume__card-list2");$(window).width()<="555"&&e.hide(),t.click(function(){e.toggle(),$(".resume__card-list1").toggleClass("active-resume"),$(".resume__card-list1").hasClass("active-resume")?t.html("Свернуть"):t.html("Показать больше")})}),$(document).ready(function(){$(".teach__btn").click(function(){return $(".teach__container").toggleClass("hide"),$(".teach__container").toggleClass("active-teach"),$(".teach__container").hasClass("hide")?$(".teach__btn").html("Показать больше"):$(".teach__btn").html("Свернуть"),!1})}),$(document).ready(function(){});