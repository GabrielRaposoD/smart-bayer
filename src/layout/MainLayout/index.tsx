import cs from 'clsx';

interface MainLayoutProps {
  children: React.ReactNode;
  img: string;
  isCover?: boolean;
  hasCard?: boolean;
  cardImg?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  img,
  isCover = false,
  hasCard = false,
  cardImg,
}: MainLayoutProps) => {
  return (
    <div className='flex justify-between w-full min-h-screen'>
      <div className='flex flex-col w-1/2 min-h-full px-40 py-20'>
        {children}
      </div>
      <div className='relative flex flex-col items-center w-1/2 min-h-full'>
        {hasCard && (
          <div className='bg-snow mt-28 relative z-10 w-6/12 py-2 text-center rounded-lg'>
            <p>o material abaixo é apenas um modelo para visualização</p>
          </div>
        )}
        {cardImg && (
          <img
            src={cardImg}
            alt=''
            className={cs('z-10 rounded-lg shadow-2xl', {
              'mt-4': hasCard,
              'mt-40 pt-2': !hasCard,
            })}
          />
        )}
        <img
          src={img}
          alt='Background'
          className={cs('w-full max-h-screen absolute', {
            'object-cover': isCover,
          })}
        />
      </div>
    </div>
  );
};

export { MainLayout };
