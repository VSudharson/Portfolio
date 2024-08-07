import ResumeImg from '../assets/resume.jpg' ;
import CV from '../assets/Sudharson V.pdf';

export default function Resume () {
    const config = {
        link : '../assets/Sudharson V.pdf'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='resume'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5'>Hi, this is my Resume. Please check it out. <a target='_blank' className='btn' href={CV} download="Sudharson V">Download<i class="fas fa-download"></i></a></p>
            </div>
        </div>
    </section>
}