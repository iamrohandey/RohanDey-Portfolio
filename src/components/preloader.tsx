import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (2 sec)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img
        src="/logo-dark.png"  // 👈 from public folder
        alt="Loading..."
        className="h-20 w-auto animate-float"
      />
    </div>
  );
};

export default Preloader;
