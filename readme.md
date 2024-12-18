# Tech List

**Tech List** é uma aplicação Node.js para integração com o Notion, permitindo que você salve itens de tecnologia diretamente em um banco de dados do Notion. Você pode adicionar um título, um link e opcionalmente uma tag, tudo através de comandos na linha de comando.

---

## 🚀 Funcionalidades

- Adicionar itens de tecnologia ao seu banco de dados do Notion.
- Campos suportados: **título**, **link** e **tag** (opcional).
- Fácil utilização com um comando curto.

---

## 🛠️ Instalação

1. Clone este repositório:

```bash
git clone <url-do-repositorio>
```

2. Navegue para o diretório do projeto:

```bash
cd tech-list
```

3. Instale as dependências:

```bash
npm install
```

4. Crie um arquivo `.env` na raiz do projeto com os seguintes valores:

```env
NOTION_TOKEN=<seu_token_do_notion>
DATABASE_ID=<id_do_banco_de_dados>
```
   - **NOTION_TOKEN**: Token de integração gerado no Notion.
   - **DATABASE_ID**: ID do banco de dados no Notion onde os itens serão salvos.

Para obter esses valores:
- Consulte a [documentação oficial do Notion API](https://developers.notion.com/docs).
- Gere uma integração no Notion e conecte-a ao seu banco de dados.

---

## 📦 Utilização

### Comando Principal

Use o comando abaixo para adicionar itens ao seu banco de dados do Notion:

```bash
techlist <title> <url> [tag]
```

- **title**: Título do item a ser adicionado.
- **url**: Link associado ao item.
- **tag**: (Opcional) Categoria ou palavra-chave para o item.

Exemplo:

```bash
techlist "Node.js" "https://nodejs.org/" "JavaScript"
```

---

## 🔧 Configuração do Alias

Por padrão, o comando é executado com:

```bash
node index.js <title> <url> [tag]
```

Para simplificar o uso, configure o alias `techlist` no terminal:

### Linux/MacOS

1. Abra o arquivo `~/.bashrc` ou `~/.zshrc` (dependendo do seu shell):

```bash
nano ~/.bashrc
```

2. Adicione a seguinte linha:

```bash
alias techlist="node /caminho/para/index.js"
```

3. Salve e atualize as configurações do shell:

```bash
source ~/.bashrc
```

### Windows (PowerShell)

1. Abra o arquivo de perfil do PowerShell:

```bash
notepad $PROFILE
```

2. Adicione a seguinte linha:

```powershell
Set-Alias techlist "node /caminho/para/index.js"
```

3. Salve o arquivo e reinicie o PowerShell.

Agora você pode usar o comando `techlist` diretamente!

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests com melhorias, correções ou novas funcionalidades.

1. Fork este repositório.
2. Crie uma branch para a sua feature/correção:

```bash
git checkout -b minha-feature
```

3. Commit suas mudanças:

```bash
git commit -m "Adiciona minha nova feature"
```

4. Envie suas mudanças:

```bash
git push origin minha-feature
```

5. Abra um Pull Request.

---

## 📝 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.

---

## 📞 Suporte

Se você tiver dúvidas ou encontrar problemas, abra uma issue no repositório ou entre em contato pelo github.
