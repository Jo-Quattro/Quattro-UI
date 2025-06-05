import "./SlicedText.css";


function SlicedText() {
    return (
    <section className="flex bg-[url('/images/blood-splatter-unsplash-opacity.png')] bg-top-right bg-contain
    justify-center items-center rounded-xl ring-1 ring-gray-700 z-1
    w-45 h-25 text-center p-5 group hover:duration-500 shadow-md shadow-gray-500/20">
        <h2 style={{ ['--text' as string]: "'Sliced'" }} className="slice uppercase font-bold text-[2.8rem]">Sliced</h2>
    </section>)
}

export default SlicedText;