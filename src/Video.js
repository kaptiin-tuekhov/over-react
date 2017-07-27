import React, { Component } from 'react'
import glamorous from 'glamorous'

const timestamps = {
  bastion: { start: 117.5, end: 122.3 },
  genji: { start: 0, end: 4 },
  mccree: { start: 20, end: 24 },
  pharah: { start: 39.5, end: 44 },
  reaper: { start: 59.2, end: 63 },
  soldier76: { start: 78.6, end: 83.3 },
  tracer: { start: 98.1, end: 102.5 },
  hanzo: { start: 136.8, end: 140.5 },
  junkrat: { start: 156.2, end: 160.8 },
  mei: { start: 175.4, end: 180 },
  torbjorn: { start: 194.5, end: 199.4 },
  widowmaker: { start: 214.3, end: 218.9 },
  dva: { start: 233.7, end: 238.3 },
  reinhardt: { start: 253.05, end: 256.8 },
  roadhog: { start: 271.9, end: 276.4 },
  winston: { start: 291.1, end: 295.7 },
  zarya: { start: 310.4, end: 315 },
  lucio: { start: 329.6, end: 334.2 },
  mercy: { start: 348.7, end: 353.5 },
  symmetra: { start: 367.8, end: 372.4 },
  zenyatta: { start: 386, end: 390.6 }
}

const videoSrc =
  'https://s3.us-east-2.amazonaws.com/overwatch-video/Overwatch+-+All+Hero+Highlight+Intros.mp4'

// const Background = ({ hero }) =>

class Background extends Component {
  constructor (props) {
    super(props)
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this)
  }

  componentDidMount () {
    this.video.currentTime = timestamps[this.props.hero].start
  }
  handleTimeUpdate () {
    const timeLeft = timestamps[this.props.hero].end - this.video.currentTime
    console.log(timeLeft)
    if (timeLeft <= 0.3) {
      this.video.pause()
    }
  }

  render () {
    const { hero, className } = this.props
    if (this.video) {
      this.video.currentTime = timestamps[hero].start
      this.video.play()
    }
    return (
      <video
        src={`${videoSrc}`}
        height='600px'
        ref={video => {
          this.video = video
        }}
        autoPlay
        onTimeUpdate={this.handleTimeUpdate}
        className={`${className}`}
      />
    )
  }
}

export default glamorous(Background)({
  position: 'absolute',
  zIndex: -1
})
