import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as clientActions from './client.actions'
import { catchError, map, of, switchMap } from "rxjs";
import { Client } from "../../models/classes/client";
import { ClientService } from "../../services/client.service";
import * as appActions from '../app/app.actions'
import { IAlert } from "../../models/interfaces/app";

@Injectable()
export class ClientEffects {
    actions$ = inject(Actions)
    clientService = inject(ClientService)
    getClients$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(clientActions.getClients),
            switchMap(() => {
                return this.clientService.getAllClients().pipe(
                    map((res) => {
                        if (res.result)
                            return clientActions.getClientsComplete({ clients: res.data as Client[] })
                        else
                            return clientActions.getClientsComplete({ clients: [] })
                    }),
                    catchError((error) => of(clientActions.getClientsComplete({ clients: [] })))
                )
            })
        )
    })
    deleteClient$ = createEffect(() => this.actions$.pipe(
        ofType(clientActions.deleteClient),
        switchMap((action) => this.clientService.deleteClientByClientId(action.id).pipe(
            map((res) => {
                let alert: IAlert = {
                    message: res.message,
                    alertYpe: 'danger'
                }
                return appActions.showAlert({ alert: alert })
            })
        ))
    ))
    addUpdateClient$ = createEffect(() => this.actions$.pipe(
        ofType(clientActions.addUpdateClient),
        switchMap((action) => this.clientService.addUpdateClient(action.client))
    ), { dispatch: false })
}