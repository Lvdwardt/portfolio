import Link from "next/link";
import { useState } from "react";
import { fetcher } from "../lib/api";
import { setToken, unsetToken } from "../lib/auth";
import { useUser } from "../lib/authContext";

const Nav = () => {
  const [data, setData] = useState({
    identifier: "",
    password: "",
  });

  const { user, loading } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const responseData = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: data.identifier,
          password: data.password,
        }),
      }
    );
    setToken(responseData);
  };

  const logout = () => {
    unsetToken();
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <nav
      className="
          flex w-full
          flex-wrap
          items-center
          justify-between
          bg-white
          py-4
          px-4
          text-lg text-gray-700
          md:py-0
        "
    >
      <div>
        <Link href="/" passHref>
          <a>
            {/* eslint-disable @next/next/no-img-element */}
            <img
              className="m-3"
              src="/strapi-logo.png"
              width={200}
              height={50}
              alt="Strapi Logo"
            />
          </a>
        </Link>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="menu-button"
        className="block h-6 w-6 cursor-pointer md:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div
        className="hidden w-full md:flex md:w-auto md:items-center"
        id="menu"
      >
        <ul
          className="
              space-x-2
              pt-4 text-base
              text-gray-700
              md:flex 
              md:justify-between md:pt-0"
        >
          <li>
            <Link href="/">
              <a className="block py-2 hover:text-purple-400 md:p-2">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/films">
              <a className="block py-2 hover:text-purple-400 md:p-2" href="#">
                Films
              </a>
            </Link>
          </li>
          {!loading &&
            (user ? (
              <li>
                <Link href="/profile">
                  <a className="block py-2 hover:text-purple-400 md:p-2">
                    Profile
                  </a>
                </Link>
              </li>
            ) : (
              ""
            ))}
          {!loading &&
            (user ? (
              <li>
                <a
                  className="block py-2 hover:text-purple-400 md:p-2"
                  onClick={logout}
                  style={{ cursor: "pointer" }}
                >
                  Logout
                </a>
              </li>
            ) : (
              ""
            ))}
          {!loading && !user ? (
            <>
              <li>
                <form onSubmit={handleSubmit} className="form-inline">
                  <input
                    type="text"
                    name="identifier"
                    onChange={handleChange}
                    placeholder="Username"
                    className="form-input mx-2 rounded py-2 md:p-2"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                    className="form-input mx-2 rounded py-2 md:p-2"
                    required
                  />

                  <button
                    className="rounded bg-purple-200 p-2 py-2 text-black md:p-2"
                    type="submit"
                  >
                    Login
                  </button>
                </form>
              </li>
              <li>
                <Link href="/register">
                  <a className="block py-2 text-black hover:text-purple-400 md:p-2">
                    Register
                  </a>
                </Link>
              </li>
            </>
          ) : (
            ""
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
