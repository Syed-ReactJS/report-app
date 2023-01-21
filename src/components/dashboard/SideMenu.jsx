const SideMenu = () => {
  return (
    <div className="menu-container">
      <div className="menu-logo">
        <i class="fa fa-book-dead"></i>

        <p>Report App</p>
      </div>
      <div className="menu-list">
        <div className="list">
          <i class="fa fa-home"></i>
          <p>Home</p>
        </div>
        <div className="list">
          <i class="fa fa-arrow-up-from-bracket"></i>
          <p>upload</p>
        </div>
        <div className="list">
          <i class="fa fa-money-bill-wave"></i>
          <p>Cash</p>
        </div>
        <div className="list">
          <i class="fa fa-file"></i>
          <p>Report</p>
        </div>
        <div className="list">
          <i class="fa fa-user"></i>
          <p>Users</p>
        </div>
        <hr />
        <div className="list">
          <i class="fa fa-power-off"></i>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
