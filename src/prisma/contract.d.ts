
import type { CodecTypes as PgTypes, Numeric } from '@prisma/orm-postgres/target/codec-types';
import type { QueryOperationTypes as PgTargetQueryOps } from '@prisma/orm-postgres/target/operation-types';

import type {
  ContractWithTypeMaps,
  RelationKeys,
  TypeMaps as TypeMapsType,
} from '@prisma/orm-postgres/family-contract/types';
import type {
  Contract as ContractType,
  ExecutionHashBase,
  NamespaceId,
  ProfileHashBase,
  StorageHashBase,
} from '@prisma/orm-postgres/contract/types';

export type StorageHash =
  StorageHashBase<'02430cb6fc1e1667646abe375fc8ba7cd42f5b32010c4ac9d81e65979baffd79'>;
export type ExecutionHash =
  ExecutionHashBase<'4e88564095b5e0ba7904ffdba3c563ef916d87688c8c483c67055f71a9194f0f'>;
export type ProfileHash =
  ProfileHashBase<'3916f444a8a17ad749191acf9e08dad97d1a327b88c2f1d45d12f240296aa8b2'>;

export type CodecTypes = PgTypes;
export type LaneCodecTypes = CodecTypes;
export type QueryOperationTypes = PgTargetQueryOps<CodecTypes>;
export type AggregateTypes = {
  readonly avg: {
    readonly byCodec: {
      readonly 'pg/float@1': { readonly output: 'pg/float8@1'; readonly nullable: true };
      readonly 'pg/float4@1': { readonly output: 'pg/float8@1'; readonly nullable: true };
      readonly 'pg/float8@1': { readonly output: 'pg/float8@1'; readonly nullable: true };
      readonly 'pg/int@1': { readonly output: 'pg/float8@1'; readonly nullable: true };
      readonly 'pg/int2@1': { readonly output: 'pg/float8@1'; readonly nullable: true };
      readonly 'pg/int4@1': { readonly output: 'pg/float8@1'; readonly nullable: true };
      readonly 'pg/int8@1': { readonly output: 'pg/float8@1'; readonly nullable: true };
      readonly 'pg/int8number@1': { readonly output: 'pg/float8@1'; readonly nullable: true };
      readonly 'pg/interval@1': { readonly output: 'pg/interval@1'; readonly nullable: true };
      readonly 'pg/numeric@1': { readonly output: 'pg/numeric@1'; readonly nullable: true };
      readonly 'pg/time-string@1': { readonly output: 'pg/interval@1'; readonly nullable: true };
      readonly 'pg/time-temporal@1': { readonly output: 'pg/interval@1'; readonly nullable: true };
      readonly 'pg/unboundedint@1': { readonly output: 'pg/float8@1'; readonly nullable: true };
      readonly 'sql/float@1': { readonly output: 'pg/float8@1'; readonly nullable: true };
      readonly 'sql/int@1': { readonly output: 'pg/float8@1'; readonly nullable: true };
    };
  };
  readonly avgDecimal: {
    readonly byCodec: {
      readonly 'pg/int@1': { readonly output: 'pg/numeric@1'; readonly nullable: true };
      readonly 'pg/int2@1': { readonly output: 'pg/numeric@1'; readonly nullable: true };
      readonly 'pg/int4@1': { readonly output: 'pg/numeric@1'; readonly nullable: true };
      readonly 'pg/int8@1': { readonly output: 'pg/numeric@1'; readonly nullable: true };
      readonly 'pg/int8number@1': { readonly output: 'pg/numeric@1'; readonly nullable: true };
      readonly 'pg/numeric@1': { readonly output: 'pg/numeric@1'; readonly nullable: true };
      readonly 'pg/unboundedint@1': { readonly output: 'pg/numeric@1'; readonly nullable: true };
      readonly 'sql/int@1': { readonly output: 'pg/numeric@1'; readonly nullable: true };
    };
  };
  readonly count: {
    readonly byCodec: {};
    readonly withoutInput: { readonly output: 'pg/int8number@1'; readonly nullable: false };
    readonly anyInput: { readonly output: 'pg/int8number@1'; readonly nullable: false };
  };
  readonly countBigInt: {
    readonly byCodec: {};
    readonly withoutInput: { readonly output: 'pg/int8@1'; readonly nullable: false };
    readonly anyInput: { readonly output: 'pg/int8@1'; readonly nullable: false };
  };
  readonly max: {
    readonly byCodec: {
      readonly 'pg/char@1': { readonly output: 'pg/char@1'; readonly nullable: true };
      readonly 'pg/date-string@1': { readonly output: 'pg/date-string@1'; readonly nullable: true };
      readonly 'pg/date-temporal@1': {
        readonly output: 'pg/date-temporal@1';
        readonly nullable: true;
      };
      readonly 'pg/enum@1': { readonly output: 'pg/enum@1'; readonly nullable: true };
      readonly 'pg/float@1': { readonly output: 'pg/float@1'; readonly nullable: true };
      readonly 'pg/float4@1': { readonly output: 'pg/float4@1'; readonly nullable: true };
      readonly 'pg/float8@1': { readonly output: 'pg/float8@1'; readonly nullable: true };
      readonly 'pg/inet@1': { readonly output: 'pg/inet@1'; readonly nullable: true };
      readonly 'pg/int@1': { readonly output: 'pg/int@1'; readonly nullable: true };
      readonly 'pg/int2@1': { readonly output: 'pg/int2@1'; readonly nullable: true };
      readonly 'pg/int4@1': { readonly output: 'pg/int4@1'; readonly nullable: true };
      readonly 'pg/int8@1': { readonly output: 'pg/int8@1'; readonly nullable: true };
      readonly 'pg/int8number@1': { readonly output: 'pg/int8number@1'; readonly nullable: true };
      readonly 'pg/interval@1': { readonly output: 'pg/interval@1'; readonly nullable: true };
      readonly 'pg/numeric@1': { readonly output: 'pg/numeric@1'; readonly nullable: true };
      readonly 'pg/text-array@1': { readonly output: 'pg/text-array@1'; readonly nullable: true };
      readonly 'pg/text@1': { readonly output: 'pg/text@1'; readonly nullable: true };
      readonly 'pg/time-string@1': { readonly output: 'pg/time-string@1'; readonly nullable: true };
      readonly 'pg/time-temporal@1': {
        readonly output: 'pg/time-temporal@1';
        readonly nullable: true;
      };
      readonly 'pg/timestamp-string@1': {
        readonly output: 'pg/timestamp-string@1';
        readonly nullable: true;
      };
      readonly 'pg/timestamp-temporal@1': {
        readonly output: 'pg/timestamp-temporal@1';
        readonly nullable: true;
      };
      readonly 'pg/timestamptz-date@1': {
        readonly output: 'pg/timestamptz-date@1';
        readonly nullable: true;
      };
      readonly 'pg/timestamptz-string@1': {
        readonly output: 'pg/timestamptz-string@1';
        readonly nullable: true;
      };
      readonly 'pg/timestamptz-temporal@1': {
        readonly output: 'pg/timestamptz-temporal@1';
        readonly nullable: true;
      };
      readonly 'pg/timetz@1': { readonly output: 'pg/timetz@1'; readonly nullable: true };
      readonly 'pg/unboundedint@1': {
        readonly output: 'pg/unboundedint@1';
        readonly nullable: true;
      };
      readonly 'pg/varchar@1': { readonly output: 'pg/text@1'; readonly nullable: true };
      readonly 'sql/char@1': { readonly output: 'sql/char@1'; readonly nullable: true };
      readonly 'sql/float@1': { readonly output: 'sql/float@1'; readonly nullable: true };
      readonly 'sql/int@1': { readonly output: 'sql/int@1'; readonly nullable: true };
      readonly 'sql/text@1': { readonly output: 'sql/text@1'; readonly nullable: true };
      readonly 'sql/varchar@1': { readonly output: 'pg/text@1'; readonly nullable: true };
    };
  };
  readonly min: {
    readonly byCodec: {
      readonly 'pg/char@1': { readonly output: 'pg/char@1'; readonly nullable: true };
      readonly 'pg/date-string@1': { readonly output: 'pg/date-string@1'; readonly nullable: true };
      readonly 'pg/date-temporal@1': {
        readonly output: 'pg/date-temporal@1';
        readonly nullable: true;
      };
      readonly 'pg/enum@1': { readonly output: 'pg/enum@1'; readonly nullable: true };
      readonly 'pg/float@1': { readonly output: 'pg/float@1'; readonly nullable: true };
      readonly 'pg/float4@1': { readonly output: 'pg/float4@1'; readonly nullable: true };
      readonly 'pg/float8@1': { readonly output: 'pg/float8@1'; readonly nullable: true };
      readonly 'pg/inet@1': { readonly output: 'pg/inet@1'; readonly nullable: true };
      readonly 'pg/int@1': { readonly output: 'pg/int@1'; readonly nullable: true };
      readonly 'pg/int2@1': { readonly output: 'pg/int2@1'; readonly nullable: true };
      readonly 'pg/int4@1': { readonly output: 'pg/int4@1'; readonly nullable: true };
      readonly 'pg/int8@1': { readonly output: 'pg/int8@1'; readonly nullable: true };
      readonly 'pg/int8number@1': { readonly output: 'pg/int8number@1'; readonly nullable: true };
      readonly 'pg/interval@1': { readonly output: 'pg/interval@1'; readonly nullable: true };
      readonly 'pg/numeric@1': { readonly output: 'pg/numeric@1'; readonly nullable: true };
      readonly 'pg/text-array@1': { readonly output: 'pg/text-array@1'; readonly nullable: true };
      readonly 'pg/text@1': { readonly output: 'pg/text@1'; readonly nullable: true };
      readonly 'pg/time-string@1': { readonly output: 'pg/time-string@1'; readonly nullable: true };
      readonly 'pg/time-temporal@1': {
        readonly output: 'pg/time-temporal@1';
        readonly nullable: true;
      };
      readonly 'pg/timestamp-string@1': {
        readonly output: 'pg/timestamp-string@1';
        readonly nullable: true;
      };
      readonly 'pg/timestamp-temporal@1': {
        readonly output: 'pg/timestamp-temporal@1';
        readonly nullable: true;
      };
      readonly 'pg/timestamptz-date@1': {
        readonly output: 'pg/timestamptz-date@1';
        readonly nullable: true;
      };
      readonly 'pg/timestamptz-string@1': {
        readonly output: 'pg/timestamptz-string@1';
        readonly nullable: true;
      };
      readonly 'pg/timestamptz-temporal@1': {
        readonly output: 'pg/timestamptz-temporal@1';
        readonly nullable: true;
      };
      readonly 'pg/timetz@1': { readonly output: 'pg/timetz@1'; readonly nullable: true };
      readonly 'pg/unboundedint@1': {
        readonly output: 'pg/unboundedint@1';
        readonly nullable: true;
      };
      readonly 'pg/varchar@1': { readonly output: 'pg/text@1'; readonly nullable: true };
      readonly 'sql/char@1': { readonly output: 'sql/char@1'; readonly nullable: true };
      readonly 'sql/float@1': { readonly output: 'sql/float@1'; readonly nullable: true };
      readonly 'sql/int@1': { readonly output: 'sql/int@1'; readonly nullable: true };
      readonly 'sql/text@1': { readonly output: 'sql/text@1'; readonly nullable: true };
      readonly 'sql/varchar@1': { readonly output: 'pg/text@1'; readonly nullable: true };
    };
  };
  readonly sum: {
    readonly byCodec: {
      readonly 'pg/float@1': { readonly output: 'pg/float8@1'; readonly nullable: true };
      readonly 'pg/float4@1': { readonly output: 'pg/float4@1'; readonly nullable: true };
      readonly 'pg/float8@1': { readonly output: 'pg/float8@1'; readonly nullable: true };
      readonly 'pg/int@1': { readonly output: 'pg/int8number@1'; readonly nullable: true };
      readonly 'pg/int2@1': { readonly output: 'pg/int8number@1'; readonly nullable: true };
      readonly 'pg/int4@1': { readonly output: 'pg/int8number@1'; readonly nullable: true };
      readonly 'pg/int8@1': { readonly output: 'pg/int8number@1'; readonly nullable: true };
      readonly 'pg/int8number@1': { readonly output: 'pg/int8number@1'; readonly nullable: true };
      readonly 'pg/interval@1': { readonly output: 'pg/interval@1'; readonly nullable: true };
      readonly 'pg/numeric@1': { readonly output: 'pg/numeric@1'; readonly nullable: true };
      readonly 'pg/time-string@1': { readonly output: 'pg/interval@1'; readonly nullable: true };
      readonly 'pg/time-temporal@1': { readonly output: 'pg/interval@1'; readonly nullable: true };
      readonly 'pg/unboundedint@1': {
        readonly output: 'pg/unboundedint@1';
        readonly nullable: true;
      };
      readonly 'sql/float@1': { readonly output: 'pg/float8@1'; readonly nullable: true };
      readonly 'sql/int@1': { readonly output: 'pg/int8number@1'; readonly nullable: true };
    };
  };
  readonly sumBigInt: {
    readonly byCodec: {
      readonly 'pg/int@1': { readonly output: 'pg/int8@1'; readonly nullable: true };
      readonly 'pg/int2@1': { readonly output: 'pg/int8@1'; readonly nullable: true };
      readonly 'pg/int4@1': { readonly output: 'pg/int8@1'; readonly nullable: true };
      readonly 'pg/int8@1': { readonly output: 'pg/unboundedint@1'; readonly nullable: true };
      readonly 'pg/int8number@1': { readonly output: 'pg/unboundedint@1'; readonly nullable: true };
      readonly 'pg/unboundedint@1': {
        readonly output: 'pg/unboundedint@1';
        readonly nullable: true;
      };
      readonly 'sql/int@1': { readonly output: 'pg/int8@1'; readonly nullable: true };
    };
  };
};
type DefaultLiteralValue<CodecId extends string, Encoded> = CodecId extends keyof CodecTypes
  ? Encoded extends CodecTypes[CodecId]['json']
    ? Encoded
    : CodecTypes[CodecId]['json']
  : Encoded;

