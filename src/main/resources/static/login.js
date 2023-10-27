$("#login").click(enviarLogin);

$("#CPF").keyup(function(event){
    if (event.key === "Enter") {
        $("#senha").focus();
    }
});

$("#senha").keyup(function(event){
    if (event.key === "Enter") {
        enviarLogin();
    }
});

function enviarLogin(){
    let CPF = $("#CPF").val();
    let senha = $("#senha").val();

    $.ajax({
        type: "POST",
        url: "/login",
        data:{
            CPF: CPF,
            senha: senha,
        },
        success: function(data){
            if(data){
                window.location.href="/Home";
            }else{
                alert("Erro!");
            }
        },
        error: function(){
            alert("Falha ao tentar realizar o login!");
        }
    });
}