//<![CDATA[
function myDrop(){document.getElementById("menu").classList.toggle("show")}function init(){for(var e=document.getElementsByTagName("img"),t=0;t<e.length;t++)e[t].getAttribute("data-src")&&e[t].setAttribute("src",e[t].getAttribute("data-src"))}function myFunction(){var e,t,n,i;for(e=document.getElementById("myInput").value.toUpperCase(),t=document.getElementById("episodeNime").getElementsByTagName("li"),i=0;i<t.length;i++)((n=t[i].getElementsByClassName("chapternum")[0]).textContent||n.innerText).toUpperCase().indexOf(e)>-1?t[i].style.display="":t[i].style.display="none"}function ignielYTlazy(e){$(".ignielYTlazy").each(function(){var t="https://img.youtube.com/vi/"+$(this).data("embed")+"/"+e+".jpg";$(this).append($(new Image).attr({src:t,alt:"thumb"}).fadeIn()),$(this).click(function(){$(this).html(""),$("<iframe>",{id:"ignielYoutube",src:"https://www.youtube.com/embed/"+$(this).data("embed"),frameborder:0,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}).appendTo($(this))})})}function loadMi(e){return!(e.value.length<1||(e.value&&document.getElementById("content").getElementsByTagName("iframe")[0].setAttribute("src",e.value),document.querySelector(".selectServ>option").setAttribute("disabled","disabled"),0))}window.onclick=function(e){if(!e.target.matches(".dropbtn")){var t=document.getElementById("menu");t.classList.contains("show")&&t.classList.remove("show")}},$(()=>{const e=localStorage.getItem("dark");$("html").toggleClass("dark","true"===e),$("#dark").prop("checked","true"===e).click(function(){$("html").toggleClass("dark",$(this).is(":checked")),localStorage.setItem("dark",String($(this).is(":checked")))})}),$(document).ready(function(){$("#plo").css("height","100%").hide(),$(".pls").click(function(){$("#plo").toggle(),$("#plo").is(":hidden")?$(this).removeClass("pto").children("span").html("Turn Off Light"):$(this).addClass("pto").children("span").html("Turn On Light")})}),$(document).ready(function(){$(".iconx").prepend(reportLink)}),$(".rel-container").find("li:last-child").remove(),$("#chapterSelect option").each(function(){var e=$(this).text();if(labelopt.includes("Anime "))var t=labelopt.replace("Anime ","");else t=labelopt;e.includes(t)&&e.includes("Episode")?$(this).html(e.replace(t,"")):e.includes("Anime "+labelopt)&&$(this).html(e.replace("Anime "+labelopt,""))}),window.addEventListener("load",function(){var e,t=function(){e&&clearTimeout(e),e=setTimeout(function(){var e=window.pageYOffset;n.forEach(function(t){t.offsetTop<window.innerHeight+e&&function(e){for(var t=e.offsetTop,n=e.offsetLeft,i=e.offsetWidth,o=e.offsetHeight;e.offsetParent;)t+=(e=e.offsetParent).offsetTop,n+=e.offsetLeft;return t>=window.pageYOffset&&n>=window.pageXOffset&&t+o<=window.pageYOffset+window.innerHeight&&n+i<=window.pageXOffset+window.innerWidth}(t)&&(t.src=t.dataset.src,t.classList.remove("lazyload"))}),0==n.length&&(document.removeEventListener("scroll",t),window.removeEventListener("resize",t),window.removeEventListener("orientationChange",t))},20)},n=document.querySelectorAll("img.lazyload");t(),document.addEventListener("scroll",t),window.addEventListener("resize",t),window.addEventListener("orientationChange",t)}),jQuery,ignielYTlazy("sddefault"),$(".resWarn").css("display","flex").hide().fadeIn(),$("#resEn").click(function(){$(".resWarn").fadeOut(function(){$(this).remove()})}),$("#resEx").click(function(){window.location.href="/"}),$(document).on("click",".filterCont .dropdown-toggle",function(){$(this).parent().hasClass("open")||$(document).find(".filterCont .widget.Label").removeClass("open"),$(this).parent().toggleClass("open")}),$(document).on("click",function(e){$(e.target).closest(".dropdown-toggle").length||$(document).find(".filterCont .widget.Label").removeClass("open")}),jQuery(document).ready(function(e){e(".filter-box .widget-content ul").click(function(e){e.stopPropagation()}),e(".filter-box .widget-content ul").each(function(t,n){var i=e(this).find("input:checked"),o=i.closest(".widget.Label").find("button span");0==i.length?o.html("All"):1==i.length?o.html(i.parent().find("label").html()):i.length>1&&o.html(i.length+" selected")}),e(".widget-content ul input").on("click",function(t){var n=e(this).parent().parent(),i=n.find("input:checked"),o=n.closest(".widget.Label").find("button span");0==i.length?o.html("All"):1==i.length?o.html(i.parent().find("label").html()):i.length>1&&o.html(i.length+" selected")})}),$(".filterCont .filter-box").submit(function(e){e.preventDefault();var t=$(this).serializeArray(),n=$.map(t,function(e,t){return e.value}).join("+");if(0==n.length){var i="/search";window.location.href=i}else i=$(this).attr("action")+n+"?&max-results=20",window.location.href=i}),$("time.published").each(function(){$(this).html(timeAgo(new Date($(this).attr("datetime"))))}),$(".ignielToTop").click(function(){return $("html,body").animate({scrollTop:"0"})}),$(function(){$("#atasan").each(function(){for(var e=$(this).find(".LinkList ul > li").children("a"),t=e.length,n=0;n<t;n++){var i=e.eq(n),o=i.text();if("_"!==o.charAt(0)&&"_"===e.eq(n+1).text().charAt(0)){var a=i.parent();a.append("<ul class='sub-menu m-sub'/>")}"_"===o.charAt(0)&&(i.text(o.replace("_","")),i.parent().appendTo(a.children(".sub-menu")))}for(n=0;n<t;n++){var l=e.eq(n),r=l.text();if("_"!==r.charAt(0)&&"_"===e.eq(n+1).text().charAt(0)){var s=l.parent();s.append("<ul class='sub-menu2 m-sub '/>")}"_"===r.charAt(0)&&(l.text(r.replace("_","")),l.parent().appendTo(s.children(".sub-menu2")))}$("#atasan ul li ul").parent("li").addClass("has-sub"),$("#atasan .widget").addClass("show-menu")}),$("#menu-menu").clone().appendTo(".mobile-menu"),$(".mobile-menu .has-sub").append("<div class='submenu-toggle '/>"),$(".mobile-menu ul > li a").each(function(){var e=$(this),t=e.attr("href").trim(),n=t.toLowerCase();t.split("/"),n.match("mega-menu")&&e.attr("href","/search/label/length?&max-results="+postPerPage)}),$(".slide-menu-toggle").on("click",function(){$("body").toggleClass("nav-active")})}),$(document).ready(function(){$("#studiohent").html($("#Label3").html()),$("#seasonhent").html($("#Label1").html()),$("#genrehent").html($("#Label2").html())});const formFix=document.querySelector("form#form");formFix.addEventListener("submit",function(e){e.preventDefault();const t=this.querySelector('input[type="text"]').value;window.location.href="/search?q=label:Series+"+t}),$(document).ready(function(){$("#content-pop").find("[id^='tabpop']").hide(),$("#tabspop li:first").attr("id","current"),$("#content-pop #tabpop1").toggle(),$("#tabspop a").click(function(e){e.preventDefault(),"current"!=$(this).closest("li").attr("id")&&($("#content-pop").find("[id^='tabpop']").hide(),$("#tabspop li").attr("id",""),$(this).parent().attr("id","current"),$("#"+$(this).attr("name")).toggle())})}),document.querySelector("#content iframe").setAttribute("src",document.getElementById("servDefault").value),document.getElementById("servDefault").setAttribute("selected",!0);var lk=document.getElementById("box-movie").innerHTML;document.getElementById("p-15").insertAdjacentHTML("beforeend",lk),document.getElementById("box-movie").remove();
//]]>
