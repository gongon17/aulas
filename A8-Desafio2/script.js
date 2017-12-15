

var on=0;

var utilizadores = [
    {nome:'goncalo ', email: 'Hello@hot',password:'acao'},
    {nome:'joao ', email: 'BYEBYE@msn',password:'comedia'},
    {nome:'pedro', email: 'StayStay@gmail',password:'terror'},
    {nome:'a', email: 'b',password:'c'},

];

function getUser(email){

    for(i=0;i<utilizadores.length;i++){
        if(utilizadores[i].email == email){
            return utilizadores[i];
        }
    }
    return null;
}


function logIn(){
        
        
            alert('Log in!:');
            if(on==1){
                
                alert('Log in recusado por já se encontrar um user Logged in!');
            }
        
            else{
        
        
                var ema =prompt('Introduza o email:');
                var pass =prompt('Introduza a password:');
        
                user = getUser(ema);
                if(user != null){
                    p=user.password;
                    if(p==pass){
                        alert('Entrou na aplicação!');
                        on=1;
                        return 1;
                    }
                }
                else{
                    alert('Log in recusado!');
                
                }
                
            }
      
        
        }



        function viewUser(){
            
            
                alert('Ver outro user!:');
      
            
            
                    var ema =prompt('Introduza o email:');
                 
            
                    user = getUser(ema);
                    if(user != null){
                       
                            alert('Entrou na pagina de outro User!');
        

                            var k = document.getElementsByClassName('perfil_user');
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
                        alert('Email de outro use errado!');
                    
                    }
                    
      
            
            }







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




    if(logIn()==1){

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


                    
    }
   

    var but= document.querySelectorAll(".search_but");
    but[0].addEventListener("click",viewUser);

  


        // var emai= document.getElementsByClassName('valor')[0].value;
    
        // var emai= document.querySelector('.valor').value;

        // console.log(emai);
        
        // var element = document.querySelector("#exampleInputEmail1");        
        
        // console.log(element.value);
        
        

    
        
        
       







     