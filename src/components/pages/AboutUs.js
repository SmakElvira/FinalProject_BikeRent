import bike from '../../img/bicycle.jpg';

function AboutUs () {
    return (
        <main className="main">
            <div className="container">
                <div className="main__wrapper">
                    <h1 className="main__title">
                        О нас
                    </h1>
                    <img className='main__img' src={bike} alt="" />
                </div>
            </div>
        </main>
    )
}

export default AboutUs;