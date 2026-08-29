/* =====================================================================
   PRODUTOS DA LOJA — edite SÓ este arquivo pra adicionar/mudar produtos.
   ---------------------------------------------------------------------
   Campos: nome, categoria, descricao, preco, precoDe(opcional),
           kiwify(link do checkout), imagem(preview em assets/),
           icone(emoji fallback), badge(opcional), destaque(bool).
   ===================================================================== */

const PRODUTOS = [
  /* ---------------- PLANILHAS ---------------- */
  { nome:"Checklist Semanal", categoria:"Planilhas", icone:"✅", imagem:"prev-planilha-01.png",
    descricao:"Organize as tarefas da sua semana e veja seu progresso calculado sozinho. Simples, direto e viciante de usar.",
    preco:9, kiwify:"https://pay.kiwify.com.br/xLvxzi2" },

  { nome:"Controle de Gastos Mensal", categoria:"Planilhas", icone:"💸", imagem:"prev-planilha-02.png",
    descricao:"Lance cada gasto e veja o total e o resumo por categoria na hora. O jeito mais fácil de sair do vermelho.",
    preco:15, kiwify:"https://pay.kiwify.com.br/FgxFF3U" },

  { nome:"Metas & Hábitos", categoria:"Planilhas", icone:"🎯", imagem:"prev-planilha-03.png",
    descricao:"Acompanhe metas e hábitos todos os dias com percentual de constância automático. Pra manter a disciplina de verdade.",
    preco:19, kiwify:"https://pay.kiwify.com.br/JXASM5E", badge:"Novo" },

  { nome:"Fluxo de Caixa", categoria:"Planilhas", icone:"💰", imagem:"prev-planilha-04.png",
    descricao:"Entradas, saídas e saldo acumulado calculados automaticamente. Ideal pra autônomo e pequeno negócio saber quanto sobra.",
    preco:27, kiwify:"https://pay.kiwify.com.br/cMDM34L" },

  { nome:"Contas a Pagar e Receber", categoria:"Planilhas", icone:"📆", imagem:"prev-planilha-05.png",
    descricao:"Vencimentos e status num lugar só. As contas vencidas ficam destacadas e você vê o saldo previsto do mês.",
    preco:27, kiwify:"https://pay.kiwify.com.br/SgjspSK" },

  { nome:"Controle de Estoque", categoria:"Planilhas", icone:"📦", imagem:"prev-planilha-06.png",
    descricao:"Saldo automático e alerta de estoque mínimo. Saiba a hora de repor e quanto de dinheiro está parado, sem contar na mão.",
    preco:27, kiwify:"https://pay.kiwify.com.br/XPHV7Hv" },

  { nome:"Orçamento de Obra e Reforma", categoria:"Planilhas", icone:"🏗️", imagem:"prev-planilha-07.png",
    descricao:"Some itens por ambiente com subtotal e total geral automáticos. Pra planejar a reforma sem estourar o orçamento.",
    preco:29, kiwify:"https://pay.kiwify.com.br/RPK4iZh" },

  { nome:"Controle de Vendas e Comissões", categoria:"Planilhas", icone:"🧾", imagem:"prev-planilha-08.png",
    descricao:"Registre vendas e a comissão de cada vendedor sai sozinha, com resumo por pessoa. Feita pra equipe de vendas.",
    preco:37, kiwify:"https://pay.kiwify.com.br/26yiaH3" },

  { nome:"Precificação de Produtos", categoria:"Planilhas", icone:"🏷️", imagem:"prev-planilha-09.png",
    descricao:"Descubra o preço certo cobrindo custo, despesas, imposto e a sua margem de lucro. Pare de vender no prejuízo sem perceber.",
    preco:37, kiwify:"https://pay.kiwify.com.br/pDUHS6c" },

  { nome:"Controle Financeiro Pessoal — 5 Anos", categoria:"Planilhas", icone:"📊", imagem:"prev-planilha-10.png",
    descricao:"A mais completa: receitas, despesas, sobra mensal, resumo de cada ano e projeção do seu patrimônio em 5 anos.",
    preco:47, precoDe:97, kiwify:"https://pay.kiwify.com.br/nDqAP4I", badge:"Mais vendido", destaque:true },

  /* ---------------- TEMPLATES DE SITE ---------------- */
  { nome:"Cartão Digital / Link na Bio", categoria:"Templates de site", icone:"🔗", imagem:"template-01.png",
    descricao:"Sua página de links pro Instagram: foto, bio e todos os seus links num visual bonito e moderno.",
    preco:15, kiwify:"https://pay.kiwify.com.br/kV7POvX" },

  { nome:"Página Em Breve (contador)", categoria:"Templates de site", icone:"⏳", imagem:"template-02.png",
    descricao:"Página de lançamento com contagem regressiva e captura de e-mail. Crie expectativa antes de abrir seu produto.",
    preco:15, kiwify:"https://pay.kiwify.com.br/tCRqHEE" },

  { nome:"Landing de Captura de Leads", categoria:"Templates de site", icone:"🧲", imagem:"template-03.png",
    descricao:"Página que captura contatos e joga direto no seu WhatsApp. Pra transformar visitante em cliente.",
    preco:27, kiwify:"https://pay.kiwify.com.br/3s38mLO" },

  { nome:"Landing de Serviço", categoria:"Templates de site", icone:"🚀", imagem:"template-04.png",
    descricao:"Página única pra prestador de serviço: serviços, sobre, depoimentos e botão de orçamento no WhatsApp.",
    preco:27, kiwify:"https://pay.kiwify.com.br/uj7pqMp" },

  { nome:"Cardápio Digital / Delivery", categoria:"Templates de site", icone:"🍔", imagem:"template-05.png",
    descricao:"Cardápio com categorias e carrinho que fecha o pedido no WhatsApp já com os itens e o total. Pra restaurante e lanchonete.",
    preco:37, precoDe:67, kiwify:"https://pay.kiwify.com.br/oPgz2Ag", badge:"Novo" },

  { nome:"Portfólio Pessoal", categoria:"Templates de site", icone:"🎨", imagem:"template-06.png",
    descricao:"Portfólio moderno pra mostrar trabalhos, bio e contato. Perfeito pra freelancer, designer e criativo.",
    preco:29, kiwify:"https://pay.kiwify.com.br/XceqnMT" },

  { nome:"Site de Barbearia / Salão", categoria:"Templates de site", icone:"✂️", imagem:"template-07.png",
    descricao:"Serviços com preço, horários e agendamento direto no WhatsApp. Feito pra encher a agenda da barbearia e do salão.",
    preco:37, kiwify:"https://pay.kiwify.com.br/Hernuk2" },

  { nome:"Site Institucional", categoria:"Templates de site", icone:"🏢", imagem:"template-08.png",
    descricao:"Site completo de empresa: início, sobre, serviços, números e contato. Passa profissionalismo e credibilidade.",
    preco:47, kiwify:"https://pay.kiwify.com.br/JjMDpYH" },

  { nome:"Landing de Vendas (infoproduto)", categoria:"Templates de site", icone:"🔥", imagem:"template-09.png",
    descricao:"Página de vendas longa e persuasiva pra curso ou ebook: promessa, módulos, bônus, garantia e FAQ. Feita pra converter.",
    preco:47, kiwify:"https://pay.kiwify.com.br/5pHTVdO" },

  { nome:"Catálogo / Loja com Carrinho", categoria:"Templates de site", icone:"🛍️", imagem:"template-10.png",
    descricao:"Loja completa: busca, categorias, carrinho lateral e pedido enviado pronto no WhatsApp. Venda vários produtos sem plataforma cara.",
    preco:67, precoDe:127, kiwify:"https://pay.kiwify.com.br/4ZPGc4d", badge:"Mais completo", destaque:true },
];

/* Contato no rodapé (opcional). WhatsApp só números com 55. @ sem o arroba. */
const WHATSAPP = "";
const INSTAGRAM = "roterixapp";
