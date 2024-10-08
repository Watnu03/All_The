import { useState } from 'react';
import SideBar from '../components/common/SideBar';
import MyPageCardContainer from '../components/specific/MyPageCardContainer';
import MyPageUserInfo from '../components/specific/MyPageUserInfo';
import MyPageAuthz from '../components/specific/MyPageAuthz';

const MyPage = () => {
  const items: string[] = ['찜 목록', '회원 정보', '권한 관리'];
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div className='size-auo flex'>
      <SideBar items={items} selectedItem={selectedItem} onSelectedItem={setSelectedItem} />
      <div className='h-[calc(100vh-70px)] grow'>
        {selectedItem === '찜 목록' && <MyPageCardContainer layout='user' />}
        {selectedItem === '회원 정보' && <MyPageUserInfo />}
        {selectedItem === '권한 관리' && <MyPageAuthz />}
      </div>
    </div>
  );
};

export default MyPage;
