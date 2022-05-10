function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Etusivu
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
                <a class="nav-link" href="/getall">
                  Kaikki tavoitteet
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/add">
                  Lisää tavoite
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/getone">
                  Hae tavoite
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/delete">
                  Poista tavoite
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
