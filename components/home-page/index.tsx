import { FC } from "react";
import { Footer, Header, HomePageBody } from "@/components";

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
        <HomePageBody onclickLogin={props.onClickLogin} />
      </div>
      <div>
        <Footer onclickLogin={props.onClickLogin} />
      </div>
    </div>
  );
};
