import { useState } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { FaRegEdit } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { RiVideoAddFill } from 'react-icons/ri';
import { IoIosStarOutline } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { SiGooglegemini } from 'react-icons/si';
import { LuRefreshCcw } from 'react-icons/lu';
import { MdOutlineArrowDownward } from 'react-icons/md';
import { HiMiniLink } from 'react-icons/hi2';
import { GrEmoji } from 'react-icons/gr';
import { FaSearch } from 'react-icons/fa';
import { FaImage } from 'react-icons/fa6';
import profilepic from '../assets/images/1709970221688.jpeg';
import profilepic2 from '../assets/images/1692714852188.jpeg';
import profile3 from '../assets/images/1714142777645.jpeg';
import profile4 from '../assets/images/1713761868348.jpeg';
import logo from '../assets/images/1695658728495.jpeg';

const Home: React.FC = () => {
  // State variables for managing modal, prompts, and messages
  const [isFocused, setIsFocused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [prompt2, setPrompt2] = useState('');
  const [response, setResponse] = useState('');
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');

  // Function to handle modal opening
  const handleModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle modal closing
  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close modal only if the click is outside the modal content
    const modalContent = document.querySelector('.modal-content');
    if (modalContent && modalContent.contains(e.target as Node)) {
      return;
    }
    setIsModalOpen(false);
  };

  // Function to handle user input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  // Function to generate response based on user prompt
  const handleGenerate = () => {
    // Dummy response generation logic
    const dummyResponse =
      "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.";
    setResponse(dummyResponse);
    setPrompt2(prompt);
    setPrompt('');
  };

  // Function to insert generated response into message
  const handleInsert = () => {
    setMessage(response);
    setIsModalOpen(false);
  };

  // Function to send message
  const handleSend = () => {
    setMessage2(message);
    setMessage('');
  };

  console.log('prompt', prompt);

  return (
    <>
      <div className="flex items-start mx-20 my-3">
        <div className="w-3/4 bg-white border rounded-md">
          <div className="flex justify-between items-center my-2 border-b pb-1.5 px-3">
            <div className="flex items-center">
              <h3 className="text-xl text-[#272727] font-semibold">
                Messaging
              </h3>
              <div className="ml-3 relative">
                <input
                  placeholder="Search"
                  type="text"
                  className="bg-[#EDF3F8] py-1.5 pl-10  rounded px-3 tracking-wide"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <FaSearch />
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <HiOutlineDotsHorizontal className="text-2xl text-[#666666]" />
              <FaRegEdit className="text-2xl text-[#666666] ml-6" />
            </div>
          </div>
          <div className="px-4 mb-2 border-b pb-1.5">
            <ul className="flex items-center">
              <li className="bg-[#31754F] text-white font-semibold text-lg py-1 px-4 flex items-center rounded-full">
                Focused <IoMdArrowDropdown className="text-2xl ml-1" />
              </li>
              <div className="border-l border-gray-400 h-7 mx-3"></div>
              <li className="font-semibold text-lg py-1 px-4 rounded-full border border-gray-400 text-[#272727]">
                Unread
              </li>
              <li className="font-semibold text-lg py-1 px-4 rounded-full border border-gray-400 mx-3 text-[#272727]">
                My Connections
              </li>
              <li className="font-semibold text-lg py-1 px-4 rounded-full border border-gray-400 text-[#272727]">
                InMail
              </li>
              <li className="font-semibold text-lg py-1 px-4 rounded-full border border-gray-400 ml-3 text-[#272727]">
                Starred
              </li>
            </ul>
          </div>
          <div className="flex items-start">
            <div className="w-2/6 md:col-span-2 lg:col-span-3 flex flex-col lg:h-full  text-zinc-700 overflow-x-hidden custom-scrollbar duration-300">
              <div className="flex justify-between items-start cursor-pointer bg-[#EDF3F8] py-5 border-l-4 border-l-[#31754F]">
                <div className="flex items-center pl-2 ">
                  <figure>
                    <img
                      className="w-12 rounded-full object-cover object-center"
                      src={profilepic}
                    />
                  </figure>
                  <div className="tracking-wide ml-3">
                    <h4 className="text-lg">Gourav Goyal</h4>
                    <p>You : Hello Sir</p>
                  </div>
                </div>
                <div className="pr-2">
                  <p>May 01</p>
                </div>
              </div>
              <div className="flex justify-between items-start cursor-pointer bg-white hover:bg-[#F4F2EE] py-5 border-t border-t-gray-300">
                <div className="flex items-center pl-2 ">
                  <figure>
                    <img
                      className="w-12 rounded-full object-cover object-center"
                      src={profilepic2}
                    />
                  </figure>
                  <div className="tracking-wide ml-3">
                    <h4 className="text-lg">Gourav Goyal</h4>
                    <p>You : Hello Sir</p>
                  </div>
                </div>
                <div className="pr-2">
                  <p>May 01</p>
                </div>
              </div>
              <div className="flex justify-between items-start cursor-pointer bg-white hover:bg-[#F4F2EE] py-5 border-t border-t-gray-300">
                <div className="flex items-center pl-2 ">
                  <figure>
                    <img
                      className="w-12 rounded-full object-cover object-center"
                      src={profile3}
                    />
                  </figure>
                  <div className="tracking-wide ml-3">
                    <h4 className="text-lg">Gourav Goyal</h4>
                    <p>You : Hello Sir</p>
                  </div>
                </div>
                <div className="pr-2">
                  <p>May 01</p>
                </div>
              </div>
              <div className="flex justify-between items-start cursor-pointer bg-white hover:bg-[#F4F2EE] py-5 border-t border-t-gray-300">
                <div className="flex items-center pl-2 ">
                  <figure>
                    <img
                      className="w-12 rounded-full object-cover object-center"
                      src={profile4}
                    />
                  </figure>
                  <div className="tracking-wide ml-3">
                    <h4 className="text-lg">Gourav Goyal</h4>
                    <p>You : Hello Sir</p>
                  </div>
                </div>
                <div className="pr-2">
                  <p>May 01</p>
                </div>
              </div>
              <div className="flex justify-between items-start cursor-pointer bg-white hover:bg-[#F4F2EE] py-5 border-t border-t-gray-300">
                <div className="flex items-center pl-2 ">
                  <figure>
                    <img
                      className="w-12 rounded-full object-cover object-center"
                      src={profilepic}
                    />
                  </figure>
                  <div className="tracking-wide ml-3">
                    <h4 className="text-lg">Gourav Goyal</h4>
                    <p>You : Hello Sir</p>
                  </div>
                </div>
                <div className="pr-2">
                  <p>May 01</p>
                </div>
              </div>
              <div className="flex justify-between items-start cursor-pointer bg-white hover:bg-[#F4F2EE] py-5 border-t border-t-gray-300">
                <div className="flex items-center pl-2 ">
                  <figure>
                    <img
                      className="w-12 rounded-full object-cover object-center"
                      src={profilepic2}
                    />
                  </figure>
                  <div className="tracking-wide ml-3">
                    <h4 className="text-lg">Gourav Goyal</h4>
                    <p>You : Hello Sir</p>
                  </div>
                </div>
                <div className="pr-2">
                  <p>May 01</p>
                </div>
              </div>
            </div>
            <div className="w-[70%]">
              <div className="flex justify-between items-center border-b px-3">
                <div>
                  <h3 className="text-[#272727] font-semibold text-lg">
                    Gourav Goyal
                  </h3>
                  <p className="text-[#666666] font-normal">
                    Founder | ChatGPT Writer
                  </p>
                </div>
                <div className="flex items-center">
                  <HiOutlineDotsHorizontal className="text-2xl text-[#272727]" />
                  <RiVideoAddFill className="text-2xl text-[#272727] mx-5" />
                  <IoIosStarOutline className="text-2xl text-[#272727]" />
                </div>
              </div>
              <div className="px-3 py-1">
                <img
                  className="w-[9%] rounded-full object-cover object-center"
                  alt=""
                  src={profilepic}
                />
                <h4 className="text-xl text-[#272727] font-semibold">
                  Gourav Goyal{' '}
                  <span className="text-base font-normal">(He/Him)</span>
                </h4>
                <p className="text-[#272727] font-normal">
                  Founder | ChatGPT Writer
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <p className="mx-2 text-lg font-medium text-[#666666]">
                  Wednesday
                </p>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <div className="overflow-x-hidden custom-scrollbar duration-300 px-3 md:col-span-2 lg:col-span-3 lg:h-40">
                <div className="flex items-start">
                  <figure>
                    <img
                      className="w-full rounded-full object-cover object-center"
                      alt=""
                      src={profilepic}
                    />
                  </figure>
                  <div className="ml-3">
                    <h4 className="text-lg text-[#272727] font-semibold">
                      Gourav Goyal{' '}
                      <span className="text-base font-normal">(He/Him)</span>
                      <span className="text-base font-normal"> . 9:16 PM</span>
                    </h4>
                    <p className="tracking-wide my-1 mb-2">
                      Hi, thank you for your application. You've made it to the
                      next stage! Your next step involves completing a coding
                      assignment. It should take roughly 3 to 5 hours. Deadline:
                      Within 3 days from now. Assignment link:
                      gorv.notion.site/Take-home-Coding-Assignment-React-Developer-ChatGPT-Writer-9…
                      The submission link is mentioned in the assignment. About
                      me: My Name is Gourav Goyal and I'm the founder of ChatGPT
                      Writer (chatgptwriter.ai)
                    </p>
                  </div>
                </div>
                {message2 ? (
                  <div className="flex items-start my-5">
                    <figure>
                      <img
                        className="w-14 rounded-full object-cover object-center"
                        alt=""
                        src={profilepic2}
                      />
                    </figure>
                    <div className="ml-3">
                      <h4 className="text-lg text-[#272727] font-semibold">
                        Ravi Kumar{' '}
                        <span className="text-base font-normal">(He/Him)</span>
                        <span className="text-base font-normal">
                          {' '}
                          . 10:16 PM
                        </span>
                      </h4>
                      <p className="tracking-wide mt-1">{message2}</p>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className="p-2 border-t-4">
                <div className="flex items-start">
                  <div className="relative w-full">
                    <textarea
                      className="w-full rounded-xl bg-[#F4F2EE] p-3 tracking-wide pl-4"
                      placeholder="Write a message..."
                      rows={3}
                      cols={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                    ></textarea>
                    {isFocused && (
                      <span
                        onMouseDown={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleModal();
                        }}
                        className="cursor-pointer absolute bottom-4 bg-white right-4 w-6 h-6 rounded-full flex justify-center items-center text-[#2563EB]"
                      >
                        <SiGooglegemini />
                      </span>
                    )}
                  </div>
                  <div className="ml-5">
                    <span className="w-8 text-2xl h-8 rounded-full hover:bg-[#F3F3F3] flex justify-center items-center">
                      <IoIosArrowUp className="text-[#272727]" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center px-4 border-t">
                <div className="flex items-center">
                  <FaImage className="text-2xl text-[#272727]" />
                  <HiMiniLink className="mx-5 text-2xl text-[#272727]" />
                  <GrEmoji className="text-2xl text-[#272727]" />
                </div>
                <div className="flex items-center my-3">
                  <button
                    onClick={handleSend}
                    className={`py-0.5 font-semibold px-3 rounded-full ${
                      message
                        ? 'bg-blue-700 text-white'
                        : 'bg-[#E8E8E8] text-[#949494]'
                    }`}
                  >
                    Send
                  </button>
                  <HiOutlineDotsHorizontal className="text-2xl ml-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 ml-5 relative">
          <div className="p-5 bg-white flex flex-col justify-between h-full rounded-md">
            <div>
              <h3 className="text-xl text-[#272727] font-semibold">
                Page inboxes
              </h3>
              <div className="flex items-center mt-5">
                <img className="w-10" alt="" src={logo} />
                <p className="ml-3 tracking-wide text-[#272727] font-semibold">
                  ChatGPT Writer
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-[600px] bg-white rounded-md flex justify-between items-center w-full">
            <div className="flex items-center p-2">
              <figure>
                <img className="w-8 rounded-full" src={profilepic2} alt="" />
              </figure>
              <p className="text-[#272727] font-semibold text-base ml-2 tracking-wide">
                Messaging
              </p>
            </div>
            <div className="flex items-center p-2">
              <HiOutlineDotsHorizontal className="text-xl" />
              <FaRegEdit className="mx-5 text-xl" />
              <IoIosArrowUp className="text-xl" />
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          onClick={handleCloseModal}
          className="fixed top-0 left-0 right-0 w-full h-full flex justify-center items-center bg-gray-600 bg-opacity-50 z-50"
        >
          <div className="bg-[#F9FAFB] rounded-lg p-4 w-2/5 modal-content">
            {response && (
              <>
                <div className="flex justify-end items-end">
                  <p className="bg-[#DFE1E7] w-3/5 p-2 tracking-wide rounded-lg text-[#666D80]">
                    {prompt2}
                  </p>
                </div>
                <div className="my-3">
                  <p className="bg-[#DBEAFE] w-3/4 p-2 tracking-wide rounded-lg text-[#666D80]">
                    {response}
                  </p>
                </div>
              </>
            )}
            <input
              onChange={handleChange}
              onClick={(e) => e.stopPropagation()}
              value={prompt}
              className="py-2 bg-white border w-full tracking-wide shadow-inner px-2 rounded-lg"
              type="text"
              placeholder="Your prompt"
            />
            <div className="flex justify-end items-end mt-5">
              {response ? (
                <div className="flex items-center">
                  <button
                    onClick={handleInsert}
                    className="flex tracking-wide py-1 border bg-transparent rounded px-3  text-[#666D80] justify-center items-center "
                  >
                    <MdOutlineArrowDownward className="mr-1.5" /> Insert
                  </button>
                  <button className="flex tracking-wide ml-5 py-1.5 rounded px-3 bg-[#3B82F6] text-white justify-center items-center">
                    <LuRefreshCcw className="mr-1.5" /> ReGenerate
                  </button>
                </div>
              ) : (
                <button
                  disabled={!prompt}
                  onClick={handleGenerate}
                  className={`flex tracking-wide py-1.5 rounded px-3 text-white justify-center items-center ${
                    !prompt ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#3B82F6]'
                  } `}
                >
                  <SiGooglegemini className="mr-1.5" /> Generate
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
