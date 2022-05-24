/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ExternalSoftwareBase
 * auto generated base class for the model ExternalSoftwareModel.
 */
export const ExternalSoftwareModelBase = ModelBase
  .named('ExternalSoftware')
  .props({
    __typename: types.optional(types.literal("ExternalSoftware"), "ExternalSoftware"),
    id: types.identifier,
    _id: types.union(types.undefined, types.string),
    name: types.union(types.undefined, types.string),
    created: types.union(types.undefined, types.string),
    modified: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ExternalSoftwareModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get _id() { return this.__attr(`_id`) }
  get name() { return this.__attr(`name`) }
  get created() { return this.__attr(`created`) }
  get modified() { return this.__attr(`modified`) }
}
export function selectFromExternalSoftware() {
  return new ExternalSoftwareModelSelector()
}

export const externalSoftwareModelPrimitives = selectFromExternalSoftware()._id.name.created.modified
