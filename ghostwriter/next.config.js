module.exports = {
  // 다른 설정들...

  // webpack 설정에서 CSS 모듈 관련 설정을 변경하지 않음
  webpack: (config, { isServer }) => {
    // 다른 설정들...
    return config;
  },
};
