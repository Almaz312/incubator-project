import React from "react";
import './Dialogs.css'
import {sendMassageCreator, updateNewMassageBodyCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import ContextStore from "../../ContextStore";

export function DialogsContainer() {
    return <ContextStore.Consumer>
        {(store) => {
            const state = store.getState().dialogPage;
            const onNewMessageChange = (body) => {
                store.dispatch(updateNewMassageBodyCreator(body));
            }
            const onSendMessageClick = () => {
                store.dispatch(sendMassageCreator());
            }
            return <Dialogs updateNewMassageBody={onNewMessageChange}
                            sendMassage={onSendMessageClick}
                            dialogPage={state}/>
            }
        }
    </ContextStore.Consumer>
};