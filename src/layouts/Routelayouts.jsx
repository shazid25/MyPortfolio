// import React from 'react'
// import { Outlet } from 'react-router'
// import Navbar from '../../src/sections/Navbar'
// import Footer from '../../src/sections/Footer'
// const Routelayouts = () => {
//   return (
//     <div>
//         <Navbar></Navbar>
//      <main >
//          <Outlet></Outlet>
//      </main>
//       <Footer></Footer>
//     </div>
//   )
// }

// export default Routelayouts



import { Outlet } from "react-router-dom";
import Navbar from '../../src/sections/Navbar'
import Footer from '../../src/sections/Footer'

const Routelayouts = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mt-16"> {/* Added mt-16 to push content below navbar */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Routelayouts;