





function signUpClick() {


        var x = document.getElementsByClassName('lol');

        for(i=0;i<x.length;i++){

                x[i].style.display='block';

        }

    }



    function loginClick() {
        
        
                var x = document.getElementsByClassName('lol');
        
                for(i=0;i<x.length;i++){
        
                        x[i].style.display='none';
        
                }

            }

    var butto= document.querySelectorAll(".radio-inline");
    butto[0].addEventListener("click",signUpClick);

    butto[1].addEventListener("click",loginClick);





        
        
        
       







     