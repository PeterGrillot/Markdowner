import React from 'react'
import Remarkable from 'remarkable'

it('renders Markdown', () => {
  const sampleMarkdown = 'This is *Markdown*'
  const md = new Remarkable()
  md.render(sampleMarkdown)
})
