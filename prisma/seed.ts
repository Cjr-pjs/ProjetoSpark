import { db } from '../src/prisma/db';
import { fakerPT_BR as faker } from '@faker-js/faker';

// ============================================================================
// CONFIGURAÇÕES E PARÂMETROS
// ============================================================================
const PARAM_SESSOES = parseInt(process.env.SESSOES || '120000', 10);
const PARAM_DIAS = parseInt(process.env.DIAS || '365', 10);
const PARAM_SEED = parseInt(process.env.SEED || '42', 10);

faker.seed(PARAM_SEED);

// Data base: hoje (fim do período de 365 dias)
const DATA_FIM = new Date('2026-10-12T00:00:00.000Z');
const DATA_INICIO = new Date(DATA_FIM.getTime() - PARAM_DIAS * 24 * 60 * 60 * 1000);

// ============================================================================
// CATÁLOGO FIXO
// ============================================================================
const SABORES_FIXOS = [
  { id: 1, nome: 'Limão Voltage', cor_hex: '#39FF14', peso: 30 },
  { id: 2, nome: 'Uva Eclipse', cor_hex: '#8B3FD9', peso: 20 },
  { id: 3, nome: 'Laranja Solar', cor_hex: '#E8650F', peso: 14 },
  { id: 4, nome: 'Ice Cyber', cor_hex: '#12C1D6', peso: 16 },
  { id: 5, nome: 'Melancia Pulse', cor_hex: '#E0267A', peso: 12 },
  { id: 6, nome: 'Cereja Black', cor_hex: '#C8183A', peso: 8 },
];

const PRODUTOS_FIXOS = [
  {
    id: 1,
    nome: 'SPARK Energy Drink 473ml',
    categoria: 'Energy Drink',
    qtd_unidades: 1,
    preco_cheio: '14.90',
    preco_atual: '11.90',
    custo: '5.20',
    tem_sabor: true,
    peso: 50,
  },
  {
    id: 2,
    nome: 'SPARK Pack Hexa (6 Latas)',
    categoria: 'Pack',
    qtd_unidades: 6,
    preco_cheio: '71.40',
    preco_atual: '64.90',
    custo: '31.00',
    tem_sabor: true,
    peso: 18,
  },
  {
    id: 3,
    nome: 'SPARK Pro Crate (12 Latas)',
    categoria: 'Pack',
    qtd_unidades: 12,
    preco_cheio: '142.80',
    preco_atual: '119.90',
    custo: '60.00',
    tem_sabor: true,
    peso: 8,
  },
  {
    id: 4,
    nome: 'Combo SPARK Lab',
    categoria: 'Combo',
    qtd_unidades: 4,
    preco_cheio: '109.90',
    preco_atual: '89.90',
    custo: '46.00',
    tem_sabor: false,
    peso: 9,
  },
  {
    id: 5,
    nome: 'Barra Proteica SPARK',
    categoria: 'Snack',
    qtd_unidades: 1,
    preco_cheio: '12.90',
    preco_atual: '9.90',
    custo: '4.10',
    tem_sabor: false,
    peso: 8,
  },
  {
    id: 6,
    nome: 'Chiclete Cafeinado SPARK',
    categoria: 'Snack',
    qtd_unidades: 1,
    preco_cheio: '7.90',
    preco_atual: '5.90',
    custo: '2.00',
    tem_sabor: false,
    peso: 7,
  },
];

// Origens de tráfego (peso, mult_carrinho, mult_compra)
const ORIGENS = [
  { nome: 'Instagram', peso: 28, multCarrinho: 1.0, multCompra: 1.0 },
  { nome: 'TikTok', peso: 20, multCarrinho: 0.95, multCompra: 0.70 },
  { nome: 'Google', peso: 18, multCarrinho: 1.10, multCompra: 1.20 },
  { nome: 'Direto', peso: 14, multCarrinho: 1.15, multCompra: 1.30 },
  { nome: 'Influenciador', peso: 12, multCarrinho: 1.05, multCompra: 1.10 },
  { nome: 'E-mail', peso: 8, multCarrinho: 1.30, multCompra: 1.80 },
];

// Dispositivos (peso, mult_carrinho, mult_compra)
const DISPOSITIVOS = [
  { nome: 'Mobile', peso: 68, multCarrinho: 0.95, multCompra: 0.85 },
  { nome: 'Desktop', peso: 27, multCarrinho: 1.20, multCompra: 1.35 },
  { nome: 'Tablet', peso: 5, multCarrinho: 1.0, multCompra: 1.0 },
];

