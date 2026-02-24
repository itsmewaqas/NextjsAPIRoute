/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
 // output:"export"
};

export default nextConfig;



// The logic below handles redirection to the default page when a URL is entered directly in the address bar

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   redirects:async()=>{
//     return[
//       {
//         source:'/Product',
//         destination:'/',
//         permanent:false,
//       },
//       {
//         source:'/Users',
//         destination:'/',
//         permanent:false,
//       },
//         source:'/Ssg',
//         destination:'/',
//         permanent:false,
//       },
//       {
//         source:'/Ssg/:uid',
//         destination:'/',
//         permanent:false,
//       }
//     ]
//   }


// };

// export default nextConfig;
