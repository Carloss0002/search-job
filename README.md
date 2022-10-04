# Search Jobs

![jobs_search](https://user-images.githubusercontent.com/93801199/193842675-03005c6e-c875-49a5-b387-4a96c5e58c0c.jpg)

## Sobre

<p>
  App criado com base na adzuna api, onde o usuário poderá procurar por informações sobre determinado trabalho.
</p>
<p>
  Na aplicação temos a busca de determinado trabalho por titulo, podendo também pesquisar por determinado estado e país, mas pela limitação de requisição preferir não acrescentar mudança de page.
</p>
<p>
  E graças a limitação da api preferir usar o useCallback para ajudar no desempenho da página, a requisição inicial e com useEffect, mas para não desperdiçar requisições o useCallback foi escolhido, ele retorna uma função em 'cache' bem parecido com useMemo, e no caso do App só é executado quando uma função anônima é chamada, e quando o mesmo valor é chamado o user tem uma reposta mais rápida, daí o motivo por ser escolhido.
</p>

## Tecnologias :construction:

- React.js
- typescript
- bootstrap
- react-icons
- axios
- react-router-dom

## O que falta :warning:

Acrescentar filter para renderizar trabalhos full time, o jeito que deu certo não me agradou muito, no caso foi renderizar tudo de novo filtrando elementos.

### Para contribuir

Você precisa

- node.js
- git
- keys da api adzuna


  - faça um clone deste repositório em seu computador
  - dê um npm install para intalar dependências
  - crie um arquivo dentro de services chamado keys
  - crie um index.ts dentro da pasta
  - dentro da index crie, duas constantes uma chamada id e outra chamada api_key, não se preocupe se tudo der certo, a index já está sendo importada para a jobsApi.ts.
  - depois dê um npm start
  
## Links :link:

[adzuna](https://developer.adzuna.com/overview)
[bootstrap](https://getbootstrap.com/)  
