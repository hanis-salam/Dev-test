import menu from "../lib/menu";
function SideMenu() {
  return (
    <div>
      {menu.map((item) => {
        return (
          <div key={item.name} className="mt-4">
            <div className="text-center text-sm mb-10">
              <div className="flex justify-center items-center mb-2">
                <item.icon />
              </div>
              <p>{item.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SideMenu;
