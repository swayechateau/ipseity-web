<script setup lang="ts">

defineProps<{ show: boolean }>()

</script>

<template>
  <nav
    class="fixed w-full top-0 min-h-max h-16 z-50 transition-all ease-in hidden md:flex print:none ${show ? 'backdrop-blur-sm bg-[rgba(53,206,4,0.25)] shadow-0_8px_32px_0_rgba(31,38,135,0.37)]' : 'bg-transparent'}"
  >
    <div class="flex items-center justify-center pl-4">
      <slot name="brand">
        <!-- Website Logo -->
        <a href="/">
          <img src="https://file.swayechateau.com/view/swayechateauuxNbUMRMvYD2xogwGILX26" alt="Logo" class="h-8 w-8 mr-2" />
          <span class="font-semibold text-gray-500 text-lg hidden">Swaye Chateau</span>
        </a>
      </slot>
    </div>
    <div class="flex items-center justify-center grow space-x-1">
      <a href="/" class="py-4 px-2 font-semibold text-green-500">Home</a>
      <a
        href="projects"
        class="py-4 px-2 font-semibold text-white hover:text-green-500 transition duration-300"
      >Projects</a>
      <a
        href="/about"
        class="py-4 px-2 font-semibold text-white hover:text-green-500 transition duration-300"
      >About</a>
      <a
        href="/blog"
        class="py-4 px-2 font-semibold text-white hover:text-green-500 transition duration-300"
      >Blog</a>
    </div>

    <!-- Secondary Navbar items -->
    <div class="md:flex items-center space-x-3 text-white">
      <slot name="right">
        
        <a href="/login">
          <div class="py-2 px-2 font-medium rounded hover:bg-green-500 hover:text-white transition duration-300">Login</div>
        </a>
        

        <!-- Drop Down -->
        <div class="p-1">
          <div class="dropdown inline-block relative">
            <button class="font-semibold py-2 px-4 rounded inline-flex items-center">
              <span class="mr-1">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z"
                  />
                </svg>
              </span>
            </button>
            <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 right-0">
              <li class>
                <a
                  class="bg-white hover:text-green-400 py-2 px-4 block whitespace-no-wrap"
                  onclick="changeLang('fr-fr')"
                  href="javascript:void(0)"
                >Français</a>
              </li>

              <li class>
                <a
                  class="bg-white hover:text-green-400 py-2 px-4 block whitespace-no-wrap"
                  onclick="changeLang('ja')"
                  href="javascript:void(0)"
                >日本語</a>
              </li>

              <li class>
                <a
                  class="bg-white hover:text-green-400 py-2 px-4 block whitespace-no-wrap"
                  onclick="changeLang('zh-cn')"
                  href="javascript:void(0)"
                >中文</a>
              </li>

              <li class>
                <a
                  class="bg-white hover:text-green-400 py-2 px-4 block whitespace-no-wrap"
                  onclick="changeLang('cy')"
                  href="javascript:void(0)"
                >Cymraeg</a>
              </li>

              <li class>
                <a
                  class="bg-white hover:text-green-400 py-2 px-4 block whitespace-no-wrap"
                  onclick="changeLang('ko-kr')"
                  href="javascript:void(0)"
                >한국인</a>
              </li>

              <li class>
                <a
                  class="bg-white hover:text-green-400 py-2 px-4 block whitespace-no-wrap"
                  onclick="changeLang('es-es')"
                  href="javascript:void(0)"
                >Español</a>
              </li>

              <li class>
                <a
                  class="bg-white hover:text-green-400 py-2 px-4 block whitespace-no-wrap"
                  onclick="changeLang('de-de')"
                  href="javascript:void(0)"
                >Deutsch</a>
              </li>
            </ul>
          </div>
        </div>
      </slot>
    </div>
  </nav>
</template>

