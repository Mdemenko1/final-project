import React from 'react';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';







const DropdownMenu = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <DropdownMenuAuth /> : <DropdownMenuNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
);


const DropdownMenuAuth = () => (
    <div>
        <div className="mb-2 dropdown">
            {[DropdownButton].map((DropdownType, idx) => (
                <DropdownType
                    as={ButtonGroup}
                    key={idx}
                    id={`dropdown-button-drop-${idx}`}
                    size="sm"
                    title="My Account"
                    className="dropdown"
                >


                    <Dropdown.Item as={Link} to={ROUTES.ADMIN}>Admin</Dropdown.Item>
                    <Dropdown.Item as={Link} to={ROUTES.ACCOUNT}>Edit Profile</Dropdown.Item>
                    <Dropdown.Item as={Link} to={ROUTES.CART}>Cart</Dropdown.Item>
                    <SignOutButton />


                </DropdownType>
            ))}
        </div>
    </div>
);


const DropdownMenuNonAuth = () => (
    <div>
        <div className="mb-2">
            {[DropdownButton].map((DropdownType, idx) => (
                <DropdownType
                    as={ButtonGroup}
                    key={idx}
                    id={`dropdown-button-drop-${idx}`}
                    size="sm"
                    title="My Account"
                >


                    <Dropdown.Item as={Link} to={ROUTES.SIGN_IN}>Sign In</Dropdown.Item>
                    <Dropdown.Item as={Link} to={ROUTES.SIGN_UP}>Sing Up</Dropdown.Item>

                </DropdownType>
            ))}
        </div>
    </div>

);
export default DropdownMenu;