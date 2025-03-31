import { certificate } from "../data";

function SertificateCard ({ data }) {
    return (
        <div className="flex flex-col rounded-md p-4 lg:p-2">
            {/* <img src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074" alt="" className="mb-3 inline-block h-60 object-cover lg:w-96" /> */}
            <img 
                src={data.image} 
                alt="photo-sertifikat" 
                className="mb-3 inline-block h-60 object-cover lg:w-96 dark:brightness-50" 
            />
            <p className="mb-1 text-center font-bold dark:text-slate-100">{data.title}</p>
        </div>
    );
}

function SertificateSection () {
	return (
		<section className="dark:bg-slate-900" name="sertifikat">
		  {/* Container */}
		  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-28">
		    {/* Title */}
		    <h2 className="text-center text-3xl font-bold md:text-5xl dark:text-slate-100">
                Sertifikat Keahlian
		    </h2>
		    <p className="msm:text-base mb-8 mt-4 text-center text-sm text-gray-500 md:mb-12 lg:mb-16 dark:text-slate-100">
		    	Beberapa Sertifikat dibawah ini yang mendukung keahlian
		    </p>
		    {/* Content */}
		    <div className="grid justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3">
                {certificate.map((data, index) => (
                    <SertificateCard key={index} data={data} />
                ))}
		    </div>
		  </div>
		</section>
	);
}



export default SertificateSection;
