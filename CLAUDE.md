# O Forasteiro

Portfólio reconstruído como SPA em Vite + React + TypeScript. O site antigo
em HTML/CSS/JS puro foi arquivado em `legacy/` (tag `v1-legado` marca o
último commit antes da reconstrução).

## Regras do projeto

- **Idioma:** todos os textos da interface são em pt-BR.
- **Conteúdo profissional:** vive só em `src/content/`, como dados tipados
  (sem React). Nenhum componente React define texto profissional direto.
- **Jogos e conteúdo:** jogos nunca importam `src/content/`. Um jogo devolve
  um resultado, e `src/games/rewards.ts` decide o que esse resultado libera.
- **Acesso ao conteúdo:** nenhum conteúdo pode ficar acessível só através de
  um jogo — sempre deve existir um caminho alternativo sem jogar.
- **Acessibilidade:** toda animação respeita `prefers-reduced-motion`; todo
  som pode ser silenciado pelo usuário.
- **Dependências:** não adicionar novas dependências sem justificar a
  escolha. Meta: até 150 KB de JS inicial comprimido.
- **Veracidade do conteúdo:** não inventar informações profissionais. A
  fonte oficial é o currículo em `public/docs/`.
