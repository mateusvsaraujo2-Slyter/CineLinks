# Uso de Inteligência Artificial

## Ferramenta utilizada

Durante o projeto utilizei o ChatGPT como ferramenta de apoio ao aprendizado e à resolução de problemas.

## Prompts relevantes utilizados

### Exemplo 1 — alinhamento dos pôsteres

Prompt:
"Os pôsteres dos filmes estão desalinhados, como corrigir isso?"

Resposta aproveitada:
Foi sugerido utilizar alturas consistentes nos elementos do card e definir uma altura fixa para as imagens.

Implementação:
Ajustei os cards e as imagens utilizando propriedades como `grid-template-rows`, `height` e `object-fit`.

Verificação:
Testei a página no navegador em diferentes larguras e confirmei visualmente que os pôsteres passaram a iniciar na mesma altura.

### Exemplo 2 — tema claro e escuro

Prompt:
"Quero fazer o botão de tema funcionar e salvar o tema escolhido."

Resposta aproveitada:
Foi sugerido utilizar `classList.toggle()` para alternar a classe `tema-claro` e `localStorage` para guardar a escolha.

Implementação:
Foi criado o código JavaScript responsável por alternar o tema e salvar os valores `claro` e `escuro`.

Verificação:
Testei a troca de tema, atualizei a página com F5 e confirmei que a preferência permanecia salva.

### Exemplo 3 — responsividade

Prompt:
"Minha página está cortando conteúdo no celular. Como ajustar a responsividade?"

Resposta aproveitada:
Foram sugeridos breakpoints com `@media`, alterações de Grid/Flexbox e reorganização dos elementos.

Verificação:
Utilizei o modo responsivo do DevTools e testei diferentes larguras de tela.

## Respostas rejeitadas ou corrigidas

Nem todas as sugestões da IA foram aplicadas diretamente.

Durante o desenvolvimento foi sugerida a implementação de um carrossel para os filmes. Após testes, o comportamento apresentou problemas de posicionamento, rolagem e responsividade. A solução foi removida e o projeto voltou a utilizar cinco cards fixos alinhados em Grid.

Também ocorreram situações em que regras CSS sugeridas não resolveram imediatamente o alinhamento dos pôsteres. Essas regras foram revisadas e ajustadas após testes no DevTools.

Em outro momento, o botão de tema não funcionava porque a variável foi declarada como `botaotema`, mas utilizada posteriormente como `botaoTema`. O erro foi identificado e corrigido após a revisão do JavaScript.

## Partes implementadas com apoio da IA

A IA auxiliou principalmente em:

- Ajustes de responsividade;
- Alinhamento dos cards e pôsteres;
- Implementação do tema claro e escuro;
- Uso de `localStorage`;
- Identificação de erros em HTML, CSS e JavaScript;
- Revisão da estrutura semântica do HTML;
- Organização do README;
- Orientação sobre Git e GitHub.

## Aprendizados obtidos

Durante o processo aprendi a:

- Diferenciar `id` e `class`;
- Utilizar Flexbox e Grid;
- Entender o funcionamento de `@media`;
- Manipular classes com JavaScript;
- Trabalhar com eventos de clique;
- Utilizar `localStorage`;
- Inspecionar elementos pelo DevTools;
- Identificar conflitos entre regras CSS;
- Utilizar Git para versionar e publicar alterações.