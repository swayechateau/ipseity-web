import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Hero/Banner';

function PhotographyScreen() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#111]">
      <Banner
        large={false}
        hero="https://file.swayechateau.com/view/swayechateauTJPbl1UTOHI3LMJc87TD28"
        title="Photography"
        subtitle="I take pictures for fun!"
      />
      <main className="grow p-6">
        <div className="container mx-auto">
          <div className="grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
            <div className="w-full rounded md:grayscale md:hover:grayscale-0">
              <img
                src="https://images.unsplash.com/photo-1640176701886-1e3e5437d2a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="image"
              />
            </div>
            <div className="w-full col-span-2 row-span-2 rounded md:grayscale md:hover:grayscale-0">
              <img
                src="https://images.unsplash.com/photo-1640176701395-87db90f55462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="image"
              />
            </div>
            <div className="w-full rounded md:grayscale md:hover:grayscale-0">
              <img
                src="https://images.unsplash.com/photo-1640176701536-c62dfe7a513f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="image"
              />
            </div>
            <div className="w-full rounded md:grayscale md:hover:grayscale-0">
              <img
                src="https://images.unsplash.com/photo-1639930827554-fa7ff66ce343?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="image"
              />
            </div>
            <div className="w-full rounded md:grayscale md:hover:grayscale-0">
              <img
                src="https://images.unsplash.com/photo-1639930940899-7f6d1661bcb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="image"
              />
            </div>
            <div className="w-full rounded md:grayscale md:hover:grayscale-0">
              <img
                src="https://images.unsplash.com/photo-1640175951336-41d45843b3db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
                alt="image"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PhotographyScreen;
