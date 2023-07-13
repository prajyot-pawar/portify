import { useState, useEffect } from 'react';

const MyHomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial screen size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const pageStyle = {
    backgroundColor: isMobile ? 'yellow' : 'blue',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: isMobile ? '18px' : '24px',
  };

  const componentStyle = {
    padding: isMobile ? '10px' : '20px',
    margin: '10px',
    borderRadius: isMobile ? '4px' : '8px',
    border: isMobile ? '1px solid black' : '2px solid red',
  };

  return (
    <div style={pageStyle}>
      <div style={componentStyle}>Component 1</div>
      <div style={componentStyle}>Component 2</div>
      <div style={componentStyle}>Component 3</div>
    </div>
  );
};

export default MyHomePage;
