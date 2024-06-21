/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"www.yuntech.edu.tw",
                port:"",
                pathname:"/images/**",
            },
            {
                protocol:"https",
                hostname:"upload.wikimedia.org",
                port:"",
                pathname:"/**",
            },
            {
                protocol:"https",
                hostname:"media.tenor.com",
                port:"",
                pathname:"/**",
            },
            {
                protocol:"https",
                hostname:"media0.giphy.com",
                port:"",
                pathname:"/**",
            },
            {
                protocol:"https",
                hostname:"tour.yunlin.gov.tw",
                port:"",
                pathname:"/**",
            },
            {
                protocol:"https",
                hostname:"www.swcoast-nsa.gov.tw",
                port:"",
                pathname:"/**",
            }
        ],
    },
};

export default nextConfig;