// Formas de pagamento
const FORMAS_PAGAMENTO = [
  { nome: 'Pix', peso: 46 },
  { nome: 'Cartão de crédito', peso: 38 },
  { nome: 'Cartão de débito', peso: 9 },
  { nome: 'Boleto', peso: 7 },
];

// Estados e cidades reais por região
const ESTADOS = [
  { estado: 'SP', regiao: 'Sudeste', peso: 24, cidades: ['São Paulo', 'Campinas', 'Santos', 'Ribeirão Preto', 'Sorocaba'] },
  { estado: 'RJ', regiao: 'Sudeste', peso: 10, cidades: ['Rio de Janeiro', 'Niterói', 'Petrópolis', 'Cabo Frio'] },
  { estado: 'MG', regiao: 'Sudeste', peso: 10, cidades: ['Belo Horizonte', 'Uberlândia', 'Juiz de Fora', 'Ouro Preto'] },
  { estado: 'ES', regiao: 'Sudeste', peso: 3, cidades: ['Vitória', 'Vila Velha', 'Guarapari'] },
  { estado: 'PR', regiao: 'Sul', peso: 6, cidades: ['Curitiba', 'Londrina', 'Maringá', 'Cascavel'] },
  { estado: 'SC', regiao: 'Sul', peso: 5, cidades: ['Florianópolis', 'Joinville', 'Blumenau', 'Balneário Camboriú'] },
  { estado: 'RS', regiao: 'Sul', peso: 6, cidades: ['Porto Alegre', 'Caxias do Sul', 'Pelotas', 'Gramado'] },
  { estado: 'BA', regiao: 'Nordeste', peso: 6, cidades: ['Salvador', 'Feira de Santana', 'Ilhéus', 'Porto Seguro'] },
  { estado: 'PE', regiao: 'Nordeste', peso: 5, cidades: ['Recife', 'Olinda', 'Caruaru', 'Petrolina'] },
  { estado: 'CE', regiao: 'Nordeste', peso: 5, cidades: ['Fortaleza', 'Sobral', 'Juazeiro do Norte'] },
  { estado: 'MA', regiao: 'Nordeste', peso: 2, cidades: ['São Luís', 'Imperatriz'] },
  { estado: 'PA', regiao: 'Norte', peso: 6, cidades: ['Belém', 'Ananindeua', 'Santarém'] },
  { estado: 'AM', regiao: 'Norte', peso: 2, cidades: ['Manaus', 'Parintins'] },
  { estado: 'GO', regiao: 'Centro-Oeste', peso: 4, cidades: ['Goiânia', 'Anápolis', 'Rio Verde'] },
  { estado: 'DF', regiao: 'Centro-Oeste', peso: 3, cidades: ['Brasília', 'Taguatinga'] },
  { estado: 'MT', regiao: 'Centro-Oeste', peso: 2, cidades: ['Cuiabá', 'Rondonópolis'] },
];

const FRETE_BASE: Record<string, number> = {
  Sudeste: 12.90,
  Sul: 15.90,
  'Centro-Oeste': 18.90,
  Nordeste: 22.90,
  Norte: 27.90,
};

const FRASES_AVALIACAO: Record<number, string[]> = {
  5: [
    'Melhor energético que já tomei! O sabor Limão Voltage é surreal e dá muita disposição.',
    'Energia limpa, sem taquicardia nem crash depois. Entrega super rápida!',
    'Simplesmente sensacional, sabor absurdo e foco total nos treinos e no trampo.',
    'Virou vício, recomendo demais! Nota 10 em sabor e entrega.',
  ],
  4: [
    'Muito bom! Energia constante e sabor bem refrescante. Chegou dentro do prazo.',
    'Gostei bastante, produto de excelente qualidade. Só a lata que veio levemente amassada.',
    'Entrega rápida e sabor marcante. Vale muito a pena comprar os packs.',
  ],
  3: [
    'O produto é bom e dá energia, mas achei o sabor um pouco doce demais para o meu gosto.',
    'Efeito bom, mas a entrega atrasou dois dias aqui na minha cidade.',
    'Na média. Gostei da proposta de zero açúcar, porém esperava mais do sabor.',
  ],
  2: [
    'Não curti muito o sabor, achei um pouco artificial. Mas a entrega foi rápida.',
    'Esperava mais pressão na cafeína. Para mim o efeito foi bem fraco.',
  ],
  1: [
    'A transportadora demorou muito e o sabor não me agradou.',
    'Não atendeu minhas expectativas, prefiro outros energéticos tradicionais.',
  ],
};

