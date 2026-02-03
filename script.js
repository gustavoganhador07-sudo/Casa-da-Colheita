function verifica(){
    let nome_usuario, senha_usuario;
    nome_usuario = document.getElementById('tipoUsuario').value;
    senha_usuario = document.getElementById('senha').value;


    if (nome_usuario === "") {
        alert("escolha um usuario.");
    }
    else if (nome_usuario === "vendas" && senha_usuario === "123"){
        alert("voçe sera direcionado para pagina vendas");
        window.location.href = "vendas.html";
    }
    else if (nome_usuario === "estoque" &&  senha_usuario ==="234"){
        alert("voçe sera direcionado para pagina estoque");
        window.location.href = "estoque.html";
    }
    else if (nome_usuario === "administrativo" &&  senha_usuario === "456"){
        alert("voçe sera direcionado para pagina administrativa");
        window.location.href = "administrativo.html";
    }
    else{
        alert("usuario ou senha incorretos. tente novamente.");
    }

}