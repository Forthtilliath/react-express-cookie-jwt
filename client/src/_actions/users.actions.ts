import { ILogin, IPayloadLogin } from '../interfaces';
import * as api from '../_api';
import { AUTH } from '../_constants/actionTypes';
import { History } from 'history';

export const signin =
    (formData: ILogin, history: History<unknown>) =>
    async (dispatch: (arg0: { type: string; payload: IPayloadLogin }) => void) => {
        api.login(formData)
            .then(({ data }) => dispatch({ type: AUTH, payload: data }))
            .then(() => history.push('/'))
            .catch((err) => console.log(err));
    };
