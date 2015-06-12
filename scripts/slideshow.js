var slides = new Array();
slides[0]= "capoeira1.jpg";
slides[1]= "capoeira2.jpg";
slides[2]= "capoeira3.jpg";
var currentpic = 0;
var lastpic = images.length-1;
function nextslide()
{
    
    if (currentpic == lastpic)
    {
        currentpic = 0;
        document.getElementById('card').src = images[currentpic];
    }
    else
    {
        currentpic++;
        document.getElementById('card').src = images[currentpic];
    }
}
