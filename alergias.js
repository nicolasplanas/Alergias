function pontuacaoParaAlergico(alergico) {
    switch(alergico) {
      case "gatos": return 128;
      case "polem": return 64;
      case "chocolate": return 32;
      case "tomates": return 16;
      case "morangos": return 8;
      case "frutos do mar": return 4;
      case "amendoim": return 2;
      case "ovos": return 1;
    }
  }
  
  function alergiasPorPontuacao(pontuacao) {
    const alergias = ["gatos", "polem", "chocolate", "tomates", "morangos", "frutos do mar", "amendoim", "ovos"];
    
    let listaDeAlergias = [];
  
    for (let i = 0; i < alergias.length; i++) {
      let valorAlergia = pontuacaoParaAlergico(alergias[i]);
  
    
      if (pontuacao >= valorAlergia) {
        listaDeAlergias.push(alergias[i]);
        pontuacao -= valorAlergia;
      }
    }
  
    return listaDeAlergias;
  }
  
  let pontuacaoTom = parseInt(prompt("Qual sua pontuação alergica?"));
  let alergiasTom = alergiasPorPontuacao(pontuacaoTom);
  console.log(alergiasTom);  