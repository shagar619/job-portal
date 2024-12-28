

import { easeOut } from "motion";
import { motion } from "motion/react"
import team1 from './../assets/office/office1.jpg'
import team2 from './../assets/office/office2.jpg'

const Banner = () => {
    return (
        <div className="min-h-[500px] pb-16">
            <div className="flex justify-start gap-[420px] items-center">

        <div>
            <motion.h1
            animate={{x : 200}}
            transition={{duration: 2, delay: 1, ease: easeOut, repeat: Infinity}}
            className="text-5xl font-bold">The Easiest Way <br />
            to Get <motion.span
            animate={{color: ['#780000', '#c1121f', '#38b000']}}
            transition={{duration: 1.5, repeat: Infinity}}
            >Your New Job</motion.span>!</motion.h1>
            <p className="py-6">
            Each month, more than 3 million job seekers turn to <br />
            website in their search for work, making over 140,000 <br />
            applications every single day
            </p>
                <button className="btn btn-primary">Get Started</button>
            </div>

            <div>
                <motion.img
                animate={{y : [50, 100, 50]}}
                transition={{duration: 10, repeat: Infinity}}
                    src={team1}
                    className="max-w-sm rounded-t-3xl rounded-br-3xl border-l-8 border-b-8 border-blue-600" />

                <motion.img
                animate={{x : [100, 150, 100]}}
                transition={{duration: 10, delay: 5, repeat: Infinity}}
                    src={team2}
                    className="max-w-sm rounded-t-3xl rounded-br-3xl border-l-8 border-b-8 border-blue-600" />
            </div>

        </div>
        </div>
    );
};

export default Banner;