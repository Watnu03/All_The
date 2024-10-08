const Footer = () => {
  return (
    <div className='h-[385px] w-full border-t border-gray-dc bg-white px-[130px] pb-[60px] pt-[45px]'>
      <div className='flex items-start justify-between border-b border-gray-75'>
        <div>
          <p className='mt-[16px] text-[32px]'>ALL THE</p>
          <p className='my-[20px] w-[292px] text-gray-75'>
            Our vision is to provide convenience and help increase your sales business.
          </p>
          <div className='flex'>
            <span className='mr-[10px] flex h-[33px] w-[33px] items-center justify-center rounded-[50%] bg-white shadow-custom-light'>
              <img src='/images/facebook.png' alt='FaceBook' className='h-[15px] w-[9px]' />
            </span>
            <span className='mr-[10px] flex h-[33px] w-[33px] items-center justify-center rounded-[50%] bg-white shadow-custom-light'>
              <img src='/images/x.png' alt='X' className='h-[15px] w-[15px]' />
            </span>
            <span className='mr-[10px] flex h-[33px] w-[33px] items-center justify-center rounded-[50%] bg-white shadow-custom-light'>
              <img src='/images/instagram.png' alt='Instagram' className='h-[15px] w-[15px]' />
            </span>
          </div>
        </div>
        <div className='flex h-[100%]'>
          <div className='ml-[45px] h-[244px] w-[150px] text-center'>
            <div className='mb-[33px] text-[20px] font-semibold'>About</div>
            <div>
              <p className='mb-[18px] text-gray-75'>How it works</p>
              <p className='mb-[18px] text-gray-75'>Featured</p>
              <p className='mb-[18px] text-gray-75'>Partnership</p>
              <p className='text-gray-75'>Business Relation</p>
            </div>
          </div>
          <div className='ml-[45px] h-[244px] w-[150px] text-center'>
            <div className='mb-[33px] text-[20px] font-semibold'>Community</div>
            <div>
              <p className='mb-[18px] text-gray-75'>Events</p>
              <p className='mb-[18px] text-gray-75'>Blog</p>
              <p className='mb-[18px] text-gray-75'>Podcast</p>
              <p className='text-gray-75'>Invite a friend</p>
            </div>
          </div>
          <div className='ml-[45px] h-[244px] w-[150px] text-center'>
            <div className='mb-[33px] text-[20px] font-semibold'>Socials</div>
            <div>
              <p className='mb-[18px] text-gray-75'>Discord </p>
              <p className='mb-[18px] text-gray-75'>Instagram</p>
              <p className='mb-[18px] text-gray-75'>Twitter</p>
              <p className='text-gray-75'>Facebook</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between pt-[36px]'>
        <span>©2024 Auto Fast. All rights reserved</span>
        <span>
          <span>Privacy & Policy</span>
          <span className='ml-[60px]'>Terms & Condition</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
