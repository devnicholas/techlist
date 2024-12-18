import "dotenv/config";
import { Client } from "@notionhq/client";

const params = process.argv.slice(2);

const title = params.shift();
const url = params.shift();
const tag = params.shift();

if (!title && !url) {
  console.log(
    `Consulte todos os dados aqui: https://www.notion.so/${process.env.DATABASE_ID}`
  );
  console.log(
    "Para inserir novos itens use o comando: techlist <title> <url> [tag]"
  );
  process.exit(1);
}

if (!title || !url) {
  console.error("Erro: As propriedades 'title' e 'url' são obrigatórias.");
  console.error("Uso: techlist <title> <url> [tag]");
  process.exit(1);
}

console.log(`Inserindo no Notion a url ${url} com o título "${title}"`);

try {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const addNewPageOnDatabase = async (properties) => {
    const page = await notion.pages.create({
      parent: {
        database_id: process.env.DATABASE_ID,
      },
      properties: properties,
    });

    return page;
  };

  const properties = {
    Title: {
      type: "title",
      title: [{ type: "text", text: { content: title } }],
    },
    Link: {
      type: "url",
      url: url,
    },
  };

  if (tag) {
    properties["Category"] = {
      type: "select",
      select: { name: tag },
    };
  }

  await addNewPageOnDatabase(properties);

  console.log("Dados inseridos com sucesso!");
  console.log(
    `Consulte todos os dados aqui: https://www.notion.so/${process.env.DATABASE_ID}`
  );
} catch (error) {
  console.error("Ocorreu um erro ao processar a solicitação");
  console.error(error);
  process.exit(1);
}

process.on("warning", (warning) => {
  if (warning.name === "DeprecationWarning") return;
  console.warn(warning.message);
});
