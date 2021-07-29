import { Card, Button, Row, Col, } from 'react-bootstrap';
import bottomdraw from '../Gifs/bottomDraw.gif';
import weatherReport from '../Gifs/Daily Weather.gif';
import Covid from '../Gifs/Covid Safety.gif';



const Projects = () => {
    return (
        <div className="MyWork" id="MyWork">
            <h1>Projects!</h1>


            <div className="project1">
                <Card className="cardColor" >
                    <Card.Img variant="top" src={bottomdraw} />
                    <Card.Body>
                        <Card.Title className="cardTitle">Bottom Draw Market</Card.Title>
                        <Card.Text className="cardText">
                            This web applciation was designed so users can create an account which the application will then store and remember and then the user will be able to upload images of clothing for other users to either buy or sell. The technology used was HTML, CSS, JavaScript, Node.js, Express, Sequilize.
                        </Card.Text>
                        <Button variant="success" href="https://github.com/dextervorbe/bottom-draw" class="btn btn-success"><svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-github" viewBox="0 0 16 16">
                            <path
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg></Button>
                        <Button variant="success" href="http://bottomdrawermarketplace.herokuapp.com/">Deployed Link</Button>
                    </Card.Body>
                </Card>
            </div>


            <div className="project2">
                <Card className="cardColor" >
                    <Card.Img variant="top" src={weatherReport} />
                    <Card.Body>
                        <Card.Title className="cardTitle">Weather Report</Card.Title>
                        <Card.Text className="cardText">
                            This application was designed so that you can input a location and get the current weather as well as the following 5
                            days afterwards.

                            Tools Used: HTML5, CSS3, Moment.Js, JavaScript while also using the openweather API
                        </Card.Text>
                        <Button variant="success" href="https://github.com/dextervorbe/Weather_Report" class="btn btn-success"><svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-github" viewBox="0 0 16 16">
                            <path
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg></Button>
                        <Button variant="success" href="https://dextervorbe.github.io/Weather_Report/">Deployed Link</Button>
                    </Card.Body>
                </Card>
            </div>



            <div className="project3">
                <Card className="cardColor" >
                    <Card.Img variant="top" src={Covid} />
                    <Card.Body>
                        <Card.Title className="cardTitle">Covid Saftey</Card.Title>
                        <Card.Text className="cardText">
                            This web application was designed to inform the users about the covid activity at a destination before travel
                            Tools Used: HTML5, CSS3, UIkit, JavaScript, while using the New York Times API and Quarantine API

                        </Card.Text>
                        <Button variant="success" href="https://github.com/dextervorbe/Project-One-Pandemic-Travel" class="btn btn-success"><svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-github" viewBox="0 0 16 16">
                            <path
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg></Button>
                        <Button variant="success" href="https://dextervorbe.github.io/Project-One-Pandemic-Travel/">Deployed Link</Button>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
}

export default Projects;