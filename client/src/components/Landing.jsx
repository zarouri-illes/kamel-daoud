import { motion } from "framer-motion";
import { header, hero } from "./data";

export const Landing = () => {

    return (
        <div className="w-full h-screen overflow-hidden relative grid place-items-center">

            
            
            <section className="z-20 w-full absolute md:left-[35px] xl:max-w-[800px]  md:max-w-[500px] md:mt-[-180px] lg:mt-[-80px] xl:mt-[-120px] mt-[-120px] px-8">
                <motion.h1
                initial={{ x : -100, opacity: 0 }}
                animate={{ x : 0, opacity: 1 }}
                transition={{ duration : 1.5, delay: 0.5}}
                className="text-secondary text-[36px] md:leading-relaxed xl:text-6xl xl:leading-relaxed  font-bold md:text-5xl text-left">{hero.slogan}</motion.h1>
            </section>

            <motion.div
                initial={{x: 1500}}
                animate={{x: 0}}
                transition={{ duration : 2}}
                className="absolute inset-0 z-20"
                style={{
                    backgroundImage: ` url("${hero.bg}") `,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover"
                }}
            />

        </div>
    )
}