<template>
    <section
        class="bg-cover"
        loading="lazy"
        style="background-image:url('https://images.unsplash.com/photo-1640176701886-1e3e5437d2a9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1548&amp;q=80');"
    >
        <div class="max-w-4xl flex items-center h-auto flex-wrap mx-auto py-32">
            <!--Main Col-->
            <div
                id="profile"
                class="w-full md:w-3/5 rounded-lg md:rounded-l-lg md:rounded-r-none shadow-2xl opacity-90 mx-6 md:mx-0 bg-gray-900"
            >
                <div class="p-4 md:p-12 text-center md:text-left">
                    <!-- Image for mobile view-->
                    <div
                        class="block md:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                        loading="lazy"
                        style="background-image: url('https://yt3.ggpht.com/GojMrcrTTQDEx221wqyX_iIlLdmamrD6LQDwOY9Anv25sh2BgUiZ-LCVAQ4SPohIInh_O_i3zkY=s900-c-k-c0x00ffffff-no-rj')"
                    ></div>

                    <h1 class="text-white text-3xl font-bold pt-8 md:pt-0">Swaye Chateau</h1>
                    <div class="mx-auto md:mx-0 w-4/5 pt-3 border-b-2 border-green-500"></div>
                    <p
                        class="text-white pt-4 text-md font-bold"
                    >Software Developer, Photographer and Vlogger</p>
                    <p class="pt-2 text-gray-600 text-base">Based in the United Kingdom</p>

                    <div class="pt-12 pb-8">
                        <a
                            href="/curriculum-vitae"
                            class="bg-green-700 hover:bg-green-900 text-white font-bold py-3 px-4 mr-2 rounded-full"
                        >View CV</a>

                        <a
                            href="/about"
                            class="bg-green-700 hover:bg-green-900 text-white font-bold py-3 px-4 rounded-full"
                        >Read More</a>
                    </div>
                </div>
            </div>

            <div class="w-full md:w-2/5">
                <img
                    src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/194238354_1534253043632990_7490874332569110829_n.jpg?_nc_cat=110&amp;ccb=1-5&amp;_nc_sid=09cbfe&amp;_nc_ohc=9l9E8RMrxgsAX83morg&amp;_nc_ht=scontent-lhr8-1.xx&amp;oh=00_AT_zSyK1JpPGY0kO_-SE--bkDDsx3JV85lgDtVLIohOr1g&amp;oe=620ABB56"
                    loading="lazy"
                    class="rounded-none md:rounded-lg shadow-2xl hidden md:block"
                />
            </div>
        </div>
    </section>
</template>