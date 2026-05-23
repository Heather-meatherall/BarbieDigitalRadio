$(document).ready(function() {
    //play
    $('.play').on('click', function() {
        
        $('.active').addClass('is-spinning');
        
        if (active == null)
        {
            x = document.getElementById("demo");
            x.play();
        }
        else
        {
            if(x)
            {
                x.pause();
            }
            cd = active.id;

            if (cd == "cd1")
        {
            x = document.getElementById("dance");
            x.play();
        }
        else if (cd == "cd2")
        {
            x = document.getElementById("rock");
            x.play();
        }
        else if (cd == "cd3")
        {
             x = document.getElementById("hiphop");
            x.play();
        }
        else 
        {
            x = document.getElementById("party");
            x.play();
        }
        }
        
        
        
    });

    //stop
    $('.stop').on('click', function() {
        $('.active').removeClass('is-spinning');
        x.pause();
    });

    //skip forward
    $('#forward').on('click', function() {
        x.currentTime += 10.0;
    });

    //skip backwards
     $('#backward').on('click', function() {
        x.currentTime -= 10.0;
    });

    //repeat
     $('.repeat').on('click', function() {
        x.currentTime = 0;
    });
});


//drag and drop
let cds = document.getElementsByClassName("cd");
let cdPlayer = document.querySelector(".cd-player-inner");
let cdBox = document.querySelector(".cd-box");
let selected = null;
let active = null;

const targets = [cdPlayer, cdBox];

targets.forEach(target => {

    target.addEventListener("dragover", function(e){
            e.preventDefault();
        });
    
    target.addEventListener("drop", function(e){
            e.preventDefault();

            if(selected)
            {
                
                 if(target == cdBox)
                {
                    target.appendChild(selected);
                    active = null;
                    selected.classList.remove('spin');
                    selected.classList.remove('is-spinning');
                    selected.classList.remove('active');
                    selected.classList.add('hover');
                }

                // only lets cd be placed if there's no cd in the player
                else if (target == cdPlayer && !active)
                {
                    target.appendChild(selected);
                    active = selected;
                    selected.classList.add('spin');
                    selected.classList.add('active');
                    selected.classList.remove('hover');
                }
                selected = null;

            }
        });

})

for (cd of cds)
{
    cd.addEventListener("dragstart", function(e){
        selected = e.target;
    })
}

//popup
function popup()
{
  var popup = document.getElementById("popupText");
  popup.classList.toggle("show");
}