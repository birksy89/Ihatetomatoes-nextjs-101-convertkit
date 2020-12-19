const Layout = ({ children }) => {
  return (
    <div className="mx-auto md:max-w-3xl md:px-4 min-h-screen flex flex-col justify-center">
      {children}
    </div>
  );
};

export default Layout;
