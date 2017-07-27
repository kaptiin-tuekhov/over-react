import React, { Component } from 'react'
import glamorous, { Video } from 'glamorous'
import GameInfo from './GameInfo'
import Selections from './Selections'
import Heroes from './Heroes'
import Select from './Select'
import './App.css'

const videoSrc = 'https://s3.us-east-2.amazonaws.com/overwatch-video/Overwatch+-+All+Hero+Highlight+Intros.mp4'

const Container = glamorous.div({
  height: '600px',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '268px 39px 140px 83px 1fr',
  gridTemplateAreas: `"top" "countdown" "selections" "heroes" "select"`
})

const timestamps = {
  bastion: '#t=117.5,122.3',
  genji: '#t=0,4',
  mccree: '#t=20,24',
  pharah: '#t=39.5,44',
  reaper: '#t=59.2,63',
  soldier76: '#t=78.6,83.3',
  tracer: '#t=98.1,102.5',
  hanzo: '#t=136.8,140.5',
  junkrat: '#t=156.2,160.8',
  mei: '#t=175.4,180',
  torbjorn: '#t=194.5,199.4',
  widowmaker: '#t=214.3,218.9',
  dva: '#t=233.7,238.3',
  reinhardt: '#t=253.05,256.8',
  roadhog: '#t=271.9,276.4',
  winston: '#t=291.1,295.7',
  zarya: '#t=310.4,315',
  lucio: '#t=329.6,334.2',
  mercy: '#t=348.7,353.5',
  symmetra: '#t=367.8,372.4',
  zenyatta: '#t=386,390.6'
}
const Background = ({ hero }) =>
  <Video
    src={`${videoSrc}${timestamps[hero]}`}
    autoPlay
    height='600px'
    position='absolute'
    zIndex={-1}
  />

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
        <Background hero={hero} />
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
