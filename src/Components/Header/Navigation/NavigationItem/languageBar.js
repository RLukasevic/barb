import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './languageBar.module.css';

const LanguageBar = props => {

    return (
        <div>
           <ButtonToolbar>
            <DropdownButton
            title={'Lietuviu'}
            variant={'secondary'}
            id={'dropdown-variants-secondary'}
            key={'secondary'}
            >
                <Dropdown.Item eventKey="1" active>Lietuviu</Dropdown.Item>
                <Dropdown.Item eventKey="2">Rusu</Dropdown.Item>
                <Dropdown.Item eventKey="3">Anglu</Dropdown.Item>
            </DropdownButton>
        </ButtonToolbar> 
        </div>
    );
}

export default LanguageBar;