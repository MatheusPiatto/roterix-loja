/* Renderiza a loja a partir do array PRODUTOS (produtos.js).
   Nenhum backend: tudo roda no navegador. */

(function () {
  const grid = document.getElementById("grid");
  const filtros = document.getElementById("filtros");
  if (!grid) return;

  // gradientes pro preview automático (sem imagem)
  const GRADS = [
    "linear-gradient(135deg,#6c4cf1,#9b7bff)",
    "linear-gradient(135deg,#16c79a,#0ea5e9)",
    "linear-gradient(135deg,#f0508a,#ffab5e)",
    "linear-gradient(135deg,#7c3aed,#db2777)",
    "linear-gradient(135deg,#0ea5e9,#22d3ee)",
    "linear-gradient(135deg,#f59e0b,#ef4444)",
  ];

  const brl = (n) =>
    "R$ " + Number(n).toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  function categorias() {
    const set = new Set(PRODUTOS.map((p) => p.categoria));
    return ["Tudo", ...set];
  }

  function cardHTML(p, i) {
    const temLink = p.kiwify && p.kiwify !== "#";
    const preview = p.imagem
      ? `<img src="assets/${p.imagem}" alt="${p.nome}" loading="lazy">`
      : `<div class="preview-fallback" style="background:${GRADS[i % GRADS.length]}">${p.icone || "🗂️"}</div>`;
    const badge = p.badge
      ? `<span class="badge ${p.destaque ? "hot" : ""}">${p.badge}</span>`
      : "";
    const precoDe = p.precoDe ? `<span class="old">${brl(p.precoDe)}</span>` : "";
    const botao = temLink
      ? `<a class="btn btn-buy" href="${p.kiwify}" target="_blank" rel="noopener">Comprar agora</a>`
      : `<button class="btn btn-buy" disabled style="opacity:.6;cursor:not-allowed">Em breve</button>`;

    return `
      <article class="card" data-cat="${p.categoria}">
        <div class="card-preview">${preview}${badge}</div>
        <div class="card-body">
          <span class="card-cat">${p.categoria}</span>
          <h3 class="card-title">${p.nome}</h3>
          <p class="card-desc">${p.descricao}</p>
          <div class="card-foot">
            <span class="price">${precoDe}<span class="now">${brl(p.preco)}</span></span>
          </div>
          ${botao}
        </div>
      </article>`;
  }

  function render(filtro) {
    const lista = PRODUTOS.filter((p) => filtro === "Tudo" || p.categoria === filtro);
    grid.innerHTML = lista.map(cardHTML).join("");
    if (!lista.length) {
      grid.innerHTML = `<p class="soon-note" style="grid-column:1/-1">Nada aqui ainda.</p>`;
    }
  }

  // filtros
  if (filtros) {
    filtros.innerHTML = categorias()
      .map((c, i) => `<button class="chip ${i === 0 ? "active" : ""}" data-f="${c}">${c}</button>`)
      .join("");
    filtros.addEventListener("click", (e) => {
      const b = e.target.closest(".chip");
      if (!b) return;
      filtros.querySelectorAll(".chip").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      render(b.dataset.f);
    });
  }

  render("Tudo");

  // links de contato (WhatsApp / Instagram) se preenchidos em produtos.js
  const waWrap = document.querySelectorAll("[data-whatsapp]");
  if (typeof WHATSAPP !== "undefined" && WHATSAPP) {
    waWrap.forEach((el) => {
      el.href = `https://wa.me/${WHATSAPP}`;
      el.classList.remove("hidden");
    });
  }
  const igWrap = document.querySelectorAll("[data-instagram]");
  if (typeof INSTAGRAM !== "undefined" && INSTAGRAM) {
    igWrap.forEach((el) => {
      el.href = `https://instagram.com/${INSTAGRAM}`;
      el.classList.remove("hidden");
    });
  }

  // ano no rodapé
  const y = document.getElementById("ano");
  if (y) y.textContent = new Date().getFullYear();
})();
