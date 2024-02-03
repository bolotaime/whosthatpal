// Lista de URLs das imagens
const listaDeImagens = [
  'resizerd/anubis-image.png',
  'resizerd/arsox-image.png',
  'resizerd/astegon-image.png',
  'resizerd/azurobe-image.png',
  'resizerd/beakon-image.png',
  'resizerd/beegarde-image.png',
  'resizerd/blazamut-image.png',
  'resizerd/blazehowl-image.png',
  'resizerd/bristla-image.png',
  'resizerd/broncherry-image.png',
  'resizerd/bushi-image.png',
  'resizerd/caprity-image.png',
  'resizerd/cattiva-image.png',
  'resizerd/cawgnito-image.png',
  'resizerd/celaray-image.png',
  'resizerd/chikipi-image.png',
  'resizerd/chillet-image.png',
  'resizerd/cinnamoth-image.png',
  'resizerd/cremis-image.png',
  'resizerd/cryolinx-image.png',
  'resizerd/daedream-image.png',
  'resizerd/dazzi-image.png',
  'resizerd/depresso-image.png',
  'resizerd/digtoise-image.png',
  'resizerd/dinossom-image.png',
  'resizerd/direhowl-image.png',
  'resizerd/dumud-image.png',
  'resizerd/eikthyrdeer-image.png',
  'resizerd/elizabee-image.png',
  'resizerd/elphidran-image.png',
  'resizerd/faleris-image.png',
  'resizerd/felbat-image.png',
  'resizerd/fenglope-image.png',
  'resizerd/flambelle-image.png',
  'resizerd/flopie-image.png',
  'resizerd/foxparks-image.png',
  'resizerd/frostallion-image.png',
  'resizerd/fuack-image.png',
  'resizerd/fuddler-image.png',
  'resizerd/galeclaw-image.png',
  'resizerd/gobfin-image.png',
  'resizerd/gorirat-image.png',
  'resizerd/grintale-image.png',
  'resizerd/grizzbolt-image.png',
  'resizerd/gumoss-image.png',
  'resizerd/hangyu-image.png',
  'resizerd/helzephyr-image.png',
  'resizerd/hoocrates-image.png',
  'resizerd/incineram-image.png',
  'resizerd/incineram-noct-image.png',
  'resizerd/jetragon-image.png',
  'resizerd/jolthog-image.png',
  'resizerd/jormuntide-image.png',
  'resizerd/katress-image.png',
  'resizerd/kelpsea-image.png',
  'resizerd/killamari-image.png',
  'resizerd/kingpaca-image.png',
  'resizerd/kitsun-image.png',
  'resizerd/lamball-image.png',
  'resizerd/leezpunk-image.png',
  'resizerd/lifmunk-image.png',
  'resizerd/loupmoon-image.png',
  'resizerd/lovander-image.png',
  'resizerd/lunaris-image.png',
  'resizerd/lyleen-image.png',
  'resizerd/mammorest-image.png',
  'resizerd/maraith-image.png',
  'resizerd/mau-image.png',
  'resizerd/menasting-image.png',
  'resizerd/mossanda-image.png',
  'resizerd/mossanda-lux-image.png',
  'resizerd/mozzarina-image.png',
  'resizerd/necromus-image.png',
  'resizerd/nitewing-image.png',
  'resizerd/nox-image.png',
  'resizerd/orserk-image.png',
  'resizerd/paladius-image.png',
  'resizerd/pengullet-image.png',
  'resizerd/penking-image.png',
  'resizerd/petallia-image.png',
  'resizerd/pyrin-image.png',
  'resizerd/quivern-image.png',
  'resizerd/ragnahawk-image.png',
  'resizerd/rayhound-image.png',
  'resizerd/reindrix-image.png',
  'resizerd/relaxaurus-image.png',
  'resizerd/relaxsaurus-lux-image.png',
  'resizerd/reptyro-image.png',
  'resizerd/ribbuny-image.png',
  'resizerd/robinquill-image.png',
  'resizerd/rooby-image.png',
  'resizerd/rushoar-image.png',
  'resizerd/shadowbeak-image.png',
  'resizerd/sibelyx-image.png',
  'resizerd/sparkit-image.png',
  'resizerd/surfent-image.png',
  'resizerd/suzaku-aqua-image.png',
  'resizerd/suzaku-image.png',
  'resizerd/swee-image.png',
  'resizerd/sweepa-image.png',
  'resizerd/tanzee-image.png',
  'resizerd/teafant-image.png',
  'resizerd/tocotoco-image.png',
  'resizerd/tombat-image.png',
  'resizerd/univolt-image.png',
  'resizerd/vaelet-image.png',
  'resizerd/vanwyrm-image.png',
  'resizerd/verdash-image.png',
  'resizerd/vixy-image.png',
  'resizerd/warsect-image.png',
  'resizerd/wixen-image.png',
  'resizerd/woolipop-image.png',
  'resizerd/wumpo-botan-image.png',
    // Adicione mais URLs conforme necessário
  ];
  
  // Função para escolher aleatoriamente uma imagem da lista
  function escolherImagemAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * listaDeImagens.length);
    const imagemEscolhida = listaDeImagens[indiceAleatorio];
    return imagemEscolhida;
  }
  
  function changePalImg(){
    const imagemAleatoria = escolherImagemAleatoria();
    const imagemElement = document.getElementById('suaImagem');
    imagemElement.src = imagemAleatoria;
    imagemElement.className = "palImage";
    document.getElementById("answerPrompt").className = "answerPromptHidden";
    document.getElementById("tryAgainBox").className = "tryAgainBoxHidden";
  }  

  function verifyPalGuessed(){
    let answer = document.getElementById("answer").value;
    let pathPal = document.getElementById("suaImagem").src;
    let correctAnswer = pathPal.substring(pathPal.indexOf("resizerd/")+9,pathPal.indexOf("-image.png"));
    
    console.log(answer);   
    console.log(pathPal);
    console.log(correctAnswer);

    if(answer.toLocaleLowerCase() == correctAnswer.toLocaleLowerCase()){
      document.getElementById("suaImagem").className = "palImageCorrect";
      document.getElementById("answerPrompt").className = "answerPromptCorrect";
      document.getElementById("answerPrompt").innerHTML = "ACERTÔ MISERÁVI";
      document.getElementById("tryAgainBox").className = "tryAgainBoxShow";

    }else{
      document.getElementById("answerPrompt").className = "asnwerPromptWrong";
      document.getElementById("answerPrompt").innerHTML = "BURRO DÁ ZERO PRA ELU";      
    }

    document.getElementById("answer").value = "";
  }

  // Exemplo de como usar a imagem aleatória ao carregar a página
  document.addEventListener('DOMContentLoaded', function () {
    const imagemAleatoria = escolherImagemAleatoria();
    const imagemElement = document.getElementById('suaImagem'); // Substitua 'suaImagem' pelo ID do elemento de imagem em seu HTML
    imagemElement.src = imagemAleatoria;
    document.getElementById("answer").value = "";

    var answerInput = document.getElementById("answer");
    console.log(answerInput);
    answerInput.addEventListener("keypress", function(event) {    
      if (event.key === "Enter") {
        event.preventDefault();      
        document.getElementById("btnTry").click();
      }
    }); 
  });