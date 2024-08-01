import { createContext } from "react";

// export const UserSubscriptionContext= createContext<any>(null);


interface UserSubscriptionContextProps {
    usTotalUsage: boolean;
    setUSTotalUsage: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  // Create context with a default value
 export const UserSubscriptionContext = createContext<UserSubscriptionContextProps>({
    usTotalUsage: false,
    setUSTotalUsage: () => {},
  });