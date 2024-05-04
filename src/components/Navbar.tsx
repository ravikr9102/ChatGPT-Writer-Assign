import linkedinlogo from '../assets/images/linkedin.webp';
import { TiHome } from 'react-icons/ti';
import { FaUserFriends } from 'react-icons/fa';
import { IoBagRemove } from 'react-icons/io5';
import { IoNotifications } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';
import chat from '../assets/images/chat.png';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="px-20  bg-[#FFFFFF] flex justify-between items-center">
      <div className="flex items-center py-1.5">
        <figure>
          <img
            alt=""
            className="w-10 object-cover object-center"
            src={linkedinlogo}
          />
        </figure>
        <div className="ml-3 relative">
          <input
            placeholder="Search"
            type="text"
            className="bg-[#EDF3F8] py-2 pl-10 pr-3 rounded px-3 tracking-wide"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <FaSearch />
          </span>
        </div>
      </div>
      <div className="flex items-center border-r py-1.5 pr-3">
        <div>
          <div className="flex justify-center items-center text-2xl text-[#666666]">
            <TiHome />
          </div>
          <p className="text-[#666666] font-normal tracking-wide text-sm">
            Home
          </p>
        </div>
        <div className="mx-7">
          <div className="flex justify-center items-center text-2xl text-[#666666]">
            <FaUserFriends />
          </div>
          <p className="text-[#666666] font-normal tracking-wide text-sm">
            My Network
          </p>
        </div>
        <div>
          <div className="flex justify-center items-center text-2xl text-[#666666]">
            <IoBagRemove />
          </div>
          <p className="text-[#666666] font-normal tracking-wide text-sm">
            Jobs
          </p>
        </div>
        <div className="mx-7">
          <div className="flex justify-center items-center text-2xl text-[#666666]">
            <img src={chat} className="w-6 object-cover object-center" />
          </div>
          <p className="text-[#666666] font-normal tracking-wide text-sm">
            Messaging
          </p>
        </div>
        <div>
          <div className="flex justify-center items-center text-2xl text-[#666666]">
            <IoNotifications />
          </div>
          <p className="text-[#666666] font-normal tracking-wide text-sm">
            Notification
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
