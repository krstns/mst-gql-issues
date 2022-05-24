import { Instance } from "mobx-state-tree"
import {ExternalSoftwareModelBase, selectFromExternalSoftware} from "./ExternalSoftwareModel.base"
import {selectFromUpdateExternalSoftwarePayload} from "./UpdateExternalSoftwarePayloadModel.base";

/* The TypeScript type of an instance of ExternalSoftwareModel */
export interface ExternalSoftwareModelType extends Instance<typeof ExternalSoftwareModel.Type> {}

/* A graphql query fragment builders for ExternalSoftwareModel */
export { selectFromExternalSoftware, externalSoftwareModelPrimitives, ExternalSoftwareModelSelector } from "./ExternalSoftwareModel.base"

/**
 * ExternalSoftwareModel
 */
export const ExternalSoftwareModel = ExternalSoftwareModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    },
    rename(newName: string) {
      return self.store.mutateUpdateExternalSoftware({input:{id: self.id, name: newName}},
        selectFromUpdateExternalSoftwarePayload().externalSoftware(selectFromExternalSoftware().name).toString(),
        () => { self.name = newName});
    }
  }))
