import { useAuth } from "../../contexts/Auth";
import { HeaderContainer } from "./styles";
import { HeaderDashboard } from "./Dashboard";
import { HeaderAuthentication } from "./Authentication";

export function Header() {
  const { signed } = useAuth();

  return (
    <HeaderContainer>
      {signed ? <HeaderDashboard /> : <HeaderAuthentication />}
    </HeaderContainer>
  );
}
