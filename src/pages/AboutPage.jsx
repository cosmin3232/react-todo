import Card from "../components/shared/Card";
import { Link } from 'react-router-dom';
const jsonVersion = require('../../package.json').version;

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>This is a React app for TODOs lists. Backend built in NestJS</p>
            <p>Version: {jsonVersion}</p>
            <p>
                <Link to="/">Back</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage