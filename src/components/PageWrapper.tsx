/**
 * PageWrapper - Shared layout wrapper for consistent page padding
 */
interface PageWrapperProps {
  children: React.ReactNode
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      {children}
    </div>
  )
}
