function lyricsShow(){
   
    for(let i=99;i>=0;i--){
        
        if(i>1){
            
            document.querySelector('.lyrics').innerHTML+='<div class="lyric_line row'+i+'">'+i+' bottles of beer on the wall, '+i+' bottles of beer<br>Take one down and pass it around, '+(i-1)+' bottles of beer on the wall</div>';
        } else if(i==1){
            document.querySelector('.lyrics').innerHTML+='<div class="lyric_line row'+i+'">'+i+' bottle of beer on the wall, '+i+' bottle of beer<br>Take one down and pass it around, no more bottles of beer on the wall</div>';
    
        } else {
            document.querySelector('.lyrics').innerHTML+='<div class="lyric_line row'+i+'">No more bottles of beer on the wall, no more bottles of beer<br>Go to the store and buy some more, 99 bottles of beer on the wall</div>';
    
        }
        
    }

    fadeInRows();
}


function fadeInRows(){
     

        for(let i=99;i>=0;i--){
            setTimeout(function() {  

                let rowDiv = document.querySelector('.row'+i);
                rowDiv.classList.add('show');
                
            }, (99 - i) * 100); 
        }

    
}