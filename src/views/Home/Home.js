import React, { useState } from 'react'

import Preview from '../../components/Preview/Preview'
import Editor from '../../components/Editor/Editor'

import './Home.css'

export default function Home() {
  const [title, setTitle] = useState('')
  const [subtile, setSubtitle] = useState('')
  const [font, setFont] = useState('')
  const [align, setAlign] = useState('')
  const [text, setText] = useState('')
  // add useState calls here for title, subtitle, font, align, and text

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtile} font={font} align={align} text={text} />
      <Editor
        setTitle={setTitle}
        setSubtitle={setSubtitle}
        setFont={setFont}
        setAlign={setAlign}
        setText={setText}
      />
    </main>
  )
}
