

function ItemMenuExperient() {
    return (
        <div className="space-y-1">
            <div className="block flex-col md:flex-row md:flex md:items-center md:justify-between mb-5">
                <p className="text-lg text-gray-500 font-bold dark:text-white">STIKOM Artha Buana Kupang</p>
                <p className="text-lg text-gray-500 dark:text-slate-100"> <span className="font-bold md:ml-5 dark:text-white">Staf IT</span> Desember 2020 - Februari 2021</p>
            </div>
            <p className="text-base mt-5 dark:text-slate-100">
                Lorem ipsum dolor sit amet, elit ut aliquam, purus sit amet
                luctus venenatis elit ut aliquam, purus sit amet luctus
                venenatis,Lorem ipsum dolor sit amet, elit ut aliquam.
            </p>
        </div>
    );
}

function ExperientSection() {
  return (
    <section className="dark:bg-slate-900" id="experience">
        {/* Container */}
        <div className="mx-auto flex flex-col gap-y-16 px-5 py-24 sm:gap-y-20 md:px-10">
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold md:text-5xl dark:text-slate-100">
            Experiance
        </h2>
        {/* Content Container */}
        <div className="md:w-2xl lg:w-4xl mx-auto items-center gap-x-10 md:gap-x-14 lg:gap-x-18 gap-y-10 sm:gap-y-14">
            {/* Contents */}
            <div className="grid gap-6 md:gap-8">
            {/* Content */}
            <ItemMenuExperient />
            <ItemMenuExperient />
            <ItemMenuExperient />
            </div>
        </div>
        </div>
    </section>
  );
}

export default ExperientSection;
