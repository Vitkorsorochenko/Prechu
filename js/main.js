 window.onload = function() {
     var slides = document.querySelectorAll('#slides .slide');
     var currentSlide = 0;
     if (currentSlide==0) {document.getElementById('btn1').style.visibility = "hidden";}
     else if (currentSlide==2) {document.getElementById('btn2').style.visibility = "hidden";}
     // var slideInterval = setInterval(nextSlide, 5000);      
     function nextSlide() {
         slides[currentSlide].className = 'slide';
         currentSlide = (currentSlide + 1) % slides.length;
         slides[currentSlide].className = 'slide showing';
         console.log(currentSlide);

     }

     function prevSlide() {
         slides[currentSlide].className = 'slide';
         currentSlide = (currentSlide - 1) % slides.length;
         slides[currentSlide].className = 'slide showing';
         console.log(currentSlide);
     }

     btn1.onclick = function(event) {
         slideInterval = prevSlide();
         check();

     }
     btn2.onclick = function(event) {
         slideInterval = nextSlide();
         check();
     }

     function check() {
         if (currentSlide == 0) {             
             document.getElementById('btn1').style.visibility = "hidden";
             document.getElementById('btn2').style.visibility = "visible";
         }
         if (currentSlide == 1) {         	
         	 document.getElementById('btn2').style.visibility = "visible";
             document.getElementById('btn1').style.visibility = "visible";
         }
         if (currentSlide == 2) {
             document.getElementById('btn2').style.visibility = "hidden";
             document.getElementById('btn1').style.visibility = "visible";
         }
     }
 }
