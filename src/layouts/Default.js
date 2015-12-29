import React from 'react'

import logo from '../img/nucleate-logo.svg'

export default function DefaultLayout ({ children }) {
  return (
    <div className='wide-page-body'>
      <nav className='side-menu'>
        <a href='/' className='nucleate-home-link'>
          <img className='nucleate-home-logo' src={logo} alt='Nucleate logo'/>
        </a>
        <h3>
          <a href='/' className='nucleate-home-link'>Nucleate</a>
        </h3>
        {/*
        <ul>
          {% for chapter in site.tags.chapters %}
          <li>{% if page.id == chapter.id %}<strong><a href='{{ chapter.url }}'>{{ chapter.title }}</a></strong>{% else %}<a href='{{ chapter.url }}'>{{ chapter.title }}{% endif %}</a></li>
          {% endfor %}
          <li><a className='github-link' href='https://github.com/cyclejs' target='_blank'><i className='fa fa-github'></i>
          </a></li>
        </ul>
        */}
      </nav>
      <article id='content'>
        <header>
          <h2>The Title</h2>
        </header>
        <div>
          {children}
        </div>
      </article>
    </div>
  )
}