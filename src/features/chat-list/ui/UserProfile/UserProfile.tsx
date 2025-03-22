import {
  UserProfileContiner,
  UserProfileContent,
  NameContainer,
  Name,
  Tokens,
  LogoutIcon,
} from "./UserProfile.styles";
import ProfilePic from "@assets/default-avatar.svg?react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@features/auth";

export const UserProfile = () => {
  const naviagte = useNavigate();
  const { email } = useAuth();

  const handleExit = () => {
    localStorage.clear();
    naviagte("/login");
  };

  return (
    <UserProfileContiner>
      <UserProfileContent>
        <ProfilePic />
        <NameContainer>
          <Name>{email}</Name>
          <Tokens>9012 TKN</Tokens>
        </NameContainer>
      </UserProfileContent>
      <LogoutIcon onClick={handleExit} />
    </UserProfileContiner>
  );
};
