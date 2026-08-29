/* Renderiza a loja a partir do array PRODUTOS (produtos.js).
   Sem backend: tudo roda no navegador. */

(function () {
  const grid = document.getElementById("grid");
  const filtros = document.getElementById("filtros");
  if (!grid) return;

  const GRADS = [
    "linear-gradient(135deg,#6c4cf1,#9b7bff)", "linear-gradient(135deg,#16c79a,#0ea5e9)",
    "linear-gradient(135deg,#f0508a,#ffab5e)", "linear-gradient(135deg,#7c3aed,#db2777)",
    "linear-gradient(135deg,#0ea5e9,#22d3ee)", "linear-gradient(135deg,#f59e0b,#ef4444)",
  ];
  const brl = (n) => "R$ " + Number(n).toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  function categorias() {
    return ["Tudo", ...new Set(PRODUTOS.map((p) => p.categoria))];
  }

  function preview(p, i) {
    return p.imagem
      ? `<img src="assets/${p.imagem}" alt="${p.nome}" loading="lazy">`
      : `<div class="preview-fallback" style="background:${GRADS[i % GRADS.length]}">${p.icone || "🗂️"}</div>`;
  }

  function cardHTML(p, i) {
    const idx = PRODUTOS.indexOf(p);
    const badge = p.badge ? `<span class="badge ${p.destaque ? "hot" : ""}">${p.badge}</span>` : "";
    const precoDe = p.precoDe ? `<span class="old">${brl(p.precoDe)}</span>` : "";
    return `
      <article class="card" data-cat="${p.categoria}" onclick="abrirDetalhe(${idx})">
        <div class="card-preview">${preview(p, i)}${badge}</div>
        <div class="card-body">
          <span class="card-cat">${p.categoria}</span>
          <h3 class="card-title">${p.nome}</h3>
          <p class="card-desc">${p.descricao}</p>
          <div class="card-foot">
            <span class="price">${precoDe}<span class="now">${brl(p.preco)}</span></span>
          </div>
          <button class="btn btn-buy" type="button">Ver detalhes</button>
        </div>
      </article>`;
  }

  function render(filtro) {
    const lista = PRODUTOS.filter((p) => filtro === "Tudo" || p.categoria === filtro);
    grid.innerHTML = lista.map((p) => cardHTML(p, PRODUTOS.indexOf(p))).join("")
      || `<p class="soon-note" style="grid-column:1/-1">Nada aqui ainda.</p>`;
  }

  if (filtros) {
    filtros.innerHTML = categorias()
      .map((c, i) => `<button class="chip ${i === 0 ? "active" : ""}" data-f="${c}">${c}</button>`).join("");
    filtros.addEventListener("click", (e) => {
      const b = e.target.closest(".chip");
      if (!b) return;
      filtros.querySelectorAll(".chip").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      render(b.dataset.f);
    });
  }

  // ---------- Detalhe do produto ----------
  const RECEBE = {
    "Planilhas": [
      "Arquivo em <b>Excel (.xlsx)</b> — abre no Excel, Google Sheets ou LibreOffice",
      "Fórmulas e cálculos <b>automáticos</b> já prontos",
      "Exemplos preenchidos: é só trocar pelos seus números",
      "Uso ilimitado nos seus projetos",
    ],
    "Templates de site": [
      "Arquivos do site <b>(.zip)</b> prontos pra editar",
      "Abre em qualquer navegador — edição simples, sem programar",
      "<b>Guia passo a passo</b> incluído",
      "Publique <b>de graça</b> (Netlify, Vercel ou GitHub)",
    ],
  };
  const COMO = [
    "⚡ <b>Recebe na hora:</b> o acesso chega no seu e-mail assim que o pagamento é aprovado",
    "♾️ Baixe quantas vezes precisar",
    "🔒 Pagamento <b>100% seguro</b> pelo Kiwify — Pix, cartão ou boleto",
    "✅ <b>Garantia de 7 dias</b>: não gostou, é só pedir o reembolso",
  ];

  const root = document.getElementById("modal-root");

  window.abrirDetalhe = function (idx) {
    const p = PRODUTOS[idx];
    if (!p) return;
    const temLink = p.kiwify && p.kiwify !== "#";
    const precoDe = p.precoDe ? `<span class="old">${brl(p.precoDe)}</span>` : "";
    const recebe = (RECEBE[p.categoria] || []).map((x) => `<li>${x}</li>`).join("");
    const como = COMO.map((x) => `<li>${x}</li>`).join("");
    const btn = temLink
      ? `<a class="btn btn-buy dm-buy" href="${p.kiwify}" target="_blank" rel="noopener">Comprar agora — ${brl(p.preco)}</a>`
      : `<button class="btn btn-buy dm-buy" disabled style="opacity:.6;cursor:not-allowed">Em breve</button>`;
    root.innerHTML = `
      <div class="dm-overlay" onclick="fecharDetalhe()">
        <div class="dm-panel" role="dialog" aria-modal="true" onclick="event.stopPropagation()">
          <button class="dm-close" onclick="fecharDetalhe()" aria-label="Fechar">×</button>
          <div class="dm-media">${preview(p, idx)}</div>
          <div class="dm-info">
            <span class="card-cat">${p.categoria}</span>
            <h2 class="dm-title">${p.nome}</h2>
            <p class="dm-desc">${p.descricao}</p>
            <div class="dm-price">${precoDe}<span class="now">${brl(p.preco)}</span></div>
            <div class="dm-block">
              <h4>✅ O que você recebe</h4>
              <ul>${recebe}</ul>
            </div>
            <div class="dm-block">
              <h4>📩 Como você recebe</h4>
              <ul>${como}</ul>
            </div>
            ${btn}
            <p class="dm-fine">🔒 Compra segura processada pelo Kiwify</p>
          </div>
        </div>
      </div>`;
    document.body.style.overflow = "hidden";
  };

  window.fecharDetalhe = function () {
    root.innerHTML = "";
    document.body.style.overflow = "";
  };
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") window.fecharDetalhe(); });

  render("Tudo");

  // contato no rodapé
  if (typeof WHATSAPP !== "undefined" && WHATSAPP) {
    document.querySelectorAll("[data-whatsapp]").forEach((el) => { el.href = `https://wa.me/${WHATSAPP}`; el.classList.remove("hidden"); });
  }
  if (typeof INSTAGRAM !== "undefined" && INSTAGRAM) {
    document.querySelectorAll("[data-instagram]").forEach((el) => { el.href = `https://instagram.com/${INSTAGRAM}`; el.classList.remove("hidden"); });
  }
  const y = document.getElementById("ano");
  if (y) y.textContent = new Date().getFullYear();
})();
