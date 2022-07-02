let lista

emailLogado = JSON.parse(localStorage.getItem("UsuarioLogado"))

pessoasCadastradas_array = JSON.parse(localStorage.getItem("Cadastros"))

for (let i = 0; i < pessoasCadastradas_array.length; i++) {

    if (emailLogado == pessoasCadastradas_array[i].email) {



        lista = "Nome: " + pessoasCadastradas_array[i].nome + "<br>" + "<br>" + "Email : " + pessoasCadastradas_array[i].email + "<br>" + "<br>" + "Senha: " + pessoasCadastradas_array[i].senha + "<br>" + "<br>" + "Data de nascimento : " + pessoasCadastradas_array[i].datanascimento
    } else {}

}
document.getElementById("infouser").innerHTML = "<h2> INFORMAÇÕES PESSOAIS: </h2>" + lista







function alterarSenha() {

    let senha = document.getElementById("senha")
    let confirmaSenha = document.getElementById("confirmaSenha")

    if (senha.value != confirmaSenha.value) {
        alert("As senhas nao coincidem")

    } else if (senha.value === "" || confirmaSenha.value === "") {
        alert("Preencha todos os campos!")
    } else {

        for (let i = 0; i < pessoasCadastradas_array.length; i++) {

            if (emailLogado == pessoasCadastradas_array[i].email) {

                pessoasCadastradas_array = JSON.parse(localStorage.getItem("Cadastros"))

                pessoasCadastradas_array[i].senha = confirmaSenha.value

                localStorage.setItem("Cadastros", JSON.stringify(pessoasCadastradas_array))

                lista = "Nome: " + pessoasCadastradas_array[i].nome + "<br>" + "<br>" + "Email : " + pessoasCadastradas_array[i].email + "<br>" + "<br>" + "Senha: " + pessoasCadastradas_array[i].senha + "<br>" + "<br>" + "Data de nascimento : " + pessoasCadastradas_array[i].datanascimento

                document.getElementById("infouser").innerHTML = "<h2> INFORMAÇÕES PESSOAIS: </h2>" + lista
            } else {}
        }
        modalAltera.style.display = "none"

        swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Senha alterada!',
            showConfirmButton: false,
            timer: 2500,
        })




    }
}


function deletarConta() {

    pessoasCadastradas_array = JSON.parse(localStorage.getItem("Cadastros"))

    for (let i = 0; i < pessoasCadastradas_array.length; i++) {

        if (emailLogado == pessoasCadastradas_array[i].email) {

            pessoasCadastradas_array.splice(i, 1)

            localStorage.setItem("Cadastros", JSON.stringify(pessoasCadastradas_array))

            window.location.replace("../TelaLogin/TELADELOGIN/index.html")
        } else {}



    }
}

let modalAltera = document.getElementById("modalAltera")


function abrirModal() {

    modalAltera.style.display = "block"

    if (modalAltera === "none") {

        modalAltera === "block"


    }


}

function fecharModal() {

    modalAltera.style.display = "none"



}


function temCerteza() {
    Swal.fire({
        title: 'Tem certeza?',
        text: "Todo progresso sera perdido!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'rgb(131, 163, 112)',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, Deletar meta!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deletada!',
                'Sua conta foi deletada com sucesso!',
                'success'
            )
            deletarConta()
        }
    })
}