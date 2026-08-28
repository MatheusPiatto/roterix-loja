/* =====================================================================
   PRODUTOS DA LOJA — edite SÓ este arquivo pra adicionar/mudar produtos.
   ---------------------------------------------------------------------
   👉 O QUE VOCÊ PRECISA FAZER: em cada produto, troque o "kiwify: '#'"
      pelo LINK do produto no seu Kiwify. Enquanto for "#", o botão
      mostra "Em breve" sozinho.

   Cada arquivo pronto pra subir no Kiwify está em:
      PRODUTOS_ROTERIX/entregaveis/planilhas/   (.xlsx)
      PRODUTOS_ROTERIX/entregaveis/templates/   (.zip)

   Campos: nome, categoria, descricao, preco, precoDe(opcional),
           kiwify(link), icone(emoji), badge(opcional), destaque(bool).
   ===================================================================== */

const PRODUTOS = [
  /* ---------------- PLANILHAS ---------------- */
  { nome:"Checklist Semanal", categoria:"Planilhas", icone:"✅",
    descricao:"Organize suas tarefas da semana e veja seu progresso automático. Simples e direto.",
    preco:9, kiwify:"https://pay.kiwify.com.br/xLvxzi2" },

  { nome:"Controle de Gastos Mensal", categoria:"Planilhas", icone:"💸",
    descricao:"Lance seus gastos e veja totais e resumo por categoria na hora. Pra sair do vermelho.",
    preco:15, kiwify:"https://pay.kiwify.com.br/FgxFF3U" },

  { nome:"Metas & Hábitos", categoria:"Planilhas", icone:"🎯",
    descricao:"Acompanhe metas e hábitos com % de constância automático. Pra manter a disciplina.",
    preco:19, kiwify:"https://pay.kiwify.com.br/JXASM5E", badge:"Novo" },

  { nome:"Fluxo de Caixa", categoria:"Planilhas", icone:"💰",
    descricao:"Entradas, saídas e saldo acumulado automático. Ideal pra autônomo e pequeno negócio.",
    preco:27, kiwify:"https://pay.kiwify.com.br/cMDM34L" },

  { nome:"Contas a Pagar e Receber", categoria:"Planilhas", icone:"📆",
    descricao:"Vencimentos e status num lugar só. As contas vencidas ficam destacadas em vermelho.",
    preco:27, kiwify:"https://pay.kiwify.com.br/SgjspSK" },

  { nome:"Controle de Estoque", categoria:"Planilhas", icone:"📦",
    descricao:"Saldo automático e alerta de estoque mínimo. Saiba a hora de repor sem contar na mão.",
    preco:27, kiwify:"https://pay.kiwify.com.br/XPHV7Hv" },

  { nome:"Orçamento de Obra e Reforma", categoria:"Planilhas", icone:"🏗️",
    descricao:"Some itens por ambiente com subtotal e total geral automáticos. Pra não estourar o orçamento.",
    preco:29, kiwify:"https://pay.kiwify.com.br/RPK4iZh" },

  { nome:"Controle de Vendas e Comissões", categoria:"Planilhas", icone:"🧾",
    descricao:"Registre vendas e a comissão de cada vendedor sai sozinha, com resumo por pessoa.",
    preco:37, kiwify:"https://pay.kiwify.com.br/26yiaH3" },

  { nome:"Precificação de Produtos", categoria:"Planilhas", icone:"🏷️",
    descricao:"Descubra o preço certo cobrindo custo, despesas, imposto e sua margem de lucro.",
    preco:37, kiwify:"https://pay.kiwify.com.br/pDUHS6c" },

  { nome:"Controle Financeiro Pessoal — 5 Anos", categoria:"Planilhas", icone:"📊",
    descricao:"A completa: receitas, despesas, sobra mensal, resumo anual e projeção de patrimônio em 5 anos.",
    preco:47, precoDe:97, kiwify:"https://pay.kiwify.com.br/nDqAP4I", badge:"Mais vendido", destaque:true },

  /* ---------------- TEMPLATES DE SITE ---------------- */
  { nome:"Cartão Digital / Link na Bio", categoria:"Templates de site", icone:"🔗",
    descricao:"Sua página de links pro Instagram: foto, bio e todos os seus links num lugar bonito.",
    preco:15, kiwify:"https://pay.kiwify.com.br/kV7POvX" },

  { nome:"Página Em Breve (contador)", categoria:"Templates de site", icone:"⏳",
    descricao:"Página de lançamento com contagem regressiva e captura de e-mail. Crie expectativa.",
    preco:15, kiwify:"https://pay.kiwify.com.br/tCRqHEE" },

  { nome:"Landing de Captura de Leads", categoria:"Templates de site", icone:"🧲",
    descricao:"Página que captura contatos e joga direto no seu WhatsApp. Pra gerar clientes.",
    preco:27, kiwify:"https://pay.kiwify.com.br/3s38mLO" },

  { nome:"Landing de Serviço", categoria:"Templates de site", icone:"🚀",
    descricao:"Página única pra prestador de serviço: serviços, sobre, depoimentos e botão de orçamento.",
    preco:27, kiwify:"https://pay.kiwify.com.br/uj7pqMp" },

  { nome:"Cardápio Digital / Delivery", categoria:"Templates de site", icone:"🍔",
    descricao:"Cardápio com categorias e carrinho que fecha o pedido no WhatsApp. Pra restaurante e lanchonete.",
    preco:37, precoDe:67, kiwify:"https://pay.kiwify.com.br/oPgz2Ag", badge:"Novo" },

  { nome:"Portfólio Pessoal", categoria:"Templates de site", icone:"🎨",
    descricao:"Portfólio moderno pra mostrar trabalhos, bio e contato. Perfeito pra freelancer e criativo.",
    preco:29, kiwify:"https://pay.kiwify.com.br/XceqnMT" },

  { nome:"Site de Barbearia / Salão", categoria:"Templates de site", icone:"✂️",
    descricao:"Serviços com preço, horários e agendamento direto no WhatsApp. Feito pra barbearia e salão.",
    preco:37, kiwify:"https://pay.kiwify.com.br/Hernuk2" },

  { nome:"Site Institucional", categoria:"Templates de site", icone:"🏢",
    descricao:"Site completo de empresa: início, sobre, serviços, números e contato. Passa profissionalismo.",
    preco:47, kiwify:"https://pay.kiwify.com.br/JjMDpYH" },

  { nome:"Landing de Vendas (infoproduto)", categoria:"Templates de site", icone:"🔥",
    descricao:"Página de vendas longa e persuasiva pra curso/ebook: promessa, módulos, bônus, garantia e FAQ.",
    preco:47, kiwify:"https://pay.kiwify.com.br/5pHTVdO" },

  { nome:"Catálogo / Loja com Carrinho", categoria:"Templates de site", icone:"🛍️",
    descricao:"Loja completa: busca, categorias, carrinho lateral e pedido enviado pronto no WhatsApp.",
    preco:67, precoDe:127, kiwify:"https://pay.kiwify.com.br/4ZPGc4d", badge:"Mais completo", destaque:true },
];

/* Contato no rodapé (opcional). WhatsApp só números com 55. @ sem o arroba. */
const WHATSAPP = "";
const INSTAGRAM = "";
