import { useState } from "react";
import img1 from "../images/icon-arrow-down.svg";
import PropTypes from "prop-types";

export default function Faq({ title, desc, heading }) {
    const [toggle, setToggle] = useState(false);

    return (
        <article className="border-b-[1px] border-light-grayish-blue px-4 mb-4 text-sm xl:text-base">
            <header className=" grid   grid-cols-[90%_10%] place-content-center gap-4 font-fw-400 pt-2 pb-4">
                <h2
                    className={`text-very-dark-grayish-blue ${
                        toggle
                            ? "font-fw-700 text-very-dark-desaturated-blue"
                            : ""
                    }`}
                >
                    {heading}
                </h2>
                <div>
                    <button type="button" onClick={() => setToggle(!toggle)}>
                        {toggle ? (
                            <img
                                className="cursor-pointer w-2 h-2 rotate-180"
                                src={img1}
                                alt={title}
                            />
                        ) : (
                            <img src={img1} alt={title} className="w-2 h-2" />
                        )}
                    </button>
                </div>
            </header>
            <div
                className={`overflow-hidden transition-all duration-500 ${
                    toggle ? "max-h-96" : "max-h-0"
                }`}
            >
                <p className="text-light-grayish-blue px-2 pb-2 text-fs-12 sm:w-[19rem] sm:break-words">
                    {desc}
                </p>
            </div>
        </article>
    );
}

Faq.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
};