export type FieldOutputTypes = {
  readonly public: {
    readonly Avaliacao: {
      readonly clienteId: CodecTypes['pg/int4@1']['output'];
      readonly comentario: CodecTypes['pg/text@1']['output'] | null;
      readonly dataAvaliacao: CodecTypes['pg/timestamptz-string@1']['output'];
      readonly id: CodecTypes['pg/int4@1']['output'];
      readonly nota: CodecTypes['pg/int4@1']['output'];
      readonly pedidoId: CodecTypes['pg/int4@1']['output'];
      readonly produtoId: CodecTypes['pg/int4@1']['output'];
    };
    readonly Cliente: {
      readonly canalAquisicao: CodecTypes['pg/text@1']['output'];
      readonly cidade: CodecTypes['pg/text@1']['output'];
      readonly dataCadastro: CodecTypes['pg/timestamptz-string@1']['output'];
      readonly dataNascimento: CodecTypes['pg/date-string@1']['output'];
      readonly email: CodecTypes['pg/text@1']['output'];
      readonly estado: CodecTypes['pg/text@1']['output'];
      readonly id: CodecTypes['pg/int4@1']['output'];
      readonly newsletter: CodecTypes['pg/bool@1']['output'];
      readonly nome: CodecTypes['pg/text@1']['output'];
      readonly regiao: CodecTypes['pg/text@1']['output'];
    };
    readonly ItemPedido: {
      readonly id: CodecTypes['pg/int4@1']['output'];
      readonly pedidoId: CodecTypes['pg/int4@1']['output'];
      readonly precoUnitario: Numeric<10, 2>;
      readonly produtoId: CodecTypes['pg/int4@1']['output'];
      readonly quantidade: CodecTypes['pg/int4@1']['output'];
      readonly saborId: CodecTypes['pg/int4@1']['output'] | null;
    };
    readonly Pedido: {
      readonly clienteId: CodecTypes['pg/int4@1']['output'];
      readonly cupom: CodecTypes['pg/text@1']['output'] | null;
      readonly dataPedido: CodecTypes['pg/timestamptz-string@1']['output'];
      readonly formaPagamento: CodecTypes['pg/text@1']['output'];
      readonly id: CodecTypes['pg/int4@1']['output'];
      readonly status: 'Pago' | 'Enviado' | 'Entregue' | 'Cancelado' | 'Reembolsado';
      readonly valorDesconto: Numeric<10, 2>;
      readonly valorFrete: Numeric<10, 2>;
      readonly valorItens: Numeric<10, 2>;
      readonly valorTotal: Numeric<10, 2>;
    };
    readonly Post: {
      readonly authorId: CodecTypes['pg/int4@1']['output'];
      readonly content: CodecTypes['pg/text@1']['output'] | null;
      readonly createdAt: CodecTypes['pg/timestamptz-string@1']['output'];
      readonly id: CodecTypes['pg/int4@1']['output'];
      readonly title: CodecTypes['pg/text@1']['output'];
      readonly updatedAt: CodecTypes['pg/timestamptz-string@1']['output'];
    };
    readonly Produto: {
      readonly categoria: 'Energy Drink' | 'Pack' | 'Combo' | 'Snack';
      readonly custo: Numeric<10, 2>;
      readonly id: CodecTypes['pg/int4@1']['output'];
      readonly nome: CodecTypes['pg/text@1']['output'];
      readonly precoAtual: Numeric<10, 2>;
      readonly precoCheio: Numeric<10, 2>;
      readonly qtdUnidades: CodecTypes['pg/int4@1']['output'];
      readonly temSabor: CodecTypes['pg/bool@1']['output'];
    };
    readonly Sabor: {
      readonly corHex: CodecTypes['pg/text@1']['output'];
      readonly id: CodecTypes['pg/int4@1']['output'];
      readonly nome: CodecTypes['pg/text@1']['output'];
    };
    readonly Sessao: {
      readonly adicionouCarrinho: CodecTypes['pg/bool@1']['output'];
      readonly clienteId: CodecTypes['pg/int4@1']['output'] | null;
      readonly converteu: CodecTypes['pg/bool@1']['output'];
      readonly dataHora: CodecTypes['pg/timestamptz-string@1']['output'];
      readonly dispositivo: CodecTypes['pg/text@1']['output'];
      readonly duracaoSeg: CodecTypes['pg/int4@1']['output'];
      readonly id: CodecTypes['pg/int8@1']['output'];
      readonly origem: CodecTypes['pg/text@1']['output'];
      readonly paginasVistas: CodecTypes['pg/int4@1']['output'];
      readonly pedidoId: CodecTypes['pg/int4@1']['output'] | null;
    };
    readonly User: {
      readonly createdAt: CodecTypes['pg/timestamptz-string@1']['output'];
      readonly email: CodecTypes['pg/text@1']['output'];
      readonly id: CodecTypes['pg/int4@1']['output'];
      readonly name: CodecTypes['pg/text@1']['output'] | null;
      readonly updatedAt: CodecTypes['pg/timestamptz-string@1']['output'];
      readonly username: CodecTypes['pg/text@1']['output'] | null;
    };
  };
};
export type FieldInputTypes = {
  readonly public: {
    readonly Avaliacao: {
      readonly clienteId: CodecTypes['pg/int4@1']['input'];
      readonly comentario: CodecTypes['pg/text@1']['input'] | null;
      readonly dataAvaliacao: CodecTypes['pg/timestamptz-string@1']['input'];
      readonly id: CodecTypes['pg/int4@1']['input'];
      readonly nota: CodecTypes['pg/int4@1']['input'];
      readonly pedidoId: CodecTypes['pg/int4@1']['input'];
      readonly produtoId: CodecTypes['pg/int4@1']['input'];
    };
    readonly Cliente: {
      readonly canalAquisicao: CodecTypes['pg/text@1']['input'];
      readonly cidade: CodecTypes['pg/text@1']['input'];
      readonly dataCadastro: CodecTypes['pg/timestamptz-string@1']['input'];
      readonly dataNascimento: CodecTypes['pg/date-string@1']['input'];
      readonly email: CodecTypes['pg/text@1']['input'];
      readonly estado: CodecTypes['pg/text@1']['input'];
      readonly id: CodecTypes['pg/int4@1']['input'];
      readonly newsletter: CodecTypes['pg/bool@1']['input'];
      readonly nome: CodecTypes['pg/text@1']['input'];
      readonly regiao: CodecTypes['pg/text@1']['input'];
    };
    readonly ItemPedido: {
      readonly id: CodecTypes['pg/int4@1']['input'];
      readonly pedidoId: CodecTypes['pg/int4@1']['input'];
      readonly precoUnitario: CodecTypes['pg/numeric@1']['input'];
      readonly produtoId: CodecTypes['pg/int4@1']['input'];
      readonly quantidade: CodecTypes['pg/int4@1']['input'];
      readonly saborId: CodecTypes['pg/int4@1']['input'] | null;
    };
    readonly Pedido: {
      readonly clienteId: CodecTypes['pg/int4@1']['input'];
      readonly cupom: CodecTypes['pg/text@1']['input'] | null;
      readonly dataPedido: CodecTypes['pg/timestamptz-string@1']['input'];
      readonly formaPagamento: CodecTypes['pg/text@1']['input'];
      readonly id: CodecTypes['pg/int4@1']['input'];
      readonly status: 'Pago' | 'Enviado' | 'Entregue' | 'Cancelado' | 'Reembolsado';
      readonly valorDesconto: CodecTypes['pg/numeric@1']['input'];
      readonly valorFrete: CodecTypes['pg/numeric@1']['input'];
      readonly valorItens: CodecTypes['pg/numeric@1']['input'];
      readonly valorTotal: CodecTypes['pg/numeric@1']['input'];
    };
    readonly Post: {
      readonly authorId: CodecTypes['pg/int4@1']['input'];
      readonly content: CodecTypes['pg/text@1']['input'] | null;
      readonly createdAt: CodecTypes['pg/timestamptz-string@1']['input'];
      readonly id: CodecTypes['pg/int4@1']['input'];
      readonly title: CodecTypes['pg/text@1']['input'];
      readonly updatedAt: CodecTypes['pg/timestamptz-string@1']['input'];
    };
    readonly Produto: {
      readonly categoria: 'Energy Drink' | 'Pack' | 'Combo' | 'Snack';
      readonly custo: CodecTypes['pg/numeric@1']['input'];
      readonly id: CodecTypes['pg/int4@1']['input'];
      readonly nome: CodecTypes['pg/text@1']['input'];
      readonly precoAtual: CodecTypes['pg/numeric@1']['input'];
      readonly precoCheio: CodecTypes['pg/numeric@1']['input'];
      readonly qtdUnidades: CodecTypes['pg/int4@1']['input'];
      readonly temSabor: CodecTypes['pg/bool@1']['input'];
    };
    readonly Sabor: {
      readonly corHex: CodecTypes['pg/text@1']['input'];
      readonly id: CodecTypes['pg/int4@1']['input'];
      readonly nome: CodecTypes['pg/text@1']['input'];
    };
    readonly Sessao: {
      readonly adicionouCarrinho: CodecTypes['pg/bool@1']['input'];
      readonly clienteId: CodecTypes['pg/int4@1']['input'] | null;
      readonly converteu: CodecTypes['pg/bool@1']['input'];
      readonly dataHora: CodecTypes['pg/timestamptz-string@1']['input'];
      readonly dispositivo: CodecTypes['pg/text@1']['input'];
      readonly duracaoSeg: CodecTypes['pg/int4@1']['input'];
      readonly id: CodecTypes['pg/int8@1']['input'];
      readonly origem: CodecTypes['pg/text@1']['input'];
      readonly paginasVistas: CodecTypes['pg/int4@1']['input'];
      readonly pedidoId: CodecTypes['pg/int4@1']['input'] | null;
    };
    readonly User: {
      readonly createdAt: CodecTypes['pg/timestamptz-string@1']['input'];
      readonly email: CodecTypes['pg/text@1']['input'];
      readonly id: CodecTypes['pg/int4@1']['input'];
      readonly name: CodecTypes['pg/text@1']['input'] | null;
      readonly updatedAt: CodecTypes['pg/timestamptz-string@1']['input'];
      readonly username: CodecTypes['pg/text@1']['input'] | null;
    };
  };
};
export type StorageColumnTypes = {
  readonly public: {
    readonly avaliacoes: {
      readonly cliente_id: CodecTypes['pg/int4@1']['output'];
      readonly comentario: CodecTypes['pg/text@1']['output'] | null;
      readonly data_avaliacao: CodecTypes['pg/timestamptz-string@1']['output'];
      readonly id: CodecTypes['pg/int4@1']['output'];
      readonly nota: CodecTypes['pg/int4@1']['output'];
      readonly pedido_id: CodecTypes['pg/int4@1']['output'];
      readonly produto_id: CodecTypes['pg/int4@1']['output'];
    };
    readonly clientes: {
      readonly canal_aquisicao: CodecTypes['pg/text@1']['output'];
      readonly cidade: CodecTypes['pg/text@1']['output'];
      readonly data_cadastro: CodecTypes['pg/timestamptz-string@1']['output'];
      readonly data_nascimento: CodecTypes['pg/date-string@1']['output'];
      readonly email: CodecTypes['pg/text@1']['output'];
      readonly estado: CodecTypes['pg/text@1']['output'];
      readonly id: CodecTypes['pg/int4@1']['output'];
      readonly newsletter: CodecTypes['pg/bool@1']['output'];
      readonly nome: CodecTypes['pg/text@1']['output'];
      readonly regiao: CodecTypes['pg/text@1']['output'];
    };
    readonly itens_pedido: {
      readonly id: CodecTypes['pg/int4@1']['output'];
      readonly pedido_id: CodecTypes['pg/int4@1']['output'];
      readonly preco_unitario: Numeric<10, 2>;
      readonly produto_id: CodecTypes['pg/int4@1']['output'];
      readonly quantidade: CodecTypes['pg/int4@1']['output'];
      readonly sabor_id: CodecTypes['pg/int4@1']['output'] | null;
    };
    readonly pedidos: {
      readonly cliente_id: CodecTypes['pg/int4@1']['output'];
      readonly cupom: CodecTypes['pg/text@1']['output'] | null;
      readonly data_pedido: CodecTypes['pg/timestamptz-string@1']['output'];
      readonly forma_pagamento: CodecTypes['pg/text@1']['output'];
      readonly id: CodecTypes['pg/int4@1']['output'];
      readonly status: 'Pago' | 'Enviado' | 'Entregue' | 'Cancelado' | 'Reembolsado';
      readonly valor_desconto: Numeric<10, 2>;
      readonly valor_frete: Numeric<10, 2>;
      readonly valor_itens: Numeric<10, 2>;
      readonly valor_total: Numeric<10, 2>;
    };
    readonly Post: {
      readonly authorId: CodecTypes['pg/int4@1']['output'];
      readonly content: CodecTypes['pg/text@1']['output'] | null;
      readonly createdAt: CodecTypes['pg/timestamptz-string@1']['output'];
      readonly id: CodecTypes['pg/int4@1']['output'];
      readonly title: CodecTypes['pg/text@1']['output'];
      readonly updatedAt: CodecTypes['pg/timestamptz-string@1']['output'];
    };
    readonly produtos: {
      readonly categoria: 'Energy Drink' | 'Pack' | 'Combo' | 'Snack';
      readonly custo: Numeric<10, 2>;
      readonly id: CodecTypes['pg/int4@1']['output'];
      readonly nome: CodecTypes['pg/text@1']['output'];
      readonly preco_atual: Numeric<10, 2>;
      readonly preco_cheio: Numeric<10, 2>;
      readonly qtd_unidades: CodecTypes['pg/int4@1']['output'];
      readonly tem_sabor: CodecTypes['pg/bool@1']['output'];
    };
    readonly sabores: {
      readonly cor_hex: CodecTypes['pg/text@1']['output'];
      readonly id: CodecTypes['pg/int4@1']['output'];
      readonly nome: CodecTypes['pg/text@1']['output'];
    };
    readonly sessoes: {
      readonly adicionou_carrinho: CodecTypes['pg/bool@1']['output'];
      readonly cliente_id: CodecTypes['pg/int4@1']['output'] | null;
      readonly converteu: CodecTypes['pg/bool@1']['output'];
      readonly data_hora: CodecTypes['pg/timestamptz-string@1']['output'];
      readonly dispositivo: CodecTypes['pg/text@1']['output'];
      readonly duracao_seg: CodecTypes['pg/int4@1']['output'];
      readonly id: CodecTypes['pg/int8@1']['output'];
      readonly origem: CodecTypes['pg/text@1']['output'];
      readonly paginas_vistas: CodecTypes['pg/int4@1']['output'];
      readonly pedido_id: CodecTypes['pg/int4@1']['output'] | null;
    };
    readonly User: {
      readonly createdAt: CodecTypes['pg/timestamptz-string@1']['output'];
      readonly email: CodecTypes['pg/text@1']['output'];
      readonly id: CodecTypes['pg/int4@1']['output'];
      readonly name: CodecTypes['pg/text@1']['output'] | null;
      readonly updatedAt: CodecTypes['pg/timestamptz-string@1']['output'];
      readonly username: CodecTypes['pg/text@1']['output'] | null;
    };
  };
};
export type StorageColumnInputTypes = {
  readonly public: {
    readonly avaliacoes: {
      readonly cliente_id: CodecTypes['pg/int4@1']['input'];
      readonly comentario: CodecTypes['pg/text@1']['input'] | null;
      readonly data_avaliacao: CodecTypes['pg/timestamptz-string@1']['input'];
      readonly id: CodecTypes['pg/int4@1']['input'];
      readonly nota: CodecTypes['pg/int4@1']['input'];
      readonly pedido_id: CodecTypes['pg/int4@1']['input'];
      readonly produto_id: CodecTypes['pg/int4@1']['input'];
    };
    readonly clientes: {
      readonly canal_aquisicao: CodecTypes['pg/text@1']['input'];
      readonly cidade: CodecTypes['pg/text@1']['input'];
      readonly data_cadastro: CodecTypes['pg/timestamptz-string@1']['input'];
      readonly data_nascimento: CodecTypes['pg/date-string@1']['input'];
      readonly email: CodecTypes['pg/text@1']['input'];
      readonly estado: CodecTypes['pg/text@1']['input'];
      readonly id: CodecTypes['pg/int4@1']['input'];
      readonly newsletter: CodecTypes['pg/bool@1']['input'];
      readonly nome: CodecTypes['pg/text@1']['input'];
      readonly regiao: CodecTypes['pg/text@1']['input'];
    };
    readonly itens_pedido: {
      readonly id: CodecTypes['pg/int4@1']['input'];
      readonly pedido_id: CodecTypes['pg/int4@1']['input'];
      readonly preco_unitario: CodecTypes['pg/numeric@1']['input'];
      readonly produto_id: CodecTypes['pg/int4@1']['input'];
      readonly quantidade: CodecTypes['pg/int4@1']['input'];
      readonly sabor_id: CodecTypes['pg/int4@1']['input'] | null;
    };
    readonly pedidos: {
      readonly cliente_id: CodecTypes['pg/int4@1']['input'];
      readonly cupom: CodecTypes['pg/text@1']['input'] | null;
      readonly data_pedido: CodecTypes['pg/timestamptz-string@1']['input'];
      readonly forma_pagamento: CodecTypes['pg/text@1']['input'];
      readonly id: CodecTypes['pg/int4@1']['input'];
      readonly status: 'Pago' | 'Enviado' | 'Entregue' | 'Cancelado' | 'Reembolsado';
      readonly valor_desconto: CodecTypes['pg/numeric@1']['input'];
      readonly valor_frete: CodecTypes['pg/numeric@1']['input'];
      readonly valor_itens: CodecTypes['pg/numeric@1']['input'];
      readonly valor_total: CodecTypes['pg/numeric@1']['input'];
    };
    readonly Post: {
      readonly authorId: CodecTypes['pg/int4@1']['input'];
      readonly content: CodecTypes['pg/text@1']['input'] | null;
      readonly createdAt: CodecTypes['pg/timestamptz-string@1']['input'];
      readonly id: CodecTypes['pg/int4@1']['input'];
      readonly title: CodecTypes['pg/text@1']['input'];
      readonly updatedAt: CodecTypes['pg/timestamptz-string@1']['input'];
    };
    readonly produtos: {
      readonly categoria: 'Energy Drink' | 'Pack' | 'Combo' | 'Snack';
      readonly custo: CodecTypes['pg/numeric@1']['input'];
      readonly id: CodecTypes['pg/int4@1']['input'];
      readonly nome: CodecTypes['pg/text@1']['input'];
      readonly preco_atual: CodecTypes['pg/numeric@1']['input'];
      readonly preco_cheio: CodecTypes['pg/numeric@1']['input'];
      readonly qtd_unidades: CodecTypes['pg/int4@1']['input'];
      readonly tem_sabor: CodecTypes['pg/bool@1']['input'];
    };
    readonly sabores: {
      readonly cor_hex: CodecTypes['pg/text@1']['input'];
      readonly id: CodecTypes['pg/int4@1']['input'];
      readonly nome: CodecTypes['pg/text@1']['input'];
    };
    readonly sessoes: {
      readonly adicionou_carrinho: CodecTypes['pg/bool@1']['input'];
      readonly cliente_id: CodecTypes['pg/int4@1']['input'] | null;
      readonly converteu: CodecTypes['pg/bool@1']['input'];
      readonly data_hora: CodecTypes['pg/timestamptz-string@1']['input'];
      readonly dispositivo: CodecTypes['pg/text@1']['input'];
      readonly duracao_seg: CodecTypes['pg/int4@1']['input'];
      readonly id: CodecTypes['pg/int8@1']['input'];
      readonly origem: CodecTypes['pg/text@1']['input'];
      readonly paginas_vistas: CodecTypes['pg/int4@1']['input'];
      readonly pedido_id: CodecTypes['pg/int4@1']['input'] | null;
    };
    readonly User: {
      readonly createdAt: CodecTypes['pg/timestamptz-string@1']['input'];
      readonly email: CodecTypes['pg/text@1']['input'];
      readonly id: CodecTypes['pg/int4@1']['input'];
      readonly name: CodecTypes['pg/text@1']['input'] | null;
      readonly updatedAt: CodecTypes['pg/timestamptz-string@1']['input'];
      readonly username: CodecTypes['pg/text@1']['input'] | null;
    };
  };
};

