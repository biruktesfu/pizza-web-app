import { FC } from "react";
import { Header, HomePageBody } from "@/components";

type Iprops = {
  onClickLogin: () => void;
};
export const Homepage: FC<Iprops> = (props) => {
  return (
    <div>
      <div>
        <Header isloggedin={false} onclickLogin={props.onClickLogin} />
      </div>
      <div>
        <HomePageBody />
      </div>
    </div>
  );
};
