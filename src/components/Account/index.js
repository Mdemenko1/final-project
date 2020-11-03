import React from 'react';

import { AuthUserContext } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';
import EditInfo from '../EditInfo';

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <h1>Edit Information for: {authUser.email}</h1>
                <PasswordForgetForm />
                <PasswordChangeForm />
                <p>----------------------------------------------------------------------------------------------------------------------------------------</p>
                <EditInfo />
            </div>
        )}
    </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);