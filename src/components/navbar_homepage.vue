<template>
  <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <routerLink to="/" class="nav-link" aria-current="page"> <img src="Big Bite Donuts.png" alt="NMBTM" width="60"
          height="60">
        <a class="navbar-brand" href="#">NMBTM</a>
      </routerLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
        <form class="d-flex w-100 mx-3">
          <input class="form-control mx-6 w-50" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search <i class="fas fa-search"></i></button>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
            <li class="nav-item">
            </li>
            <li class="nav-item">
              <routerLink to="/cart_vue" class="nav-link" aria-current="page"><i class="fa-solid fa-cart-shopping"></i>
              </routerLink>
            </li>
            <li class="nav-item">
              <routerLink to="/orderhistory" class="nav-link"><i class="fa-solid fa-clipboard-list"></i></routerLink>
            </li>
            <li class="nav-item">
              <routerLink to="/login" class="nav-link"><i class="fa-solid fa-user"></i></routerLink>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </nav>
</template>


<script setup>

</script>

<style lang="scss" scoped>
.navbar {
  .container-fluid {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .form-control {
    flex: 1;
    max-width: none;
    margin: 0 10px;
    /* Adjust margin as needed */
  }

  .navbar-brand,
  .navbar-nav {
    margin: 0;
  }
}
</style>