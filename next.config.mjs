/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: 'c:\\Users\\Rajesh Puchakayal\\Desktop\\raj\\test\\next\\my-portfolio-next',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
      {
        protocol: 'https',
        hostname: 'ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'eu-images.contentstack.com',
      },
      {
        protocol: 'https',
        hostname: 'static.euronews.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
      {
        protocol: 'https',
        hostname: 'seeklogo.com',
      },
      {
        protocol: 'https',
        hostname: 'images-eds-ssl.xboxlive.com',
      },
      {
        protocol: 'https',
        hostname: 'ih1.redbubble.net',
      },
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com',
      },
      {
        protocol: 'https',
        hostname: 'gimgs2.nohat.cc',
      },
      {
        protocol: 'https',
        hostname: 'cdn3.iconfinder.com',
      },
      {
        protocol: 'https',
        hostname: 'images-cdn.openxcell.com',
      },
      {
        protocol: 'https',
        hostname: 'images.icon-icons.com',
      },
      {
        protocol: 'https',
        hostname: 'yt3.ggpht.com',
      },
      {
        protocol: 'https',
        hostname: 'empmonitor.com',
      },
      {
        protocol: 'https',
        hostname: 'www.wideopencountry.com',
      },
    ],
  },
};

export default nextConfig;
