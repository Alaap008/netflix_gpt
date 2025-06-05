import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { LOGO, LOGO_URL, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const showGPTSearch = useSelector(store => store.gpt.showGPTSearch);
    const handleSignOut = () =>{
        signOut(auth).then(() => {
        dispatch(removeUser());
        navigate("/");
        }).catch((error) => {
        
    });
    }
    const handleGPTSearchClick = () => {
      dispatch(toggleGptSearchView());
    }
    const handleLanguageChange = (e) =>{
      dispatch(changeLanguage(e.target.value))

    }
    return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
        { showGPTSearch &&  <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange} >
          {
            SUPPORTED_LANGUAGES.map((lang)=>(
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))
          }
        </select>}
        <button className='py-2 px-4 mx-4 my-2 bg-red-700 text-white rounded-lg' onClick={handleGPTSearchClick}  >  GPT Search </button>
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;