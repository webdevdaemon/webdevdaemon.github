import React, { Component } from 'react'
import Page from '../components/page'
import Navbar from '../components/navbar'
import { Hero } from 'bloomer/lib/layout/Hero/Hero'
import { HeroHeader } from 'bloomer/lib/layout/Hero/HeroHeader'
import { HeroBody } from 'bloomer/lib/layout/Hero/HeroBody'
import { fullPage, noScroll } from '../styles.js'
import svg from '../static/_logo.svg'

const HomeTitle = ({ title, subTitle }) => (
  <>
    <h1 className="title is-res-size-1 has-text-centered">{title}</h1>
    <h2 className="subtitle is-res-size-4 has-text-centered">{subTitle}</h2>
  </>
)

const HomeLogo = ({ logo }) => <img alt="Dev Portfolio: Charles Morgan" className={'home-logo'} src={logo} />

// Actual Page
export default () => (
  <Page
    className="home"
    render={() => (
      <Hero id="hero-home" isFullHeight tag="section">
        <HeroHeader>
          <Navbar className="header" />
        </HeroHeader>
        <HeroBody className="home-body" tag="main">
          <HomeLogo logo={svg} />
          <HomeTitle subTitle="Designer, Team-Builder, Client-Care Specialist, Sound Engineer" title="Charles Morgan" />
        </HeroBody>
      </Hero>
    )}
    style={{ ...fullPage, ...noScroll }}
  />
)
