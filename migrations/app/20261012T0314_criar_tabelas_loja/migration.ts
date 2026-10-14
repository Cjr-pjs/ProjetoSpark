#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/02430cb6fc1e1667646abe375fc8ba7cd42f5b32010c4ac9d81e65979baffd79/contract';
import endContract from '../../snapshots/02430cb6fc1e1667646abe375fc8ba7cd42f5b32010c4ac9d81e65979baffd79/contract.json' with { type: 'json' };
import {
  Migration,
  MigrationCLI,
  checkExpression,
  col,
  fn,
  primaryKey,
} from '@prisma/orm-postgres/migration';

export default class M extends Migration<never, End> {
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createSchema({ schema: 'public' }),
      this.createTable({
        schema: 'public',
        table: 'Post',
        columns: [
          col('authorId', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('content', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('title', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'User',
        columns: [
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('email', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('name', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('username', 'text', { codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'avaliacoes',
        columns: [
          col('cliente_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('comentario', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('data_avaliacao', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('nota', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('pedido_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('produto_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression('avaliacoes_nota_1_a_5_9e21ccee', 'nota BETWEEN 1 AND 5'),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'clientes',
        columns: [
          col('canal_aquisicao', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('cidade', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('data_cadastro', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('data_nascimento', 'date', {
            notNull: true,
            codecRef: { codecId: 'pg/date-string@1' },
          }),
          col('email', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('estado', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('newsletter', 'bool', { notNull: true, codecRef: { codecId: 'pg/bool@1' } }),
          col('nome', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('regiao', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'itens_pedido',
        columns: [
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('pedido_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('preco_unitario', 'numeric(10,2)', {
            notNull: true,
            codecRef: { codecId: 'pg/numeric@1', typeParams: { precision: 10, scale: 2 } },
          }),
          col('produto_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('quantidade', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('sabor_id', 'int4', { codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'pedidos',
        columns: [
          col('cliente_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('cupom', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('data_pedido', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('forma_pagamento', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('status', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('valor_desconto', 'numeric(10,2)', {
            notNull: true,
            codecRef: { codecId: 'pg/numeric@1', typeParams: { precision: 10, scale: 2 } },
          }),
          col('valor_frete', 'numeric(10,2)', {
            notNull: true,
            codecRef: { codecId: 'pg/numeric@1', typeParams: { precision: 10, scale: 2 } },
          }),
          col('valor_itens', 'numeric(10,2)', {
            notNull: true,
            codecRef: { codecId: 'pg/numeric@1', typeParams: { precision: 10, scale: 2 } },
          }),
          col('valor_total', 'numeric(10,2)', {
            notNull: true,
            codecRef: { codecId: 'pg/numeric@1', typeParams: { precision: 10, scale: 2 } },
          }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression(
            'pedidos_status_check_15f7032d',
            `"status" IN ('Pago', 'Enviado', 'Entregue', 'Cancelado', 'Reembolsado')`,
          ),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'produtos',
        columns: [
          col('categoria', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('custo', 'numeric(10,2)', {
            notNull: true,
            codecRef: { codecId: 'pg/numeric@1', typeParams: { precision: 10, scale: 2 } },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('nome', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('preco_atual', 'numeric(10,2)', {
            notNull: true,
            codecRef: { codecId: 'pg/numeric@1', typeParams: { precision: 10, scale: 2 } },
          }),
          col('preco_cheio', 'numeric(10,2)', {
            notNull: true,
            codecRef: { codecId: 'pg/numeric@1', typeParams: { precision: 10, scale: 2 } },
          }),
          col('qtd_unidades', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('tem_sabor', 'bool', { notNull: true, codecRef: { codecId: 'pg/bool@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression(
            'produtos_categoria_check_b264025d',
            `"categoria" IN ('Energy Drink', 'Pack', 'Combo', 'Snack')`,
          ),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'sabores',
        columns: [
          col('cor_hex', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('nome', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'sessoes',
        columns: [
          col('adicionou_carrinho', 'bool', { notNull: true, codecRef: { codecId: 'pg/bool@1' } }),
          col('cliente_id', 'int4', { codecRef: { codecId: 'pg/int4@1' } }),
          col('converteu', 'bool', { notNull: true, codecRef: { codecId: 'pg/bool@1' } }),
          col('data_hora', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('dispositivo', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('duracao_seg', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('id', 'BIGSERIAL', { notNull: true, codecRef: { codecId: 'pg/int8@1' } }),
          col('origem', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('paginas_vistas', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('pedido_id', 'int4', { codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.addUnique({
        schema: 'public',
        table: 'User',
        constraint: 'User_email_key',
        columns: ['email'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'avaliacoes',
        constraint: 'avaliacoes_pedido_id_produto_id_key',
        columns: ['pedido_id', 'produto_id'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'clientes',
        constraint: 'clientes_email_key',
        columns: ['email'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'produtos',
        constraint: 'produtos_nome_key',
        columns: ['nome'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'sabores',
        constraint: 'sabores_nome_key',
        columns: ['nome'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'Post',
        index: 'Post_authorId_idx_e47547ed',
        columns: ['authorId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'avaliacoes',
        index: 'avaliacoes_cliente_id_idx_9196b84e',
        columns: ['cliente_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'avaliacoes',
        index: 'avaliacoes_pedido_id_idx_57130803',
        columns: ['pedido_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'avaliacoes',
        index: 'avaliacoes_produto_id_idx_63485217',
        columns: ['produto_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'clientes',
        index: 'clientes_estado_idx_c74e5888',
        columns: ['estado'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'itens_pedido',
        index: 'itens_pedido_pedido_id_idx_57130803',
        columns: ['pedido_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'itens_pedido',
        index: 'itens_pedido_produto_id_idx_63485217',
        columns: ['produto_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'itens_pedido',
        index: 'itens_pedido_sabor_id_idx_32d5dd60',
        columns: ['sabor_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'pedidos',
        index: 'pedidos_cliente_id_idx_9196b84e',
        columns: ['cliente_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'pedidos',
        index: 'pedidos_data_pedido_idx_c3d404a9',
        columns: ['data_pedido'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'sessoes',
        index: 'sessoes_cliente_id_idx_9196b84e',
        columns: ['cliente_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'sessoes',
        index: 'sessoes_data_hora_idx_e0722461',
        columns: ['data_hora'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'sessoes',
        index: 'sessoes_pedido_id_idx_57130803',
        columns: ['pedido_id'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'Post',
        foreignKey: {
          name: 'Post_authorId_fkey',
          columns: ['authorId'],
          references: { schema: 'public', table: 'User', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'avaliacoes',
        foreignKey: {
          name: 'avaliacoes_pedido_id_fkey',
          columns: ['pedido_id'],
          references: { schema: 'public', table: 'pedidos', columns: ['id'] },
          onDelete: 'cascade',
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'avaliacoes',
        foreignKey: {
          name: 'avaliacoes_produto_id_fkey',
          columns: ['produto_id'],
          references: { schema: 'public', table: 'produtos', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'avaliacoes',
        foreignKey: {
          name: 'avaliacoes_cliente_id_fkey',
          columns: ['cliente_id'],
          references: { schema: 'public', table: 'clientes', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'itens_pedido',
        foreignKey: {
          name: 'itens_pedido_pedido_id_fkey',
          columns: ['pedido_id'],
          references: { schema: 'public', table: 'pedidos', columns: ['id'] },
          onDelete: 'cascade',
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'itens_pedido',
        foreignKey: {
          name: 'itens_pedido_produto_id_fkey',
          columns: ['produto_id'],
          references: { schema: 'public', table: 'produtos', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'itens_pedido',
        foreignKey: {
          name: 'itens_pedido_sabor_id_fkey',
          columns: ['sabor_id'],
          references: { schema: 'public', table: 'sabores', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'pedidos',
        foreignKey: {
          name: 'pedidos_cliente_id_fkey',
          columns: ['cliente_id'],
          references: { schema: 'public', table: 'clientes', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'sessoes',
        foreignKey: {
          name: 'sessoes_cliente_id_fkey',
          columns: ['cliente_id'],
          references: { schema: 'public', table: 'clientes', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'sessoes',
        foreignKey: {
          name: 'sessoes_pedido_id_fkey',
          columns: ['pedido_id'],
          references: { schema: 'public', table: 'pedidos', columns: ['id'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
