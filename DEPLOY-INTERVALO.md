# 🚀 Roteiro do intervalo — subir a loja no roterixapp.com.br

Tempo total: ~10 minutos. A gente faz junto (você abre a Vercel, eu te guio).
**Nada disso quebra a Coopera** — ela fica no `cooperadelivery.com.br`, intocada.
Só o endereço `roterixapp.com.br` (que hoje mostra a Coopera) passa a mostrar a loja.

---

## PARTE A — Publicar a loja na Vercel (5 min)

**Jeito mais rápido (arrastar a pasta):**
1. Entra em **https://vercel.com** (logado na sua conta).
2. Botão **Add New… → Project**.
3. Procura a opção de **importar/deploy** e **arrasta a pasta** `roterix-loja`
   (fica em `C:\Users\Jean\Desktop\MATHEUS\ROTERIX\roterix-loja`).
   - Se pedir "Framework Preset", escolhe **Other** (é site estático, sem build).
4. Clica **Deploy**. Em ~1 min ela sobe num endereço tipo `roterix-loja.vercel.app`.
5. Abre esse endereço e confere: tem que aparecer a loja com os produtos.

*(Se a Vercel só deixar importar de GitHub: me avisa que eu te passo o jeito por GitHub — também é rápido.)*

---

## PARTE B — Apontar o domínio roterixapp.com.br pra loja (3 min)

1. **Primeiro tira o domínio do projeto da Coopera:**
   - Na Vercel, abre o projeto **`roterix-frontend-etapa5`** (o da Coopera).
   - **Settings → Domains**.
   - **Remove** `roterixapp.com.br` e `www.roterixapp.com.br`.
   - ⚠️ **NÃO** mexe no `cooperadelivery.com.br` — esse é a Coopera, fica como está.

2. **Agora adiciona no projeto NOVO (a loja):**
   - Abre o projeto **`roterix-loja`** → **Settings → Domains → Add**.
   - Digita `roterixapp.com.br` → Add. Depois `www.roterixapp.com.br` → Add.
   - O DNS já aponta pra Vercel (foi configurado antes), então **não precisa mexer em DNS**.
     A Vercel reconhece e emite o cadeado (SSL) sozinha em alguns minutos.

3. Espera uns minutos e abre `https://roterixapp.com.br` → tem que aparecer **a loja**.

✅ Pronto. `roterixapp.com.br` = loja. Coopera segue no `cooperadelivery.com.br`.

---

## PARTE C — 2 campos no Instagram (no celular, 1 min)

App do Instagram → **Editar perfil**:
1. **Nome** → `Roterix • Modelos e Planilhas`
2. **Site/link da bio** → `https://roterixapp.com.br` (agora que a loja está no ar)

*(Foto e bio novas já estão feitas.)*

---

## Depois que subir
- Bota o link `roterixapp.com.br` na bio do Instagram e num story.
- Liga o **Programa de Afiliados** no Kiwify (menu *Meus Afiliados*).
- Manda pra 5 pessoas. É isso que vira as primeiras vendas. 🚀
