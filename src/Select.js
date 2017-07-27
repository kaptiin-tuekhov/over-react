import React from 'react'
import glamorous from 'glamorous'

const Select = glamorous.div({
  gridArea: 'select',
  display: 'flex',
  justifyContent: 'center'
})

const Button = glamorous.button({
  height: '32px',
  width: '110px',
  border: 'none',
  marginTop: '15px',
  fontSize: '22px',
  fontFamily: 'Overwatch',
  letterSpacing: '2px',
  color: '#fff',
  background: '#b47900',
  ':hover': {
    background: '#df9600'
  }
})

export default () =>
  <Select>
    <Button>Select</Button>
  </Select>
