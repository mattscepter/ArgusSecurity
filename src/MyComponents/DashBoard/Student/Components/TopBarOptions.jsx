import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import profile from '../../../../argus website/PNG/IMG_0118.png';
import { Link } from 'react-router-dom';
import { clearStorage } from '../../../../context/actions/authActions/setStorageAction';

function TopBarOptions({ options }) {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div
      className={`z-50 w-64 sm:w-72 absolute right-4 sm:right-10 md:right-12 top-20 font-medium text-gray-3 bg-bg-card shadow-button-shadow-2 rounded-2xl ${
        options
          ? 'transition-all duration-300 opacity-100 inline-block'
          : 'transition-all duration-300 opacity-0 invisible'
      }`}
    >
      <div className="bg-gray-3 flex flex-row items-center rounded-t-xl">
        <img
          src={profile}
          alt=""
          className="w-16 h-16 m-4 border-3 rounded-xl "
        />
        <div className="text-left text-white">
          <h1 className="font-bold">Name Here</h1>
          <h1>Profile ID</h1>
        </div>
      </div>
      <div className="text-gray-2 text-base font-bold bg-gray-200 rounded-b-xl">
        <Link to="/dashboard/student/mypurchases">
          <h1 className="rounded-lg py-4 pl-2 hover:bg-red-1 hover:text-white hover:rounded-md hover:shadow-button-inner border-b-2 border-white">
            <span className="mx-0.5 sm:mx-4 md:mx-1 lg:mx-0.5 xl:mx-4">➔</span>{' '}
            My Purchases
          </h1>
        </Link>
        <Link to="/services">
          <h1 className="rounded-lg py-4 pl-2 hover:bg-red-1 hover:text-white hover:rounded-md hover:shadow-button-inner border-b-2 border-white">
            <span className="mx-0.5 sm:mx-4 md:mx-1 lg:mx-0.5 xl:mx-4">➔</span>{' '}
            My Transcripts
          </h1>
        </Link>
        <Link to="/services">
          <h1 className="rounded-lg py-4 pl-2 hover:bg-red-1 hover:text-white hover:rounded-md hover:shadow-button-inner border-b-2 border-white">
            <span className="mx-0.5 sm:mx-4 md:mx-0.5 xl:mx-4">➔</span> Upload
            Documents
          </h1>
        </Link>
        <Link to="/dashboard/student/changepassword">
          <h1 className="rounded-lg py-4 pl-2 hover:bg-red-1 hover:text-white hover:rounded-md hover:shadow-button-inner border-b-2 border-white">
            <span className="mx-0.5 sm:mx-4 md:mx-1 lg:mx-0.5 xl:mx-4">➔</span>{' '}
            Change Password
          </h1>
        </Link>
        <Link
          onClick={() => {
            dispatch(clearStorage());
            history.push('/');
          }}
        >
          <h1 className="rounded-lg py-4 pl-2 hover:bg-red-1 hover:text-white hover:rounded-md hover:shadow-button-inner">
            <span className="mx-0.5 sm:mx-4 md:mx-1 lg:mx-0.5 xl:mx-4">➔</span>{' '}
            Logout
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default TopBarOptions;
