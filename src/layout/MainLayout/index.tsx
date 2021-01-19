import cs from 'clsx';

interface MainLayoutProps {
  children: React.ReactNode;
  img: string;
  isCover?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  img,
  isCover = false,
}: MainLayoutProps) => {
  return (
    <div className='flex justify-between w-full min-h-screen'>
      <div className='flex flex-col w-1/2 min-h-full px-40 py-20'>
        {children}
      </div>
      <div className='flex flex-col w-1/2 min-h-full'>
        <img
          src={img}
          alt='Background'
          className={cs('w-full max-h-screen', {
            'object-cover': isCover,
          })}
        />
      </div>
    </div>
  );
};

export { MainLayout };
