import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['via.placeholder.com'], // Add the hostname here
  },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.css$/,
  //     use: [
  //       'style-loader',
  //       'css-loader',
  //       {
  //         loader: 'postcss-loader',
  //         options: {
  //           postcssOptions:
  //           {
  //             ident: 'postcss',
  //             plugins: [require('tailwindcss'), require('autoprefixer')],

  //           },
  //         },
  //       },
  //     ],
  //   });

  //   return config;
  // },
};

export default nextConfig;
