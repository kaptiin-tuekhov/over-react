import React from 'react'
import glamorous from 'glamorous'
import genji from './img/heroes/genji.png'
import mccree from './img/heroes/mccree.png'
import pharah from './img/heroes/pharah.png'
import reaper from './img/heroes/reaper.png'
import soldier76 from './img/heroes/soldier-76.png'
import sombra from './img/heroes/sombra.png'
import tracer from './img/heroes/tracer.png'
import bastion from './img/heroes/bastion.png'
import hanzo from './img/heroes/hanzo.png'
import junkrat from './img/heroes/junkrat.png'
import mei from './img/heroes/mei.png'
import torbjorn from './img/heroes/torbjorn.png'
import widowmaker from './img/heroes/widowmaker.png'
import dva from './img/heroes/dva.png'
import reinhardt from './img/heroes/reinhardt.png'
import roadhog from './img/heroes/roadhog.png'
import winston from './img/heroes/winston.png'
import zarya from './img/heroes/zarya.png'
import lucio from './img/heroes/lucio.png'
import mercy from './img/heroes/mercy.png'
import symmetra from './img/heroes/symmetra.png'
import zenyatta from './img/heroes/zenyatta.png'

const images = {
  genji,
  mccree,
  pharah,
  reaper,
  soldier76,
  sombra,
  tracer,
  bastion,
  hanzo,
  junkrat,
  mei,
  torbjorn,
  widowmaker,
  dva,
  reinhardt,
  roadhog,
  zarya,
  winston,
  lucio,
  symmetra,
  zenyatta,
  mercy
}

const Heroes = glamorous.div({
  gridArea: 'heroes',
  display: 'grid',
  gridTemplateColumns: '241px 213px 206px 177px',
  paddingLeft: '75px',
  gridColumnGap: '32px'
})

const Category = glamorous.div({
  display: 'flex',
  alignItems: 'center'
})

const Option = ({ hero, selectHero }) => {
  const handleClick = () => selectHero(hero)
  const Element = glamorous.div(
    {
      width: '30px',
      height: '44px',
      background: 'black',
      marginRight: '3.2px',
      backgroundSize: 'cover',
      transform: 'skewX(-15deg)',
      transformOrigin: 'bottom left',
      boxShadow: 'inset 0px 2px 0px 0px #fff, inset 0px -1px 0px 0px #fff',
      borderRadius: '3px',
      transitionDuration: '25ms',
      ':hover': {
        transform: 'scale(1.15) skewX(-15deg) translate(-2px, 2px)',
        boxShadow: '0px 0px 0px 3px #fff',
        zIndex: 2
      }
    },
    ({ hero }) => ({ backgroundImage: `url(${images[hero]})` })
  )
  return <Element hero={hero} onClick={handleClick} />
}

const Attack = ({ selectHero }) =>
  <Category>
    <Option hero='tracer' selectHero={selectHero} />
    <Option hero='mccree' selectHero={selectHero} />
    <Option hero='pharah' selectHero={selectHero} />
    <Option hero='reaper' selectHero={selectHero} />
    <Option hero='soldier76' selectHero={selectHero} />
    <Option hero='genji' selectHero={selectHero} />
  </Category>

const Defense = ({ selectHero }) =>
  <Category>
    <Option hero='bastion' selectHero={selectHero} />
    <Option hero='hanzo' selectHero={selectHero} />
    <Option hero='junkrat' selectHero={selectHero} />
    <Option hero='mei' selectHero={selectHero} />
    <Option hero='torbjorn' selectHero={selectHero} />
    <Option hero='widowmaker' selectHero={selectHero} />
  </Category>

const Tank = ({ selectHero }) =>
  <Category>
    <Option hero='dva' selectHero={selectHero} />
    <Option hero='reinhardt' selectHero={selectHero} />
    <Option hero='roadhog' selectHero={selectHero} />
    <Option hero='winston' selectHero={selectHero} />
    <Option hero='zarya' selectHero={selectHero} />
  </Category>

const Support = ({ selectHero }) =>
  <Category>
    <Option hero='lucio' selectHero={selectHero} />
    <Option hero='mercy' selectHero={selectHero} />
    <Option hero='symmetra' selectHero={selectHero} />
    <Option hero='zenyatta' selectHero={selectHero} />
  </Category>

export default ({ selectHero }) =>
  <Heroes>
    <Attack selectHero={selectHero} />
    <Defense selectHero={selectHero} />
    <Tank selectHero={selectHero} />
    <Support selectHero={selectHero} />
  </Heroes>
