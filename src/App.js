import logo from './logo.svg';
import './App.css';

function App() {
return (
        <div className="cv">
          <header>
            <h1>Manaal Fatima</h1>
            <img src="img.jpg" alt="Your Photo" />
          </header>
          <section className="education">
            <h2>Personal Information</h2>
            <p>Father Name:M.Shahzad</p>
            <p>DOB: 13/12/2003</p>
            <p>Want to become a" DEVELOPER"</p>
          </section>
          <section className="education">
            <h2>Education</h2>
            <p>Studying in 6th semester of BSIT from Punjab University</p>
            <p>Matric in 1st division from PUNJAB BOARD LAHORE</p>
            <p>Intermediate from GOVT.degree college Gulshan RaVI</p>
          </section>
          
          <section className="contact">
            <h2>Contact Information</h2>
            <p>Email: manaal2fatima@gmail.com</p>
            <p>Phone: 0321.....</p>
          </section>
          
        </div>
      );
    }
    

export default App;
