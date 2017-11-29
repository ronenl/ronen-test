import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import CoolTextArea from '../components/CoolTextArea';
import '../index.css';
import '../App.css';


storiesOf('CoolTextArea', module)
    .addDecorator(withKnobs)
    .add('with dynamic props', () =>
        <CoolTextArea minrows={number('Minimum Rows', 4)} maxrows={number('Maximum Rows', 10)} />);
