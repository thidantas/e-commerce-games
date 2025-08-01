/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  '\n  query GetGameBySlug($slug: String!) {\n    games(filters: { slug: { eq: $slug } }) {\n      name\n      short_description\n      description\n      price\n      rating\n      release_date\n      gallery {\n        src: url\n        label: alternativeText\n      }\n\n      cover {\n        src: url\n      }\n\n      developers {\n        name\n      }\n\n      publisher {\n        name\n      }\n\n      categories {\n        name\n      }\n\n      platforms {\n        name\n      }\n    }\n  }\n': typeof types.GetGameBySlugDocument
  '\n  query GetGames($limit: Int!) {\n    games(pagination: { limit: $limit }) {\n      name\n      slug\n      cover {\n        url\n      }\n\n      developers {\n        name\n      }\n\n      price\n    }\n  }\n': typeof types.GetGamesDocument
}
const documents: Documents = {
  '\n  query GetGameBySlug($slug: String!) {\n    games(filters: { slug: { eq: $slug } }) {\n      name\n      short_description\n      description\n      price\n      rating\n      release_date\n      gallery {\n        src: url\n        label: alternativeText\n      }\n\n      cover {\n        src: url\n      }\n\n      developers {\n        name\n      }\n\n      publisher {\n        name\n      }\n\n      categories {\n        name\n      }\n\n      platforms {\n        name\n      }\n    }\n  }\n':
    types.GetGameBySlugDocument,
  '\n  query GetGames($limit: Int!) {\n    games(pagination: { limit: $limit }) {\n      name\n      slug\n      cover {\n        url\n      }\n\n      developers {\n        name\n      }\n\n      price\n    }\n  }\n':
    types.GetGamesDocument
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetGameBySlug($slug: String!) {\n    games(filters: { slug: { eq: $slug } }) {\n      name\n      short_description\n      description\n      price\n      rating\n      release_date\n      gallery {\n        src: url\n        label: alternativeText\n      }\n\n      cover {\n        src: url\n      }\n\n      developers {\n        name\n      }\n\n      publisher {\n        name\n      }\n\n      categories {\n        name\n      }\n\n      platforms {\n        name\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetGameBySlug($slug: String!) {\n    games(filters: { slug: { eq: $slug } }) {\n      name\n      short_description\n      description\n      price\n      rating\n      release_date\n      gallery {\n        src: url\n        label: alternativeText\n      }\n\n      cover {\n        src: url\n      }\n\n      developers {\n        name\n      }\n\n      publisher {\n        name\n      }\n\n      categories {\n        name\n      }\n\n      platforms {\n        name\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetGames($limit: Int!) {\n    games(pagination: { limit: $limit }) {\n      name\n      slug\n      cover {\n        url\n      }\n\n      developers {\n        name\n      }\n\n      price\n    }\n  }\n'
): (typeof documents)['\n  query GetGames($limit: Int!) {\n    games(pagination: { limit: $limit }) {\n      name\n      slug\n      cover {\n        url\n      }\n\n      developers {\n        name\n      }\n\n      price\n    }\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
