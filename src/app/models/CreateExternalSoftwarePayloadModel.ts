import { Instance } from "mobx-state-tree"
import { CreateExternalSoftwarePayloadModelBase } from "./CreateExternalSoftwarePayloadModel.base"

/* The TypeScript type of an instance of CreateExternalSoftwarePayloadModel */
export interface CreateExternalSoftwarePayloadModelType extends Instance<typeof CreateExternalSoftwarePayloadModel.Type> {}

/* A graphql query fragment builders for CreateExternalSoftwarePayloadModel */
export { selectFromCreateExternalSoftwarePayload, createExternalSoftwarePayloadModelPrimitives, CreateExternalSoftwarePayloadModelSelector } from "./CreateExternalSoftwarePayloadModel.base"

/**
 * CreateExternalSoftwarePayloadModel
 */
export const CreateExternalSoftwarePayloadModel = CreateExternalSoftwarePayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
