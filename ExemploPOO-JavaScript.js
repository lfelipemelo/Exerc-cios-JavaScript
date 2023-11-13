// Objetos Materiais

function Carro(modelo, cor, ano) {
    this.modelo = modelo;
    this.cor = cor;
    this.ano = ano;
}

Carro.prototype = {
    ligar: function () {
        console.log("Carro ligado.");
    },
    acelerar: function (velocidade) {
        console.log("Carro acelerando para " + velocidade + " km/h.");
    },
    parar: function () {
        console.log("Carro parado.");
    }
};


const meuCarro = new Carro("Toyota", "Azul", 2022);
meuCarro.ligar();
meuCarro.acelerar(60);
meuCarro.parar();


function Mesa(material, cor, numPernas) {
    this.material = material;
    this.cor = cor;
    this.numPernas = numPernas;
}

Mesa.prototype = {
    adicionarItem: function (item) {
        console.log("Item adicionado à mesa: " + item);
    },
    limpar: function () {
        console.log("Mesa limpa, todos os itens removidos.");
    },
    ajustarAltura: function (altura) {
        console.log("Altura da mesa ajustada para " + altura + " cm.");
    }
};


const minhaMesa = new Mesa("Madeira", "Marrom", 4);
minhaMesa.adicionarItem("Livro");
minhaMesa.ajustarAltura(80);
minhaMesa.limpar();

// Objetos Abstratos
const ideia = {
    descricao: 'Plataforma de educação online',
    impacto: 'Transformar o acesso à educação',
    status: 'Em desenvolvimento',

    definirDescricao: function (novaDescricao) {
        this.descricao = novaDescricao;
        console.log('A descrição da ideia foi definida como: ' + novaDescricao);
    },

    avaliarImpacto: function () {
        console.log('O impacto potencial da ideia é: ' + this.impacto);
    },

    atualizarStatus: function (novoStatus) {
        this.status = novoStatus;
        console.log('O status da ideia foi atualizado para: ' + novoStatus);
    }
};


console.log('A ideia atual é uma ' + ideia.descricao + ' que visa ' + ideia.impacto + '.');
ideia.definirDescricao('Plataforma de aprendizagem colaborativa');
ideia.avaliarImpacto();
ideia.atualizarStatus('Implementada');



const projeto = {
    nome: 'Sistema de Gerenciamento de Tarefas',
    equipe: ['Ana', 'Carlos', 'João'],
    progresso: 20,
  
    adicionarMembro: function(novoMembro) {
      this.equipe.push(novoMembro);
      console.log('Membro ' + novoMembro + ' adicionado à equipe do projeto.');
    },
  
    atualizarProgresso: function(novoProgresso) {
      this.progresso = novoProgresso;
      console.log('O progresso do projeto foi atualizado para ' + novoProgresso + '%.');
    },
  
    avaliarDesempenho: function() {
      console.log('O desempenho da equipe no projeto está sendo avaliado.');
    }
  };
  

  console.log('O projeto atual é: ' + projeto.nome);
  console.log('Equipe do projeto: ' + projeto.equipe.join(', '));
  console.log('Progresso do projeto: ' + projeto.progresso + '%');
  
  projeto.adicionarMembro('Maria');
  projeto.atualizarProgresso(40);
  projeto.avaliarDesempenho();
  