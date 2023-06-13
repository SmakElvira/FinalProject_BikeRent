import bike from "../../img/bicycle.jpg";

function Home () {
    return (
        <main className="main">
            <div className="container">
                <div className="main__wrapper">
                    <h1 className="main__title">
                        Прокат велосипедов
                    </h1>
                    <p className="main__p">Аренда велосипеда – это отличное решение для тех, 
                        кто любит в свободное время кататься по паркам, провести отдых активно, 
                        а может съездить за город или в более длительные поездки и даже путешествия. 
                        Велосипед – это любимое средство передвижения многих людей.</p>
                    <img className='main__img' src={bike} alt="" />
                </div>
            </div>
        </main>
    )
}

export default Home;