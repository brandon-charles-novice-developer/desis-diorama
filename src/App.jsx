import AppShell from './components/layout/AppShell'
import Welcome from './components/sections/Welcome'
import Problem from './components/sections/Problem'
import Solution from './components/sections/Solution'
import DataEdge from './components/sections/DataEdge'
import DataDeepDive from './components/sections/DataDeepDive'
import KargoBridge from './components/sections/KargoBridge'
import Competition from './components/sections/Competition'
import TalkTracks from './components/sections/TalkTracks'
import Closing from './components/sections/Closing'

export default function App() {
  return (
    <AppShell>
      <Welcome />
      <Problem />
      <Solution />
      <DataEdge />
      <DataDeepDive />
      <KargoBridge />
      <Competition />
      <TalkTracks />
      <Closing />
    </AppShell>
  )
}
