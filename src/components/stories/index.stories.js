import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import * as knobs from '@storybook/addon-knobs/react'

import { Button, Welcome } from '@storybook/react/demo'

// test
import { App } from '../../App'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role='img' aria-label='so cool'>
        😀 😎 👍 💯
      </span>
    </Button>
  ))

storiesOf('Test', module)
  .addDecorator(knobs.withKnobs)
  .add('Test1', () => (
    <App name={knobs.text('name', '시작')} />
  ))
  .add('Test2', () => (
    <App name={knobs.text('name', '시작')} />
  ))
  .add('Test3', () => (
    <App name={knobs.text('name', '시작')} />
  ))
