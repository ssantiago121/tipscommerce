

export default function Header() {
    return (
        <>
        <header className="bg-[url(./assets/img/hero-alisson.png)] bg-cover bg-right-top h-[90vh] bg-position-custom w-full px-20 flex flex-col items-start justify-center">
            <hgroup className="block">
                <h1 className="text-6xl text-[#222] mb-4">Trade-in-offer</h1>
                <h2 className="text-5xl text-[#222] font-medium mb-2">Super value deals</h2>
                <h3 className="text-2xl text-[#008178]">On all products</h3>
                <p className="text-xl font-bold text-[#465b52] mt-4 mb-4">Save more with coupons & up to 70% off!</p>
            </hgroup>
            <button className="bg-[url(./assets/img/button.png)] bg-transparent text-[#008178] font-bold pt-3.5 pr-20 pb-3.5 pl-16">Shop Now</button>
        </header>
        </>
    )
}