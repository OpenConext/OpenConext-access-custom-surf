import {AppCustomization} from "../../contexts/CustomizationContext";
import WfoLogo from "./WfoLogo.svg";
import LogoSurf from "../../client/src/icons/logo-surf.svg"

export const appCustomization: AppCustomization  = {
    logoPublic: <WfoLogo />,
    logoLoggedIn: <LogoSurf />
}
