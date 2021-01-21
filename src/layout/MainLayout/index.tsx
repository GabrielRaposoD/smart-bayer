import cs from 'clsx'

interface MainLayoutProps {
  children: React.ReactNode
  img: string
  isCover?: boolean
  hasCard?: boolean
  cardImg?: string
  hasMobileImg?: boolean
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  img,
  isCover = false,
  hasCard = false,
  cardImg,
  hasMobileImg = false,
}: MainLayoutProps) => {
  return (
    <div className="md:flex-row flex flex-col-reverse md:justify-between justify-end w-full min-h-screen">
      <div className={cs('md:w-1/2 md:min-h-screen md:px-40 md:py-20 flex flex-col')}>{children}</div>
      <div
        className={cs('md:w-1/2 md:min-h-full relative md:flex flex-col items-center', {
          flex: hasMobileImg,
          hidden: !hasMobileImg,
        })}
      >
        {hasCard && (
          <div className="bg-snow mt-28 relative z-10 w-6/12 py-2 text-center rounded-lg">
            <p>o material abaixo é apenas um modelo para visualização</p>
          </div>
        )}
        {cardImg && (
          <img
            src={cardImg}
            alt=""
            className={cs('z-10 rounded-lg shadow-2xl', {
              'mt-4': hasCard,
              'mt-40 pt-2': !hasCard,
            })}
          />
        )}
        <img
          src={img}
          alt="Background"
          className={cs(
            'md:w-full md:max-h-screen md:absolute md:block object-cover object-top min-w-full md:h-auto h-80',
            {
              'md:object-cover md:object-top': isCover,
              'md:object-fill md:object-center': !isCover,
            }
          )}
        />
      </div>
    </div>
  )
}

export { MainLayout }
