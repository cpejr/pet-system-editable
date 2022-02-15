/*eslint-disable*/ 
module.exports = {
  env: {
    NEXT_PUBLIC_FIREBASE_APIKEY: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    NEXT_PUBLIC_FIREBASE_AUTHDOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    NEXT_PUBLIC_FIREBASE_PROJECTID: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    NEXT_PUBLIC_FIREBASE_STORAGEBUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
    NEXT_PUBLIC_FIREBASE_APPID: process.env.NEXT_PUBLIC_FIREBASE_APPID,
    NEXT_PUBLIC_JWT_SECRET: process.env.NEXT_PUBLIC_JWT_SECRET,
  },
  images: {
    domains: ["s3-sa-east-1.amazonaws.com"],
  },
  async redirects() {
    return [
      {
        source: '/User/Perfil',
        destination: '/User/Perfil/MyRequests',
        permanent: true,
      },
      {
        source: '/Seller/Perfil',
        destination: '/Seller/Perfil/Products',
        permanent: true,
      },
      {
        source:'/',
        destination:'/Home',
        permanent: true,
      }
    ];
  },

};
