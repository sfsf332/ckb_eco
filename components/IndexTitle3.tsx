import React, { useEffect, useState } from "react";

import Link from "next/link";
import isMobile from "is-mobile";

const IndexTitle3 = (): JSX.Element => {
  const is_mobile = isMobile();

  return (
    <>
      {is_mobile ? (
        <>The Role of CKB <br /> in the Bitcoin Ecosystem</>
      ) : (
        <>
         The Role of CKB in the Bitcoin Ecosystem
        </>
      )}
    </>
  );
};

export default IndexTitle3;
