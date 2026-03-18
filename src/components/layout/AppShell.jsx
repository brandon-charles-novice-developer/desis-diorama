import Sidebar from './Sidebar'

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-warm-bg">
      <Sidebar />
      <main className="lg:ml-56 max-w-3xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="space-y-16 md:space-y-20">
          {children}
        </div>
      </main>
    </div>
  )
}
