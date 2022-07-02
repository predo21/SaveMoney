function monstrarSenha() {

    var y = document.getElementById("hide1")
    var z = document.getElementById("hide2")

    if (senha.type == "password") {
        senha.type = "text"
        y.style.display = "block"
        z.style.display = "none"
    } else {
        senha.type = "password"
        y.style.display = "none"
        z.style.display = "block"

    }
}

function monstrarSenhaCadastro() {

    var o = document.getElementById("hide1Cad")
    var p = document.getElementById("hide2Cad")

    if (senhaCadastro.type == "password") {
        senhaCadastro.type = "text"
        o.style.display = "block"
        p.style.display = "none"
    } else {
        senhaCadastro.type = "password"
        o.style.display = "none"
        p.style.display = "block"

    }
}

function monstrarSenhaCadastroConfirmar() {

    var m = document.getElementById("hide3Cad")
    var n = document.getElementById("hide4Cad")

    if (ConfirmarSenhaCadastro.type == "password") {
        ConfirmarSenhaCadastro.type = "text"
        m.style.display = "block"
        n.style.display = "none"
    } else {
        ConfirmarSenhaCadastro.type = "password"
        m.style.display = "none"
        n.style.display = "block"

    }
}


































let nomeCadastro = document.getElementById("nomeCadastro")
let senhaCadastro = document.getElementById("senhaCadastro")
let ConfirmarSenhaCadastro = document.getElementById("ConfirmarSenhaCadastro")
let EmailCadastrado = document.getElementById("emailCadastro")
let dataNascimento = document.getElementById("dataNascimento")
let pessoasCadastradas_array = []
let arrayCadastro = []
    // var emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
let objeto = []
let UsuarioLogado = []








function cadastro() {

    pessoasCadastradas_array = JSON.parse(localStorage.getItem("Cadastros"))

    if (pessoasCadastradas_array === null) {
        pessoasCadastradas_array = []

        enviarCadastro()

    } else {
        enviarCadastro()

    }





}

function enviarCadastro() {

    var cadastro = {
        nome: '',
        email: '',
        senha: '',
        datanascimento: ''
    }

    cadastro.nome = nomeCadastro.value
    cadastro.email = EmailCadastrado.value
    cadastro.senha = senhaCadastro.value
    cadastro.datanascimento = dataNascimento.value



    objeto.push(cadastro)

    if (nomeCadastro.value === "") {
        nomeCadastro.style.backgroundColor = "#cf4a4a"
    } else {
        nomeCadastro.style.backgroundColor = "#f2f2f2"

    }

    if (senhaCadastro.value === "") {
        senhaCadastro.style.backgroundColor = "#cf4a4a"
    } else {
        senhaCadastro.style.backgroundColor = "#f2f2f2"

    }

    if (ConfirmarSenhaCadastro.value === "") {

        ConfirmarSenhaCadastro.style.backgroundColor = "#cf4a4a"
    } else {
        ConfirmarSenhaCadastro.style.backgroundColor = "#f2f2f2"

    }

    if (EmailCadastrado.value === "") {

        EmailCadastrado.style.backgroundColor = "#cf4a4a"
    } else {
        EmailCadastrado.style.backgroundColor = "#f2f2f2"

    }


    if (senhaCadastro.value != ConfirmarSenhaCadastro.value) {

        ConfirmarSenhaCadastro.style.backgroundColor = "#cf4a4a"

    } else {
        ConfirmarSenhaCadastro.style.backgroundColor = "#f2f2f2"
        senhaCadastro.style.backgroundColor = "#f2f2f2"

    }





    if (nomeCadastro.value === "" || senhaCadastro.value === "" || ConfirmarSenhaCadastro.value === "" || EmailCadastrado.value === "" || dataNascimento.value === "" || senhaCadastro.value != ConfirmarSenhaCadastro.value)

    {

        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Erro no cadastro, Verifique os campos abaixo!',
            showConfirmButton: false,
            timer: 2500,
        })

    } else {

        pessoasCadastradas_array.push(cadastro)

        localStorage.setItem('Cadastros', JSON.stringify(pessoasCadastradas_array))

        nomeCadastro.value = ""
        senhaCadastro.value = ""
        ConfirmarSenhaCadastro.value = ""
        EmailCadastrado.value = ""
        dataNascimento.value = ""
        Number(nomeCadastro.value = "")



        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cadastro concluido!',
            showConfirmButton: false,
            timer: 2500,
        })







    }


}



function enviarLogin() {
    let Email = document.getElementById("emailUsuario")
    let Senha = document.getElementById("senha")


    var pegarLogins = []

    pegarLogins = JSON.parse(localStorage.getItem('Cadastros'))


    if (Email.value === "" || Senha.value === "") {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Erro no login!',
            showConfirmButton: false,
            timer: 2500,
        })


    } else {
        var ponto = 0

        for (i = 0; i < pegarLogins.length; i++) {
            if (pegarLogins[i].email == Email.value && pegarLogins[i].senha == Senha.value) {

                UsuarioLogado.push(Email.value)

                localStorage.setItem('UsuarioLogado', JSON.stringify(UsuarioLogado))

                window.location.replace("../../Paginainicio/index.html")




            } else {
                ponto += 1

                if (ponto == pegarLogins.length) {

                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Erro no login, Verifique se você digitou corretamente!',
                        showConfirmButton: false,
                        timer: 2500,
                    })


                }
            }
        }

    }
}