// ============================================================================
// HELPERS
// ============================================================================
function weightedRandom<T extends { peso: number }>(items: T[]): T {
  const total = items.reduce((acc, it) => acc + it.peso, 0);
  let rnd = faker.number.float({ min: 0, max: total });
  for (const item of items) {
    if (rnd < item.peso) return item;
    rnd -= item.peso;
  }
  return items[items.length - 1];
}

function round2(val: number): number {
  return Math.round(val * 100) / 100;
}

function toIso(d: Date): string {
  return d.toISOString();
}

function toDateString(d: Date): string {
  return d.toISOString().split('T')[0];
}

async function bulkInsert(table: string, rows: any[], batchSize = 2500) {
  if (rows.length === 0) return;
  for (let i = 0; i < rows.length; i += batchSize) {
    const chunk = rows.slice(i, i + batchSize);
    const plan = (db.sql.public as any)[table].insert(chunk).build();
    await db.runtime().execute(plan);
  }
}

// ============================================================================
// SEED PRINCIPAL
// ============================================================================
async function main() {
  console.log(`\n======================================================`);
  console.log(`🚀 INICIANDO SEED DA LOJA SPARK (Prisma 8 ORM / Postgres)`);
  console.log(`Configuração: SESSOES=${PARAM_SESSOES}, DIAS=${PARAM_DIAS}, SEED=${PARAM_SEED}`);
  console.log(`======================================================\n`);

  const startTime = Date.now();

  // 1. Limpeza seletiva das tabelas da loja (na ordem correta das FKs)
  console.log('🧹 Limpando tabelas existentes da loja SPARK...');
  await db.transaction(async (tx) => {
    const truncatePlan = (db.raw.sql as any)`
      TRUNCATE TABLE avaliacoes, itens_pedido, sessoes, pedidos, clientes, produtos, sabores CASCADE;
    `.affectedCount().build();
    await tx.execute(truncatePlan);
  });
  console.log('✅ Tabelas limpas com sucesso.');

  // 2. Inserção do Catálogo Fixo (Sabores e Produtos)
  console.log('📦 Inserindo catálogo fixo (sabores e produtos)...');
  await bulkInsert('sabores', SABORES_FIXOS.map((s) => ({
    id: s.id,
    nome: s.nome,
    cor_hex: s.cor_hex,
  })));

  await bulkInsert('produtos', PRODUTOS_FIXOS.map((p) => ({
    id: p.id,
    nome: p.nome,
    categoria: p.categoria,
    qtd_unidades: p.qtd_unidades,
    preco_cheio: p.preco_cheio,
    preco_atual: p.preco_atual,
    custo: p.custo,
    tem_sabor: p.tem_sabor,
  })));

  // 3. Distribuição de sessões pelos dias com pesos
  console.log(`⏱️  Calculando distribuição temporal para ${PARAM_SESSOES.toLocaleString()} sessões...`);
  
  interface DiaInfo {
    diaIndex: number;
    data: Date;
    pesoDia: number;
    isBlackFriday: boolean;
    isCopa: boolean;
  }

  const diasInfos: DiaInfo[] = [];
  let somaPesosDias = 0;

  for (let d = 0; d < PARAM_DIAS; d++) {
    const dataDia = new Date(DATA_INICIO.getTime() + d * 24 * 60 * 60 * 1000);
    const progresso = d / (PARAM_DIAS - 1 || 1); // 0 a 1
    const crescimentoLinear = 1.0 + 0.70 * progresso; // +70%

    // Dia da semana: sex(5), sab(6), dom(0) mais fortes
    const dayOfWeek = dataDia.getUTCDay();
    let multDiaSemana = 1.0;
    if (dayOfWeek === 5) multDiaSemana = 1.15; // Sexta
    else if (dayOfWeek === 6) multDiaSemana = 1.25; // Sábado
    else if (dayOfWeek === 0) multDiaSemana = 1.20; // Domingo

    // Eventos sazonais:
    // Black Friday: 24/11/2025 a 01/12/2025 (x2.4)
    const bfInicio = new Date('2025-11-24T00:00:00.000Z');
    const bfFim = new Date('2025-12-01T23:59:59.999Z');
    const isBlackFriday = dataDia >= bfInicio && dataDia <= bfFim;

    // Copa do Mundo: 11/06/2026 a 19/07/2026 (x1.35)
    const copaInicio = new Date('2026-06-11T00:00:00.000Z');
    const copaFim = new Date('2026-07-19T23:59:59.999Z');
    const isCopa = dataDia >= copaInicio && dataDia <= copaFim;

    // Carnaval: 13/02/2026 a 18/02/2026 (x1.5)
    const carnaInicio = new Date('2026-02-13T00:00:00.000Z');
    const carnaFim = new Date('2026-02-18T23:59:59.999Z');
    const isCarnaval = dataDia >= carnaInicio && dataDia <= carnaFim;

    // Pré-Natal: 15/12/2025 a 24/12/2025 (x1.15)
    const natalInicio = new Date('2025-12-15T00:00:00.000Z');
    const natalFim = new Date('2025-12-24T23:59:59.999Z');
    const isNatal = dataDia >= natalInicio && dataDia <= natalFim;

    let multSazonal = 1.0;
    if (isBlackFriday) multSazonal *= 2.4;
    if (isCopa) multSazonal *= 1.35;
    if (isCarnaval) multSazonal *= 1.5;
    if (isNatal) multSazonal *= 1.15;

    // Ruído aleatório pequeno por dia (±6%)
    const ruido = faker.number.float({ min: 0.94, max: 1.06 });

    const pesoTotal = crescimentoLinear * multDiaSemana * multSazonal * ruido;
    somaPesosDias += pesoTotal;

    diasInfos.push({
      diaIndex: d,
      data: dataDia,
      pesoDia: pesoTotal,
      isBlackFriday,
      isCopa,
    });
  }

  // 4. Sorteio de timestamps com picos de horário (meio-dia e 19h às 23h)
  const sessionTimestamps: { timestamp: number; isBlackFriday: boolean; isCopa: boolean }[] = [];

  for (let i = 0; i < PARAM_SESSOES; i++) {
    // Escolhe o dia ponderado pelo peso
    let rnd = faker.number.float({ min: 0, max: somaPesosDias });
    let diaEscolhido = diasInfos[diasInfos.length - 1];
    for (const d of diasInfos) {
      if (rnd < d.pesoDia) {
        diaEscolhido = d;
        break;
      }
      rnd -= d.pesoDia;
    }

    // Sorteio de hora com picos (11h-14h e 19h-23h)
    let hora: number;
    const rndHora = faker.number.float({ min: 0, max: 1 });
    if (rndHora < 0.25) {
      // Pico do almoço (11h às 14h)
      hora = faker.number.float({ min: 11, max: 14.99 });
    } else if (rndHora < 0.65) {
      // Pico da noite (19h às 23h)
      hora = faker.number.float({ min: 19, max: 23.99 });
    } else if (rndHora < 0.85) {
      // Tarde comercial (15h às 18h)
      hora = faker.number.float({ min: 15, max: 18.99 });
    } else {
      // Madrugada e manhã (0h às 10h)
      hora = faker.number.float({ min: 0, max: 10.99 });
    }

    const millisDoDia = hora * 3600 * 1000;
    const finalTimestamp = diaEscolhido.data.getTime() + millisDoDia;

    sessionTimestamps.push({
      timestamp: Math.min(finalTimestamp, DATA_FIM.getTime() - 60000),
      isBlackFriday: diaEscolhido.isBlackFriday,
      isCopa: diaEscolhido.isCopa,
    });
  }

  // Ordena as sessões estritamente cronológicas
  sessionTimestamps.sort((a, b) => a.timestamp - b.timestamp);

  // 5. Geração Top-Down de Sessões, Clientes, Pedidos, Itens e Avaliações
  console.log('⚡ Gerando navegação, pedidos e clientes...');

  let clienteSeq = 0;
  let pedidoSeq = 0;
  let itemPedidoSeq = 0;
  let avaliacaoSeq = 0;

  interface ClienteMemory {
    id: number;
    nome: string;
    email: string;
    dataNascimento: string;
    cidade: string;
    estado: string;
    regiao: string;
    canalAquisicao: string;
    newsletter: boolean;
    dataCadastro: string;
    comprasCount: number;
  }

  const clientesMemory: ClienteMemory[] = [];
  const clientesCompradores: ClienteMemory[] = [];
  const emailsUsados = new Set<string>();

  const pedidosMemory: any[] = [];
  const itensPedidoMemory: any[] = [];
  const sessoesMemory: any[] = [];
  const avaliacoesMemory: any[] = [];

  function gerarClienteNovo(origemSessao: string, dataHoraSessao: Date): ClienteMemory {
    clienteSeq++;
    const estadoObj = weightedRandom(ESTADOS);
    const cidade = faker.helpers.arrayElement(estadoObj.cidades);

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const nomeCompleto = `${firstName} ${lastName}`;

    // Email único derivado do nome
    let baseEmail = `${firstName.toLowerCase()}.${lastName.toLowerCase()}`.replace(/[^a-z0-9.]/g, '');
    let email = `${baseEmail}@gmail.com`;
    let counter = 1;
    while (emailsUsados.has(email)) {
      email = `${baseEmail}${counter}@gmail.com`;
      counter++;
    }
    emailsUsados.add(email);

    // Idade entre 18 e 48, concentrada nos 18 a 30
    let idade: number;
    if (faker.number.float({ min: 0, max: 1 }) < 0.72) {
      idade = faker.number.int({ min: 18, max: 30 });
    } else {
      idade = faker.number.int({ min: 31, max: 48 });
    }
    const dataNascimento = new Date(dataHoraSessao.getTime() - idade * 365.25 * 24 * 3600 * 1000);

    // Newsletter: 55% geral, 90% se veio de E-mail
    const chanceNews = origemSessao === 'E-mail' ? 0.90 : 0.55;
    const newsletter = faker.number.float({ min: 0, max: 1 }) < chanceNews;

    // Data de cadastro: pouco antes do pedido (entre 5 e 45 minutos antes)
    const minsAntes = faker.number.int({ min: 5, max: 45 });
    const dataCadastro = new Date(dataHoraSessao.getTime() - minsAntes * 60 * 1000);

    const cli: ClienteMemory = {
      id: clienteSeq,
      nome: nomeCompleto,
      email,
      dataNascimento: toDateString(dataNascimento),
      cidade,
      estado: estadoObj.estado,
      regiao: estadoObj.regiao,
      canalAquisicao: origemSessao,
      newsletter,
      dataCadastro: toIso(dataCadastro),
      comprasCount: 0,
    };

    clientesMemory.push(cli);
    return cli;
  }

  // Loop de sessões
  for (let s = 0; s < sessionTimestamps.length; s++) {
    const sessaoInfo = sessionTimestamps[s];
    const sessaoId = BigInt(s + 1);
    const dataHoraSessao = new Date(sessaoInfo.timestamp);

    const origem = weightedRandom(ORIGENS);
    const dispositivo = weightedRandom(DISPOSITIVOS);

    // Multiplicadores
    // Probabilidade de carrinho = 0.14 x mult. origem x mult. dispositivo
    const probCarrinho = 0.14 * origem.multCarrinho * dispositivo.multCarrinho;
    const adicionouCarrinho = faker.number.float({ min: 0, max: 1 }) < probCarrinho;

    let converteu = false;
    let pedidoAssociadoId: number | null = null;
    let clienteSessaoId: number | null = null;

    if (adicionouCarrinho) {
      // Eventos multiplicadores de compra
      let multEvento = 1.0;
      if (sessaoInfo.isBlackFriday) multEvento *= 1.6;
      if (sessaoInfo.isCopa) multEvento *= 1.15;

      // Probabilidade de compra dado o carrinho = 0.18 x mult. origem x mult. dispositivo x mult. evento
      const probCompra = 0.18 * origem.multCompra * dispositivo.multCompra * multEvento;
      converteu = faker.number.float({ min: 0, max: 1 }) < probCompra;
    }

    if (converteu) {
      pedidoSeq++;
      pedidoAssociadoId = pedidoSeq;

      // Escolha do cliente (32% cliente já existente)
      let cliente: ClienteMemory;
      if (clientesCompradores.length > 0 && faker.number.float({ min: 0, max: 1 }) < 0.32) {
        // Sorteia cliente que já comprou
        cliente = faker.helpers.arrayElement(clientesCompradores);
      } else {
        cliente = gerarClienteNovo(origem.nome, dataHoraSessao);
        clientesCompradores.push(cliente);
      }
      cliente.comprasCount++;
      clienteSessaoId = cliente.id;

      // Data do pedido: 2 a 25 minutos após a sessão
      const delayMinutos = faker.number.int({ min: 2, max: 25 });
      const dataPedido = new Date(Math.min(dataHoraSessao.getTime() + delayMinutos * 60 * 1000, DATA_FIM.getTime()));

      // 4. Itens do pedido: 1 linha (68%), 2 (25%) ou 3 (7%), sem repetir produto + sabor
      const rndLinhas = faker.number.float({ min: 0, max: 1 });
      const qtdLinhas = rndLinhas < 0.68 ? 1 : rndLinhas < 0.93 ? 2 : 3;

      let valorItensNum = 0;
      const combinacoesUsadas = new Set<string>();

      const itensGerados: any[] = [];

      for (let l = 0; l < qtdLinhas; l++) {
        // Tenta achar produto e sabor não repetidos
        let produto = weightedRandom(PRODUTOS_FIXOS);
        let saborId: number | null = null;
        if (produto.tem_sabor) {
          saborId = weightedRandom(SABORES_FIXOS).id;
        }

        let key = `${produto.id}-${saborId || 0}`;
        if (combinacoesUsadas.has(key)) {
          // Tenta pegar outro sabor ou outro produto
          if (produto.tem_sabor) {
            const outros = SABORES_FIXOS.filter((sb) => sb.id !== saborId);
            saborId = weightedRandom(outros).id;
            key = `${produto.id}-${saborId}`;
          }
        }
        combinacoesUsadas.add(key);

        // Quantidade por tipo de produto
        let qtd = 1;
        if (produto.categoria === 'Energy Drink') {
          // 1 (35), 2 (25), 3 (15), 4 (15) ou 6 (10)
          const rQtd = faker.number.float({ min: 0, max: 100 });
          if (rQtd < 35) qtd = 1;
          else if (rQtd < 60) qtd = 2;
          else if (rQtd < 75) qtd = 3;
          else if (rQtd < 90) qtd = 4;
          else qtd = 6;
        } else if (produto.categoria === 'Snack') {
          // 1 (50), 2 (30) ou 3 (20)
          const rQtd = faker.number.float({ min: 0, max: 100 });
          if (rQtd < 50) qtd = 1;
          else if (rQtd < 80) qtd = 2;
          else qtd = 3;
        } else {
          // Pack e Combo: 1 (85) ou 2 (15)
          qtd = faker.number.float({ min: 0, max: 100 }) < 85 ? 1 : 2;
        }

        const precoUnitNum = parseFloat(produto.preco_atual);
        const subtotal = round2(qtd * precoUnitNum);
        valorItensNum = round2(valorItensNum + subtotal);

        itemPedidoSeq++;
        itensGerados.push({
          id: itemPedidoSeq,
          pedido_id: pedidoAssociadoId,
          produto_id: produto.id,
          sabor_id: saborId,
          quantidade: qtd,
          preco_unitario: produto.preco_atual, // numeric(10,2)
        });
      }

      for (const it of itensGerados) {
        itensPedidoMemory.push(it);
      }

      // Cupom e Desconto
      let cupom: string | null = null;
      let percDesconto = 0;

      if (sessaoInfo.isBlackFriday && faker.number.float({ min: 0, max: 1 }) < 0.70) {
        cupom = 'BLACKSPARK';
        percDesconto = 0.20;
      } else if (cliente.comprasCount === 1 && faker.number.float({ min: 0, max: 1 }) < 0.45) {
        cupom = 'PRIMEIRACOMPRA';
        percDesconto = 0.15;
      } else if (origem.nome === 'Influenciador' && faker.number.float({ min: 0, max: 1 }) < 0.35) {
        cupom = 'ATLETA15';
        percDesconto = 0.15;
      } else if (origem.nome === 'E-mail' && faker.number.float({ min: 0, max: 1 }) < 0.40) {
        cupom = 'SPARK10';
        percDesconto = 0.10;
      } else if (faker.number.float({ min: 0, max: 1 }) < 0.08) {
        cupom = 'SPARK10';
        percDesconto = 0.10;
      }

      const valorDescontoNum = round2(valorItensNum * percDesconto);

      // Frete
      let valorFreteNum = 0;
      if (valorItensNum < 150) {
        const baseFrete = FRETE_BASE[cliente.regiao] || 15.90;
        // Pequena variação aleatória de -R$ 1.50 a +R$ 2.50
        const variacao = faker.number.float({ min: -1.50, max: 2.50 });
        valorFreteNum = round2(Math.max(8.00, baseFrete + variacao));
      }

      // valorTotal = valorItens + valorFrete - valorDesconto
      const valorTotalNum = round2(valorItensNum + valorFreteNum - valorDescontoNum);

      // Forma de pagamento
      const formaPagamento = weightedRandom(FORMAS_PAGAMENTO).nome;

      // Status do pedido por idade
      const diasAtras = (DATA_FIM.getTime() - dataPedido.getTime()) / (24 * 3600 * 1000);
      let status = 'Entregue';

      if (diasAtras < 2) {
        // Pago (40%) ou Enviado (60%)
        status = faker.number.float({ min: 0, max: 1 }) < 0.40 ? 'Pago' : 'Enviado';
      } else if (diasAtras <= 7) {
        // Enviado (30%), Entregue (64%) ou Cancelado (6%)
        const rSt = faker.number.float({ min: 0, max: 100 });
        if (rSt < 30) status = 'Enviado';
        else if (rSt < 94) status = 'Entregue';
        else status = 'Cancelado';
      } else {
        // Cancelado (6%, ou 15% se boleto), Reembolsado (3%), resto Entregue
        const cancelRate = formaPagamento === 'Boleto' ? 15 : 6;
        const rSt = faker.number.float({ min: 0, max: 100 });
        if (rSt < cancelRate) status = 'Cancelado';
        else if (rSt < cancelRate + 3) status = 'Reembolsado';
        else status = 'Entregue';
      }

      pedidosMemory.push({
        id: pedidoAssociadoId,
        cliente_id: cliente.id,
        data_pedido: toIso(dataPedido),
        status,
        forma_pagamento: formaPagamento,
        cupom,
        valor_itens: valorItensNum.toFixed(2),
        valor_frete: valorFreteNum.toFixed(2),
        valor_desconto: valorDescontoNum.toFixed(2),
        valor_total: valorTotalNum.toFixed(2),
      });

      // 7. Avaliações (só de pedidos Entregues, ~22% deixam uma)
      if (status === 'Entregue' && faker.number.float({ min: 0, max: 1 }) < 0.22) {
        // Escolhe um produto do pedido
        const itemEscolhido = faker.helpers.arrayElement(itensGerados);
        const diasDepois = faker.number.int({ min: 3, max: 25 });
        const dataAvaliacao = new Date(Math.min(dataPedido.getTime() + diasDepois * 24 * 3600 * 1000, DATA_FIM.getTime()));

        // Nota: 5 (55%), 4 (28%), 3 (9%), 2 (4%), 1 (4%)
        const rNota = faker.number.float({ min: 0, max: 100 });
        let nota = 5;
        if (rNota < 55) nota = 5;
        else if (rNota < 83) nota = 4;
        else if (rNota < 92) nota = 3;
        else if (rNota < 96) nota = 2;
        else nota = 1;

        const comentario = faker.helpers.arrayElement(FRASES_AVALIACAO[nota]);

        avaliacaoSeq++;
        avaliacoesMemory.push({
          id: avaliacaoSeq,
          pedido_id: pedidoAssociadoId,
          produto_id: itemEscolhido.produto_id,
          cliente_id: cliente.id,
          nota,
          comentario,
          data_avaliacao: toIso(dataAvaliacao),
        });
      }
    } else {
      // Sessão sem compra: em ~18% associar cliente já existente
      if (clientesMemory.length > 0 && faker.number.float({ min: 0, max: 1 }) < 0.18) {
        clienteSessaoId = faker.helpers.arrayElement(clientesMemory).id;
      }
    }

    // 8. Métricas da Sessão:
    // Quem comprou tem mais páginas (5 ou mais) e duração maior (mediana ~4 min);
    // quem só navegou tem 1 a 4 páginas e poucos segundos.
    let paginasVistas: number;
    let duracaoSeg: number;

    if (converteu) {
      paginasVistas = faker.number.int({ min: 5, max: 14 });
      duracaoSeg = faker.number.int({ min: 140, max: 480 }); // 2 a 8 minutos
    } else if (adicionouCarrinho) {
      paginasVistas = faker.number.int({ min: 3, max: 7 });
      duracaoSeg = faker.number.int({ min: 45, max: 180 });
    } else {
      paginasVistas = faker.number.int({ min: 1, max: 4 });
      duracaoSeg = faker.number.int({ min: 6, max: 65 });
    }

    sessoesMemory.push({
      id: sessaoId,
      data_hora: toIso(dataHoraSessao),
      cliente_id: clienteSessaoId,
      origem: origem.nome,
      dispositivo: dispositivo.nome,
      paginas_vistas: paginasVistas,
      duracao_seg: duracaoSeg,
      adicionou_carrinho: adicionouCarrinho,
      converteu,
      pedido_id: pedidoAssociadoId,
    });
  }

  // Clientes extras (15% do total) que só assinaram a newsletter e nunca compraram
  const qtdClientesExtras = Math.round(clientesMemory.length * 0.15);
  console.log(`👤 Criando ${qtdClientesExtras.toLocaleString()} clientes newsletter sem compras...`);
  for (let k = 0; k < qtdClientesExtras; k++) {
    const dataExtra = new Date(faker.date.between({ from: DATA_INICIO, to: DATA_FIM }));
    const cliExtra = gerarClienteNovo('E-mail', dataExtra);
    cliExtra.newsletter = true;
  }

  // 6. Gravação em Lotes no Banco de Dados
  console.log('\n💾 Gravando registros no banco de dados em lotes...');

  console.log(`- Inserindo ${clientesMemory.length.toLocaleString()} clientes...`);
  await bulkInsert('clientes', clientesMemory.map((c) => ({
    id: c.id,
    nome: c.nome,
    email: c.email,
    data_nascimento: c.dataNascimento,
    cidade: c.cidade,
    estado: c.estado,
    regiao: c.regiao,
    canal_aquisicao: c.canalAquisicao,
    newsletter: c.newsletter,
    data_cadastro: c.dataCadastro,
  })));

  console.log(`- Inserindo ${pedidosMemory.length.toLocaleString()} pedidos...`);
  await bulkInsert('pedidos', pedidosMemory);

  console.log(`- Inserindo ${itensPedidoMemory.length.toLocaleString()} itens de pedido...`);
  await bulkInsert('itens_pedido', itensPedidoMemory);

  console.log(`- Inserindo ${sessoesMemory.length.toLocaleString()} sessões de navegação...`);
  await bulkInsert('sessoes', sessoesMemory);

  console.log(`- Inserindo ${avaliacoesMemory.length.toLocaleString()} avaliações...`);
  await bulkInsert('avaliacoes', avaliacoesMemory);

  // 7. Ajuste de sequences do PostgreSQL (para evitar conflitos em novos inserts do site)
  console.log('🔄 Ajustando sequences de autoincrement do PostgreSQL...');
  await db.transaction(async (tx) => {
    await tx.execute((db.raw.sql as any)`SELECT setval(pg_get_serial_sequence('sabores', 'id'), COALESCE((SELECT MAX(id) FROM sabores), 1))`.affectedCount().build());
    await tx.execute((db.raw.sql as any)`SELECT setval(pg_get_serial_sequence('produtos', 'id'), COALESCE((SELECT MAX(id) FROM produtos), 1))`.affectedCount().build());
    await tx.execute((db.raw.sql as any)`SELECT setval(pg_get_serial_sequence('clientes', 'id'), COALESCE((SELECT MAX(id) FROM clientes), 1))`.affectedCount().build());
    await tx.execute((db.raw.sql as any)`SELECT setval(pg_get_serial_sequence('pedidos', 'id'), COALESCE((SELECT MAX(id) FROM pedidos), 1))`.affectedCount().build());
    await tx.execute((db.raw.sql as any)`SELECT setval(pg_get_serial_sequence('itens_pedido', 'id'), COALESCE((SELECT MAX(id) FROM itens_pedido), 1))`.affectedCount().build());
    await tx.execute((db.raw.sql as any)`SELECT setval(pg_get_serial_sequence('avaliacoes', 'id'), COALESCE((SELECT MAX(id) FROM avaliacoes), 1))`.affectedCount().build());
    await tx.execute((db.raw.sql as any)`SELECT setval(pg_get_serial_sequence('sessoes', 'id'), COALESCE((SELECT MAX(id) FROM sessoes), 1))`.affectedCount().build());
  });
  console.log('✅ Sequences sincronizadas.');

  // 8. Resumo e Estatísticas de Validação
  const totalReceitaBruta = pedidosMemory
    .filter((p) => p.status === 'Pago' || p.status === 'Enviado' || p.status === 'Entregue')
    .reduce((acc, p) => acc + parseFloat(p.valor_total), 0);

  const totalDescontos = pedidosMemory
    .filter((p) => p.status === 'Pago' || p.status === 'Enviado' || p.status === 'Entregue')
    .reduce((acc, p) => acc + parseFloat(p.valor_desconto), 0);

  const taxaConversao = (pedidosMemory.length / sessoesMemory.length) * 100;
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log(`\n======================================================`);
  console.log(`📊 RESUMO DA POPULAÇÃO DA LOJA SPARK (${elapsed}s)`);
  console.log(`======================================================`);
  console.log(`• Sabores cadastrados:   ${SABORES_FIXOS.length}`);
  console.log(`• Produtos no catálogo:  ${PRODUTOS_FIXOS.length}`);
  console.log(`• Clientes gerados:      ${clientesMemory.length.toLocaleString()} (sendo ${clientesCompradores.length.toLocaleString()} compradores)`);
  console.log(`• Sessões gravadas:      ${sessoesMemory.length.toLocaleString()}`);
  console.log(`• Pedidos realizados:    ${pedidosMemory.length.toLocaleString()}`);
  console.log(`• Itens de pedidos:      ${itensPedidoMemory.length.toLocaleString()}`);
  console.log(`• Avaliações deixadas:   ${avaliacoesMemory.length.toLocaleString()}`);
  console.log(`------------------------------------------------------`);
  console.log(`• Conversão geral:       ${taxaConversao.toFixed(2)}% (meta: ~3%)`);
  console.log(`• Receita líquida sim.:  R$ ${round2(totalReceitaBruta).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
  console.log(`• Descontos concedidos:  R$ ${round2(totalDescontos).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
  console.log(`======================================================\n`);
}

main()
  .catch((e) => {
    console.error('❌ Erro fatal durante execução do seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await db.close();
  });
