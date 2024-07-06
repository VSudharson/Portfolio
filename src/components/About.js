import AboutImg from '../assets/about.png' ;

export default function About () {
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>Hi, I'm Sudharson. I'm a Full Stack Web Developer. I have the potential to design websites by using front-end languages such as <span className='font-bold'>HTML, CSS, JavaScript, Bootstrap and React JS.</span></p>
                <p className='pb-5'>I'm a passionate back-end developer. I'm capable across various technologies including <span className='font-bold'>C programming, C++, Java, Python, MySQL and MongoDB</span></p>
                <p className='pb-5'>My knowledge is wide in technologies like <span className='font-bold'>Django framework, Git and GitHub, MS Word.</span></p>
                <p className='pb-5'>And additionally, I'm a <span className='font-bold'>Government certified typist </span>with a first-class distinction in English junior.</p>
            </div>
        </div>
    </section>
}