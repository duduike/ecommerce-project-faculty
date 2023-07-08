
interface MainProps {
    children: React.ReactNode;
}

export const Main = ({children} : MainProps) => {
  return (
    <main className="h-screen">
        {children}
    </main>
  )
}

