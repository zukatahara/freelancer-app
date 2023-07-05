import MenuDashboard from "@/components/pages/Dashboard/Menu";

export default function DashboardLayout({ children, params }) {
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 custom-col-3-dashboard">
            <MenuDashboard />
          </div>
          <div className="col-9">{children}</div>
        </div>
      </div>
    </>
  );
}
