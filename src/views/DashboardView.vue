<script></script>
<template>
  <div class="text-text_color">
    <div id="app" class="md:flex antialiased">
      <aside class="w-full md:h-screen md:w-64 bg-creamWhite md:flex md:flex-col">
        <header class="border-b border-solid border-gray-800 flex-grow flex items-center">
          <span class="material-icons ml-2"> sort </span>
          <p class="py-5 px-4 text-base font-medium -ml-3">後台管理列表</p>
        </header>
        <nav class="overflow-y-auto h-full flex-grow border">
          <!-- <header>
            <span class="text-xs text-gray-500 block py-6 px-6">MENU</span>
          </header> -->
          <ul class="px-4 text-center menu text-base-content">
            <li>
              <router-link to="/backend/products" class="btn btn-outline border-none text-primary rounded-sm hover:bg-primary1 hover:border-primary hover:text-white"> 產品列表 </router-link>
            </li>
            <li>
              <router-link to="/backend/articles" class="btn btn-outline border-none text-primary rounded-sm hover:bg-primary1 hover:border-primary hover:text-white"> 文章列表 </router-link>
            </li>
            <li>
              <router-link to="/" class="btn btn-outline border-none text-primary rounded-sm hover:bg-primary1 hover:border-primary hover:text-white"> 回前台首頁 </router-link>
            </li>
            <li>
              <router-link to="/" @click.prevent="logout" class="btn btn-outline border-none text-text_color rounded-sm hover:bg-primary1 hover:border-primary hover:text-white">
                登出
                <span class="material-symbols-outlined"> logout </span>
              </router-link>
              <!-- <a href="#" @click.prevent="logout"></a>  -->
            </li>
          </ul>
        </nav>
      </aside>
      <RouterView></RouterView>
    </div>
  </div>
</template>
