export default function Contact () {

    const config = {
        email : 'balajisudharson99@gmail.com',
        phone : '+91 8610120963'
    }
    return <section className='flex flex-col bg-primary px-5 py-10 text-white' id="contact">
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl border-b-4  border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'>For any additional discussion & further information please contact me.</p>
            <p className="py-2"><span className="font-bold">Email :</span> {config.email}</p>
            <p className="py-2"><span className="font-bold">Mobile :</span> {config.phone}</p>
        </div>
        
    </section>
}