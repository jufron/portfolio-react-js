import { project } from './../data';


function Card ({image, projectName, kategory}) {
    return (
        <div className="flex flex-col gap-4 px-4 py-8 md:p-0">
            <img
                // src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                src={image}
                alt="project-image"
                className="h-60 object-cover rounded-xl dark:brightness-50"
            />
            <div className="flex flex-col items-start py-4">
                <div className="mb-4 rounded-md bg-gray-100 px-2 py-1.5 dark:bg-slate-900">
                    <p className="text-sm font-semibold text-green-400">
                        {kategory}
                    </p>
                </div>
                <p className="mb-4 text-xl font-bold md:text-2xl dark:text-slate-100">
                    {projectName}
                </p>
                {/* <div className="flex flex-col items-start text-sm text-gray-500 lg:flex-row lg:items-center dark:text-slate-100">
                    <p>Laila Bahar</p>
                    <p className="mx-2 hidden lg:block">-</p>
                    <p>6 mins read</p>
                </div> */}
            </div>
        </div>
        // <a
        //     href="#"
        //     className="flex flex-col gap-4 px-4 py-8 md:p-0"
        //     onClick={(e) => {
        //         e.preventDefault();
        //             // Tambahkan logika di sini
        //             console.log("Link diklik!");
        //         }}
        //     >

        // </a>
    );
}


function ButtonLink () {
    return (
      <a
          href="#"
          className="rounded-md bg-black px-6 py-3 text-center font-semibold text-white dark:bg-green-600 dark:text-slate-100"
          onClick={(e) => {
          e.preventDefault();
              // Tambahkan logika di sini
              console.log("Link diklik!");
          }}
      >
          View More
      </a>
    );
}

function ProjectSection() {
  return (
    <section id="project" className="bg-slate-50 dark:bg-slate-800">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
            <div className="flex flex-col items-center">
                <h2 className="text-center text-3xl font-bold md:text-5xl dark:text-slate-100">
                    Proyek
                </h2>
                <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16 dark:text-slate-100">
                    Beberapa Contoh Proyek yang telah saya kerjakan
                </p>
                <div className="mb-8 grid gap-5 sm:grid-cols-2 sm:justify-items-stretch md:mb-12 md:grid-cols-3 lg:mb-16 lg:gap-6">
                    {project.map((item, index) => (
                        <Card
                            key={index}
                            image={item.image}
                            projectName={item.projectName}
                            kategory={item.kategory}
                        />
                    ))}
                </div>

                {/* <ButtonLink /> */}
            </div>
        </div>
    </section>
  );
}

export default ProjectSection;
