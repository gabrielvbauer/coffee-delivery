import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  )
}

export default App
