/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { QueryBuilder } from "mst-gql"
import { ExternalSoftwareModelType } from "./ExternalSoftwareModel"
import { ExternalSoftwareModelSelector } from "./ExternalSoftwareModel.base"

export type NodeUnion = ExternalSoftwareModelType

export class NodeModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  externalSoftware(builder?: string | ExternalSoftwareModelSelector | ((selector: ExternalSoftwareModelSelector) => ExternalSoftwareModelSelector)) { return this.__inlineFragment(`ExternalSoftware`, ExternalSoftwareModelSelector, builder) }
}
export function selectFromNode() {
  return new NodeModelSelector()
}

export const nodeModelPrimitives = selectFromNode()