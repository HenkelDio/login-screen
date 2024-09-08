function mostrarvalor(){
    const usuario= document.getElementById('usuario').value
    const senha=document.getElementById('senha').value
    
    if(usuario=== 'Daniel' && senha=== 'daniel123'){
        alert('Usuario logado')
    }
    else{
        alert('ERRO')
    }
}