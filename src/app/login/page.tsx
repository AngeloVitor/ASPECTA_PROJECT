import React from 'react';

function page() {
  return (
    <div className='container'>
      <form>
        <fieldset>
          <input
            name="login"
            placeholder="Login"
            aria-label="Login"           
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            aria-label="Password"
          />
          <input type="submit" value="Log in" />
        </fieldset>
      </form>
    </div>
  );
}

export default page;
