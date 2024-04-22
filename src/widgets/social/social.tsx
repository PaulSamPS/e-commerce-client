"use client";

import { FC, useState } from "react";
import { SocialButton } from "@/widgets/social/social-button/social-button";
import SocialPanel from "@/widgets/social/social-panel/social-panel";
import { SocialList } from "@/widgets/social/social-list/social-list";
import { SocialWrapper } from "@/widgets/social/social-wrapper/social-wrapper";

export const Social: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((prevState) => !prevState);

  return (
    <SocialWrapper isOpen={isOpen}>
      <SocialButton isOpen={isOpen} onClick={handleToggle} />
      <SocialPanel isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <SocialList />
      </SocialPanel>
    </SocialWrapper>
  );
};
