"use client";

import { useSelector } from "react-redux";
import { userState } from "@/entities/user";
import { FunctionComponent } from "react";
import { Unauthorised } from "@/widgets/unauthorised";

export const withAuth =
  <T extends Record<string, unknown>>(Component: FunctionComponent<T>) =>
  (props: T) => {
    const { userData } = useSelector(userState);

    if (!userData) {
      return <Unauthorised />;
    }

    return <Component {...props} />;
  };

// function withAuth<T>(Component: NextComponentType<T>) {
//   const Auth = (props: T) => {
//     const { userData } = useSelector(profileState);
//     const { push } = useRouter();
//
//     if (!userData) {
//       return push("/");
//     }
//
//     return <Component {...props} />;
//   };
//
//   if (Component.getInitialProps) {
//     Auth.getInitialProps = Component.getInitialProps;
//   }
//
//   return Auth;
// }
//
// export default withAuth;
