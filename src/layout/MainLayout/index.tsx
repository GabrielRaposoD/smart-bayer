const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="flex justify-between w-full min-h-screen">
      <div className="flex flex-col w-1/2 min-h-full px-40 py-20">
        {children}
      </div>
      <div className="flex flex-col w-1/2 min-h-full">
        <img
          src="/img/background-main.png"
          alt="Background"
          className="w-full max-h-screen"
        />
      </div>
    </div>
  );
};

export { MainLayout };
