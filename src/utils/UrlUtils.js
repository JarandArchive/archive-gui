import {getEnvironment} from "./EnvironmentUtils";

export const getLoginUrl = () => {
    const environment = getEnvironment();
    if (environment === "local") {
        return "http://localhost:81/authorize?response_type=code&client_id=e751f7d7-ef22-4715-855f-1533d68d63cf&redirect_uri=https://arkivet.app&scope=Archive.Admin&state=j4i2o3j4io";
    }
    return "https://auth.jarand.dev/authorize?response_type=code&client_id=e751f7d7-ef22-4715-855f-1533d68d63cf&redirect_uri=https://arkivet.app&scope=Archive.Admin&state=j4i2o3j4io";
};
