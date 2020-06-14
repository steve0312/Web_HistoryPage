    // 배경 슬라이드
    var slide_index = 1;  
    displaySlides(slide_index);  

    function nextSlide(n) {  
        displaySlides(slide_index += n);  
    }  
  
    function currentSlide(n) {  
        displaySlides(slide_index = n);  
    }  
  
    function displaySlides(n) {  
        var i;  
        var slides = document.getElementsByClassName("showSlide");  

        if (n > slides.length) { slide_index = 1 }  
        if (n < 1) { slide_index = slides.length }  
            
        for (i = 0; i < slides.length; i++) {  
            slides[i].style.display = "none";  
        }  
            
        slides[slide_index - 1].style.display = "block";  
    } 

    // 시계
    function startTime() {
        setInterval("nowDate()",1000);
    } 
    
    function nowDate() {
        var now = new Date(); 
        document.getElementById('time-area').innerHTML = now.toLocaleString();
    }
  
    // 공지사항
    function getCookie(name) { 
        var cookie = document.cookie; 
        
        if (document.cookie != "") { 
            var cookie_array = cookie.split("; ");
            for (var index in cookie_array) { 
                var cookie_name = cookie_array[index].split("="); 
                 
                if (cookie_name[0] == "popupYN") { 
                     return cookie_name[1]; 
                } 
            } 
        }
        return; 
    } 

    function openWin() { 
        var cookieCheck = getCookie("popupYN"); 
        if (cookieCheck != "N") 
            window.open("notice.html", "notice", "width=370, height=500, left=400, top=150");
    }

    function setCookie(name, value, expiredays) {
        var date = new Date();
        date.setDate(date.getDate() + expiredays);
        document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString();
    }

    function closeWin() {
        if (document.getElementById("check").value) {
            setCookie("popupYN", "N", 1);
            self.close();
        }
    }
