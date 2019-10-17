import React, {Component} from 'react'
import Page from '../components/page'
import Navbar from '../components/navbar'
import {Hero} from 'bloomer/lib/layout/Hero/Hero'
import {HeroHeader} from 'bloomer/lib/layout/Hero/HeroHeader'
import {HeroBody} from 'bloomer/lib/layout/Hero/HeroBody'
import {fullPage, noScroll} from '../styles.js'
import svg from '../public/logo.svg'

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
          <div
            className="strip"
            style={{
              backgroundColor: 'rgba(0,0,0,0.66)',
              padding: '1rem 0 2rem 0',
              width: '100vw',
            }}
          >
            <img alt="Dev Portfolio: Charles Morgan" className="home-logo" src={svg} />
            <h3 className="subtitle has-text-centered">
              Superstar Teammate, Expert Communicator,
              <br />& Web Developer Extraordinaire
            </h3>
          </div>
        </HeroBody>
      </Hero>
    )}
    style={{...fullPage, ...noScroll}}
  />
)
