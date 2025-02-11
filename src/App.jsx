import Faq from "./components/Faq";
import Header from "./components/Header";
import data from "./data";

function App() {
    return (
        <>
            <div className="bg-white w-full relative rounded-xl sm:flex sm:justify-center sm:items-center">
                <Header />
                <section className=" sm:pr-12 sm:pb-8">
                    <h1 className=" uppercase text-3xl text-very-dark-desaturated-blue font-bold text-center mb-4 sm:pt-8">
                        faq
                    </h1>
                    {data.map((question) => {
                        return <Faq key={question.id} {...question} />;
                    })}
                </section>
            </div>
        </>
    );
}

export default App;
