import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('exibe o título "O Forasteiro"', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: 'O Forasteiro' }),
    ).toBeInTheDocument()
  })
})
