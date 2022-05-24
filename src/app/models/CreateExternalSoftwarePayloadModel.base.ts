/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ExternalSoftwareModel, ExternalSoftwareModelType } from "./ExternalSoftwareModel"
import { ExternalSoftwareModelSelector } from "./ExternalSoftwareModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  externalSoftware: ExternalSoftwareModelType;
}

/**
 * CreateExternalSoftwarePayloadBase
 * auto generated base class for the model CreateExternalSoftwarePayloadModel.
 */
export const CreateExternalSoftwarePayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('CreateExternalSoftwarePayload')
  .props({
    __typename: types.optional(types.literal("createExternalSoftwarePayload"), "createExternalSoftwarePayload"),
    externalSoftware: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ExternalSoftwareModel))),
    clientMutationId: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CreateExternalSoftwarePayloadModelSelector extends QueryBuilder {
  get clientMutationId() { return this.__attr(`clientMutationId`) }
  externalSoftware(builder: string | ExternalSoftwareModelSelector | ((selector: ExternalSoftwareModelSelector) => ExternalSoftwareModelSelector) | undefined) { return this.__child(`externalSoftware`, ExternalSoftwareModelSelector, builder) }
}
export function selectFromCreateExternalSoftwarePayload() {
  return new CreateExternalSoftwarePayloadModelSelector()
}

export const createExternalSoftwarePayloadModelPrimitives = selectFromCreateExternalSoftwarePayload().clientMutationId
