# Roterix — Loja de templates e planilhas

Site **estático** (sem backend, sem banco) que mostra seus templates e planilhas
e manda a venda pro **Kiwify** (é o Kiwify que cobra e entrega o arquivo).

É a separação limpa da Coopera: a Coopera fica sozinha no
`cooperadelivery.com.br` (backend + banco dela); esta loja não depende de nada
disso e roda de graça na Vercel.

---

## Arquivos

| Arquivo        | Pra que serve                                              |
|----------------|-----------------------------------------------------------|
| `index.html`   | A página. Só mexa aqui se quiser trocar textos fixos.     |
| `styles.css`   | O visual. Cores no topo do arquivo (`--brand` etc).       |
| **`produtos.js`** | **É aqui que você trabalha:** adiciona/edita produtos. |
| `app.js`       | Monta a loja sozinho a partir do `produtos.js`. Não precisa mexer. |
| `assets/`      | (opcional) coloque aqui as imagens de preview dos produtos. |

---

## Como adicionar um produto (o dia a dia)

1. Abra **`produtos.js`** num editor de texto (Bloco de Notas serve).
2. Copie um bloco `{ ... }` inteiro e cole logo abaixo.
3. Troque `nome`, `descricao`, `preco` e principalmente o **`kiwify`** pelo
   link do produto no seu Kiwify.
   - Enquanto o link for `"#"`, o botão mostra **"Em breve"** sozinho.
4. (Opcional) coloque uma imagem em `assets/` e ponha o nome em `imagem`.
   Sem imagem, a loja gera um preview colorido com o emoji do `icone`.
5. Salve e suba (veja abaixo). Pronto.

Também dá pra preencher `WHATSAPP` e `INSTAGRAM` no fim do `produtos.js`
pra aparecer o contato no rodapé.

---

## Como colocar no ar (Vercel — grátis, sem cartão)

> ⚠️ Isso são passos **seus** no painel da Vercel (eu não consigo mexer lá).
> A Coopera **não é tocada** — ela fica no projeto atual e no domínio
> `cooperadelivery.com.br`. Só o domínio `roterixapp.com.br` migra pra loja.

### Passo 1 — Subir a loja como um projeto novo
Opção A (recomendada, com deploy automático):
1. Crie um repositório novo no GitHub (ex: `roterix-loja`) e suba esta pasta.
2. Na Vercel: **Add New → Project → Import** o repositório `roterix-loja`.
3. Framework: **Other** (é site estático, não precisa build). É só **Deploy**.

Opção B (mais rápida, sem GitHub): na Vercel, **Add New → Project** e
**arraste a pasta** `roterix-loja` pra área de deploy.

Ao fim, a loja já fica no ar num endereço tipo `roterix-loja.vercel.app`.
Confirme que abriu certo.

### Passo 2 — Mover o domínio roterixapp.com.br pra loja
1. No projeto **antigo** (`roterix-frontend-etapa5` = Coopera):
   **Settings → Domains** → **remova** `roterixapp.com.br` e `www.roterixapp.com.br`.
   *(Deixe `cooperadelivery.com.br` intacto — é a produção da Coopera.)*
2. No projeto **novo** (`roterix-loja`):
   **Settings → Domains → Add** → digite `roterixapp.com.br` (e depois `www.roterixapp.com.br`).
3. O DNS no Registro.br já aponta pra Vercel (foi configurado antes), então
   não precisa mexer em DNS. A Vercel reconhece e emite o SSL sozinha em
   alguns minutos.

Pronto: `roterixapp.com.br` passa a ser a **loja**, e a Coopera segue só no
`cooperadelivery.com.br`. Servidores separados de vez.

---

## Testar aqui no seu PC (opcional)
Na pasta, rode um servidor simples e abra `http://localhost:8899`:

```bash
py -m http.server 8899
```

---

## O que falta você fazer (checklist)
- [ ] Criar os produtos de verdade no **Kiwify** e colar os links no `produtos.js`
      (os que estão hoje são exemplos com link `"#"`).
- [ ] Trocar/ajustar preços e descrições dos exemplos.
- [ ] (Opcional) colocar imagens de preview em `assets/`.
- [ ] Subir na Vercel e mover o domínio (passos acima).
