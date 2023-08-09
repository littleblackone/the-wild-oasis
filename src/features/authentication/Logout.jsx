import { HiArrowRightOnRectangle } from "react-icons/hi2";

import ButtonIcon from "../../ui/ButtonIcon";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogout } from "./useLogout";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? (
        <HiArrowRightOnRectangle></HiArrowRightOnRectangle>
      ) : (
        <SpinnerMini></SpinnerMini>
      )}
    </ButtonIcon>
  );
}
export default Logout;
