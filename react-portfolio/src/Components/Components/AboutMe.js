import image from '../Pictures/image.jpg'

const AboutMe = () => {
    return (
        <div className="AboutMe">
                <img id="image" src={image} alt="Image of myself"></img>
                <h1>Hello, My name is Dexter</h1>
                <h2>I'm a web developer</h2>
        </div>
    );
}

export default AboutMe;