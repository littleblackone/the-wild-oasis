import { styled } from "styled-components";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import ButtonIcon from "./ButtonIcon";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../features/authentication/Logout";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser></HiOutlineUser>
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle></DarkModeToggle>
      </li>
      <li>
        <Logout></Logout>
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
