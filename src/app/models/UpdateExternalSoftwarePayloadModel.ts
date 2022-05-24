import { Instance } from "mobx-state-tree"
import { UpdateExternalSoftwarePayloadModelBase } from "./UpdateExternalSoftwarePayloadModel.base"

/* The TypeScript type of an instance of UpdateExternalSoftwarePayloadModel */
export interface UpdateExternalSoftwarePayloadModelType extends Instance<typeof UpdateExternalSoftwarePayloadModel.Type> {}

/* A graphql query fragment builders for UpdateExternalSoftwarePayloadModel */
export { selectFromUpdateExternalSoftwarePayload, updateExternalSoftwarePayloadModelPrimitives, UpdateExternalSoftwarePayloadModelSelector } from "./UpdateExternalSoftwarePayloadModel.base"

/**
 * UpdateExternalSoftwarePayloadModel
 */
export const UpdateExternalSoftwarePayloadModel = UpdateExternalSoftwarePayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
