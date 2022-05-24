/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { ExternalSoftwareModel, ExternalSoftwareModelType } from "./ExternalSoftwareModel"
import { externalSoftwareModelPrimitives, ExternalSoftwareModelSelector } from "./ExternalSoftwareModel.base"
import { CreateExternalSoftwarePayloadModel, CreateExternalSoftwarePayloadModelType } from "./CreateExternalSoftwarePayloadModel"
import { createExternalSoftwarePayloadModelPrimitives, CreateExternalSoftwarePayloadModelSelector } from "./CreateExternalSoftwarePayloadModel.base"
import { DeleteExternalSoftwarePayloadModel, DeleteExternalSoftwarePayloadModelType } from "./DeleteExternalSoftwarePayloadModel"
import { deleteExternalSoftwarePayloadModelPrimitives, DeleteExternalSoftwarePayloadModelSelector } from "./DeleteExternalSoftwarePayloadModel.base"
import { UpdateExternalSoftwarePayloadModel, UpdateExternalSoftwarePayloadModelType } from "./UpdateExternalSoftwarePayloadModel"
import { updateExternalSoftwarePayloadModelPrimitives, UpdateExternalSoftwarePayloadModelSelector } from "./UpdateExternalSoftwarePayloadModel.base"

import { nodeModelPrimitives, NodeModelSelector , NodeUnion } from "./"


export type CreateExternalSoftwareInput = {
  _id: string
  name: string
  clientMutationId?: string
}
export type DeleteExternalSoftwareInput = {
  id: string
  clientMutationId?: string
}
export type UpdateExternalSoftwareInput = {
  id: string
  _id?: string
  name?: string
  clientMutationId?: string
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  externalSoftware: ObservableMap<string, ExternalSoftwareModelType>
}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryNode="queryNode",
queryExternalSoftware="queryExternalSoftware"
}
export enum RootStoreBaseMutations {
mutateDeleteExternalSoftware="mutateDeleteExternalSoftware",
mutateUpdateExternalSoftware="mutateUpdateExternalSoftware",
mutateCreateExternalSoftware="mutateCreateExternalSoftware"
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['ExternalSoftware', () => ExternalSoftwareModel], ['createExternalSoftwarePayload', () => CreateExternalSoftwarePayloadModel], ['deleteExternalSoftwarePayload', () => DeleteExternalSoftwarePayloadModel], ['updateExternalSoftwarePayload', () => UpdateExternalSoftwarePayloadModel]], ['ExternalSoftware'], "js"))
  .props({
    externalSoftware: types.optional(types.map(types.late((): any => ExternalSoftwareModel)), {})
  })
  .actions(self => ({
    queryNode(variables: { id: string }, resultSelector: string | ((qb: NodeModelSelector) => NodeModelSelector) = nodeModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ node: NodeUnion}>(`query node($id: ID!) { node(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new NodeModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryExternalSoftware(variables: { id: string }, resultSelector: string | ((qb: ExternalSoftwareModelSelector) => ExternalSoftwareModelSelector) = externalSoftwareModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ externalSoftware: ExternalSoftwareModelType}>(`query externalSoftware($id: ID!) { externalSoftware(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new ExternalSoftwareModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    mutateDeleteExternalSoftware(variables: { input: DeleteExternalSoftwareInput }, resultSelector: string | ((qb: DeleteExternalSoftwarePayloadModelSelector) => DeleteExternalSoftwarePayloadModelSelector) = deleteExternalSoftwarePayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteExternalSoftware: DeleteExternalSoftwarePayloadModelType}>(`mutation deleteExternalSoftware($input: deleteExternalSoftwareInput!) { deleteExternalSoftware(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteExternalSoftwarePayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateExternalSoftware(variables: { input: UpdateExternalSoftwareInput }, resultSelector: string | ((qb: UpdateExternalSoftwarePayloadModelSelector) => UpdateExternalSoftwarePayloadModelSelector) = updateExternalSoftwarePayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateExternalSoftware: UpdateExternalSoftwarePayloadModelType}>(`mutation updateExternalSoftware($input: updateExternalSoftwareInput!) { updateExternalSoftware(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateExternalSoftwarePayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateExternalSoftware(variables: { input: CreateExternalSoftwareInput }, resultSelector: string | ((qb: CreateExternalSoftwarePayloadModelSelector) => CreateExternalSoftwarePayloadModelSelector) = createExternalSoftwarePayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createExternalSoftware: CreateExternalSoftwarePayloadModelType}>(`mutation createExternalSoftware($input: createExternalSoftwareInput!) { createExternalSoftware(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new CreateExternalSoftwarePayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
  })))
