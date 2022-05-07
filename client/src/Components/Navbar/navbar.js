function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Frontpage
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/api/getall">
                  Goals
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Add (not in use)
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Update (not in use)
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Delete (not in use)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
