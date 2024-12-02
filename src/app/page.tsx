// app/page.tsx
import { ThemeToggle } from '@/app/components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Theme Switcher Example</h1>
          <ThemeToggle />
        </div>
        
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <p>Este conteúdo se adapta ao tema atual!</p>
        </div>
      </div>
    </main>
  )
}