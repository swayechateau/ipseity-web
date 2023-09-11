function AboutSnippet() {
    return (
        <section className="bg-cover bg-trees animate-para relative" >
            <div className="bg-fade-top h-10"></div>
            <div className="max-w-4xl flex items-center h-auto flex-wrap mx-auto py-32">
                <div className="w-full md:w-3/5 rounded-lg md:rounded-l-lg md:rounded-r-none shadow-2xl backdrop-blur-sm bg-[rgba(53,206,4,0.25)] mx-6 md:mx-0 bg-gray-900">

                    <div className="p-4 md:p-12 text-center md:text-left">
                        <div className="block md:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style={{ backgroundImage: `url('https://yt3.ggpht.com/GojMrcrTTQDEx221wqyX_iIlLdmamrD6LQDwOY9Anv25sh2BgUiZ-LCVAQ4SPohIInh_O_i3zkY=s900-c-k-c0x00ffffff-no-rj')`}}>
                        </div>

                        <h1 className="text-white text-3xl font-bold pt-8 md:pt-0">Swaye Chateau</h1>
                        <div className="mx-auto md:mx-0 w-4/5 pt-3 border-b-2 border-green-500"></div>
                        <p className="text-white pt-4 text-md font-bold">
                            Software Developer, Photographer and Vlogger
                        </p>
                        <p className="pt-2 text-gray-400 text-base">
                            Based in the United Kingdom
                        </p>

                        <div className="pt-12 pb-8">
                            <a href="/curriculum-vitae" className="bg-green-700 hover:bg-green-900 text-white font-bold py-3 px-4 mr-2 rounded-full">
                                View CV
                            </a>

                            <a href="/about" className="bg-green-700 hover:bg-green-900 text-white font-bold py-3 px-4 rounded-full">
                                Read More
                            </a>
                        </div>
                    </div>

                </div>

                <div className="w-full md:w-2/5">
                    <img src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/194238354_1534253043632990_7490874332569110829_n.jpg?_nc_cat=110&amp;ccb=1-5&amp;_nc_sid=09cbfe&amp;_nc_ohc=9l9E8RMrxgsAX83morg&amp;_nc_ht=scontent-lhr8-1.xx&amp;oh=00_AT_zSyK1JpPGY0kO_-SE--bkDDsx3JV85lgDtVLIohOr1g&amp;oe=620ABB56" loading="lazy" className="rounded-none md:rounded-lg shadow-2xl hidden md:block"/>

                </div>

            </div>
            <div className="bg-fade-bottom h-10"></div>
        </section>
    )
}
export default AboutSnippet