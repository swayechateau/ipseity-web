<script setup lang="ts">
import Footer from '../Footer/Footer.vue';
import Banner from '../Hero/Banner.vue';
import DesktopNav from '../Navigation/DesktopNav.vue';
import MobileNav from '../Navigation/MobileNav.vue'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.vue'
</script>

<template>
    <div class="min-h-screen flex flex-col bg-[#111]">
        <DesktopNav />
        <LanguageSwitcher />
        <MobileNav />
        <header>
            <slot name="header">
                <Banner
                    large
                    title="hello"
                    subtitle="world"
                    hero="https://file.swayechateau.com/view/swayechateauZJpQjF4EPOj0MVC1e0t223"
                />
            </slot>
        </header>
        <main class="flex-grow">
            <div class="py-20 mx-8 lg:p-8">
                <!-- Recent Posts -->
                <section class="pb-20">
                    <h2
                        class="dark:text-blue-300 text-blue-600 text-center text-3xl font-bold p-4 lg:p-8 capitalize"
                    >Recent Blog Posts</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div
                            class="w-full h-40 bg-cover md:h-60 bg-gray-100 rounded hover:shadow-xl"
                            style="background-image:url('https://images.unsplash.com/photo-1639930940899-7f6d1661bcb8?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80')"
                        >
                            <a href="/blog/posts/b-&amp;-q-photo-day-12-21">
                                <div
                                    class="rounded flex items-end w-full h-full"
                                    style="background-color:rgba(0,0,0,0.6)"
                                >
                                    <div class="px-4 py-2">
                                        <div
                                            class="capitalize text-sm text-green-400 mb-2"
                                        >photography</div>
                                        <div class="mb-2">
                                            <div
                                                class="font-semibold leading-tight text-2xl text-gray-100 hover:text-green-100"
                                            >B&amp;Q Photo Day</div>
                                        </div>
                                        <div class="flex text-gray-200 text-sm">
                                            <div
                                                class="pr-3 moment"
                                                data-time="2021-12-19 14:58:54"
                                            >a month ago</div>
                                            <div class="capitalize">published by Swaye Chateau</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div
                            class="w-full h-40 bg-cover md:h-60 bg-gray-100 rounded hover:shadow-xl"
                            style="background-image:url('https://images.unsplash.com/photo-1639930827554-fa7ff66ce343?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80')"
                        >
                            <a href="/blog/posts/new-year-new-decade-2020">
                                <div
                                    class="rounded flex items-end w-full h-full"
                                    style="background-color:rgba(0,0,0,0.6)"
                                >
                                    <div class="px-4 py-2">
                                        <div class="capitalize text-sm text-green-400 mb-2">awesome</div>
                                        <div class="mb-2">
                                            <div
                                                class="font-semibold leading-tight text-2xl text-gray-100 hover:text-green-100"
                                            >New Year, New Decade 2020</div>
                                        </div>
                                        <div class="flex text-gray-200 text-sm">
                                            <div
                                                class="pr-3 moment"
                                                data-time="2020-01-01 07:54:35"
                                            >2 years ago</div>
                                            <div class="capitalize">published by Swaye Chateau</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div
                            class="w-full h-40 bg-cover md:h-60 bg-gray-100 rounded hover:shadow-xl"
                            style="background-image:url('https://images.unsplash.com/photo-1640175951336-41d45843b3db?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80')"
                        >
                            <a href="/blog/posts/the-adventure-begins">
                                <div
                                    class="rounded flex items-end w-full h-full"
                                    style="background-color:rgba(0,0,0,0.6)"
                                >
                                    <div class="px-4 py-2">
                                        <div class="capitalize text-sm text-green-400 mb-2">awesome</div>
                                        <div class="mb-2">
                                            <div
                                                class="font-semibold leading-tight text-2xl text-gray-100 hover:text-green-100"
                                            >The Adventure Begins</div>
                                        </div>
                                        <div class="flex text-gray-200 text-sm">
                                            <div
                                                class="pr-3 moment"
                                                data-time="2019-10-24 17:00:05"
                                            >2 years ago</div>
                                            <div class="capitalize">published by Swaye Chateau</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                <!-- Recent Projects -->
                <section class="pb-20">
                    <h2
                        class="dark:text-blue-300 text-blue-600 text-center text-3xl font-bold p-4 lg:p-8 capitalize"
                    >Recent Projects</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-white rounded-lg overflow-hidden hover:shadow-lg">
                            <a href="/en-gb/projects?p=movie-list">
                                <img
                                    loading="lazy"
                                    class="w-full"
                                    src="https://swayechateau.com/media/image/projects/movie-list-search.jpg"
                                    alt="Movie List"
                                />
                            </a>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">
                                    <a
                                        href="/projects?p=movie-list"
                                        class="hover:text-green-400"
                                    >Movie List</a>
                                </div>
                                <p
                                    class="text-gray-700 text-base"
                                >A simple react frontend for the OMDb API</p>
                            </div>
                            <div class="px-6 py-4">
                                <a
                                    href="/categories/react"
                                    class="inline-block border-green-400 border-2 hover:bg-green-400 hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 capitalize"
                                >reactjs</a>
                                <a
                                    href="/categories/web"
                                    class="inline-block border-green-400 border-2 hover:bg-green-400 hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 capitalize"
                                >Website</a>
                            </div>
                        </div>
                        <div class="bg-white rounded-lg overflow-hidden hover:shadow-lg">
                            <a href="/en-gb/projects?p=file-server">
                                <img
                                    loading="lazy"
                                    class="w-full"
                                    src="https://file.swayechateau.com/view/globaliyndTnSCK14onpASVq7n5?share_code=s5LUL0lAdDLS"
                                    alt="File Server"
                                />
                            </a>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">
                                    <a
                                        href="/projects?p=file-server"
                                        class="hover:text-green-400"
                                    >File Server</a>
                                </div>
                                <p class="text-gray-700 text-base"></p>
                            </div>
                            <div class="px-6 py-4">
                                <a
                                    href="/categories/lumen"
                                    class="inline-block border-green-400 border-2 hover:bg-green-400 hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 capitalize"
                                >lumen</a>
                                <a
                                    href="/categories/php"
                                    class="inline-block border-green-400 border-2 hover:bg-green-400 hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 capitalize"
                                >php</a>
                            </div>
                        </div>
                        <div class="bg-white rounded-lg overflow-hidden hover:shadow-lg">
                            <a href="/en-gb/projects?p=web-meta-grabber">
                                <img
                                    loading="lazy"
                                    class="w-full"
                                    src="https://file.swayechateau.com/view/globalMaJKf2UDzFdqba7hG96U6?share_code=s6LHjQlIsFHc"
                                    alt="Web Meta Grabber"
                                />
                            </a>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">
                                    <a
                                        href="/projects?p=web-meta-grabber"
                                        class="hover:text-green-400"
                                    >Web Meta Grabber</a>
                                </div>
                                <p class="text-gray-700 text-base"></p>
                            </div>
                            <div class="px-6 py-4">
                                <a
                                    href="/categories/lumen"
                                    class="inline-block border-green-400 border-2 hover:bg-green-400 hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 capitalize"
                                >lumen</a>
                                <a
                                    href="/categories/php"
                                    class="inline-block border-green-400 border-2 hover:bg-green-400 hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 capitalize"
                                >php</a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <!-- about me summary -->
            <AboutSummary />
        </main>
        <Footer />
    </div>
</template>