export namespace Models {
  export type public_Avaliacao = {
    clienteId: CodecTypes['pg/int4@1']['output'];
    comentario: CodecTypes['pg/text@1']['output'] | null;
    dataAvaliacao: CodecTypes['pg/timestamptz-string@1']['output'];
    id: CodecTypes['pg/int4@1']['output'];
    nota: CodecTypes['pg/int4@1']['output'];
    pedidoId: CodecTypes['pg/int4@1']['output'];
    produtoId: CodecTypes['pg/int4@1']['output'];
    cliente: public_Cliente;
    pedido: public_Pedido;
    produto: public_Produto;
    readonly [RelationKeys]?: 'cliente' | 'pedido' | 'produto';
  };
  export type public_Cliente = {
    canalAquisicao: CodecTypes['pg/text@1']['output'];
    cidade: CodecTypes['pg/text@1']['output'];
    dataCadastro: CodecTypes['pg/timestamptz-string@1']['output'];
    dataNascimento: CodecTypes['pg/date-string@1']['output'];
    email: CodecTypes['pg/text@1']['output'];
    estado: CodecTypes['pg/text@1']['output'];
    id: CodecTypes['pg/int4@1']['output'];
    newsletter: CodecTypes['pg/bool@1']['output'];
    nome: CodecTypes['pg/text@1']['output'];
    regiao: CodecTypes['pg/text@1']['output'];
    readonly [RelationKeys]?: never;
  };
  export type public_ItemPedido = {
    id: CodecTypes['pg/int4@1']['output'];
    pedidoId: CodecTypes['pg/int4@1']['output'];
    precoUnitario: Numeric<10, 2>;
    produtoId: CodecTypes['pg/int4@1']['output'];
    quantidade: CodecTypes['pg/int4@1']['output'];
    saborId: CodecTypes['pg/int4@1']['output'] | null;
    pedido: public_Pedido;
    produto: public_Produto;
    sabor: public_Sabor | null;
    readonly [RelationKeys]?: 'pedido' | 'produto' | 'sabor';
  };
  export type public_Pedido = {
    clienteId: CodecTypes['pg/int4@1']['output'];
    cupom: CodecTypes['pg/text@1']['output'] | null;
    dataPedido: CodecTypes['pg/timestamptz-string@1']['output'];
    formaPagamento: CodecTypes['pg/text@1']['output'];
    id: CodecTypes['pg/int4@1']['output'];
    status: 'Pago' | 'Enviado' | 'Entregue' | 'Cancelado' | 'Reembolsado';
    valorDesconto: Numeric<10, 2>;
    valorFrete: Numeric<10, 2>;
    valorItens: Numeric<10, 2>;
    valorTotal: Numeric<10, 2>;
    cliente: public_Cliente;
    readonly [RelationKeys]?: 'cliente';
  };
  export type public_Post = {
    authorId: CodecTypes['pg/int4@1']['output'];
    content: CodecTypes['pg/text@1']['output'] | null;
    createdAt: CodecTypes['pg/timestamptz-string@1']['output'];
    id: CodecTypes['pg/int4@1']['output'];
    title: CodecTypes['pg/text@1']['output'];
    updatedAt: CodecTypes['pg/timestamptz-string@1']['output'];
    author: public_User;
    readonly [RelationKeys]?: 'author';
  };
  export type public_Produto = {
    categoria: 'Energy Drink' | 'Pack' | 'Combo' | 'Snack';
    custo: Numeric<10, 2>;
    id: CodecTypes['pg/int4@1']['output'];
    nome: CodecTypes['pg/text@1']['output'];
    precoAtual: Numeric<10, 2>;
    precoCheio: Numeric<10, 2>;
    qtdUnidades: CodecTypes['pg/int4@1']['output'];
    temSabor: CodecTypes['pg/bool@1']['output'];
    readonly [RelationKeys]?: never;
  };
  export type public_Sabor = {
    corHex: CodecTypes['pg/text@1']['output'];
    id: CodecTypes['pg/int4@1']['output'];
    nome: CodecTypes['pg/text@1']['output'];
    readonly [RelationKeys]?: never;
  };
  export type public_Sessao = {
    adicionouCarrinho: CodecTypes['pg/bool@1']['output'];
    clienteId: CodecTypes['pg/int4@1']['output'] | null;
    converteu: CodecTypes['pg/bool@1']['output'];
    dataHora: CodecTypes['pg/timestamptz-string@1']['output'];
    dispositivo: CodecTypes['pg/text@1']['output'];
    duracaoSeg: CodecTypes['pg/int4@1']['output'];
    id: CodecTypes['pg/int8@1']['output'];
    origem: CodecTypes['pg/text@1']['output'];
    paginasVistas: CodecTypes['pg/int4@1']['output'];
    pedidoId: CodecTypes['pg/int4@1']['output'] | null;
    cliente: public_Cliente | null;
    pedido: public_Pedido | null;
    readonly [RelationKeys]?: 'cliente' | 'pedido';
  };
  export type public_User = {
    createdAt: CodecTypes['pg/timestamptz-string@1']['output'];
    email: CodecTypes['pg/text@1']['output'];
    id: CodecTypes['pg/int4@1']['output'];
    name: CodecTypes['pg/text@1']['output'] | null;
    updatedAt: CodecTypes['pg/timestamptz-string@1']['output'];
    username: CodecTypes['pg/text@1']['output'] | null;
    posts: public_Post[];
    readonly [RelationKeys]?: 'posts';
  };
}

