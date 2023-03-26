import React from 'react';

export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
          <form action="">
            <div>
              <input type="text" placeholder={'Login'}/>
            </div>
            <div>
              <input type="password" placeholder={'Password'}/>
            </div>
            <div>
              <input type="checkbox"/> remember me
            </div>
            <div>
              <button>
                login
              </button>
            </div>
          </form>
        </div>
    );
};
