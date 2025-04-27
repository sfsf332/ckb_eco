import React, { useEffect, useState } from "react";
import Link from "next/link";
import isMobile from "is-mobile";
import { Tooltip } from 'react-tooltip';

const DevBox = (): JSX.Element => {
  const is_mobile = isMobile();
  const [devOpen, setDevOpen] = useState(true);

  return (
    <>
      {is_mobile ? (
        <Link
          className="build-dev-box-m"
          href="https://t.me/ckbrgben/1"
          target="_blank"
        >
          Dev Support
        </Link>
      ) : (
        <>
          {devOpen && (
            <div className="build-dev-box">
              <img
                src="images/icon_close.png"
                onClick={() => setDevOpen(false)}
                className="close"
              />
              <h4>Dev Support</h4>
              <h6>Please join our dev group: </h6>
              <div className="build-links">
                <Link
                  href="https://t.me/ckbrgben/6"
                  target="_blank"
                  className="button_link button_link_1"
                >
                  CN
                </Link>
                <Link
                  href="https://t.me/ckbrgben/1"
                  target="_blank"
                  className="button_link button_link_1"
                >
                  EN
                </Link>
                </div>
                <div className="build-links">
                 <Link
                  href="https://discord.com/channels/657799690070523914/1253434681618333777"
                  target="_blank"
                  className="button_link button_link_1"
                  data-tooltip-id="weekly-ama"
                  data-tooltip-content="Weekly Dev AMA: Wednesday 22:00 (UTC+8)"
                >
                  Weekly Dev AMA
                </Link>
                <Tooltip id="weekly-ama" />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default DevBox;
