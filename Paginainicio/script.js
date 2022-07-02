let menuConfigss = document.getElementById("menuConfigss")


function mostrarConfigs()

{

    if (menuConfigss.style.display === "none") {

        menuConfigss.style.display = "block"

    } else {

        menuConfigss.style.display = "none"

    }


}


var modal = document.getElementById("opcMetas");


var btn = document.getElementById("idAdd");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}






const img = document.getElementById("Addfoto");
const file = document.getElementById("file");
const imgProduto = document.getElementById("fotoProduto");
const uploadBtn = document.getElementById("uploadBtn");



file.addEventListener("change", function() {


    const choosedFile = this.files[0];

    if (choosedFile) {
        const reader = new FileReader();


        reader.addEventListener("load", function() {

            img.setAttribute('src', reader.result);
        });
        reader.readAsDataURL(choosedFile);

    }

})

file.addEventListener("change", function() {


    const choosedFile = this.files[0];

    if (choosedFile) {
        const reader = new FileReader();


        reader.addEventListener("load", function() {

            imgProduto.setAttribute('src', reader.result);
        });
        reader.readAsDataURL(choosedFile);

    }

})
















let addProduto = document.getElementById("adicionarProduto")
let addPrecoProduto = document.getElementById("adicionarPreçoProduto")
let addSiteProduto = document.getElementById("siteProduto")
let produtosCadastro_array = []


function criaMeta() {



    let produtosAdd = {
        nomeProduto: '',
        preçoProduto: '',
        siteProduto: '',
        imgProduto: ''


    }



    produtosAdd.nomeProduto = addProduto.value
    produtosAdd.preçoProduto = addPrecoProduto.value
    produtosAdd.siteProduto = addSiteProduto.value
    produtosAdd.imgProduto = img.src

    console.log(img)



    produtosCadastro_array.push(produtosAdd)


    if (addProduto.value === "" || addPrecoProduto.value === "" || addSiteProduto.value === "") {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Algo deu errado',
            showConfirmButton: false,
            timer: 2500,

        })

    } else {

        localStorage.setItem('MetaCriada', JSON.stringify(produtosCadastro_array))



        const IconAdd = document.getElementById("idAdd")
        const BarraPro = document.getElementById("Progress_Status")
        const textoMeta = document.getElementById("Textodametacriada")
        const botaoLink = document.getElementById("linkUsuario")
        const fotoProduto = document.getElementById("fotoProduto")
        const monstrarNome = document.getElementById("mostrarNome")
        const monstrarPreco = document.getElementById("mostrarPreco")


        const alteraMetaBtn = document.getElementById("alteraMetaBtn")

        const btnExcluiMeta = document.getElementById("btnExcluiMeta")





        modal.style.display = "none"
        IconAdd.style.display = "none"
        BarraPro.style.display = "block"
        botaoLink.style.display = "block"
        fotoProduto.style.display = "block"
        alteraMetaBtn.style.display = "block"
        excluirMeta.style.display = "block"
        btnExcluiMeta.style.display = "block"

        if (monstrarNome.style.display = "none") {
            monstrarNome.style.display = "block"

        } else {}

        if (monstrarPreco.style.display = "none") {
            monstrarPreco.style.display = "block"

        } else {}

        
        monstrarNome.innerHTML = produtosAdd.nomeProduto
        monstrarPreco.innerHTML = `${produtosAdd.preçoProduto} R$`


        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Produto Cadastrado',
            showConfirmButton: false,
            timer: 2500,
        })



        function abrirLink() {
            window.location.href(siteProduto)

        }





    }



}



function alteraMeta() {


    const alterarAsMeta = document.getElementById("alterarAsMeta")


    alterarAsMeta.style.display = "block"


}

function fecharModalAlterar() {

    const fecharModalAlterar = document.getElementById("fecharModalAlterar")


    alterarAsMeta.style.display = "none"

}







let AlteraNomeMeta = document.getElementById("AlteraNomeMeta")
let AlteraValorMeta = document.getElementById("AlteraValorMeta")
let AlteraLinkMeta = document.getElementById("AlteraLinkMeta")


function EnviarAlterarMeta() {

    if (AlteraNomeMeta.value === "" || AlteraValorMeta.value === "" || AlteraLinkMeta.value === "") {

        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Algo deu errado!',
            showConfirmButton: false,
            timer: 2500,

        })





    } else {

        produtosCadastro_array = JSON.parse(localStorage.getItem("MetaCriada"))

        console.log(produtosCadastro_array)

        for (i = 0; i < produtosCadastro_array.length; i++) {
            console.log("oi")
            produtosCadastro_array[i].nomeProduto = AlteraNomeMeta.value
            produtosCadastro_array[i].preçoProduto = AlteraValorMeta.value
            produtosCadastro_array[i].siteProduto = AlteraLinkMeta.value
        }


        localStorage.setItem("MetaCriada", JSON.stringify(produtosCadastro_array))

        const monstrarNome = document.getElementById("mostrarNome").innerHTML = AlteraNomeMeta.value
        const monstrarPreco = document.getElementById("mostrarPreco").innerHTML = `${AlteraValorMeta.value} R$`

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Meta Alterada!',
            showConfirmButton: false,
            timer: 2500,

        })

        alterarAsMeta.style.display = "none"
    }




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
                'Sua meta foi deletada com sucesso!',
                'success'
            )
            deletarMeta()
        }
    })




}






function deletarMeta() {


    const IconAdd = document.getElementById("idAdd")
    const BarraPro = document.getElementById("Progress_Status")
    const textoMeta = document.getElementById("Textodametacriada")
    const botaoLink = document.getElementById("linkUsuario")
    const fotoProduto = document.getElementById("fotoProduto")
    const monstrarNome = document.getElementById("mostrarNome")
    const monstrarPreco = document.getElementById("mostrarPreco")

    const excluirMeta = document.getElementById("excluirMeta")




    produtosCadastro_array = JSON.parse(localStorage.getItem("MetaCriada"))

    produtosCadastro_array.splice(0, 1)

    localStorage.setItem("MetaCriada", JSON.stringify(produtosCadastro_array))

    modal.style.display = "none"
    IconAdd.style.display = "block"
    BarraPro.style.display = "none"
    botaoLink.style.display = "none"
    fotoProduto.style.display = "none"
    alteraMetaBtn.style.display = "none"
    monstrarNome.style.display = "none"
    monstrarPreco.style.display = "none"
    excluirMeta.style.display = "none"
    btnExcluiMeta.style.display = "none"


    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Meta Excluida!',
        showConfirmButton: false,
        timer: 2500,

    })




}
