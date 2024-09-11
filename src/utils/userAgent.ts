const isIOSUser = () => {
  return /iP(hone|(o|a)d)/.test(navigator.userAgent);
};

export { isIOSUser };
