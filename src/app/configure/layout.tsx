import MaxWidthWrap from "@/components/MaxWidthWrap";
import Steps from "@/components/Steps";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrap className="flex-1 flex flex-col">
      <Steps />
      {children}
    </MaxWidthWrap>
  );
};

export default Layout;
