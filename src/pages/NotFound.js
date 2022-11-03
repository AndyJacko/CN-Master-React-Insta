import React, { useEffect } from "react";

import NotFound from "../components/NotFound/NotFound";

const NotFoundPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return <NotFound />;
};

export default NotFoundPage;
