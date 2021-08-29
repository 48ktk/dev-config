// test/App.test.tsx
import App from '../src/App'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'

describe('App components', () => {
  test('render App components', () => {
    render(<App />)
    screen.debug()
  })
})
