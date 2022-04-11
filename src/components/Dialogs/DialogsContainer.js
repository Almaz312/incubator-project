import React from "react";
import './Dialogs.css'
import {sendMassageCreator, updateNewMassageBodyCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMassageBody: () => {
            dispatch(sendMassageCreator())
        },
        sendMassage: (body) => {
            dispatch(updateNewMassageBodyCreator(body));
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);