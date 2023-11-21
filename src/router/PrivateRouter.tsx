import { PropsWithChildren, FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouter: FC<PropsWithChildren> = ({ children }) => {
  const auth = useSelector((state: any) => state.auth);
  return <>{auth ? <div>{children}</div> : <Navigate to={`/sign-in`} />}</>;
};

export default PrivateRouter;
