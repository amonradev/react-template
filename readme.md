As configurações fundamentais do VSCode se encontram na .vscode dentro do projeto então não precisam se preocupar com isso.
<hr>
<h2>Quais comandos eu posso utilizar no meu terminal?</h2>
Aqui vão a lista de comandos úteis que existem no projeto:

- `npm run install` (rode a primeira vez que abrir o projeto, para instalar as dependências)
- `npm run dev` (para rodar localmente)
- `npm run test` (para rodar os tests)
- `npm run coverage` (para rodar os testes e verificar a cobertura dos mesmos)
- `npm run build` (para rodar fazer o build da aplicação, o resultado ficará na pasta `dist`)

<hr>
<h2>Mas o que eu encontrarei já configurado?</h2>

Atualmente temos as seguintes configurações já disponíveis e pré-configuradas (sinta-se a vontade para sugerir/implementar alterações ou então aplica-las no seu projeto)
- Formatação com prettier
- Regras com ESLint
- Criação de componentes via CLI (terminal) com Plop
- Pastas default já criadas
- Jest para tests unitários já configurado

<hr>
<h2>E como organizo meus arquivos nas pastas?</h2>
<br><br>
<h3>• Assets</h3>
Na pasta assets ficarão aqueles arquivos auxiliares, como por exemplo, imagens, icons, svgs e relacionados.
<br><br>
<h3>• Components</h3>
Nessa pasta ficarão todos os components da sua aplicação, como botões, inputs, labels e tudo que for criado para ser reutilizável. (Dependendo do escopo do componente pode ser criado um dentro da pasta de outro, mas tomem cuidado para não criar um componente muito grande).
<br><br>
<h3>• Config</h3>
Aqui ficarão os arquivos de configuração, como arquivos de theme, arquivos de rotas, váriaveis úteis e o que você achar necessário ter global e faça sentido com configuração.
<br><br>
<h3>• Hooks</h3>
Nessa pasta ficarão todos os seus hooks customizados, como por exemplo, você criou um hook para pegar dados na sessionStorage, você o coloca aqui dentro.
<br><br>
<h3>• Pages</h3>
Aqui você deve colocar todas as páginas da aplicação, como por exemplo a página Home, Login, User e por ai vai.
<br><br>
<h3>• Tests</h3>
Aqui diferentemente do que é usado normalmente, eu gostaria que vocês criassem apenas os arquivos do tipo fixtures e de configuração de testes e criem os arquivos de testes junto com suas respectivas pastas de arquivo principal.
<br><br>
<h3>• Utils</h3>
Nessa pasta eu gosto de criar aquelas funções padrões, como por exemplo, um formatador de valor para Real, ou então um formatador de Datas.
