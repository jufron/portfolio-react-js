import React from 'react';

function ContactSection() {
  return (
    <section className='dark:bg-slate-900' name='kontak'>
        {/* Container */}
        <div className="mx-auto max-w-7xl px-5 py-16 text-center md:px-10 md:py-20">
            {/* Component */}
            <h2 className="text-3xl font-bold md:text-5xl dark:text-slate-100">Kontak</h2>
            <p className="mx-auto mb-8 mt-4 max-w-lg text-gray-500 md:mb-12 lg:mb-16 dark:text-slate-100">
                Untuk Informasi lebih lanjut silahkan kontak dibawah ini
            </p>
            {/* Form */}
            <form name="wf-form-name" method="get" className="md:w-2xl lg:w-4xl mx-auto mb-4 text-left sm:px-4 md:px-20">
                <div className="mb-4 grid w-full grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name-2" className="mb-1 font-medium dark:text-slate-100">
                            First Name
                        </label>
                        <input 
                            type="text" 
                            className=" block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black dark:border-slate-100 dark:text-slate-100" 
                            placeholder="" 
                            required="" 
                        />
                    </div>
                    <div>
                        <label htmlFor="name-3" className="mb-1 font-medium dark:text-slate-100">
                            Last Name
                        </label>
                        <input 
                            type="text" 
                            className=" block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black dark:border-slate-100 dark:text-slate-100" 
                            placeholder="" 
                            required="" 
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="field" className="mb-1 font-medium dark:text-slate-100">
                        Email
                    </label>
                    <input 
                        type="text" 
                        className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black dark:border-slate-100 dark:text-slate-100" 
                    />
                </div>
                <div className="mb-5 md:mb-6 lg:mb-8">
                    <label htmlFor="field" className="mb-1 font-medium dark:text-slate-100">
                        Message
                    </label>
                    <textarea 
                        placeholder="" 
                        maxLength="5000" 
                        name="field" 
                        className="mb-2.5 block h-auto min-h-44 w-full rounded-md border border-solid border-black px-3 py-2 text-sm text-black dark:border-slate-100 dark:text-slate-100"
                    >
                    </textarea>
                </div>
        
                <input type="submit" value="Send" className="inline-block w-full rounded-md cursor-pointer bg-green-400 px-6 py-3 text-center font-semibold text-white" />
            </form>
        </div>
    </section>
  );
}

export default ContactSection;