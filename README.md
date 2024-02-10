# Simple Coffee

Uma única página responsável por realizar a listagem de produtos de uma cafeteria. A exibição das opções é constituída por um card que retorna informações de disponibilidade de estoque, nota do produto, quantidade de avaliações fornecidas, foto, nome e preço. Inclui validações como a exibição de informações de avaliações ainda não fornecidas, exibição da etiqueta de popularidade produto, além do alerta de item fora de estoque. 

## Sumário 
- [Motivação](#motivação)
- [Tecnologias](#tecnologias)
- [Visualização](#visualização)
  
## Motivação

O projeto visaria realizar a testagem prática do conhecimento adquirido do React Pattern chamado de Composition Pattern, que visa resolver a problemática de componentes com muitas propriedades e consequentemente, aumentando a dificuldade de fornecer manutenção e seguir o propósito de permitir que aquela partícula de código possa ser reutilizada em outras partes do sistema. Deste modo, a proposta deste é padrão é dividir o componente problemático em partes menores, que posteriormente poderão ser integradas de acordo com a lógica necessária. A legibilidade do código melhora e com isso, todos os recursos poderão existir sem que exista conflitos de validações diversificadas no componente, aumentando o risco de bugs. Para o desempenho, também existem benefícios considerando que cada componente é um elemento que poderá ser ou não renderizado após as atualizações do Virtual DOM (VDOM) para o Real DOM. Pense assim: se tenho um componente com muitas propriedades, com validações que exigem uma lógica para fazer ou não aparecerem trechos de uma determinada informação, todas as vezes que aquele componente for atualizado mesmo que a lógica impeça o elemento de aparecer, o React deverá fazer a missão de atualizar todo o componente, mesmo considerando as lógicas. Isso é esforcivo além das razões anteriormente comentadas.

Para verificar a reprodução deste padrão poderá conferir no arquivo do componente Card.

## Tecnologias
Com foco na reprodução do padrão, não houve uso de muitos recursos, mas abaixo listarei o utilizado:
- React.js
- Typescript
- Styled-components e Styled-reset (Dependência)
- Axios (Dependência)
- Yarn
- Vite

## Visualização
Poderá realizar a visualização do projeto através deste link [aqui](https://simple-coffee.vercel.app/), como também pode optar por clonar deste projeto. Caso opte por este processo, deverá realizar os passos a seguir:
- Garanta que possui a versão mais recente do Node.js em sua máquina.
- Executar o comando `yarn install`, para obter em sua máquina, todas as dependências utilizadas no projeto.
- Em seguida execute o comando `yarn dev` para que o projeto possa finalmente ser executado. Terá dado tudo certo caso informações sobre o Local (Link da porta onde o projeto está sendo executado), Network e o comando de help aparecerem em seu terminal. Clicando no Link em local ou digitando-o no seu navegador de preferência, poderá fazer com que o projeto seja exibido.

Em caso de alteração que deseje fazer, considere realizar um fork do repositório.
