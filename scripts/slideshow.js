
var slides = new Array();
slides[0] = "../janResumeSite/images/capoeira1.jpg";
slides[1] = "../janResumeSite/images/capoeira2.jpg";
slides[2] = "../janResumeSite/images/capoeira3.jpg";
var currentpic = 0;
var lastpic = slides.length-1;
function nextslide()
{
   
    
        if (currentpic == lastpic)
        {
            
            currentpic = 0;
            document.getElementById("slide").src = slides[currentpic];
            
        }
        else
        {
            
            currentpic++;
            document.getElementById("slide").src = slides[currentpic];
        }
    setTimeout("nextslide()",2500);
}
setTimeout("nextslide()",2500);