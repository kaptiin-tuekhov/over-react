import React from 'react'
import glamorous from 'glamorous'
import HeroPortrait from './img/hero-portrait.png'
import bastion from './img/selected-heroes/bastion.png'
import mercy from './img/selected-heroes/mercy.png'
import hanzo from './img/selected-heroes/hanzo.png'
import widowmaker from './img/selected-heroes/widowmaker.png'
import soldier76 from './img/selected-heroes/soldier-76.png'
import tracer from './img/selected-heroes/tracer.png'
import dva from './img/selected-heroes/dva.png'
import genji from './img/selected-heroes/genji.png'
import junkrat from './img/selected-heroes/junkrat.png'
import lucio from './img/selected-heroes/lucio.png'
import mccree from './img/selected-heroes/mccree.png'
import mei from './img/selected-heroes/mei.png'
import pharah from './img/selected-heroes/pharah.png'
import reaper from './img/selected-heroes/reaper.png'
import reinhardt from './img/selected-heroes/reinhardt.png'
import roadhog from './img/selected-heroes/roadhog.png'
import symmetra from './img/selected-heroes/symmetra.png'
import torbjorn from './img/selected-heroes/torbjorn.png'
import winston from './img/selected-heroes/winston.png'
import zarya from './img/selected-heroes/zarya.png'
import zenyatta from './img/selected-heroes/zenyatta.png'

const images = {
  bastion,
  mercy,
  hanzo,
  widowmaker,
  soldier76,
  tracer,
  dva,
  genji,
  junkrat,
  lucio,
  mccree,
  mei,
  pharah,
  reaper,
  reinhardt,
  roadhog,
  symmetra,
  torbjorn,
  winston,
  zarya,
  zenyatta
}
const Selections = glamorous.div({
  gridArea: 'selections',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 77px)',
  justifyContent: 'center',
  gridColumnGap: '29px'
})

const Selection = glamorous.div({
  background: `url(${HeroPortrait}) no-repeat`,
  backgroundSize: '100%',
  backgroundPosition: 'center 10px'
})

const Hero = glamorous.div(({ hero }) => ({
  backgroundPosition:
    hero === 'widowmaker'
      ? `9px 2px`
      : hero === 'soldier76'
        ? '7px 2px'
        : hero === 'tracer' ? '19px 2px' : '18px 2px',
  width: '100%',
  height: '96px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '70%',
  clipPath: `polygon(
    100% 0,
    100% 58%,
    79% 58%,
    78% 68%,
    51% 80%,
    22% 68%,
    23% 61%,
    0 60%,
    0 0
  )`,
  marginBottom: '10px',
  backgroundImage: `url(${images[hero]})`
}))

const Info = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const Name = glamorous.div({
  fontFamily: 'Overwatch',
  fontStyle: 'italic',
  fontSize: '18px',
  color: '#57f2ff',
  marginRight: '3px'
})

const HeroDropdown = glamorous.div({
  width: '11px',
  height: '11px',
  border: '1px solid #fff',
  display: 'flex',
  borderRadius: '9px',
  justifyContent: 'center',
  transform: 'scaleY(-1)',
  '::after': {
    content: '^',
    color: '#fff',
    fontFamily: 'Overwatch'
  }
})

const fakePlayers = [
  {
    name: 'Jerm10297',
    hero: 'mercy'
  },
  {
    name: 'Manlton',
    hero: 'hanzo'
  },
  {
    name: 'Dann',
    hero: 'widowmaker'
  },
  {
    name: 'Madh20rat',
    hero: 'soldier76'
  },
  {
    name: 'Gecko',
    hero: 'tracer'
  }
]
export default ({ hero }) =>
  <Selections>
    <Selection>
      <Hero hero={hero} />
      <Info>
        <Name>Lukosa</Name>
        <HeroDropdown />
      </Info>
    </Selection>
    {fakePlayers.map(({ name, hero }) =>
      <Selection key={name}>
        <Hero hero={hero} />
        <Info>
          <Name>
            {name}
          </Name>
          <HeroDropdown />
        </Info>
      </Selection>
    )}
  </Selections>
