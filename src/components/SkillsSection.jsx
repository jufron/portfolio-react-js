import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills } from "../data";

function SkillCondition ({status, icon}) {
    if (status === 'icon') {
        return (
            <FontAwesomeIcon icon={icon} size="2x" />
        )
    } else if (status === 'svg') {
        return (
            <img
                src={icon}
                alt="icon" 
                className="inline-block h-10 w-10 object-cover" 
            />
        );
    } else if (status === 'img') {
        return (
            <img
                // src='https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074'
                src={icon}
                alt="" 
                className="inline-block h-8 w-10 object-cover" 
            />
        );
    } else {
        return;
    }
}

function SkillItemMenu ({name, icon, status}) {
    return (
        <div className="flex justify-center items-center gap-6 rounded-2xl border border-solid bg-white border-green-400 p-8 md:p-10 dark:bg-slate-800 dark:border-green-300 dark:text-slate-100">
            <SkillCondition 
                status={status}
                icon={icon}
            />
            <h3 className="text-xl font-semibold">{name}</h3>
        </div>
    );
}

const SkillsSection = () => {
  return (
    <section name="keahlian" className="bg-slate-100 dark:bg-slate-800">
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
            {/* Title */}
            <div className="flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold md:text-5xl dark:text-slate-100">
                Keahlian
                </h2>
                <p className="mb-8 mt-4 max-w-xl text-base text-gray-500 md:mb-12 md:text-lg dark:text-slate-100">
                Daftar Keahlian yang dikuasai
                </p>
            </div>
            {/* Features Content */}
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
                {skills.map((item, index) => (
                    <SkillItemMenu 
                        key={index} 
                        name={item.name} 
                        icon={item.icon}
                        status={item.status}
                    />
                ))}
            </div>
        </div>
    </section>
  );
};


export default SkillsSection;