export declare const models: {
  public: {
    Avaliacao: Models.public_Avaliacao;
    Cliente: Models.public_Cliente;
    ItemPedido: Models.public_ItemPedido;
    Pedido: Models.public_Pedido;
    Post: Models.public_Post;
    Produto: Models.public_Produto;
    Sabor: Models.public_Sabor;
    Sessao: Models.public_Sessao;
    User: Models.public_User;
  };
};

export type TypeMaps = TypeMapsType<
  CodecTypes,
  QueryOperationTypes,
  FieldOutputTypes,
  FieldInputTypes,
  StorageColumnTypes,
  StorageColumnInputTypes,
  AggregateTypes
>;

type ContractBase = Omit<
  ContractType<{
    readonly namespaces: {
      readonly public: {
        readonly id: 'public';
        readonly kind: 'postgres-schema';
        readonly entries: {
          readonly table: {
            readonly avaliacoes: {
              columns: {
                readonly cliente_id: {
                  readonly dataType: 'pg/int4';
                  readonly codecId: 'pg/int4@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly comentario: {
                  readonly dataType: 'pg/text';
                  readonly codecId: 'pg/text@1';
                  readonly nullable: true;
                  readonly many: false;
                };
                readonly data_avaliacao: {
                  readonly dataType: 'pg/timestamptz';
                  readonly codecId: 'pg/timestamptz-string@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly id: {
                  readonly dataType: 'pg/int4';
                  readonly codecId: 'pg/int4@1';
                  readonly nullable: false;
                  readonly default: {
                    readonly kind: 'function';
                    readonly expression: 'autoincrement()';
                  };
                  readonly many: false;
                };
                readonly nota: {
                  readonly dataType: 'pg/int4';
                  readonly codecId: 'pg/int4@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly pedido_id: {
                  readonly dataType: 'pg/int4';
                  readonly codecId: 'pg/int4@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly produto_id: {
                  readonly dataType: 'pg/int4';
                  readonly codecId: 'pg/int4@1';
                  readonly nullable: false;
                  readonly many: false;
                };
              };
              primaryKey: { readonly columns: readonly ['id'] };
              uniques: readonly [{ readonly columns: readonly ['pedido_id', 'produto_id'] }];
              indexes: readonly [
                {
                  readonly name: 'avaliacoes_cliente_id_idx_9196b84e';
                  readonly prefix: 'avaliacoes_cliente_id_idx';
                  readonly columns: readonly ['cliente_id'];
                  readonly unique: false;
                },
                {
                  readonly name: 'avaliacoes_pedido_id_idx_57130803';
                  readonly prefix: 'avaliacoes_pedido_id_idx';
                  readonly columns: readonly ['pedido_id'];
                  readonly unique: false;
                },
                {
                  readonly name: 'avaliacoes_produto_id_idx_63485217';
                  readonly prefix: 'avaliacoes_produto_id_idx';
                  readonly columns: readonly ['produto_id'];
                  readonly unique: false;
                },
              ];
              foreignKeys: readonly [
                {
                  readonly source: {
                    readonly namespaceId: 'public' & NamespaceId;
                    readonly tableName: 'avaliacoes';
                    readonly columns: readonly ['pedido_id'];
                  };
                  readonly target: {
                    readonly namespaceId: 'public' & NamespaceId;
                    readonly tableName: 'pedidos';
                    readonly columns: readonly ['id'];
                  };
                },
                {
                  readonly source: {
                    readonly namespaceId: 'public' & NamespaceId;
                    readonly tableName: 'avaliacoes';
                    readonly columns: readonly ['produto_id'];
                  };
                  readonly target: {
                    readonly namespaceId: 'public' & NamespaceId;
                    readonly tableName: 'produtos';
                    readonly columns: readonly ['id'];
                  };
                },
                {
                  readonly source: {
                    readonly namespaceId: 'public' & NamespaceId;
                    readonly tableName: 'avaliacoes';
                    readonly columns: readonly ['cliente_id'];
                  };
                  readonly target: {
                    readonly namespaceId: 'public' & NamespaceId;
                    readonly tableName: 'clientes';
                    readonly columns: readonly ['id'];
                  };
                },
              ];
            };
            readonly clientes: {
              columns: {
                readonly canal_aquisicao: {
                  readonly dataType: 'pg/text';
                  readonly codecId: 'pg/text@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly cidade: {
                  readonly dataType: 'pg/text';
                  readonly codecId: 'pg/text@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly data_cadastro: {
                  readonly dataType: 'pg/timestamptz';
                  readonly codecId: 'pg/timestamptz-string@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly data_nascimento: {
                  readonly dataType: 'pg/date';
                  readonly codecId: 'pg/date-string@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly email: {
                  readonly dataType: 'pg/text';
                  readonly codecId: 'pg/text@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly estado: {
                  readonly dataType: 'pg/text';
                  readonly codecId: 'pg/text@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly id: {
                  readonly dataType: 'pg/int4';
                  readonly codecId: 'pg/int4@1';
                  readonly nullable: false;
                  readonly default: {
                    readonly kind: 'function';
                    readonly expression: 'autoincrement()';
                  };
                  readonly many: false;
                };
                readonly newsletter: {
                  readonly dataType: 'pg/bool';
                  readonly codecId: 'pg/bool@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly nome: {
                  readonly dataType: 'pg/text';
                  readonly codecId: 'pg/text@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly regiao: {
                  readonly dataType: 'pg/text';
                  readonly codecId: 'pg/text@1';
                  readonly nullable: false;
                  readonly many: false;
                };
              };
              primaryKey: { readonly columns: readonly ['id'] };
              uniques: readonly [{ readonly columns: readonly ['email'] }];
              indexes: readonly [
                {
                  readonly name: 'clientes_estado_idx_c74e5888';
                  readonly prefix: 'clientes_estado_idx';
                  readonly columns: readonly ['estado'];
                  readonly unique: false;
                },
              ];
              foreignKeys: readonly [];
            };
            readonly itens_pedido: {
              columns: {
                readonly id: {
                  readonly dataType: 'pg/int4';
                  readonly codecId: 'pg/int4@1';
                  readonly nullable: false;
                  readonly default: {
                    readonly kind: 'function';
                    readonly expression: 'autoincrement()';
                  };
                  readonly many: false;
                };
                readonly pedido_id: {
                  readonly dataType: 'pg/int4';
                  readonly codecId: 'pg/int4@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly preco_unitario: {
                  readonly dataType: 'pg/numeric';
                  readonly codecId: 'pg/numeric@1';
                  readonly nullable: false;
                  readonly typeParams: { readonly precision: 10; readonly scale: 2 };
                  readonly many: false;
                };
                readonly produto_id: {
                  readonly dataType: 'pg/int4';
                  readonly codecId: 'pg/int4@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly quantidade: {
                  readonly dataType: 'pg/int4';
                  readonly codecId: 'pg/int4@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly sabor_id: {
                  readonly dataType: 'pg/int4';
                  readonly codecId: 'pg/int4@1';
                  readonly nullable: true;
                  readonly many: false;
                };
              };
              primaryKey: { readonly columns: readonly ['id'] };
              uniques: readonly [];
              indexes: readonly [
                {
                  readonly name: 'itens_pedido_pedido_id_idx_57130803';
                  readonly prefix: 'itens_pedido_pedido_id_idx';
                  readonly columns: readonly ['pedido_id'];
                  readonly unique: false;
                },
                {
                  readonly name: 'itens_pedido_produto_id_idx_63485217';
                  readonly prefix: 'itens_pedido_produto_id_idx';
                  readonly columns: readonly ['produto_id'];
                  readonly unique: false;
                },
                {
                  readonly name: 'itens_pedido_sabor_id_idx_32d5dd60';
                  readonly prefix: 'itens_pedido_sabor_id_idx';
                  readonly columns: readonly ['sabor_id'];
                  readonly unique: false;
                },
              ];
              foreignKeys: readonly [
                {
                  readonly source: {
                    readonly namespaceId: 'public' & NamespaceId;
                    readonly tableName: 'itens_pedido';
                    readonly columns: readonly ['pedido_id'];
                  };
                  readonly target: {
                    readonly namespaceId: 'public' & NamespaceId;
                    readonly tableName: 'pedidos';
                    readonly columns: readonly ['id'];
                  };
                },
                {
                  readonly source: {
                    readonly namespaceId: 'public' & NamespaceId;
                    readonly tableName: 'itens_pedido';
                    readonly columns: readonly ['produto_id'];
                  };
                  readonly target: {
                    readonly namespaceId: 'public' & NamespaceId;
                    readonly tableName: 'produtos';
                    readonly columns: readonly ['id'];
                  };
                },
                {
                  readonly source: {
                    readonly namespaceId: 'public' & NamespaceId;
                    readonly tableName: 'itens_pedido';
                    readonly columns: readonly ['sabor_id'];
                  };
                  readonly target: {
                    readonly namespaceId: 'public' & NamespaceId;
                    readonly tableName: 'sabores';
                    readonly columns: readonly ['id'];
                  };
                },
              ];
            };
            readonly pedidos: {
              columns: {
                readonly cliente_id: {
                  readonly dataType: 'pg/int4';
                  readonly codecId: 'pg/int4@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly cupom: {
                  readonly dataType: 'pg/text';
                  readonly codecId: 'pg/text@1';
                  readonly nullable: true;
                  readonly many: false;
                };
                readonly data_pedido: {
                  readonly dataType: 'pg/timestamptz';
                  readonly codecId: 'pg/timestamptz-string@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly forma_pagamento: {
                  readonly dataType: 'pg/text';
                  readonly codecId: 'pg/text@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly id: {
                  readonly dataType: 'pg/int4';
                  readonly codecId: 'pg/int4@1';
                  readonly nullable: false;
                  readonly default: {
                    readonly kind: 'function';
                    readonly expression: 'autoincrement()';
                  };
                  readonly many: false;
                };
                readonly status: {
                  readonly dataType: 'pg/text';
                  readonly codecId: 'pg/text@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly valor_desconto: {
                  readonly dataType: 'pg/numeric';
                  readonly codecId: 'pg/numeric@1';
                  readonly nullable: false;
                  readonly typeParams: { readonly precision: 10; readonly scale: 2 };
                  readonly many: false;
                };
                readonly valor_frete: {
                  readonly dataType: 'pg/numeric';
                  readonly codecId: 'pg/numeric@1';
                  readonly nullable: false;
                  readonly typeParams: { readonly precision: 10; readonly scale: 2 };
                  readonly many: false;
                };
                readonly valor_itens: {
                  readonly dataType: 'pg/numeric';
                  readonly codecId: 'pg/numeric@1';
                  readonly nullable: false;
                  readonly typeParams: { readonly precision: 10; readonly scale: 2 };
                  readonly many: false;
                };
                readonly valor_total: {
                  readonly dataType: 'pg/numeric';
                  readonly codecId: 'pg/numeric@1';
                  readonly nullable: false;
                  readonly typeParams: { readonly precision: 10; readonly scale: 2 };
                  readonly many: false;
                };
              };
              primaryKey: { readonly columns: readonly ['id'] };
              uniques: readonly [];
              indexes: readonly [
                {
                  readonly name: 'pedidos_cliente_id_idx_9196b84e';
                  readonly prefix: 'pedidos_cliente_id_idx';
                  readonly columns: readonly ['cliente_id'];
                  readonly unique: false;
                },
                {
                  readonly name: 'pedidos_data_pedido_idx_c3d404a9';
                  readonly prefix: 'pedidos_data_pedido_idx';
                  readonly columns: readonly ['data_pedido'];
                  readonly unique: false;
                },
              ];
              foreignKeys: readonly [
                {
                  readonly source: {
                    readonly namespaceId: 'public' & NamespaceId;
                    readonly tableName: 'pedidos';
                    readonly columns: readonly ['cliente_id'];
                  };
                  readonly target: {
                    readonly namespaceId: 'public' & NamespaceId;
                    readonly tableName: 'clientes';
                    readonly columns: readonly ['id'];
                  };
                },
              ];
            };
            readonly Post: {
              columns: {
                readonly authorId: {
                  readonly dataType: 'pg/int4';
                  readonly codecId: 'pg/int4@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly content: {
                  readonly dataType: 'pg/text';
                  readonly codecId: 'pg/text@1';
                  readonly nullable: true;
                  readonly many: false;
                };
                readonly createdAt: {
                  readonly dataType: 'pg/timestamptz';
                  readonly codecId: 'pg/timestamptz-string@1';
                  readonly nullable: false;
                  readonly default: { readonly kind: 'function'; readonly expression: 'now()' };
                  readonly many: false;
                };
                readonly id: {
                  readonly dataType: 'pg/int4';
                  readonly codecId: 'pg/int4@1';
                  readonly nullable: false;
                  readonly default: {
                    readonly kind: 'function';
                    readonly expression: 'autoincrement()';
                  };
                  readonly many: false;
                };
                readonly title: {
                  readonly dataType: 'pg/text';
                  readonly codecId: 'pg/text@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly updatedAt: {
                  readonly dataType: 'pg/timestamptz';
                  readonly codecId: 'pg/timestamptz-string@1';
                  readonly nullable: false;
                  readonly many: false;
                };
              };
              primaryKey: { readonly columns: readonly ['id'] };
              uniques: readonly [];
              indexes: readonly [
                {
                  readonly name: 'Post_authorId_idx_e47547ed';
                  readonly prefix: 'Post_authorId_idx';
                  readonly columns: readonly ['authorId'];
                  readonly unique: false;
                },
              ];
              foreignKeys: readonly [
                {
                  readonly source: {
                    readonly namespaceId: 'public' & NamespaceId;
                    readonly tableName: 'Post';
                    readonly columns: readonly ['authorId'];
                  };
                  readonly target: {
                    readonly namespaceId: 'public' & NamespaceId;
                    readonly tableName: 'User';
                    readonly columns: readonly ['id'];
                  };
                },
              ];
            };
            readonly produtos: {
              columns: {
                readonly categoria: {
                  readonly dataType: 'pg/text';
                  readonly codecId: 'pg/text@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly custo: {
                  readonly dataType: 'pg/numeric';
                  readonly codecId: 'pg/numeric@1';
                  readonly nullable: false;
                  readonly typeParams: { readonly precision: 10; readonly scale: 2 };
                  readonly many: false;
                };
                readonly id: {
                  readonly dataType: 'pg/int4';
                  readonly codecId: 'pg/int4@1';
                  readonly nullable: false;
                  readonly default: {
                    readonly kind: 'function';
                    readonly expression: 'autoincrement()';
                  };
                  readonly many: false;
                };
                readonly nome: {
                  readonly dataType: 'pg/text';
                  readonly codecId: 'pg/text@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly preco_atual: {
                  readonly dataType: 'pg/numeric';
                  readonly codecId: 'pg/numeric@1';
                  readonly nullable: false;
                  readonly typeParams: { readonly precision: 10; readonly scale: 2 };
                  readonly many: false;
                };
                readonly preco_cheio: {
                  readonly dataType: 'pg/numeric';
                  readonly codecId: 'pg/numeric@1';
                  readonly nullable: false;
                  readonly typeParams: { readonly precision: 10; readonly scale: 2 };
                  readonly many: false;
                };
                readonly qtd_unidades: {
                  readonly dataType: 'pg/int4';
                  readonly codecId: 'pg/int4@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly tem_sabor: {
                  readonly dataType: 'pg/bool';
                  readonly codecId: 'pg/bool@1';
                  readonly nullable: false;
                  readonly many: false;
                };
              };
              primaryKey: { readonly columns: readonly ['id'] };
              uniques: readonly [{ readonly columns: readonly ['nome'] }];
              indexes: readonly [];
              foreignKeys: readonly [];
            };
            readonly sabores: {
              columns: {
                readonly cor_hex: {
                  readonly dataType: 'pg/text';
                  readonly codecId: 'pg/text@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly id: {
                  readonly dataType: 'pg/int4';
                  readonly codecId: 'pg/int4@1';
                  readonly nullable: false;
                  readonly default: {
                    readonly kind: 'function';
                    readonly expression: 'autoincrement()';
                  };
                  readonly many: false;
                };
                readonly nome: {
                  readonly dataType: 'pg/text';
                  readonly codecId: 'pg/text@1';
                  readonly nullable: false;
                  readonly many: false;
                };
              };
              primaryKey: { readonly columns: readonly ['id'] };
              uniques: readonly [{ readonly columns: readonly ['nome'] }];
              indexes: readonly [];
              foreignKeys: readonly [];
            };
            readonly sessoes: {
              columns: {
                readonly adicionou_carrinho: {
                  readonly dataType: 'pg/bool';
                  readonly codecId: 'pg/bool@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly cliente_id: {
                  readonly dataType: 'pg/int4';
                  readonly codecId: 'pg/int4@1';
                  readonly nullable: true;
                  readonly many: false;
                };
                readonly converteu: {
                  readonly dataType: 'pg/bool';
                  readonly codecId: 'pg/bool@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly data_hora: {
                  readonly dataType: 'pg/timestamptz';
                  readonly codecId: 'pg/timestamptz-string@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly dispositivo: {
                  readonly dataType: 'pg/text';
                  readonly codecId: 'pg/text@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly duracao_seg: {
                  readonly dataType: 'pg/int4';
                  readonly codecId: 'pg/int4@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly id: {
                  readonly dataType: 'pg/int8';
                  readonly codecId: 'pg/int8@1';
                  readonly nullable: false;
                  readonly default: {
                    readonly kind: 'function';
                    readonly expression: 'autoincrement()';
                  };
                  readonly many: false;
                };
                readonly origem: {
                  readonly dataType: 'pg/text';
                  readonly codecId: 'pg/text@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly paginas_vistas: {
                  readonly dataType: 'pg/int4';
                  readonly codecId: 'pg/int4@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly pedido_id: {
                  readonly dataType: 'pg/int4';
                  readonly codecId: 'pg/int4@1';
                  readonly nullable: true;
                  readonly many: false;
                };
              };
              primaryKey: { readonly columns: readonly ['id'] };
              uniques: readonly [];
              indexes: readonly [
                {
                  readonly name: 'sessoes_cliente_id_idx_9196b84e';
                  readonly prefix: 'sessoes_cliente_id_idx';
                  readonly columns: readonly ['cliente_id'];
                  readonly unique: false;
                },
                {
                  readonly name: 'sessoes_data_hora_idx_e0722461';
                  readonly prefix: 'sessoes_data_hora_idx';
                  readonly columns: readonly ['data_hora'];
                  readonly unique: false;
                },
                {
                  readonly name: 'sessoes_pedido_id_idx_57130803';
                  readonly prefix: 'sessoes_pedido_id_idx';
                  readonly columns: readonly ['pedido_id'];
                  readonly unique: false;
                },
              ];
              foreignKeys: readonly [
                {
                  readonly source: {
                    readonly namespaceId: 'public' & NamespaceId;
                    readonly tableName: 'sessoes';
                    readonly columns: readonly ['cliente_id'];
                  };
                  readonly target: {
                    readonly namespaceId: 'public' & NamespaceId;
                    readonly tableName: 'clientes';
                    readonly columns: readonly ['id'];
                  };
                },
                {
                  readonly source: {
                    readonly namespaceId: 'public' & NamespaceId;
                    readonly tableName: 'sessoes';
                    readonly columns: readonly ['pedido_id'];
                  };
                  readonly target: {
                    readonly namespaceId: 'public' & NamespaceId;
                    readonly tableName: 'pedidos';
                    readonly columns: readonly ['id'];
                  };
                },
              ];
            };
            readonly User: {
              columns: {
                readonly createdAt: {
                  readonly dataType: 'pg/timestamptz';
                  readonly codecId: 'pg/timestamptz-string@1';
                  readonly nullable: false;
                  readonly default: { readonly kind: 'function'; readonly expression: 'now()' };
                  readonly many: false;
                };
                readonly email: {
                  readonly dataType: 'pg/text';
                  readonly codecId: 'pg/text@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly id: {
                  readonly dataType: 'pg/int4';
                  readonly codecId: 'pg/int4@1';
                  readonly nullable: false;
                  readonly default: {
                    readonly kind: 'function';
                    readonly expression: 'autoincrement()';
                  };
                  readonly many: false;
                };
                readonly name: {
                  readonly dataType: 'pg/text';
                  readonly codecId: 'pg/text@1';
                  readonly nullable: true;
                  readonly many: false;
                };
                readonly updatedAt: {
                  readonly dataType: 'pg/timestamptz';
                  readonly codecId: 'pg/timestamptz-string@1';
                  readonly nullable: false;
                  readonly many: false;
                };
                readonly username: {
                  readonly dataType: 'pg/text';
                  readonly codecId: 'pg/text@1';
                  readonly nullable: true;
                  readonly many: false;
                };
              };
              primaryKey: { readonly columns: readonly ['id'] };
              uniques: readonly [{ readonly columns: readonly ['email'] }];
              indexes: readonly [];
              foreignKeys: readonly [];
            };
          };
          readonly valueSet: {
            readonly CategoriaProduto: {
              readonly kind: 'valueSet';
              readonly values: readonly ['Energy Drink', 'Pack', 'Combo', 'Snack'];
            };
            readonly StatusPedido: {
              readonly kind: 'valueSet';
              readonly values: readonly ['Pago', 'Enviado', 'Entregue', 'Cancelado', 'Reembolsado'];
            };
          };
        };
      };
    };
    readonly storageHash: StorageHash;
  }>,
  'roots' | 'domain'
