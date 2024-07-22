import Header from './Header'
import Footer from './Footer'
import Food from './Food'
import Card from './Card'
import Button from './Button'
import Student from './Student'

function App() {

    return (
        <>
            <Student name="Spongebob" age={25} isStudent={true} />
            <Student name="Patrick" age={32} isStudent={false} />
            <Student name="Squidward" age={40} isStudent={false} />
            <Student name="Sandy" age={29} isStudent={true} />
            <Student />
        </>
    );
}

export default App
