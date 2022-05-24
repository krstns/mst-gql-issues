import { Instance } from "mobx-state-tree"
import { DeleteExternalSoftwarePayloadModelBase } from "./DeleteExternalSoftwarePayloadModel.base"

/* The TypeScript type of an instance of DeleteExternalSoftwarePayloadModel */
export interface DeleteExternalSoftwarePayloadModelType extends Instance<typeof DeleteExternalSoftwarePayloadModel.Type> {}

/* A graphql query fragment builders for DeleteExternalSoftwarePayloadModel */
export { selectFromDeleteExternalSoftwarePayload, deleteExternalSoftwarePayloadModelPrimitives, DeleteExternalSoftwarePayloadModelSelector } from "./DeleteExternalSoftwarePayloadModel.base"

/**
 * DeleteExternalSoftwarePayloadModel
 */
export const DeleteExternalSoftwarePayloadModel = DeleteExternalSoftwarePayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