> & {
  readonly target: 'postgres';
  readonly targetFamily: 'sql';
  readonly roots: {
    readonly Post: { readonly namespace: 'public' & NamespaceId; readonly model: 'Post' };
    readonly User: { readonly namespace: 'public' & NamespaceId; readonly model: 'User' };
    readonly avaliacoes: {
      readonly namespace: 'public' & NamespaceId;
      readonly model: 'Avaliacao';
    };
    readonly clientes: { readonly namespace: 'public' & NamespaceId; readonly model: 'Cliente' };
    readonly itens_pedido: {
      readonly namespace: 'public' & NamespaceId;
      readonly model: 'ItemPedido';
    };
    readonly pedidos: { readonly namespace: 'public' & NamespaceId; readonly model: 'Pedido' };
    readonly produtos: { readonly namespace: 'public' & NamespaceId; readonly model: 'Produto' };
    readonly sabores: { readonly namespace: 'public' & NamespaceId; readonly model: 'Sabor' };
    readonly sessoes: { readonly namespace: 'public' & NamespaceId; readonly model: 'Sessao' };
  };
  readonly domain: {
    readonly namespaces: {
      readonly public: {
        readonly models: {
          readonly Avaliacao: {
            readonly fields: {
              readonly clienteId: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int4@1' };
              };
              readonly comentario: {
                readonly nullable: true;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/text@1' };
              };
              readonly dataAvaliacao: {
                readonly nullable: false;
                readonly type: {
                  readonly kind: 'scalar';
                  readonly codecId: 'pg/timestamptz-string@1';
                };
              };
              readonly id: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int4@1' };
              };
              readonly nota: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int4@1' };
              };
              readonly pedidoId: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int4@1' };
              };
              readonly produtoId: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int4@1' };
              };
            };
            readonly relations: {
              readonly cliente: {
                readonly to: {
                  readonly namespace: 'public' & NamespaceId;
                  readonly model: 'Cliente';
                };
                readonly cardinality: 'N:1';
                readonly nullable: false;
                readonly on: {
                  readonly localFields: readonly ['clienteId'];
                  readonly targetFields: readonly ['id'];
                };
              };
              readonly pedido: {
                readonly to: {
                  readonly namespace: 'public' & NamespaceId;
                  readonly model: 'Pedido';
                };
                readonly cardinality: 'N:1';
                readonly nullable: false;
                readonly on: {
                  readonly localFields: readonly ['pedidoId'];
                  readonly targetFields: readonly ['id'];
                };
              };
              readonly produto: {
                readonly to: {
                  readonly namespace: 'public' & NamespaceId;
                  readonly model: 'Produto';
                };
                readonly cardinality: 'N:1';
                readonly nullable: false;
                readonly on: {
                  readonly localFields: readonly ['produtoId'];
                  readonly targetFields: readonly ['id'];
                };
              };
            };
            readonly storage: {
              readonly table: 'avaliacoes';
              readonly namespaceId: 'public';
              readonly fields: {
                readonly clienteId: { readonly column: 'cliente_id' };
                readonly comentario: { readonly column: 'comentario' };
                readonly dataAvaliacao: { readonly column: 'data_avaliacao' };
                readonly id: { readonly column: 'id' };
                readonly nota: { readonly column: 'nota' };
                readonly pedidoId: { readonly column: 'pedido_id' };
                readonly produtoId: { readonly column: 'produto_id' };
              };
            };
          };
          readonly Cliente: {
            readonly fields: {
              readonly canalAquisicao: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/text@1' };
              };
              readonly cidade: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/text@1' };
              };
              readonly dataCadastro: {
                readonly nullable: false;
                readonly type: {
                  readonly kind: 'scalar';
                  readonly codecId: 'pg/timestamptz-string@1';
                };
              };
              readonly dataNascimento: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/date-string@1' };
              };
              readonly email: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/text@1' };
              };
              readonly estado: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/text@1' };
              };
              readonly id: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int4@1' };
              };
              readonly newsletter: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/bool@1' };
              };
              readonly nome: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/text@1' };
              };
              readonly regiao: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/text@1' };
              };
            };
            readonly relations: Record<string, never>;
            readonly storage: {
              readonly table: 'clientes';
              readonly namespaceId: 'public';
              readonly fields: {
                readonly canalAquisicao: { readonly column: 'canal_aquisicao' };
                readonly cidade: { readonly column: 'cidade' };
                readonly dataCadastro: { readonly column: 'data_cadastro' };
                readonly dataNascimento: { readonly column: 'data_nascimento' };
                readonly email: { readonly column: 'email' };
                readonly estado: { readonly column: 'estado' };
                readonly id: { readonly column: 'id' };
                readonly newsletter: { readonly column: 'newsletter' };
                readonly nome: { readonly column: 'nome' };
                readonly regiao: { readonly column: 'regiao' };
              };
            };
          };
          readonly ItemPedido: {
            readonly fields: {
              readonly id: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int4@1' };
              };
              readonly pedidoId: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int4@1' };
              };
              readonly precoUnitario: {
                readonly nullable: false;
                readonly type: {
                  readonly kind: 'scalar';
                  readonly codecId: 'pg/numeric@1';
                  readonly typeParams: { readonly precision: 10; readonly scale: 2 };
                };
              };
              readonly produtoId: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int4@1' };
              };
              readonly quantidade: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int4@1' };
              };
              readonly saborId: {
                readonly nullable: true;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int4@1' };
              };
            };
            readonly relations: {
              readonly pedido: {
                readonly to: {
                  readonly namespace: 'public' & NamespaceId;
                  readonly model: 'Pedido';
                };
                readonly cardinality: 'N:1';
                readonly nullable: false;
                readonly on: {
                  readonly localFields: readonly ['pedidoId'];
                  readonly targetFields: readonly ['id'];
                };
              };
              readonly produto: {
                readonly to: {
                  readonly namespace: 'public' & NamespaceId;
                  readonly model: 'Produto';
                };
                readonly cardinality: 'N:1';
                readonly nullable: false;
                readonly on: {
                  readonly localFields: readonly ['produtoId'];
                  readonly targetFields: readonly ['id'];
                };
              };
              readonly sabor: {
                readonly to: {
                  readonly namespace: 'public' & NamespaceId;
                  readonly model: 'Sabor';
                };
                readonly cardinality: 'N:1';
                readonly nullable: true;
                readonly on: {
                  readonly localFields: readonly ['saborId'];
                  readonly targetFields: readonly ['id'];
                };
              };
            };
            readonly storage: {
              readonly table: 'itens_pedido';
              readonly namespaceId: 'public';
              readonly fields: {
                readonly id: { readonly column: 'id' };
                readonly pedidoId: { readonly column: 'pedido_id' };
                readonly precoUnitario: { readonly column: 'preco_unitario' };
                readonly produtoId: { readonly column: 'produto_id' };
                readonly quantidade: { readonly column: 'quantidade' };
                readonly saborId: { readonly column: 'sabor_id' };
              };
            };
          };
          readonly Pedido: {
            readonly fields: {
              readonly clienteId: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int4@1' };
              };
              readonly cupom: {
                readonly nullable: true;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/text@1' };
              };
              readonly dataPedido: {
                readonly nullable: false;
                readonly type: {
                  readonly kind: 'scalar';
                  readonly codecId: 'pg/timestamptz-string@1';
                };
              };
              readonly formaPagamento: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/text@1' };
              };
              readonly id: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int4@1' };
              };
              readonly status: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/text@1' };
              };
              readonly valorDesconto: {
                readonly nullable: false;
                readonly type: {
                  readonly kind: 'scalar';
                  readonly codecId: 'pg/numeric@1';
                  readonly typeParams: { readonly precision: 10; readonly scale: 2 };
                };
              };
              readonly valorFrete: {
                readonly nullable: false;
                readonly type: {
                  readonly kind: 'scalar';
                  readonly codecId: 'pg/numeric@1';
                  readonly typeParams: { readonly precision: 10; readonly scale: 2 };
                };
              };
              readonly valorItens: {
                readonly nullable: false;
                readonly type: {
                  readonly kind: 'scalar';
                  readonly codecId: 'pg/numeric@1';
                  readonly typeParams: { readonly precision: 10; readonly scale: 2 };
                };
              };
              readonly valorTotal: {
                readonly nullable: false;
                readonly type: {
                  readonly kind: 'scalar';
                  readonly codecId: 'pg/numeric@1';
                  readonly typeParams: { readonly precision: 10; readonly scale: 2 };
                };
              };
            };
            readonly relations: {
              readonly cliente: {
                readonly to: {
                  readonly namespace: 'public' & NamespaceId;
                  readonly model: 'Cliente';
                };
                readonly cardinality: 'N:1';
                readonly nullable: false;
                readonly on: {
                  readonly localFields: readonly ['clienteId'];
                  readonly targetFields: readonly ['id'];
                };
              };
            };
            readonly storage: {
              readonly table: 'pedidos';
              readonly namespaceId: 'public';
              readonly fields: {
                readonly clienteId: { readonly column: 'cliente_id' };
                readonly cupom: { readonly column: 'cupom' };
                readonly dataPedido: { readonly column: 'data_pedido' };
                readonly formaPagamento: { readonly column: 'forma_pagamento' };
                readonly id: { readonly column: 'id' };
                readonly status: { readonly column: 'status' };
                readonly valorDesconto: { readonly column: 'valor_desconto' };
                readonly valorFrete: { readonly column: 'valor_frete' };
                readonly valorItens: { readonly column: 'valor_itens' };
                readonly valorTotal: { readonly column: 'valor_total' };
              };
            };
          };
          readonly Post: {
            readonly fields: {
              readonly authorId: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int4@1' };
              };
              readonly content: {
                readonly nullable: true;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/text@1' };
              };
              readonly createdAt: {
                readonly nullable: false;
                readonly type: {
                  readonly kind: 'scalar';
                  readonly codecId: 'pg/timestamptz-string@1';
                };
              };
              readonly id: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int4@1' };
              };
              readonly title: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/text@1' };
              };
              readonly updatedAt: {
                readonly nullable: false;
                readonly type: {
                  readonly kind: 'scalar';
                  readonly codecId: 'pg/timestamptz-string@1';
                };
              };
            };
            readonly relations: {
              readonly author: {
                readonly to: { readonly namespace: 'public' & NamespaceId; readonly model: 'User' };
                readonly cardinality: 'N:1';
                readonly nullable: false;
                readonly on: {
                  readonly localFields: readonly ['authorId'];
                  readonly targetFields: readonly ['id'];
                };
              };
            };
            readonly storage: {
              readonly table: 'Post';
              readonly namespaceId: 'public';
              readonly fields: {
                readonly authorId: { readonly column: 'authorId' };
                readonly content: { readonly column: 'content' };
                readonly createdAt: { readonly column: 'createdAt' };
                readonly id: { readonly column: 'id' };
                readonly title: { readonly column: 'title' };
                readonly updatedAt: { readonly column: 'updatedAt' };
              };
            };
          };
          readonly Produto: {
            readonly fields: {
              readonly categoria: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/text@1' };
              };
              readonly custo: {
                readonly nullable: false;
                readonly type: {
                  readonly kind: 'scalar';
                  readonly codecId: 'pg/numeric@1';
                  readonly typeParams: { readonly precision: 10; readonly scale: 2 };
                };
              };
              readonly id: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int4@1' };
              };
              readonly nome: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/text@1' };
              };
              readonly precoAtual: {
                readonly nullable: false;
                readonly type: {
                  readonly kind: 'scalar';
                  readonly codecId: 'pg/numeric@1';
                  readonly typeParams: { readonly precision: 10; readonly scale: 2 };
                };
              };
              readonly precoCheio: {
                readonly nullable: false;
                readonly type: {
                  readonly kind: 'scalar';
                  readonly codecId: 'pg/numeric@1';
                  readonly typeParams: { readonly precision: 10; readonly scale: 2 };
                };
              };
              readonly qtdUnidades: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int4@1' };
              };
              readonly temSabor: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/bool@1' };
              };
            };
            readonly relations: Record<string, never>;
            readonly storage: {
              readonly table: 'produtos';
              readonly namespaceId: 'public';
              readonly fields: {
                readonly categoria: { readonly column: 'categoria' };
                readonly custo: { readonly column: 'custo' };
                readonly id: { readonly column: 'id' };
                readonly nome: { readonly column: 'nome' };
                readonly precoAtual: { readonly column: 'preco_atual' };
                readonly precoCheio: { readonly column: 'preco_cheio' };
                readonly qtdUnidades: { readonly column: 'qtd_unidades' };
                readonly temSabor: { readonly column: 'tem_sabor' };
              };
            };
          };
          readonly Sabor: {
            readonly fields: {
              readonly corHex: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/text@1' };
              };
              readonly id: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int4@1' };
              };
              readonly nome: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/text@1' };
              };
            };
            readonly relations: Record<string, never>;
            readonly storage: {
              readonly table: 'sabores';
              readonly namespaceId: 'public';
              readonly fields: {
                readonly corHex: { readonly column: 'cor_hex' };
                readonly id: { readonly column: 'id' };
                readonly nome: { readonly column: 'nome' };
              };
            };
          };
          readonly Sessao: {
            readonly fields: {
              readonly adicionouCarrinho: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/bool@1' };
              };
              readonly clienteId: {
                readonly nullable: true;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int4@1' };
              };
              readonly converteu: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/bool@1' };
              };
              readonly dataHora: {
                readonly nullable: false;
                readonly type: {
                  readonly kind: 'scalar';
                  readonly codecId: 'pg/timestamptz-string@1';
                };
              };
              readonly dispositivo: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/text@1' };
              };
              readonly duracaoSeg: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int4@1' };
              };
              readonly id: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int8@1' };
              };
              readonly origem: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/text@1' };
              };
              readonly paginasVistas: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int4@1' };
              };
              readonly pedidoId: {
                readonly nullable: true;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int4@1' };
              };
            };
            readonly relations: {
              readonly cliente: {
                readonly to: {
                  readonly namespace: 'public' & NamespaceId;
                  readonly model: 'Cliente';
                };
                readonly cardinality: 'N:1';
                readonly nullable: true;
                readonly on: {
                  readonly localFields: readonly ['clienteId'];
                  readonly targetFields: readonly ['id'];
                };
              };
              readonly pedido: {
                readonly to: {
                  readonly namespace: 'public' & NamespaceId;
                  readonly model: 'Pedido';
                };
                readonly cardinality: 'N:1';
                readonly nullable: true;
                readonly on: {
                  readonly localFields: readonly ['pedidoId'];
                  readonly targetFields: readonly ['id'];
                };
              };
            };
            readonly storage: {
              readonly table: 'sessoes';
              readonly namespaceId: 'public';
              readonly fields: {
                readonly adicionouCarrinho: { readonly column: 'adicionou_carrinho' };
                readonly clienteId: { readonly column: 'cliente_id' };
                readonly converteu: { readonly column: 'converteu' };
                readonly dataHora: { readonly column: 'data_hora' };
                readonly dispositivo: { readonly column: 'dispositivo' };
                readonly duracaoSeg: { readonly column: 'duracao_seg' };
                readonly id: { readonly column: 'id' };
                readonly origem: { readonly column: 'origem' };
                readonly paginasVistas: { readonly column: 'paginas_vistas' };
                readonly pedidoId: { readonly column: 'pedido_id' };
              };
            };
          };
          readonly User: {
            readonly fields: {
              readonly createdAt: {
                readonly nullable: false;
                readonly type: {
                  readonly kind: 'scalar';
                  readonly codecId: 'pg/timestamptz-string@1';
                };
              };
              readonly email: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/text@1' };
              };
              readonly id: {
                readonly nullable: false;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/int4@1' };
              };
              readonly name: {
                readonly nullable: true;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/text@1' };
              };
              readonly updatedAt: {
                readonly nullable: false;
                readonly type: {
                  readonly kind: 'scalar';
                  readonly codecId: 'pg/timestamptz-string@1';
                };
              };
              readonly username: {
                readonly nullable: true;
                readonly type: { readonly kind: 'scalar'; readonly codecId: 'pg/text@1' };
              };
            };
            readonly relations: {
              readonly posts: {
                readonly to: { readonly namespace: 'public' & NamespaceId; readonly model: 'Post' };
                readonly cardinality: '1:N';
                readonly on: {
                  readonly localFields: readonly ['id'];
                  readonly targetFields: readonly ['authorId'];
                };
              };
            };
            readonly storage: {
              readonly table: 'User';
              readonly namespaceId: 'public';
              readonly fields: {
                readonly createdAt: { readonly column: 'createdAt' };
                readonly email: { readonly column: 'email' };
                readonly id: { readonly column: 'id' };
                readonly name: { readonly column: 'name' };
                readonly updatedAt: { readonly column: 'updatedAt' };
                readonly username: { readonly column: 'username' };
              };
            };
          };
        };
        readonly enum: {
          readonly CategoriaProduto: {
            readonly codecId: 'pg/text@1';
            readonly members: readonly [
              { readonly name: 'EnergyDrink'; readonly value: 'Energy Drink' },
              { readonly name: 'Pack'; readonly value: 'Pack' },
              { readonly name: 'Combo'; readonly value: 'Combo' },
              { readonly name: 'Snack'; readonly value: 'Snack' },
            ];
          };
          readonly StatusPedido: {
            readonly codecId: 'pg/text@1';
            readonly members: readonly [
              { readonly name: 'Pago'; readonly value: 'Pago' },
              { readonly name: 'Enviado'; readonly value: 'Enviado' },
              { readonly name: 'Entregue'; readonly value: 'Entregue' },
              { readonly name: 'Cancelado'; readonly value: 'Cancelado' },
              { readonly name: 'Reembolsado'; readonly value: 'Reembolsado' },
            ];
          };
        };
        readonly enumMemberTypes?: {
          readonly CategoriaProduto: readonly [
            { readonly name: 'EnergyDrink'; readonly value: 'Energy Drink' },
            { readonly name: 'Pack'; readonly value: 'Pack' },
            { readonly name: 'Combo'; readonly value: 'Combo' },
            { readonly name: 'Snack'; readonly value: 'Snack' },
          ];
          readonly StatusPedido: readonly [
            { readonly name: 'Pago'; readonly value: 'Pago' },
            { readonly name: 'Enviado'; readonly value: 'Enviado' },
            { readonly name: 'Entregue'; readonly value: 'Entregue' },
            { readonly name: 'Cancelado'; readonly value: 'Cancelado' },
            { readonly name: 'Reembolsado'; readonly value: 'Reembolsado' },
          ];
        };
      };
    };
  };
  readonly capabilities: {
    readonly postgres: {
      readonly distinctOn: true;
      readonly forKeyShare: true;
      readonly forNoKeyUpdate: true;
      readonly jsonAgg: true;
      readonly lateral: true;
      readonly limit: true;
      readonly orderBy: true;
      readonly returning: true;
    };
    readonly sql: {
      readonly checkConstraint: true;
      readonly defaultInInsert: true;
      readonly enums: true;
      readonly forShare: true;
      readonly forUpdate: true;
      readonly insertOnConflictSkip: true;
      readonly insertOnConflictWithoutTarget: true;
      readonly lateral: true;
      readonly lockNowait: true;
      readonly lockOf: true;
      readonly lockSkipLocked: true;
      readonly returning: true;
      readonly scalarList: true;
    };
  };
  readonly extensions: {};
  readonly execution: {
    readonly executionHash: ExecutionHash;
    readonly mutations: {
      readonly defaults: readonly [
        {
          readonly onCreate: { readonly id: 'timestampNow'; readonly kind: 'generator' };
          readonly onUpdate: { readonly id: 'timestampNow'; readonly kind: 'generator' };
          readonly ref: {
            readonly entry: 'Post';
            readonly field: 'updatedAt';
            readonly namespace: 'public';
          };
        },
        {
          readonly onCreate: { readonly id: 'timestampNow'; readonly kind: 'generator' };
          readonly onUpdate: { readonly id: 'timestampNow'; readonly kind: 'generator' };
          readonly ref: {
            readonly entry: 'User';
            readonly field: 'updatedAt';
            readonly namespace: 'public';
          };
        },
      ];
    };
  };
  readonly meta: {};

  readonly profileHash: ProfileHash;
};

export type Contract = ContractWithTypeMaps<ContractBase, TypeMaps>;

export type Namespaces = Contract['storage']['namespaces'];
