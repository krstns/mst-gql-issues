import {Component} from '@angular/core';
import {ModelCreationType} from "mobx-state-tree";
import {ExternalSoftwareModelType, RootStore, RootStoreType} from "./models";
import {createHttpClient} from "mst-gql"

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title = 'angularmstgql';
    private _token = "token";
    private _rootStore: ModelCreationType<RootStoreType>;

    constructor() {
        this._rootStore = this.getStore();
    }

    public start() {
        this._rootStore.queryExternalSoftware({id: "/api/external_software/krstn"}).then(
            (ext: ExternalSoftwareModelType) => {
                console.log(`Current name: ${ext.name}`)
                ext.rename(new Date().toLocaleString());
            },
            (e: any) => {
                console.log(e);
            }
        );
    }

    public rename(ext: ExternalSoftwareModelType) {
        console.log("renaming")
        ext.rename("tralalal").then(
            (ext: ExternalSoftwareModelType) => {
                console.log(`Rename process complete ${ext.name}`);
            },
            (e: any) => {
                console.log(e);
            }
        );
    }

    private getStore(): ModelCreationType<RootStoreType> {
        return RootStore.create(undefined, {
            gqlHttpClient: createHttpClient(`https://localhost/api/graphql`, {
                headers: {authorization: `Bearer ${this._token}`}
            })
        });
    }


}
