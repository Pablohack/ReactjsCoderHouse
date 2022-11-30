
const NavBar = ({children}) => {
  
  const menus =['Inicio','Productos','Soporte','Ventas','Reclamos']

  return (
    <div className="navbar">
      <div className="navbar__menus">
        {menus ? 
        menus.map((menu,index) => {
          const newkey = `menus-${menu}-${index}` 
          return <div key={newkey} className="navbar__menu">{menu}</div>;
        })
        :<div>sin informacion</div>}
        {/* <div className="navbar__menu">{menus[0]}</div>
        <div className="navbar__menu">{menus[1]}</div>
        <div className="navbar__menu">{menus[2]}</div> */}
      </div>
      <div className="navbar__element">
        {children}
      </div>
    </div>
  );
};

export default NavBar;
