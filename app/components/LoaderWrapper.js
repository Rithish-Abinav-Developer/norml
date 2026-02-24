"use client"; // MUST be a client component
import { useState, useEffect } from "react";
import Loader from "./Loader";

export default function LoaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // your delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return <>{children}</>;
}
