<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-light-green py-3">
      <div class="container">
        <RouterLink to="/">
          <img src="/public/logo.svg" alt="logo" class="d-inline-block navbar-logo ms-2" />
        </RouterLink>
        <div class="d-flex align-items-center">
          <!-- 手機 icon-->
          <!-- <div class="d-lg-none">
            <button type="button" class="navbar-brand position-relative">
              <i class="bi bi-person-fill fs-3 mx-2 text-white"></i>
            </button>
          </div> -->
          <!--漢堡-->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
          >
            <i class="bi bi-list fs-3 text-white" style="font-weight: bold"></i>
          </button>
        </div>
        <!-- navbar 摺疊內容 -->
        <div class="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarText">
          <ul class="navbar-nav mt-2 mt-lg-0">
            <li class="nav-item mb-2 mb-lg-0">
              <RouterLink
                to="/about"
                class="nav-link pt-3 mx-2 fw-bold text-white fs-6 d-inline-block"
                >ABOUT</RouterLink
              >
            </li>
            <li class="nav-item mb-2 mb-lg-0">
              <RouterLink
                to="/news"
                class="nav-link d-inline-block text-white fw-bold fs-6 pt-3 mx-2"
                >NEWS</RouterLink
              >
            </li>
            <li class="nav-item mb-2 mb-lg-0">
              <RouterLink
                to="/parter"
                class="nav-link d-inline-block text-white fw-bold fs-6 pt-3 mx-2"
                >PARTNER</RouterLink
              >
            </li>
            <li class="nav-item mb-2 mb-lg-0">
              <RouterLink
                to="/contact"
                class="nav-link d-inline-block text-white fw-bold fs-6 pt-3 mx-2"
                >CONTACT</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <RouterView></RouterView>
</template>
