const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="flex justify-between w-full min-h-screen">
      <div className="flex flex-col min-h-full w-1/2 px-40 py-20">{children}</div>
      <div className="flex flex-col min-h-full w-1/2">
        <img src="/img/background-main.png" alt="Background" className="max-h-screen w-full" />
      </div>
    </div>
  )
}

export { MainLayout }
