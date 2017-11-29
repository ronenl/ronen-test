import React from 'react';

import { storiesOf } from '@storybook/react';
import CoolTextArea from '../components/CoolTextArea';
import '../index.css';
import '../App.css';


storiesOf('CoolTextArea', module)
    .add('with minimum 4 rows and maximum 10 rows', () => <CoolTextArea minrows={4} maxrows={10} />);
