

var on=0;

var utilizadores = [
    {nome:'goncalo ', email: 'Hello@hot',password:'acao'},
    {nome:'joao ', email: 'BYEBYE@msn',password:'comedia'},
    {nome:'pedro', email: 'StayStay@gmail',password:'terror'},
    {nome:'a', email: 'b',password:'c'},
    {nome:'e', email: 'f',password:'g'},
];

function getUser(email){

    for(i=0;i<utilizadores.length;i++){
        if(utilizadores[i].email == email){
            return utilizadores[i];
        }
    }
    return null;
}



        
function viewUser(){
    
    
        alert('Ver outro user!:');

        var ema= document.getElementsByClassName('valor')[2].value;
    
    
            user = getUser(ema);

            if(user != null){
                
                    alert('Entrou na pagina de outro User!');


                    var k = document.getElementsByClassName('publish');
                    for(i=0;i<k.length;i++){
                        
                                        k[i].style.display='none';
                        
                                }  

                    var k = document.getElementsByClassName('imagens');
                    for(i=0;i<k.length;i++){
                        
                                        k[i].style.display='none';
                        
                                }  

                    var t = document.getElementsByClassName('div0');
                    for(i=0;i<t.length;i++){
                        
                                        t[i].style.display='none';
                        
                                }
            
                    var h = document.getElementsByClassName('navbar');
                    for(i=0;i<h.length;i++){
                        
                                        h[i].style.display='none';
                        
                                }
            
                
                    var v = document.getElementsByClassName('novo_user');
                    for(i=0;i<v.length;i++){
                        
                                        v[i].style.display='block';
                        
                                }                              

                    return 1;
                
            }
            else{
                alert('Email de outro user errado!');
            
            }
            

    
    }


function signUpClick() {


        var x = document.getElementsByClassName('lol');

        for(i=0;i<x.length;i++){

                x[i].style.display='block';

        }

    }


    var butto= document.querySelectorAll(".radio-inline");
    butto[0].addEventListener("click",signUpClick);

    butto[1].addEventListener("click",function loginClick() {
        
        
                var x = document.getElementsByClassName('lol');
        
                for(i=0;i<x.length;i++){
        
                        x[i].style.display='none';
        
                }

            });


    function inpu(){
        
                var ema= document.getElementsByClassName('valor')[0].value;
                var pass= document.getElementsByClassName('valor')[1].value;
 
        
                user = getUser(ema);
                if(user != null){
                    p=user.password;
                    if(p==pass){
                        alert('Entrou na aplicação!');
                        
                        var y = document.getElementsByClassName('navbar');
                        for(i=0;i<y.length;i++){
                            
                                            y[i].style.display='none';
                            
                                    }
                
                        var z = document.getElementsByClassName('div0');
                        for(i=0;i<z.length;i++){
                            
                                            z[i].style.display='none';
                            
                                    }
                                   
                        var w = document.getElementsByClassName('perfil_user');
                        for(i=0;i<w.length;i++){
                            
                                            w[i].style.display='block';
                            
                                    }  
                        on=1;
                        return 1;
                    }
                }
                else{
                    alert('Log in recusado!');
                
                }
        
        
            }


function log_out(){

    var y = document.getElementsByClassName('navbar');
    for(i=0;i<y.length;i++){
        
                        y[i].style.display='block';
        
                }

    var z = document.getElementsByClassName('div0');
    for(i=0;i<z.length;i++){
        
                        z[i].style.display='block';
        
                }
               
    var w = document.getElementsByClassName('perfil_user');
    for(i=0;i<w.length;i++){
        
                        w[i].style.display='none';
        
                }  
    var v = document.getElementsByClassName('novo_user');
    for(i=0;i<v.length;i++){
        
                        v[i].style.display='none';
        
                }      

}


function my_profile(){

    var k = document.getElementsByClassName('publish');
    for(i=0;i<k.length;i++){
        
                        k[i].style.display='block';
        
                }  
    
    var k = document.getElementsByClassName('imagens');
    for(i=0;i<k.length;i++){
        
                        k[i].style.display='block';
        
                }  
    
    var t = document.getElementsByClassName('div0');
    for(i=0;i<t.length;i++){
        
                        t[i].style.display='none';
        
                }
    
    var h = document.getElementsByClassName('navbar');
    for(i=0;i<h.length;i++){
        
                        h[i].style.display='none';
        
                }
    
    
    var v = document.getElementsByClassName('novo_user');
    for(i=0;i<v.length;i++){
        
                        v[i].style.display='none';
        
                }      

}

    var log_ou= document.querySelectorAll(".logout");

    log_ou[0].addEventListener("click",log_out);




    var my_profi= document.querySelectorAll(".myprofile");
    
    my_profi[0].addEventListener("click",my_profile);




    var inp= document.querySelectorAll(".submite");

    inp[0].addEventListener("click",inpu);


    index = 0;
    
        function follow_new(){
       
            var textBox = document.getElementById("text");
            textBox.value = index;
     
            index=index+1;
            console.log(index);
    
        }
    
    var submi= document.querySelectorAll(".follow");

    submi[0].addEventListener("click",follow_new);


    var but= document.querySelectorAll(".search_but");
    but[0].addEventListener("click",viewUser);

  
     