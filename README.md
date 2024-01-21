# Jogo do Número Secreto

Este código implementa um simples jogo do número secreto em JavaScript, destinado a ensinar conceitos básicos de lógica de programação, faz parte do curso de lógica de programação do programa Oracle Next Education. Aqui estão os principais elementos do código:

## Funções Principais

1. `exibirTextoNaTela(tag, texto)`

   - **Descrição:** Atualiza o conteúdo de um elemento HTML com o ID especificado (passado como parâmetro `tag`) com o texto fornecido.
   - **Uso:** Utilizado para exibir mensagens na tela do jogo.

2. `exibirMensagemInicial()`

   - **Descrição:** Chama `exibirTextoNaTela` para mostrar a mensagem inicial do jogo.
   - **Uso:** Inicia o jogo com a mensagem de boas-vindas.

3. `verificarChute()`

   - **Descrição:** Verifica se o número inserido pelo usuário é igual ao número secreto gerado aleatoriamente. Exibe mensagens informando se o número é maior ou menor.
   - **Uso:** Lida com a lógica principal do jogo.

4. `gerarNumeroAleatorio()`

   - **Descrição:** Gera um número aleatório que não tenha sido sorteado anteriormente. A lista `listaDeNumerosSorteados` é usada para evitar repetições.
   - **Uso:** Gera o número secreto do jogo.

5. `limparCampo()`

   - **Descrição:** Limpa o campo de entrada de texto após cada tentativa.
   - **Uso:** Melhora a experiência do usuário, deixando o campo pronto para a próxima tentativa.

6. `reiniciarJogo()`

   - **Descrição:** Reinicia o jogo, gerando um novo número secreto, resetando as tentativas e exibindo a mensagem inicial.
   - **Uso:** Permite reiniciar o jogo após uma rodada.

## Outros Elementos

- **Variáveis:** `listaDeNumerosSorteados`, `numeroLimite`, `numeroSecreto`, e `tentativas` são variáveis importantes para o funcionamento do jogo.

- **HTML e CSS:** Elementos HTML como `h1`, `p`, e `input` são manipulados para exibir informações e receber entradas do usuário. O CSS pode ser usado para estilizar esses elementos.

- **Integração de Voz:** A função `responsiveVoice.speak` é utilizada para fornecer uma experiência auditiva ao jogador.

O código combina conceitos como manipulação do DOM (Document Object Model), controle de fluxo com `if-else`, loops recursivos, e manipulação de arrays. Além disso, aborda interações do usuário e feedback visual e auditivo para uma experiência interativa.

## Desafios

Além do código principal, esta trilha de conhecimento inclui diversos desafios. Fique à vontade para explorar os arquivos deste repositório e se envolver com esses desafios adicionais.