import React, { Component } from 'react'
import glamorous from 'glamorous'
import GameInfo from './GameInfo'
import Selections from './Selections'
import Heroes from './Heroes'
import Select from './Select'
import Video from './Video'
import './App.css'

const Container = glamorous.div({
  height: '600px',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '268px 39px 140px 83px 1fr',
  gridTemplateAreas: `"top" "countdown" "selections" "heroes" "select"`
})

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = { hero: 'tracer' }
    this.selectHero = this.selectHero.bind(this)
  }

  selectHero (hero) {
    this.setState(prevState => Object.assign({}, prevState, { hero }))
  }
  render () {
    const { hero } = this.state
    return (
      <div>
        <Video hero={hero} />
        <Container>
          <GameInfo hero={hero} />
          <Selections hero={hero} />
          <Heroes selectHero={this.selectHero} />
          <Select />
        </Container>
      </div>
    )
  }
}
