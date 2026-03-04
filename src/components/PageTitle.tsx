/**
 * PageTitle - Reusable large heading for page titles
 */
interface PageTitleProps {
  children: React.ReactNode
}

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className="text-3xl font-bold mb-6">{children}</h1>
  )
}
