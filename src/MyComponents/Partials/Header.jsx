import React, { useState } from 'react';
import Logo from './../../argus website/SVG/Logowith shadow.svg';
import { Link } from 'react-router-dom';
import Login from '../DashBoard/Student/Login';
import { isAuthenticated } from '../../helpers/auth';
import { useHistory } from 'react-router';

export default function Header({ open, setOpen }) {
  const history = useHistory();

  return (
    <div className="shadow-lg sticky">
      <div className="bg-red-1 shadow-header-outer-shadow">
        <div className="bg-red-1 bg-no-repeat bg-header-bg bg-center bg-cover bg-blend-multiply">
          <div className="hidden lg:block px-4 sm:px-8 lg:px-12 2xl:px-0 mx-auto max-w-1366 text-base">
            <div className="flex flex-row items-center mx-auto justify-between font-bold border-white font-for-para">
              <nav className="flex flex-row items-center">
                <Link
                  to="/technology"
                  className="text-white hover:bg-white font-medium xl:font-bold text-base hover:shadow-button-inner border-4 border-double rounded-lg px-3.5 xl:px-7 py-3.5 mr-3.5 2xl:mr-8 hover:text-red-1"
                >
                  Technology
                </Link>
                <Link
                  to="/courses"
                  className="text-white hover:bg-white font-medium xl:font-bold text-base hover:shadow-button-inner border-4 border-double rounded-lg px-2.5 xl:px-6 py-3.5  hover:text-red-1 "
                >
                  Get Your Security Guard License
                </Link>
              </nav>
              <Link to="/">
                <img
                  src={Logo}
                  alt="Logo of Argus Security"
                  className="w-32 mt-2 transform hover:scale-105 duration-200"
                />
              </Link>
              <nav className="flex flex-row items-center">
                <button
                  open={open}
                  onClick={() => {
                    if (isAuthenticated()) {
                      history.push('/dashboard/student/home');
                    } else {
                      setOpen(true);
                    }
                  }}
                  className="text-white hover:bg-white font-medium xl:font-bold text-base hover:shadow-button-inner border-4 border-double rounded-lg px-1.5 xl:px-2.5 py-3.5 mr-3 2xl:mr-8  hover:text-red-1"
                >
                  Student Portal
                </button>
                <Link
                  to="/dashboard/student/home"
                  className="text-white hover:bg-white font-medium xl:font-bold text-base hover:shadow-button-inner border-4 border-double rounded-lg px-1.5 xl:px-2.5 py-3.5 mr-3 2xl:mr-8 hover:text-red-1"
                >
                  Client Portal
                </Link>
                <Link
                  to="/dashboard/admin/home"
                  className="text-white hover:bg-white font-medium xl:font-bold text-base hover:shadow-button-inner border-4 border-double rounded-lg px-1.5 xl:px-3 py-3.5 hover:text-red-1"
                >
                  Employee Portal
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Login open={open} setOpen={setOpen} />
    </div>
  );
}
