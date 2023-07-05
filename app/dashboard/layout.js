import MenuDashboard from "@/components/pages/Dashboard/Menu";
import style from "./style.module.css";
import { RxAvatar } from "react-icons/rx";
export default function DashboardLayout({ children, params }) {
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 custom-col-2-dashboard">
            <MenuDashboard />
          </div>
          <div className="col-10 custom-col-10-dashboard">
            <div className={style["header"]}>
              <div class={style["content"]}>
                <div className={style["info"]}>
                  <RxAvatar size={26} style={{marginRight:"7px"}}/> {" "} admin
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
