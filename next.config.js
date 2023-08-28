/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "m.media-amazon.com",
      "image.tmdb.org",
      "links.papareact.com",
    ],
  },
};

module.exports = nextConfig;
