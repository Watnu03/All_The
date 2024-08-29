import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BtnHeart from '../common/button/BtnHeart';

interface MainPopularCardProps {
  id: number;
  title: string;
  site_url: string;
  thumbnail: string;
  site_description: string;
}

const MainPopularCard: React.FC<MainPopularCardProps> = ({ id, title, site_url, thumbnail, site_description }) => {
  const navigate = useNavigate();
  return (
    <div className='relative my-2 flex items-center justify-center'>
      <img className='rounded-sm' src={thumbnail} alt={title} />
      <div className='absolute left-0 top-0 flex h-full w-full flex-col justify-between p-2 md:p-3'>
        <div className='flex justify-between'>
          <div
            className='cursor-pointer truncate text-[10px] font-bold sm:text-xs md:text-sm lg:text-base xl:text-lg'
            onClick={() => navigate(`/contents/${id}`)}
          >
            {title}
          </div>
          <div className='flex items-center'>
            <BtnHeart className='hidden cursor-pointer font-bold sm:block sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl' />
          </div>
        </div>
        <div className='flex items-center sm:justify-end md:justify-between md:gap-1 lg:gap-2'>
          <p className='hidden grow truncate md:block md:text-[10px] lg:text-xs'>{site_description}</p>
          <Link
            className='hidden rounded-sm bg-white text-center text-black shadow-custom-light sm:block sm:min-w-[55px] sm:px-2 sm:py-1 sm:text-[8px] md:min-w-[63px] md:text-[10px] lg:min-w-[71px] lg:px-3 lg:py-2 lg:text-xs'
            to={site_url}
          >
            바로가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPopularCard;
