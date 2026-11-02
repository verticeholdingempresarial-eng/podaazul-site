// Poda Azul — menu do celular e formulário que abre o WhatsApp
(function () {
  var botao = document.querySelector('.menu-botao');
  var menu = document.getElementById('menu');
  if (botao && menu) {
    botao.addEventListener('click', function () {
      var aberto = menu.classList.toggle('aberto');
      botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });
  }

  var form = document.getElementById('form-orcamento');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = function (id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; };
      var linhas = [
        'Olá, gostaria de um orçamento para poda de árvores.',
        'Nome: ' + v('nome'),
        'Cidade: ' + v('cidade'),
        'Serviço: ' + v('servico')
      ];
      if (v('mensagem')) linhas.push('Detalhes: ' + v('mensagem'));
      var url = 'https://wa.me/5522992194367?text=' + encodeURIComponent(linhas.join('\n'));
      window.open(url, '_blank', 'noopener');
    });
  }

  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
