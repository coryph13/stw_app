export default function Hero() {
    // Материалы высшего качества для ваших идей: начните с нашего каталога!
    
    return (
        <section className="hero">
            <div className="hero-content relative text-white dark:text-white align-center">
                <h1 className="hero-title">
                    Quality over profit
                </h1>
                <h2 className="hero-subtitle">
                    Where Quality Meets Inspiration: Explore Our World of Superior Materials
                </h2>
                {/* <button type="button" className="hero-button">
                    Shop Now
                </button> */}
                <button type="button" className="bg-white hover:bg-oxblue-50 dark:bg-oxblue-950 dark:hover:bg-oxblue-800 border-oxblue-200 text-oxblue-800 dark:text-white border-solid border cursor-pointer px-8 py-4 mt-20 text-lg font-normal dark:font-light">
                    Shop Now
                </button>
            </div>
        </section>
    );
}