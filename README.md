
<div align="center">

# ⚡ SPARK

**Loja fictícia de energéticos, do front 3D ao dashboard de dados.**
Um projeto fullstack que percorre o ciclo inteiro: interface, banco de dados, dados simulados e análise.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Faker](https://img.shields.io/badge/Faker-39FF14?style=for-the-badge&logoColor=black)
![Power BI](https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black)

</div>


## 📖 Sobre o projeto

A SPARK nasceu como um laboratório para mostrar, em um só repositório, **como as peças de um produto digital se encaixam**:

1. **Um site** com identidade forte (tema dark, verde neon) e uma experiência 3D.
2. **Um banco de dados relacional** modelado do zero.
3. **Dados simulados realistas**, gerados por script, com regras de negócio.
4. **Um dashboard de BI** em cima desses dados, para responder perguntas de negócio.

Não é uma loja em produção: a marca, os produtos, os clientes e os pedidos são **fictícios**.

---

## ✨ Funcionalidades do site

- **Hero com lata 3D arrastável**, renderizada com Three.js, que gira com o mouse ou o toque.
- **Seletor de sabores por cor:** ao escolher o sabor, a lata muda de cor.
- **Carrossel "Energy Drinks"** com cards de produto.
- **Seção "Além dos Limites"** com histórias de atletas.
- **Newsletter** no rodapé.
- **Tema dark** com verde neon, responsivo com Tailwind CSS.

---

## 🎬 Demonstração


https://github.com/user-attachments/assets/1e42d7c6-f6df-42ed-a5ca-2e907db88fd7




---

## 🧰 Stack

| Camada | Tecnologia | Para que serve no projeto |
|---|---|---|
| Framework | **Next.js** | Rotas, renderização e API do site |
| Linguagem | **TypeScript** | Tipagem de ponta a ponta, do banco à interface |
| Estilo | **Tailwind CSS** | Design system dark/neon e responsividade |
| 3D | **Three.js** | Lata 3D interativa no hero |
| ORM | **Prisma** | Schema, migrações e consultas tipadas |
| Banco | **PostgreSQL** | Dados relacionais de pedidos, clientes e sessões |
| Dados falsos | **Faker** | Seed com milhares de registros plausíveis |
| BI | **Power BI** (Power Query + DAX) | Dashboard de 6 páginas sobre os dados gerados |

---


## 🗄️ Modelo de dados

O schema é definido no Prisma e vive em PostgreSQL.

``` mermaid
erDiagram
    clientes ||--o{ pedidos : faz
    clientes ||--o{ avaliacoes : escreve
    clientes ||--o{ sessoes : navega
    pedidos ||--|{ itens_pedido : contem
    produtos ||--o{ itens_pedido : vendido_em
    sabores ||--o{ itens_pedido : sabor_de
    produtos ||--o{ avaliacoes : recebe
    pedidos ||--o| sessoes : originou

    clientes {
        int id PK
        string nome
        string estado
        string regiao
        string canal_aquisicao
        boolean newsletter
        datetime data_cadastro
    }

    pedidos {
        int id PK
        int cliente_id FK
        string status
        string forma_pagamento
        string cupom
        float valor_itens
        float valor_desconto
        float valor_frete
        float valor_total
        datetime data_pedido
    }

    itens_pedido {
        int id PK
        int pedido_id FK
        int produto_id FK
        int sabor_id FK
        int quantidade
        float preco_unitario
    }

    produtos {
        int id PK
        string nome
        string categoria
        float custo
        float preco_atual
    }

    sabores {
        int id PK
        string nome
        string cor_hex
    }

    avaliacoes {
        int id PK
        int nota
        string comentario
    }

    sessoes {
        int id PK
        string origem
        string dispositivo
        boolean adicionou_carrinho
        boolean converteu
    }  
```
---

## 🎲 Dados simulados (Faker)

O script de seed gera um histórico de um ano de operação, com regras de negócio em vez de valores aleatórios soltos:

- **~3.100 clientes**, distribuídos por estado e região, com canal de aquisição (Instagram, TikTok, Google, E-mail, Influenciador, Direto).
- **~3.950 pedidos** com status (entregue, enviado, pago, cancelado, reembolsado), formas de pagamento (Pix, cartão, boleto) e cupons como `PRIMEIRACOMPRA`, `SPARK10`, `BLACKSPARK` e `ATLETA15`.
- **~5.400 itens de pedido** ligados a 6 produtos e 7 sabores.
- **120 mil sessões de navegação**, com origem, dispositivo, carrinho e conversão.
- **~750 avaliações** com nota de 1 a 5.

---

## 📊 Dashboard em Power BI

Os dados do banco alimentam um relatório com **6 páginas** e cerca de 40 medidas DAX:

| Página | O que responde |
|---|---|
| Resumo executivo | Quanto faturou, com que margem e de onde vem |
| Vendas | Ritmo diário, horários de pico, pagamento e cupons |
| Produtos e sabores | Qual produto e sabor sustentam volume e margem |
| Clientes | Quem compra, de onde vem e quanto volta |
| Marketing e funil | Onde o tráfego converte e onde se perde |
| Operações e satisfação | Cancelamentos e nota dos clientes |


| Resumo executivo | Vendas |
|---|---|
| <img width="990" height="553" alt="Captura de tela 2026-10-13 231752" src="https://github.com/user-attachments/assets/d0e52524-2451-4df0-9d68-0457ca3f7038" />|<img width="997" height="558" alt="Captura de tela 2026-10-13 231848" src="https://github.com/user-attachments/assets/da3e7ed6-5e29-4624-94ef-e597e13883bd" />|    

| Produtos e sabores |Operações e Satisfação|
|---|---|
| <img width="988" height="547" alt="Captura de tela 2026-10-13 231906" src="https://github.com/user-attachments/assets/975e5fd3-916b-479b-8528-f71287297521" />| <img width="939" height="529" alt="Captura de tela 2026-10-13 232038" src="https://github.com/user-attachments/assets/3813b3ac-79ac-435f-9f4d-25515cd6dc86" />|

---

## 🚀 Como rodar

### Pré-requisitos

- Node.js (versão LTS)
- PostgreSQL rodando localmente ou em um serviço na nuvem

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/Cjr-pjs/ProjetoSpark
cd spark

# 2. Instale as dependências
npm install

# 3. Configure o ambiente
cp .env.example .env
# edite DATABASE_URL com os dados do seu PostgreSQL

# 4. Crie as tabelas com o Prisma
npx prisma migrate dev

# 5. Popule o banco com dados falsos
npx prisma db seed

# 6. Rode o site
npm run dev
```


Acesse [http://localhost:3000](http://localhost:3000).

> Ajuste os comandos de seed e de execução se os scripts do seu `package.json` tiverem outros nomes.

Para explorar o banco visualmente:

```bash
npx prisma studio
```



## 👤 Autor

Feito por **Junior**, estudante de Análise e Desenvolvimento de Sistemas.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/cleudson-junior-515b933a5)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Cjr-pjs)

---

<div align="center">

⚠️ Projeto Experimental. SPARK é uma marca fictícia e todos os dados são gerados artificialmente.

</div>
