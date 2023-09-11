<template>
<div class="top-0 right-0 z-50 absolute md:hidden">
            <div class="dropdown inline-block relative">
                <button class="text-white font-semibold py-2 px-4 rounded inline-flex items-center">
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
</template>